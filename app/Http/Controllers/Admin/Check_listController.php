<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use DB;
use App\Models\Check_lists;
use App\Models\Check_list_items;
use App\Models\Application_Forms;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
class Check_listController extends Controller
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
                $jobsrow = Check_lists::select("*",DB::raw('DATE_FORMAT(issued_date,"%d/%m/%Y") as issued_date'),DB::raw('DATE_FORMAT(completed_date,"%d/%m/%Y") as completed_date'))->where(function($query) use ($request){
                    $search = $request->input('sSearch');
                  if(isset($request->is_completed))
                   {
                       if($request->is_completed!='all'){
                             $query->where('is_completed','=',$request->input('is_completed'));
                            }
                   }
                   if($search!=''){
                       
                    $query->Where('issued_engineer_name', 'LIKE', "%{$search}%");
                    
                    
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
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        try {
           
            $v = Validator::make($request->all(), [
                'issued_engineer_id' => ['required','unique:check_lists'],
            ]);
        
            if ($v->fails())
            {
                return response()->json($v->errors(), 201);
            }

            $user = JWTAuth::toUser($request->input('token'));
            $request->request->add(['created_by'=> $user->id]);
            
            
            if(isset($request->issued_date) && $request->issued_date!='')
                {
                  $request['issued_date'] =date('Y-m-d', strtotime(str_replace('/', '-',$request->issued_date)));
                }

            if(isset($request->signature) && $request->signature!='')
                {
                    $confirm_employee_signature = $request->signature;
                    $encoded_image = explode(",", $confirm_employee_signature)[1];
                    $decoded_image = base64_decode($encoded_image);                  
                    $confirm_employee_signature = 'signatures/'.$user->id.'_confirm_'.time().'.png';
                    Storage::disk('public')->put($confirm_employee_signature, $decoded_image);
                    $request['signature'] = $confirm_employee_signature;
                }
                    $data= $request->except('token','next');
            
                    $Check_lists = new Check_lists($data);
                    $Check_lists->save();
                    $form_id = $Check_lists->id;
                    $employment_history= $request->only('tools_list');
                    foreach($employment_history['tools_list'] as $vl){ 
                        
                            $vl['created_by'] = $user->id;
                            $vl['check_lists_id']  = $form_id;
                            $vl['tool_categories_id']= $vl['id'];
                            $vl['tool_categories_name'] = $vl['name'];
        //                    use App\Models\Employment_references;

                            $Check_list_items = new Check_list_items($vl);
                            $Check_list_items->save();
                            
                    }
                    return response()->json(array('success' => true,'message' => 'Data inserted successfully','form_id' => $form_id), 200);        
        } 
        catch (\Exception $e) 
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
        try { 
            $results = Check_lists::select("*",DB::raw('DATE_FORMAT(issued_date,"%d/%m/%Y") as issued_date'))->find($id);
            
            $results['check_list_items'] = Check_list_items::where('check_lists_id',$id)->get();
            
            
            return response()->json(array('success' => true,'application_data'=> $results));
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
    public function edit(Request $request,$id)
    {
        try {
            $user = JWTAuth::toUser($request->input('token'));
            $user = $user->id;
            if($id!=0){
            $results = Check_lists::select("*",DB::raw('DATE_FORMAT(issued_date,"%d/%m/%Y") as issued_date'))->find($id);
            }else{
                $results = Check_lists::select("*",DB::raw('DATE_FORMAT(issued_date,"%d/%m/%Y") as issued_date'))->where('issued_engineer_id',$user)->first();
            }
            if($results){
                if($id!=0){
                $check_list_items = DB::table('check_list_items')->select('tool_categories_id',DB::raw('check_list_items.id as check_list_items_id'),DB::raw('check_list_items.tool_categories_name as name'),'check_list_items.serial_number','check_list_items.is_received')->where('check_list_items.check_lists_id',$id)->get();
                $tool_categories = DB::table('tool_categories')->select('id','name',DB::raw('created_by as is_received'),DB::raw('created_by as serial_number'))->where('is_delete',0)->get();
                $check_list_items = $check_list_items->concat($tool_categories);
                }else{
                    $check_list_items = DB::table('check_list_items')->select('tool_categories_id',DB::raw('check_list_items.id as check_list_items_id'),DB::raw('check_list_items.tool_categories_name as name'),'check_list_items.serial_number','check_list_items.is_received')->where('check_list_items.check_lists_id',$results->id)->get();
                }
                
                $results->_method = 'PUT';
                return response()->json(array('success' => true,'check_lists'=>$results,'check_list_items'=>$check_list_items));
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        try {
           

            $user = JWTAuth::toUser($request->input('token'));
            $request->request->add(['created_by'=> $user->id]);
            
            
            if(isset($request->issued_date) && $request->issued_date!='')
                {
                  $request['issued_date'] =date('Y-m-d', strtotime(str_replace('/', '-',$request->issued_date)));
                }
                
            if(isset($request->signature) && $request->signature!='')
                {
                    $confirm_employee_signature = $request->signature;
                    $encoded_image = explode(",", $confirm_employee_signature)[1];
                    $decoded_image = base64_decode($encoded_image);                  
                    $confirm_employee_signature = 'signatures/'.$user->id.'_confirm_'.time().'.png';
                    Storage::disk('public')->put($confirm_employee_signature, $decoded_image);
                    $request['signature'] = $confirm_employee_signature;
                }
                
                    $data= $request->except('token','next');
                    if(isset($request->back_office)){
                        $Check_lists = Check_lists::find($id);
                        $Check_lists->issued_engineer_id = $request->issued_engineer_id;
                        $Check_lists->issued_engineer_name = $request->issued_engineer_name;	
                        if(isset($request->issued_date) && $request->issued_date!='')
                            {
                                $Check_lists->issued_date = $request->issued_date;
                              //  $Check_lists->signature = $request->issued_engineer_id;
                            }
                            $Check_lists->is_changed = 1;
                    }else{
                        
                        $Check_lists = Check_lists::where('issued_engineer_id',$user->id)->first();  
                        
                        if(isset($request->signature) && $request->signature!='')
                        {
                            $Check_lists->signature = $request->signature;
                        }
                        $Check_lists->is_completed = 1;
                        
                        $Check_lists->is_changed = 0;
                        $Check_lists->completed_date = date('Y-m-d');
                    }
                    $Check_lists->save();
                    
                    $form_id = $Check_lists->id;
                    $employment_history= $request->only('tools_list');
                    
                    foreach($employment_history['tools_list'] as $vl){ 
                        
                            if(isset($vl['check_list_items_id'])){
                                $Check_list_items =  Check_list_items::find($vl['check_list_items_id']);
                                $Check_list_items->updated_by = $user->id;
                                $Check_list_items->serial_number = $vl['serial_number'];
                                $Check_list_items->is_received = $vl['is_received'];
                                $Check_list_items->save();
                            }else{
                                $vl['created_by'] = $user->id;
                                $vl['check_lists_id']  = $form_id;
                                $vl['tool_categories_id']= $vl['id'];
                                $vl['tool_categories_name'] = $vl['name'];
                                $Check_list_items = new Check_list_items($vl);
                                $Check_list_items->save();
                            }
                            
                    }
                    return response()->json(array('success' => true,'message' => 'Data inserted successfully','form_id' => $form_id), 200);        
        } 
        catch (\Exception $e) 
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
        //
    }

    public function engineer_list()
    {
        try {
            
            $response = Application_Forms::select(DB::raw('users.id as value'),DB::raw('CONCAT(users.name," ",users.lastName) as label'))
                        ->join('users','users.id','=','application_forms.user_id')
                        ->where('application_forms.user_id','!=',0)->get();

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
