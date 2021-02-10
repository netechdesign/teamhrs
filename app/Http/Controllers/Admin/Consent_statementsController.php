<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use DB;
use App\Models\Consent_statements;
use Illuminate\Support\Facades\Storage;
use App\Models\Employee_details;
class Consent_statementsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
         
            if(isset($request->recruitment_employee_signature) && $request->recruitment_employee_signature!='')
            {
                    $recruitment_employee_signature = $request->recruitment_employee_signature;
                    $encoded_image = explode(",", $recruitment_employee_signature)[1];
                    $decoded_image = base64_decode($encoded_image);                  
                    $recruitment_employee_signature = 'signatures/'.$user->id.'_recruitment_'.time().'.png';
                    Storage::disk('public')->put($recruitment_employee_signature, $decoded_image);
                    $request['recruitment_employee_signature'] = $recruitment_employee_signature;
            }
            if(isset($request->recruitment_Date) && $request->recruitment_Date!='')
                {
                  $request['recruitment_Date'] =date('Y-m-d', strtotime(str_replace('/', '-',$request->recruitment_Date)));
                }
            if(isset($request->screening_employee_signature) && $request->screening_employee_signature!='')
            {
                    $screening_employee_signature = $request->screening_employee_signature;
                    $encoded_image = explode(",", $screening_employee_signature)[1];
                    $decoded_image = base64_decode($encoded_image);                  
                    $screening_employee_signature = 'signatures/'.$user->id.'_screening_'.time().'.png';
                    Storage::disk('public')->put($screening_employee_signature, $decoded_image);
                    $request['screening_employee_signature'] = $screening_employee_signature;
            }

        if(isset($request->screening_Date) && $request->screening_Date!='')
                {
                  $request['screening_Date'] =date('Y-m-d', strtotime(str_replace('/', '-',$request->screening_Date)));
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

            $data= $request->except('token','next');
            
            $Consent_statements = new Consent_statements($data);
            $Consent_statements->save();
            $form_id = $Consent_statements->id;
                
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
        try { 
            $Consent_statements = Consent_statements::where('user_id',$id)->first();
            if($Consent_statements){
            $Consent_statements->_method = 'PUT';
            if($Consent_statements->recruitment_Date){
                $Consent_statements->recruitment_Date = date('d/m/Y',strtotime($Consent_statements->recruitment_Date));
            }
            
            if($Consent_statements->recruitment_employee_signature){
                $Consent_statements->recruitment_employee_signature = url('uploaded/'.$Consent_statements->recruitment_employee_signature);
            }
            if($Consent_statements->screening_Date){
                $Consent_statements->screening_Date = date('d/m/Y',strtotime($Consent_statements->screening_Date));
            }
            if($Consent_statements->screening_employee_signature){
                $Consent_statements->screening_employee_signature = url('uploaded/'.$Consent_statements->screening_employee_signature);
            }
            
            if($Consent_statements->confirm_Date){
                $Consent_statements->confirm_Date = date('d/m/Y',strtotime($Consent_statements->confirm_Date));
            }
            if($Consent_statements->confirm_employee_signature){
                $Consent_statements->confirm_employee_signature = url('uploaded/'.$Consent_statements->confirm_employee_signature);
            }
        }else{
            $Application_Forms = Employee_details::where('user_id',$id)->first();
            $Consent_statements= new \stdClass();
            $fullname =	$Application_Forms->first_name.' '.$Application_Forms->last_name;
            $Consent_statements->recruitment_employee_name=$fullname;
            $Consent_statements->screening_employee_name=$fullname;
            $Consent_statements->confirm_employee_name=$fullname;
            
            
        }
            return response()->json(array('success' => true,'Consent_statements'=> $Consent_statements));
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
        try{
        
            $user = JWTAuth::toUser($request->input('token'));
            $Consent_statements = Consent_statements::find($id);
            $Consent_statements->recruitment_employee_name = $request->recruitment_employee_name;
            $Consent_statements->confirm_employee_name = $request->confirm_employee_name;
            $Consent_statements->screening_employee_name = $request->screening_employee_name;

            if(isset($request->recruitment_employee_signature) && $request->recruitment_employee_signature!='')
            {
                    $recruitment_employee_signature = $request->recruitment_employee_signature;
                    $encoded_image = explode(",", $recruitment_employee_signature)[1];
                    $decoded_image = base64_decode($encoded_image);                  
                    $recruitment_employee_signature = 'signatures/'.$user->id.'_recruitment_'.time().'.png';
                    Storage::disk('public')->put($recruitment_employee_signature, $decoded_image);
                    $Consent_statements->recruitment_employee_signature = $recruitment_employee_signature;
            }
            if(isset($request->recruitment_Date) && $request->recruitment_Date!='')
                {
                    $Consent_statements->recruitment_Date =date('Y-m-d', strtotime(str_replace('/', '-',$request->recruitment_Date)));
                  
                }
            if(isset($request->screening_employee_signature) && $request->screening_employee_signature!='')
            {
                    $screening_employee_signature = $request->screening_employee_signature;
                    $encoded_image = explode(",", $screening_employee_signature)[1];
                    $decoded_image = base64_decode($encoded_image);                  
                    $screening_employee_signature = 'signatures/'.$user->id.'_screening_'.time().'.png';
                    Storage::disk('public')->put($screening_employee_signature, $decoded_image);
                    $Consent_statements->screening_employee_signature = $screening_employee_signature;
            }

        if(isset($request->screening_Date) && $request->screening_Date!='')
                {
                    $Consent_statements->screening_Date =date('Y-m-d', strtotime(str_replace('/', '-',$request->screening_Date)));
                }

            if(isset($request->confirm_employee_signature) && $request->confirm_employee_signature!='')
                {
                    $confirm_employee_signature = $request->confirm_employee_signature;
                    $encoded_image = explode(",", $confirm_employee_signature)[1];
                    $decoded_image = base64_decode($encoded_image);                  
                    $confirm_employee_signature = 'signatures/'.$user->id.'_confirm_'.time().'.png';
                    Storage::disk('public')->put($confirm_employee_signature, $decoded_image);
                    $Consent_statements->confirm_employee_signature = $confirm_employee_signature;
                }
        if(isset($request->confirm_Date) && $request->confirm_Date!='')
                {
                    $Consent_statements->confirm_Date =date('Y-m-d', strtotime(str_replace('/', '-',$request->confirm_Date)));
                }


            if($Consent_statements->save()){
              
                return response()->json(array('success' => true,
                'message' => 'User updated successfully'
                ), 200);
            }
            else{
                return response()->json(array('success' => false,'message'=> 'not update')); 
            }
            
        }catch (\Exception $e) 
        {
           $message = $e->getMessage();
           
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
}
