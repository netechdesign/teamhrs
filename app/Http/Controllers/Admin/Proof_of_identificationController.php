<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use DB;
use Illuminate\Support\Facades\Storage;
use App\User;
use Mail;
use App\Models\Proof_of_identifications;

class Proof_of_identificationController extends Controller
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
        try{
            
            $user = JWTAuth::toUser($request->input('token'));
            $request->request->add(['created_by'=> $user->id]);
            $request->request->add(['user_id'=> $user->id]);
            $data= $request->except('token','next');
            $userpath = $request->application_forms_id.'_'.$request->fore_name;
            
            if(isset($request->passport_inside) && $request->passport_inside!="null")
            {
                $data['passport_inside'] = $request->passport_inside->store('documents/'.$userpath, 'public');
            
            }
            
            if(isset($request->passport_outside) && $request->passport_outside!="null")
            {
                $data['passport_outside'] = $request->passport_outside->store('documents/'.$userpath, 'public');
            
            }
            
            if(isset($request->birth_certificate) && $request->birth_certificate!="null")
            {
                $data['birth_certificate'] = $request->birth_certificate->store('documents/'.$userpath, 'public');
            
            }
            
            if(isset($request->proof_of_address) && $request->proof_of_address!="null")
            {
                $data['proof_of_address'] = $request->proof_of_address->store('documents/'.$userpath, 'public');
            
            }
            
            if(isset($request->national_insurance_number) && $request->national_insurance_number!="null")
            {
                $data['national_insurance_number'] = $request->national_insurance_number->store('documents/'.$userpath, 'public');
            
            }
            
            if(isset($request->right_to_work) && $request->right_to_work!="null")
            {
                $data['right_to_work'] = $request->right_to_work->store('documents/'.$userpath, 'public');
            
            }
            
            if(isset($request->driving_licence_front) && $request->driving_licence_front!="null")
            {
                $data['driving_licence_front'] = $request->driving_licence_front->store('documents/'.$userpath, 'public');
            
            }
            
            if(isset($request->driving_licence_back) && $request->driving_licence_back!="null")
            {
                $data['driving_licence_back'] = $request->driving_licence_back->store('documents/'.$userpath, 'public');
            
            }
            
            if(isset($request->passport_style_photograph) && $request->passport_style_photograph!="null")
            {
                $data['passport_style_photograph'] = $request->passport_style_photograph->store('documents/'.$userpath, 'public');
            
            }

            if(isset($request->p45form) && $request->p45form!="null")
            {
                $data['p45form'] = $request->p45form->store('documents/'.$userpath, 'public');
            }

            if(isset($request->hmrc_starter_checklist) && $request->hmrc_starter_checklist!="null")
            {
                $data['hmrc_starter_checklist'] = $request->hmrc_starter_checklist->store('documents/'.$userpath, 'public');
            }

            
            
            $Proof_of_identifications =Proof_of_identifications::where('user_id',$user->id)->first();
            if($Proof_of_identifications){
                
                    if(isset($data['passport_inside'])){
                        $Proof_of_identifications->passport_inside =$data['passport_inside'];
                      }
                
                if(isset($data['passport_outside'])){
                    $Proof_of_identifications->passport_outside =$data['passport_outside'];
                  }
                
                if(isset($data['birth_certificate'])){
                    $Proof_of_identifications->birth_certificate =$data['birth_certificate'];
                  }
                
                if(isset($data['proof_of_address'])){
                    $Proof_of_identifications->proof_of_address =$data['proof_of_address'];
                  }
                
                if(isset($data['national_insurance_number'])){
                    $Proof_of_identifications->national_insurance_number =$data['national_insurance_number'];
                  }
                
                if(isset($data['right_to_work'])){
                    $Proof_of_identifications->right_to_work =$data['right_to_work'];
                  }
                
                if(isset($data['driving_licence_front'])){
                    $Proof_of_identifications->driving_licence_front =$data['driving_licence_front'];
                  }
                
                if(isset($data['driving_licence_back'])){
                    $Proof_of_identifications->driving_licence_back =$data['driving_licence_back'];
                  }
                
                if(isset($data['passport_style_photograph'])){
                    $Proof_of_identifications->passport_style_photograph =$data['passport_style_photograph'];
                  }
                
                if(isset($data['p45form'])){
                    $Proof_of_identifications->p45form =$data['p45form'];
                  }
                
                if(isset($data['hmrc_starter_checklist'])){
                    $Proof_of_identifications->hmrc_starter_checklist =$data['hmrc_starter_checklist'];
                  }
            }else{
                $Proof_of_identifications = new Proof_of_identifications($data);
            }
            
            $Proof_of_identifications =$Proof_of_identifications->save();
            $form_id = 1;
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
