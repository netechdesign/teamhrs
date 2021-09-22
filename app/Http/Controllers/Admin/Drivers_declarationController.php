<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use DB;
use Illuminate\Support\Facades\Storage;
use App\Models\Drivers_declaration;
use App\Models\Documents;
class Drivers_declarationController extends Controller
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
            if($request->i_confirm){
                
                $request['i_confirm'] = 1;
            }else{
                $request['i_confirm'] = 0;
            }
            if(isset($request->employee_signature) && $request->employee_signature!='')
            {
                    $employee_signature = $request->employee_signature;
                    $encoded_image = explode(",", $employee_signature)[1];
                    $decoded_image = base64_decode($encoded_image);                  
                    $employee_signature = 'signatures/'.$user->id.'_recruitment_'.time().'.png';
                    Storage::disk('public')->put($employee_signature, $decoded_image);
                    $request['employee_signature'] = $employee_signature;
            }
            if(isset($request->employee_date) && $request->employee_date!='')
                {
                  $request['employee_date'] =date('Y-m-d', strtotime(str_replace('/', '-',$request->employee_date)));
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
            
            $Drivers_declaration = new Drivers_declaration($data);
            $Drivers_declaration->save();
            $form_id = $Drivers_declaration->id;
            $this->get_pdf($user,'save');    
            return response()->json(array('success' => true,'message' => 'Data inserted successfully','form_id' => $form_id), 200);
                  
           }catch (\Exception $e) 
           {
                $message = $e->getMessage();
                
                $text = strstr($message, ':', true);
            
                return response()->json(array('success' => false,'message'=> $message));
           }
    }
public function get_pdf($user,$action){
    
    
    $mpdf= new \Mpdf\Mpdf(['mode' => 'utf-8','format' => 'A4','margin_left' => 15,'margin_right' => 15,'margin_top' => 35,'margin_bottom' => 20,'margin_header' => 15,'margin_footer' => 2]); //use this customization
    if($action=='save'){
        $data = Drivers_declaration::where('user_id',$user->id)->first();
        if($data->employee_signature){
            $data["employee_signature"] = 'uploaded/'.$data->employee_signature;
            
            }
            if($data->confirm_employee_signature){
                $data["confirm_employee_signature"] = 'uploaded/'.$data->confirm_employee_signature;
               
                }
                if(file_exists('uploaded/documents/'.$user->id.'_'.$user->name)==false){
                    mkdir('uploaded/documents/'.$user->id.'_'.$user->name,0777);
                }         
        $userpath = 'documents/'.$user->id.'_'.$user->name.'/drivers_declaration.pdf';
        $vl = array();
        $vl['application_forms_id'] = $user->application_forms_id; 
        $vl['user_id'] = $user->id; 
        $vl['document_name'] = 'Drivers Declaration';
        $vl['document_path'] = $userpath;
        $Documents = new Documents($vl);

        if($Documents->save()){
            $html = view('pdf.drivers_declaration', $data);
            $mpdf->SetTitle('Drivers-declaration');
            $mpdf->WriteHTML($html);
            $mpdf->Output('uploaded/'.$userpath, 'F');
        }

    }
    elseif($action=='view'){
        $data = Drivers_declaration::where('id',$user)->first();
        
        if($data->employee_signature){
            $data["employee_signature"] = 'uploaded/'.$data->employee_signature;
           
            }
            if($data->confirm_employee_signature){
                $data["confirm_employee_signature"] = 'uploaded/'.$data->confirm_employee_signature;
               
                }    
        $html = view('pdf.drivers_declaration', $data);
        $mpdf->SetTitle('Drivers-declaration');
        $mpdf->WriteHTML($html);
        $mpdf->Output('offer-letter.pdf','I');
    }
    elseif($action=='send'){
    Mail::send(['html'=>'offerlettersendmail'], ['data'=>$data], function($message) use ($to_mail,$mpdf)
                 {
                     $message->to($to_mail)->subject('Offer Letter');
                      //Attach PDF doc
                      $message->attachData($mpdf->Output('offer-letter.pdf','S'),'offer-letter-'.date('dmY').'.pdf');
                      //$this->email->attach($content, 'attachment', $filename, 'application/pdf');

                  });
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
            $Drivers_declaration = Drivers_declaration::where('user_id',$id)->first();
            if($Drivers_declaration){
            $Drivers_declaration->_method = 'PUT';
            if($Drivers_declaration->recruitment_Date){
                $Drivers_declaration->recruitment_Date = date('d/m/Y',strtotime($Drivers_declaration->recruitment_Date));
            }
            
            if($Drivers_declaration->employee_signature){
                $Drivers_declaration->employee_signature = url('uploaded/'.$Drivers_declaration->employee_signature);
            }
            
            if($Drivers_declaration->confirm_Date){
                $Drivers_declaration->confirm_Date = date('d/m/Y',strtotime($Drivers_declaration->confirm_Date));
            }
            if($Drivers_declaration->confirm_employee_signature){
                $Drivers_declaration->confirm_employee_signature = url('uploaded/'.$Drivers_declaration->confirm_employee_signature);
            }
        }else{
            
            
        }
            return response()->json(array('success' => true,'Drivers_declaration'=> $Drivers_declaration));
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
