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
use App\Models\User_leaves;

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
                $user_data = User::find($request->user_id);
                $request->request->add(['fullname'=> $user_data->name.' '.$user_data->lastName]);
            }else{
                $request->request->add(['created_by'=> $user->id]);
                $request->request->add(['user_id'=> $user->id]);
                $request->request->add(['fullname'=> $user->name.' '.$user->lastName]);
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
            $request->request->add(['form_id'=> $form_id]);
            
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
            
            
            Mail::send(['html'=>'holidayrequest'], ['data'=>$request], function($message) use ($request)
            {
                //$message->to('admin@teamhrs.co.uk')->subject('New application submitted');
                //,'hr@bespokemeteringsolutions.co.uk','recruitment@bespokemeteringsolutions.co.uk'
                $message->to(['sandeep@itsupportpeople.co.uk','prakash@itsupportpeople.co.uk','hr@bespokemeteringsolutions.co.uk'])->subject('Holiday Request');
                

             });          
                
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
            $allotted_year	= date('Y',strtotime($Holidays->from_date));
            $used_live =User_leaves::where('allotted_year',$allotted_year)->where('allotted_leave_limit','!=',0)->first();
            if(!$used_live){

               return response()->json(array('success' => false,'message'=> 'allotted leave limit not available'));
            }
            
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
                            $used_live =User_leaves::where('allotted_year',$allotted_year)->first();
                            if($used_live){
                                $used_live->used_leave = $used_live->used_leave +1;
                                $used_live->allotted_leave_limit = $used_live->allotted_leave_limit-1;
                                $used_live->save();
                            }
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
    public function Holiday_calendar(Request $request)
    {
        
        //
        
            try {
                
                $totalCol = $request->input('iColumns');
               
                
                $columns = explode(',', $request->input('columns'));
                $start = $request->input('iDisplayStart');
                $page_length = $request->input('iDisplayLength');
                
                
                $jobsrow = Holidays::select("id","notes",DB::raw('(select CONCAT(name," ",lastName) as name from users where id=holidays.user_id) as user_name'),DB::raw('from_date as start'),DB::raw('to_date as end'),DB::raw('notes as title'))->where(function($query) use ($request){
                    $search = $request->input('sSearch');
                  if($request->input('user_id')){
                    $query->where('user_id','=',$request->input('user_id'));
                   }
                   
                });
                $jobs =$jobsrow->orderBy('id', 'DESC')->get();
                foreach($jobs as $vl){

                    if($vl->end){
                        $vl->end= date("Y-m-d", strtotime($vl->end."+1 day"));
                    }
                    $vl->borderColor= '#f44236';
                    $vl->approved_by = Holidays_dates::where('holidays_id', $vl->id)->where('approved_by','!=' ,'null')->count();
                    if($vl->approved_by>0){
                        $vl->backgroundColor= '#15c37b';
                        $vl->borderColor= '#15c37b';
                    }else{
                        $vl->backgroundColor= '#f44236';
                    }
                    
                    $vl->textColor= '#fff';
            }
            
                $response = array(
                'success' => true,
                "result" => $jobs,
                
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
