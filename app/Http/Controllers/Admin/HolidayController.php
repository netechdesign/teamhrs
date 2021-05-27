<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use DB;
use App\Models\Holidays;
use App\Models\Holidays_dates;
use Illuminate\Support\Facades\Storage;
use App\User;
use Mail;

class HolidayController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        
        //
        if(!$request->ajax()){
            view('error_handler', compact('exception'));
          } 
          else{
          
            try {
                
                $totalCol = $request->input('iColumns');
               
                
                $columns = explode(',', $request->input('columns'));
                $start = $request->input('iDisplayStart');
                $page_length = $request->input('iDisplayLength');
                
                $request['page'] = ($start/$page_length)+1;
                $jobsrow = Holidays::select("id","time_off","notes",DB::raw('(select CONCAT(name," ",lastName) as name from users where id=holidays.user_id) as user_name'),DB::raw('DATE_FORMAT(from_date,"%d/%m/%Y") as from_date'),DB::raw('DATE_FORMAT(to_date,"%d/%m/%Y") as to_date'))->where(function($query) use ($request){
                    $search = $request->input('sSearch');
                  if($request->input('user_id')){
                    $query->where('user_id','=',$request->input('user_id'));
                   }
                   if($search!=''){
                       
                    $query->Where('time_off', 'LIKE', "%{$search}%");
                    $query->orWhere('notes', 'LIKE', "%{$search}%");
                    $query->orWhere('from_date', 'LIKE', "%{$search}%");
                    $query->orWhere('to_date', 'LIKE', "%{$search}%");
                    } 
                   
                });
                $jobs =$jobsrow->orderBy('id', 'DESC')->paginate($page_length)->toArray();

                
                $response = array(
                "aaData" => $jobs['data'],
                "iTotalDisplayRecords" => $jobs['total'],
                "iTotalRecords" => $jobs['total'],
                "sColumns" => $request->input('sColumns'),
                "sEcho" => $request->input('sEcho'),
                "cuttentPage"=>$request['page']
            );
               
                return response()->json($response, 201);
            }
            catch (exception $e) {
                return response()->json([
                    'response' => 'error',
                    'message' => $e,
                ]);
            }
          }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        try {
            $user = JWTAuth::toUser($request->input('token'));
            
            if($request->user_id){
                //$request->request->add(['user_id'=> $request->user_id]);
                $request->request->add(['created_by'=> $request->user_id]);
                $request->request->add(['user_id'=> $request->user_id]);
            }else{
                $request->request->add(['created_by'=> $user->id]);
                $request->request->add(['user_id'=> $user->id]);
                 
            }
            if($request->from_date){
                
                $request->request->add(['from_date'=> date('Y-m-d', strtotime(str_replace('/', '-',$request->from_date_text)))]);
                  
            }
            if($request->to_date){
                $request->request->add(['to_date'=> date('Y-m-d', strtotime(str_replace('/', '-',$request->to_date_text)))]);
            }
            
            $data= $request->except('token','next');
            
            $Holidays = new Holidays($data);
            $Holidays->save();
            $form_id = $Holidays->id;
            
            if($request->dates){
                
                foreach($request->dates as $k =>$vl)
                {
                    $vl['holiday_date'] = date('Y-m-d', strtotime(str_replace('/', '-',$vl['dates'])));  
                    
                    $vl['holidays_id'] = $form_id;
                    $vl['user_id'] =$request->user_id;
                    $vl['day_time'] = $vl['times'];
                    $Holidays = new Holidays_dates($vl);
                    $Holidays->save(); 
                    
                }
            }
            
            
                       
                
            return response()->json(array('success' => true,'message' => 'Data inserted successfully','form_id' => $form_id), 200);
                  
           }catch (\Exception $e) 
           {
                $message = $e->getMessage();
                
                $text = strstr($message, ':', true);
            
                return response()->json(array('success' => false,'message'=> $message));
           }
    

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
            //$id = user_id;
            try {
                
                $Holidays = Holidays::select("*",DB::raw('DATE_FORMAT(from_date,"%d/%m/%Y") as from_date'),DB::raw('DATE_FORMAT(to_date,"%d/%m/%Y") as to_date'))->where('id',$id)->first();
                
                if($Holidays){
                    $Holidays->_method = 'PUT';
                    $Holidays_dates = Holidays_dates::where('holidays_id',$id)->get();
                    
                    foreach($Holidays_dates as $vl){
                         $vl->dates = date('d/m/Y', strtotime($vl->holiday_date));  
                         $vl->times = $vl->day_time;
                    }
                    
                    return response()->json(array('success' => true,'Holidays'=> $Holidays,'Holidays_dates'=>$Holidays_dates));
                }else{
                    return response()->json(array('success' => false,'message'=> 'Data not found')); 
                }
                
                 } catch (\Exception $e) 
                   {
                        $message = $e->getMessage();
                        
                        $text = strstr($message, ':', true);
                    
                        return response()->json(array('success' => false,'message'=> $message));
                   }
            
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        try{
            

            $user = JWTAuth::toUser($request->input('token'));
            $data= $request->except('token','next');
            $Holidays = Holidays::find($id);
            if($request->from_date_text){
                $Holidays->from_date= date('Y-m-d', strtotime(str_replace('/', '-',$request->from_date_text)));
            }
            if($request->to_date_text){
                $Holidays->to_date= date('Y-m-d', strtotime(str_replace('/', '-',$request->to_date_text)));
            }
            $Holidays->time_off = $request->time_off;
            $Holidays->notes = $request->notes;

            if($Holidays->save()){
              
                if($request->dates){

                    if($request->dateChangedCheck==0){
                    foreach($request->dates as $k =>$vl)
                    {
                        
                        $holiday_date = Holidays_dates::find($vl['id']);
                       if($holiday_date){
                        $holiday_date->holiday_date = date('Y-m-d', strtotime(str_replace('/', '-',$vl['dates'])));  
                        $holiday_date->day_time = $vl['times'];
                        $holiday_date->is_approved = $vl['is_approved'];
                        if($vl['is_approved']=='no'){
                            $holiday_date->notes = $vl['notes'];
                            $holiday_date->approved_by=$user->id;
                        }else{
                            $holiday_date->approved_by=$user->id;
                        }
                            
                       }else{
                       $vl['holiday_date'] = date('Y-m-d', strtotime(str_replace('/', '-',$vl['dates'])));  
                        
                        $vl['holidays_id'] = $id;
                        $vl['user_id'] =$request->user_id;
                        $vl['day_time'] = $vl['times'];
                        $vl['is_approved'] = $vl['is_approved'];
                        if($vl['is_approved']=='no'){
                            $vl['notes'] = $vl['notes'];
                            $vl['approved_by']=$user->id;
                        }else{
                            $vl['approved_by']=$user->id;
                        }
                        $holiday_date = new Holidays_dates($vl);
                       }
                        $holiday_date->save(); 
                        
                    }
                }else{
                    
                   $Holidays_dates = Holidays_dates::where('holidays_id',$id)->delete();
    if($Holidays_dates){
                    foreach($request->dates as $k =>$vl)
                    {
                        $vl['holiday_date'] = date('Y-m-d', strtotime(str_replace('/', '-',$vl['dates'])));  
                        $vl['holidays_id'] = $id;
                        $vl['user_id'] =$request->user_id;
                        $vl['day_time'] = $vl['times'];
                        
                        if(isset($vl['is_approved'])){
                            $vl['is_approved'] = $vl['is_approved'];
                            if($vl['is_approved']=='no'){
                                $vl['notes'] = $vl['notes'];
                                $vl['approved_by']=$user->id;
                            }else{
                                $vl['approved_by']=$user->id;
                            }
                        }    
                        $holiday_date = new Holidays_dates($vl);
                       }
                        $holiday_date->save(); 
                        
                    }
                }
                }
    
                return response()->json(array('success' => true,'updated'=>true,
                'message' => 'Holidays updated successfully'
                ), 200);
            }
            else{
                return response()->json(array('success' => false,'message'=> 'not update')); 
            }
            
        }catch(\Exception $e)
        {
            $message = $e->getMessage();
                
            $text = strstr($message, ':', true);
        
            return response()->json(array('success' => false,'message'=> $message));
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $row = Holidays::find($id)->delete();  
           
 
            if($row){
                Holidays_dates::where('holidays_id', $id)->delete();
 
             return response()->json(array('success' => true,'message'=> 'deleted'));
            }
             
             
         }
         catch (exception $e) {
             return response()->json([
                 'response' => 'error',
                 'message' => $e,
             ]);
         }
    }
}
