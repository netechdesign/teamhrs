<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use DB;
use App\Models\Application_Forms;
use App\Models\Employment_references;
use App\Models\Employment_historys;
use Illuminate\Support\Facades\Storage;
use App\User;
use Mail;
class Application_formsController extends Controller
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
                
                $jobsrow = Application_Forms::select("*",DB::raw('DATE_FORMAT(created_at,"%d/%m/%Y") as created_at_date'))->where(function($query) use ($request){
                    $search = $request->input('sSearch');
                  if($request->input('sheets_id')!=''){
                  //  $query->where('sheets_id','=',$request->input('sheets_id'));
                   }
                   if($search!=''){
                       
                    $query->Where('fore_name', 'LIKE', "%{$search}%");
                    $query->orWhere('surname', 'LIKE', "%{$search}%");
                    $query->orWhere('postcode', 'LIKE', "%{$search}%");
                    $query->orWhere('email', 'LIKE', "%{$search}%");
                    
                   } 
                   
                });
                $totalRecords = $jobsrow;
                $jobs = $jobsrow->orderBy('id', 'DESC')->offset($start)->limit($page_length)->get();
                $totalRecords = $totalRecords->count();

                /*$totalRecords = Application_Forms::select("*")->where(function($query) use ($request){
                    $search = $request->input('sSearch');
                  if($request->input('sheets_id')!=''){
                  //  $query->where('sheets_id','=',$request->input('sheets_id'));
                   }
                   if($search!=''){
                    $query->Where('fore_name', 'LIKE', "%{$search}%");
                    $query->orWhere('surname', 'LIKE', "%{$search}%");
                    $query->orWhere('postcode', 'LIKE', "%{$search}%");
                    $query->orWhere('email', 'LIKE', "%{$search}%");
                     
                   } 
                   
                })->count();
                */
                $response = array(
                "aaData" => $jobs,
                "iTotalDisplayRecords" => $totalRecords,
                "iTotalRecords" => $totalRecords,
                "sColumns" => $request->input('sColumns'),
                "sEcho" => $request->input('sEcho'),
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
        //
        try {
            
            $user = JWTAuth::toUser($request->input('token'));
            $request->request->add(['created_by'=> $user->id]);
            $request->request->add(['user_id'=> $user->id]);
         
            
            if(isset($request->information_provided_signature) && $request->information_provided_signature!='')
            {
                    $information_provided_signature = $request->information_provided_signature;
                    $encoded_image = explode(",", $information_provided_signature)[1];
                    $decoded_image = base64_decode($encoded_image);                  
                    $information_provided_signature = 'signatures/'.$user->id.'_information_provided_'.time().'.png';
                    Storage::disk('public')->put($information_provided_signature, $decoded_image);
                    $request['information_provided_signature'] = $information_provided_signature;
            }

        if(isset($request->information_provided_Date) && $request->information_provided_Date!='')
                {
                  $request['information_provided_Date'] =date('Y-m-d', strtotime(str_replace('/', '-',$request->information_provided_Date)));
                }

            if(isset($request->confirm_employee_signature) && $request->confirm_employee_signature!='')
                {
                    $confirm_employee_signature = $request->confirm_employee_signature;
                    $encoded_image = explode(",", $confirm_employee_signature)[1];
                    $decoded_image = base64_decode($encoded_image);                  
                    $confirm_employee_signature = 'signatures/'.$user->id.'_confirm_'.time().'.png';
                    Storage::disk('public')->put($confirm_employee_signature, $decoded_image);
                    $request['confirm_employee_signature'] = $confirm_employee_signature;
                }
        if(isset($request->confirm_Date) && $request->confirm_Date!='')
                {
                  $request['confirm_Date'] =date('Y-m-d', strtotime(str_replace('/', '-',$request->confirm_Date)));
                }
               $fullname = $request->fore_name.' '.$request->surname;
               $request['confirm_employee_name']= $fullname;
               $request['information_provided_name']= $fullname;

            $data= $request->except('token','next');
            
            $Application_Forms = new Application_Forms($data);
            $Application_Forms->save();
            $form_id = $Application_Forms->id;
            $employment_history= $request->only('employment_history');
            foreach($employment_history['employment_history'] as $vl){ 
                  
                    $vl['created_by'] = $user->id;
                    $vl['user_id']  = $user->id;
                    $vl['application_forms_id']  = $form_id;
//                    use App\Models\Employment_references;

                    $Employment_historys = new Employment_historys($vl);
                    $Employment_historys->save();
                    
               }
               $employment_references= $request->only('employment_references');
               foreach($employment_references['employment_references'] as $vl){ 
                     
                       $vl['created_by'] = $user->id;
                       $vl['user_id']  = $user->id;
                       $vl['application_forms_id']  = $form_id;
   //                    use App\Models\Employment_references;
   
                       $Employment_references = new Employment_references($vl);
                       $Employment_references->save();
                       
                  }
                  if($form_id){
                    $User =User::find($user->id);
                    $User->application_forms_id = $form_id;
                    $User->save();

                    Mail::send(['html'=>'applicationsendmail'], ['data'=>$request], function($message) {
                        $message->to('admin@teamhrs.co.uk')->subject('New application submitted');
                        
                     });
                 
                    return response()->json(array('success' => true,'message' => 'Data inserted successfully','form_id' => $form_id), 200);
                  }
                     
            
                  
           }catch (\Exception $e) 
           {
                $message = $e->getMessage();
                
                $text = strstr($message, ':', true);
            
                return response()->json(array('success' => false,'message'=> $message));
           }
    }
    
    public function applicant(Request $request)
    {
        //
        try {
            
               // $user = JWTAuth::toUser($request->input('token'));
              //  $request->request->add(['created_by'=> $user->id]);
             //$request->request->add(['user_id'=> $user->id]);
             $request->request->add(['user_id'=> 0]);
             $user_cv_file =  '';
             
             if(isset($request->user_cv) && $request->user_cv!="null")
             {
              $user_cv_file =  $request->user_cv;
             $cv_path = $request->user_cv->store(
                'documents', 'public' //public is drive name from config/filesystem.php
            );
            
            if($cv_path){
                $request['cv_path'] = $cv_path;
                $request['is_cv_attached'] = 1;	
            }
        }
            
            if(isset($request->information_provided_signature) && $request->information_provided_signature!="null")
            {
                    $information_provided_signature = $request->information_provided_signature;
                    $encoded_image = explode(",", $information_provided_signature)[1];
                    $decoded_image = base64_decode($encoded_image);                  
                    $information_provided_signature = 'signatures/'.$request->fore_name.'_information_provided_'.time().'.png';
                    Storage::disk('public')->put($information_provided_signature, $decoded_image);
                    $request['information_provided_signature'] = $information_provided_signature;
            }

        if(isset($request->information_provided_Date) && $request->information_provided_Date!='')
                {
                  $request['information_provided_Date'] =date('Y-m-d', strtotime(str_replace('/', '-',$request->information_provided_Date)));
                }

            if(isset($request->confirm_employee_signature) && $request->confirm_employee_signature!="null")
                {
                    $confirm_employee_signature = $request->confirm_employee_signature;
                    $encoded_image = explode(",", $confirm_employee_signature)[1];
                    $decoded_image = base64_decode($encoded_image);                  
                    $confirm_employee_signature = 'signatures/'.$request->fore_name.'_confirm_'.time().'.png';
                    Storage::disk('public')->put($confirm_employee_signature, $decoded_image);
                    $request['confirm_employee_signature'] = $confirm_employee_signature;
                }
        if(isset($request->confirm_Date) && $request->confirm_Date!='')
                {
                  $request['confirm_Date'] =date('Y-m-d', strtotime(str_replace('/', '-',$request->confirm_Date)));
                }
               $fullname = $request->fore_name.' '.$request->surname;
               $request['confirm_employee_name']= $fullname;
               $request['information_provided_name']= $fullname;

            $data= $request->except('token','next');
            
            $Application_Forms = new Application_Forms($data);
            $Application_Forms->save();
            $form_id = $Application_Forms->id;
            $employment_history= $request->only('employment_history');
            $employment_history_array = (array) json_decode($employment_history['employment_history']);

            foreach($employment_history_array as $vl){ 
                  
                  //  $vl['created_by'] = $user->id;
                  //  $vl['user_id']  = $user->id;
                  $data_array=[];
                  
                  $data_array['name']=$vl->name;
                  $data_array['position']=$vl->position;
                  $data_array['reason_for_leaving']= $vl->reason_for_leaving;
                  $data_array['application_forms_id']  = $form_id;
//                    use App\Models\Employment_references;

                    $Employment_historys = new Employment_historys($data_array);
                    $Employment_historys->save();
                    
               }
               $employment_references= $request->only('employment_references');
               $employment_references_array = (array) json_decode($employment_references['employment_references']);
               foreach($employment_references_array as $vl){ 
                   
                $data_array=[];
                $data_array["company_name"]=$vl->company_name;
                $data_array["name"]=$vl->name;
                $data_array["position"]=$vl->position;
                $data_array["telephone_no"]=$vl->telephone_no;
                $data_array["email"]=$vl->email;
                      // $vl['created_by'] = $user->id;
                      // $vl['user_id']  = $user->id;
                       $data_array['application_forms_id']  = $form_id;
   //                    use App\Models\Employment_references;
   
                       $Employment_references = new Employment_references($data_array);
                       $Employment_references->save();
                       
                  }
                  if($form_id){
                   // $User =User::find($user->id);
                   // $User->application_forms_id = $form_id;
                  //  $User->save();
                   
                    Mail::send(['html'=>'applicationsendmail'], ['data'=>$request], function($message) use ($user_cv_file)
                    {
                        //$message->to('admin@teamhrs.co.uk')->subject('New application submitted');
                        $message->to(['sandeep@itsupportpeople.co.uk','prakash@itsupportpeople.co.uk','hr@bespokemeteringsolutions.co.uk'])->subject('New application submitted');
                        //$message->to('hr@bespokemeteringsolutions.co.uk')->subject('New application submitted');
                        if(isset($user_cv_file) && $user_cv_file!='')
                        {
                           $file=$user_cv_file;
                          
                           $message->attach($file->getRealPath(), array(
                               'as' => $file->getClientOriginalName(), // If you want you can chnage original name to custom name      
                               'mime' => $file->getMimeType())
                           );
                        
                        }

                     });
                 
                    return response()->json(array('success' => true,'message' => 'Data inserted successfully','form_id' => $form_id), 200);
                  }
                     
            
                  
           }catch (\Exception $e) 
           {
               
                $message = $e->getMessage();
               if($e->getPrevious()){
                 if($e->getPrevious()->errorInfo[2]){
                    $message = $e->getPrevious()->errorInfo[2];
                 }
               } 
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
        
        //$results->employment_historys
       //$data= $results->employment_references;
       try { 
        $results = Application_Forms::select("*",DB::raw('DATE_FORMAT(created_at,"%d/%m/%Y %H:%i") as created_at_date'))->find($id);
        $results['employment_historys'] = $results->employment_historys;
        $results['employment_references']= $results->employment_references;
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
}
