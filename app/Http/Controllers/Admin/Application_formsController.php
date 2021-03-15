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
use App\Models\Job_positions;
use App\Models\Offerletters;


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
                
                $request['page'] = ($start/$page_length)+1;
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
                        $message->to(['sandeep@itsupportpeople.co.uk','prakash@itsupportpeople.co.uk','hr@bespokemeteringsolutions.co.uk','recruitment@bespokemeteringsolutions.co.uk'])->subject('New application submitted');
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

     public function sendOfferLetter(Request $request){
        try {
            
             $user = JWTAuth::toUser($request->input('token'));
             $request->request->add(['created_by'=> $user->id]);
          //$request->request->add(['user_id'=> $user->id]);
        $data = base64_decode($request->data);
        $data = json_decode($data, true);
        $data['created_by_name'] = $user->name;
        $data['application_forms_id'] = $data['application_Forms_id'];
        //
        $Offerletters= $data;
        if($data['address_details']){
            $Offerletters['line_1']=$data['address_details']['line_1'];
            $Offerletters['line_2']=$data['address_details']['line_2'];
            $Offerletters['line_3']=$data['address_details']['line_3'];
            $Offerletters['line_4']	=$data['address_details']['line_4'];
            $Offerletters['postcode']=$data['address_details']['postcode'];
            $Offerletters['town_or_city']=$data['address_details']['town_or_city'];
        }
        
        
        $Offerletterlists = new Offerletters($Offerletters);
        $Offerletterlists->save();
        $data['offerletterlist_id'] = $Offerletterlists->id;
        $data["created_at"]= date('d/m/Y');
        $to_mail = $data['email'];
        $mpdf= new \Mpdf\Mpdf(['mode' => 'utf-8','format' => 'A4','margin_left' => 15,'margin_right' => 15,'margin_top' => 35,'margin_bottom' => 20,'margin_header' => 15,'margin_footer' => 2]); //use this customization
        
        $data['name']= ucfirst($data['fore_name']);
        $application_Forms= json_encode($data);
        $data['code']= base64_encode($application_Forms);
        $job_positions = Job_positions::where('id',$data['job_title'])->first();        
        if($job_positions){
         $data['job_title'] =$job_positions->name;
        }
        
       
        $html = view('pdf.offer_letter', $data);
        $mpdf->SetTitle('offer-letter');
        $mpdf->WriteHTML($html);
       // $mpdf->Output('offer-letter.pdf','I');
        Mail::send(['html'=>'offerlettersendmail'], ['data'=>$data], function($message) use ($to_mail,$mpdf)
                     {
                         $message->to($to_mail)->subject('Offer Letter');
                          //Attach PDF doc
                          $message->attachData($mpdf->Output('offer-letter.pdf','S'),'offer-letter-'.date('dmY').'.pdf');
                          //$this->email->attach($content, 'attachment', $filename, 'application/pdf');

                      });
                      return response()->json(array('success' => true));
                    }catch (\Exception $e) 
                    {
                         $message = $e->getMessage();
                         
                         $text = strstr($message, ':', true);
                     
                         return response()->json(array('success' => false,'message'=> $message));
                    }
    }
    public function resendOfferLetter(Request $request){
        try {
            
             $user = JWTAuth::toUser($request->input('token'));
             $request->request->add(['created_by'=> $user->id]);
          //$request->request->add(['user_id'=> $user->id]);
          $data= array();
          $offerletters = Offerletters::select("*",DB::raw('DATE_FORMAT(created_at,"%d/%m/%Y") as created_at_date'))->find($request->offerletters_id);
          if($offerletters){
            $data["application_forms_id"]= $offerletters->application_forms_id;
            $data["title"]= $offerletters->title;
            $data["fore_name"]= $offerletters->fore_name;
            $data["surname"]= $offerletters->surname;
            $data["basic"]= $offerletters->basic;
            $data["bonus"]= $offerletters->bonus;
            $data["confirm_Date"]= $offerletters->confirm_Date;
    
            $data["dbscheck"]= $offerletters->dbscheck;
            $data["hours_of_work"]= $offerletters->hours_of_work;
            $data["job_title"]= $offerletters->job_title;
            $data["place_of_employment"]= $offerletters->place_of_employment;
            $data["line_1"]= $offerletters->line_1;
            $data["line_2"]= $offerletters->line_2;
            $data["line_3"]= $offerletters->line_3;
            $data["line_4"]= $offerletters->line_4;
            $data["postcode"]= $offerletters->postcode;
            $data["town_or_city"]= $offerletters->town_or_city;
            $data["created_at"]= $offerletters->created_at_date;
            $data["offerletterlist_id"] = $request->offerletters_id;
            $data["name"]= ucfirst($offerletters->fore_name);
        }
        
        $to_mail = $request->email;
        $mpdf= new \Mpdf\Mpdf(['mode' => 'utf-8','format' => 'A4','margin_left' => 15,'margin_right' => 15,'margin_top' => 35,'margin_bottom' => 20,'margin_header' => 15,'margin_footer' => 2]); //use this customization
        
        $application_Forms= json_encode($data);
        $data['code']=  base64_encode($application_Forms);
        
        $job_positions = Job_positions::where('id',$offerletters->job_title)->first();        
        
        if($job_positions){
            $data['job_title'] = $job_positions->name;
        }
        $html = view('pdf.offer_letter', $data);
        $mpdf->SetTitle('offer-letter');
        $mpdf->WriteHTML($html);
        Mail::send(['html'=>'offerlettersendmail'], ['data'=>$data], function($message) use ($to_mail,$mpdf)
                     {
                         $message->to($to_mail)->subject('Offer Letter');
                          //Attach PDF doc
                          $message->attachData($mpdf->Output('offer-letter.pdf','S'),'offer-letter-'.date('dmY').'.pdf');
                          //$this->email->attach($content, 'attachment', $filename, 'application/pdf');

                      });
                      return response()->json(array('success' => true));
                    }catch (\Exception $e) 
                    {
                         $message = $e->getMessage();
                         
                         $text = strstr($message, ':', true);
                     
                         return response()->json(array('success' => false,'message'=> $message));
                    }
    }
     public function offer_letter(Request $request){
       $data = base64_decode($request->data);
       $data = json_decode($data, true);
      
       if($data['offerletters_id']!=0){
        $offerletters = Offerletters::find($data['offerletters_id']);
        
        if($offerletters){
            $data["title"]= $offerletters->title;
            $data["fore_name"]= $offerletters->fore_name;
            $data["surname"]= $offerletters->surname;
            $data["basic"]= $offerletters->basic;
            $data["bonus"]= $offerletters->bonus;
            $data["confirm_Date"]= $offerletters->confirm_Date;
            $data["confirm_employee_date"]= $offerletters->confirm_employee_date;
            if($offerletters->confirm_employee_signature){
            $data["confirm_employee_signature"]= 'uploaded/'.$offerletters->confirm_employee_signature;
            }
            $data["dbscheck"]= $offerletters->dbscheck;  
            $data["hours_of_work"]= $offerletters->hours_of_work;
            $data["information_provided_date"]= $offerletters->information_provided_date;
            if($offerletters->information_provided_signature){
            $data["information_provided_signature"]= 'uploaded/'.$offerletters->information_provided_signature;
            }
            $data["job_title"]= $offerletters->job_title;
            $data["place_of_employment"]= $offerletters->place_of_employment;
            $data["line_1"]= $offerletters->line_1;
            $data["line_2"]= $offerletters->line_3;
            $data["line_3"]= $offerletters->line_3;
            $data["line_4"]=  $offerletters->line_4;
            $data["postcode"]= $offerletters->postcode;
            $data["town_or_city"]=$offerletters->town_or_city;
            $data["created_at"] = date('d/m/Y',strtotime($offerletters->created_at));
            
        }
       }
       
       $job_positions = Job_positions::where('id',$data['job_title'])->first();        
       
       if($job_positions){
        $data['job_title'] =$job_positions->name;
        
       }
       
       $mpdf= new \Mpdf\Mpdf(['mode' => 'utf-8','format' => 'A4','margin_left' => 15,'margin_right' => 15,'margin_top' => 35,'margin_bottom' => 20,'margin_header' => 15,'margin_footer' => 2]); //use this customization
        
        $data['test']='';
        
        $html = view('pdf.offer_letter', $data);
        $mpdf->SetTitle('offer-letter');
        $mpdf->WriteHTML($html);
        $mpdf->Output('offer-letter.pdf','I');
     }

     public function submitofferletter(Request $request){
         /** candidate submit offer letter with signed */
         try{
         
         if(isset($request->information_provided_signature) && $request->information_provided_signature!="null")
         {
                 $information_provided_signature = $request->information_provided_signature;
                 $encoded_image = explode(",", $information_provided_signature)[1];
                 $decoded_image = base64_decode($encoded_image);                  
                 $information_provided_signature = 'signatures/'.$request->fore_name.'_information_provided_'.time().'.png';
                 Storage::disk('public')->put($information_provided_signature, $decoded_image);
                 $request['information_provided_signature'] = $information_provided_signature;
         }

         if(isset($request->confirm_employee_signature) && $request->confirm_employee_signature!="null")
         {
                 $confirm_employee_signature = $request->confirm_employee_signature;
                 $encoded_image = explode(",", $confirm_employee_signature)[1];
                 $decoded_image = base64_decode($encoded_image);                  
                 $confirm_employee_signature = 'signatures/'.$request->fore_name.'_confirm_employee_'.time().'.png';
                 Storage::disk('public')->put($confirm_employee_signature, $decoded_image);
                 $request['confirm_employee_signature'] = $confirm_employee_signature;
         }
         $offerletter_id =$request->offerletterlist_id; //dd($data['offerletterlist_id']); /** is offerletterlist_id =offerletter_id */
         $data = $request->except('token','next','_method','showModal','visible','formSubmitting','buttonName','job_title_text','remuneration_and_benefits','offerletterlist_id','id','created_at','showofferletter','alreadyalert');
         $Offerletters = Offerletters::where('id',$offerletter_id)->update($data);
         if($Offerletters){
         $form_id =$offerletter_id;
            return response()->json(array('success' => true,'form_id'=> $form_id));
         }
        } catch (\Exception $e) 
        {
             $message = $e->getMessage();
             
             $text = strstr($message, ':', true);
         
             return response()->json(array('success' => false,'message'=> $message));
        }
     }

     public function getofferletter($id){

        
        try { 
            $offerletterlists = DB::table('offerletters')
            ->Join('job_positions', 'job_positions.id', '=', 'offerletters.job_title')
            ->where('offerletters.application_forms_id', '=', $id)
            ->select('offerletters.*',DB::raw('job_positions.name as job_name'),DB::raw('offerletters.id as offerletters_id'),DB::raw('DATE_FORMAT(offerletters.created_at,"%d/%m/%Y %H:%i") as created_at_date'))->orderBy('offerletters.created_at','desc')
            ->get();
            
            if($offerletterlists){
            return response()->json(array('success' => true,'offerletterslist'=> $offerletterlists));
            }
            return response()->json(array('success' => false,'message'=> 'not get'));
             } catch (\Exception $e) 
               {
                    $message = $e->getMessage();
                    
                    $text = strstr($message, ':', true);
                
                    return response()->json(array('success' => false,'message'=> $message));
               }
        
     }

     public function approvedOfferLetter(Request $request)
                    {

                        try{
                            dd($request);
                        }
                        catch (\Exception $e) 
                        {
                            $message = $e->getMessage();
                            
                            $text = strstr($message, ':', true);
                        
                            return response()->json(array('success' => false,'message'=> $message));
                        }
     }
}
