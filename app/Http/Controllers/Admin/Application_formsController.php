<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use DB;
use App\Models\Application_Forms;
use App\Models\Employment_references;
use App\Models\Employment_historys;
use App\Models\Documents;
use Illuminate\Support\Facades\Storage;
use App\User;
use Mail;
use App\Mail\UserSendMail;
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
                    $query->orWhere('position_applied_for', 'LIKE', "%{$search}%");
                    $query->orWhere('telephone_number', 'LIKE', "%{$search}%");
                    
                    
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

    public function submitdocument(Request $request){
        try {
            if($request->id){
                if(isset($request->resenddocument)){
                    $data = Application_Forms::where('id',$request->id)->where('email',$request->email)->first();
                }else{
                $id = base64_decode($request->id);
                $whereCase = explode('_',$id);
                $data = Application_Forms::where('id',$whereCase[0])->where('email',$whereCase[1])->first();
                }
                if($data){
                    if($data->is_document_get==1){
                    $userpath = $data->id.'_'.$data->fore_name;
                    if(isset($request->cma_1) && $request->cma_1!="null")
                    {
                                
                                $cma_1 = $request->cma_1->store('documents/'.$userpath, 'public');
                                $vl = array();
                                $vl['application_forms_id'] = $data->id; 
                                $vl['document_name'] = 'CMA 1';
                                $vl['document_path'] = $cma_1;
                                $Documents = new Documents($vl);
                                $Documents->save();
                       
                    }
                    if(isset($request->met_1) && $request->met_1!="null")
                    {
                                
                                $met_1 = $request->met_1->store('documents/'.$userpath, 'public');
                                $vl = array();
                                $vl['application_forms_id'] = $data->id; 
                                $vl['document_name'] = 'MET 1';
                                $vl['document_path'] = $met_1;
                                $Documents = new Documents($vl);
                                $Documents->save();
                       
                    }
                    if(isset($request->single_phase) && $request->single_phase!="null")
                    {
                                
                                $single_phase = $request->single_phase->store('documents/'.$userpath, 'public');
                                $vl = array();
                                $vl['application_forms_id'] = $data->id; 
                                $vl['document_name'] = 'Single Phase';
                                $vl['document_path'] = $single_phase;
                                $Documents = new Documents($vl);
                                $Documents->save();
                       
                    }
                    
                    if(isset($request->single_off_multi) && $request->single_off_multi!="null")
                    {
                                
                                $single_off_multi = $request->single_off_multi->store('documents/'.$userpath, 'public');
                                $vl = array();
                                $vl['application_forms_id'] = $data->id; 
                                $vl['document_name'] = 'Single off Multi';
                                $vl['document_path'] = $single_off_multi;
                                $Documents = new Documents($vl);
                                $Documents->save();
                       
                    }
                    if(isset($request->driving_licence_code) && $request->driving_licence_code!="null")
                    {
                                
                                $driving_licence_code = $request->driving_licence_code->store('documents/'.$userpath, 'public');
                                $vl = array();
                                $vl['application_forms_id'] = $data->id; 
                                $vl['document_name'] = 'Driving Licence Check Code';
                                $vl['document_path'] = $driving_licence_code;
                                $Documents = new Documents($vl);
                                $Documents->save();
                       
                    }
                    if(isset($request->othersfile)){
                        if($request->hasfile('othersfile'))
                        {
                           foreach($request->file('othersfile') as $i => $file)
                           {
                               
                               
                               $cma_1 = $file->store('documents/'.$userpath, 'public');
                                 $vl = array();
                                $vl['application_forms_id'] = $data->id; 
                                $vl['document_name'] = $request->document_name[$i];
                                $vl['document_path'] = $cma_1;
                                $Documents = new Documents($vl);
                                $Documents->save();
                           }
                        }
               
                    }
                    $results = Application_Forms::find($data->id);
                    if(isset($request->driving_licence_code_text)){
                        
                        $results->driving_licence_code_text = $request->driving_licence_code_text;
                    }
                    $results->is_document_get=0;
                    $results->save();
                    return response()->json(array('success' => true,'message' => 'document send successfully','form_user' => $data), 200);
                }else{
                    return response()->json(array('success' => false,'message' => 'Document already sent.'));
                }
                }
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
        $isviewed = $results;
        $isviewed->is_viewed=0;
        $isviewed->save();
        $results['employment_historys'] = $results->employment_historys;
        $results['employment_references']= $results->employment_references;
        $telephone_pre_answers= $results->telephone_pre_answers;
        if($telephone_pre_answers){
            $results['telephone_pre_answers']= $results->telephone_pre_answers;
        }
        $documents = $results->documents;
        if($documents){
            $results['documents']= $documents;
        }
        return response()->json(array('success' => true,'application_data'=> $results));
         } catch (\Exception $e) 
           {
                $message = $e->getMessage();
                
                $text = strstr($message, ':', true);
            
                return response()->json(array('success' => false,'message'=> $message));
           }
    
    }
    public function newapplicationcount()
    {
        //
        
        //$results->employment_historys
       //$data= $results->employment_references;
       try { 
        $results = Application_Forms::select("*")->Where('is_viewed',1)->count();
        
        return response()->json(array('success' => true,'total'=> $results));
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

    public function request_certification(Request $request){
       
       $application_Forms = $request->application_Forms['id'].'_'.$request->application_Forms['email'];
       $data['name'] = ucfirst($request->application_Forms['fore_name']);
       $data['code']= base64_encode($application_Forms);
       $to_mail= $request->application_Forms['email'];

       $results = Application_Forms::find($request->application_Forms['id']);
        $results->is_document_request=0;
        $results->save();
        Mail::send(['html'=>'documentsendmail'], ['data'=>$data], function($message) use ($to_mail)
                    {
                        $message->to($to_mail)->subject('Please submit your certificates');
                        

                     });
                     return response()->json(array('success' => true));
    }
    public function request_other_certification(Request $request){
       
        
        $data['name'] = ucfirst($request->application_Forms['fore_name']);
        
        
        $data['cma_1']= $request->cma_1;
        $data['met_1']= $request->met_1;
        $data['single_phase']= $request->single_phase;
        $data['single_off_multi']= $request->single_off_multi;
        $data['driving_licence_code']= $request->driving_licence_code;
        $data['is_other_documents']= $request->is_other_documents;
        
        $data['other_documents']=$request->other_documents;
        $data['request_again']=$request->other_documents;

        $form_array=array();
        $form_array['id'] = $request->application_Forms['id'];
        $form_array['email'] = $request->application_Forms['email'];
        $form = array();
        if($request->cma_1){
             $a['key']='cma_1';
            array_push($form,$a);

        }
        if($request->met_1){
            $a['key']='met_1';
            array_push($form,$a);
        }
        if($request->single_phase){
            $a['key']='single_phase';
            array_push($form,$a);
        }
        if($request->single_off_multi){
            $a['key']='single_off_multi';
            array_push($form,$a);
        }
        if($request->driving_licence_code){
            $a['key']='driving_licence_code';
            array_push($form,$a);
        }
        if(!empty($form)){
            $form_array['form']= $form;
        }
        
        if($request->other_documents){
            $form_array['other_documents']=$request->other_documents;
        }
        
            $application_Forms= json_encode($form_array);
        
        $data['code']= base64_encode($application_Forms);
       
        $to_mail = $request->application_Forms['email'];
 
        $results = Application_Forms::find($request->application_Forms['id']);
         $results->is_document_get=1;
         $results->save();
         
         //return view('documentsendmail', ['data'=>$data]);
         
         Mail::send(['html'=>'documentsendmail'], ['data'=>$data], function($message) use ($to_mail)
                     {
                         $message->to($to_mail)->subject('Please submit your certificates');
                         
 
                      });
                      return response()->json(array('success' => true));
     }
}
