<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use JWTAuth;
use DB;
use App\Models\Telephone_pre_answers;
class Telephone_pre_answersController extends Controller
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
    public function store(Request $request)
    {
        //
        try {
            $user = JWTAuth::toUser($request->input('token'));
            $request->request->add(['created_by'=> $user->id]);
            $request->request->add(['user_id'=> $user->id]);
            
            
            $data = $request->except('token','next');
            $application_forms_id =$data['application_Forms']['id'];
            
            if($data['telephone_questions']){
                foreach($data['telephone_questions'] as $vl){
                    
                    $telephone_questions=array();
                    $telephone_questions['application_forms_id']= $application_forms_id;
                    $telephone_questions['telephone_pre_questions_id']=$vl['id'];
                    $telephone_questions['telephone_pre_questions']=$vl['question'];
                    $telephone_questions['telephone_pre_answers']=$vl['temperory_comment'];
                    
                    $telephone_questions['created_by']=$user->id;
                    $Telephone_pre_answers = new Telephone_pre_answers($telephone_questions);
            $Telephone_pre_answers->save();
                }
            }
            $form_data = $request->only('created_by','user_id','suitability_offered_for','suitability_offered_comments');
           
            $telephone_questions=array();
            $telephone_questions['application_forms_id']= $application_forms_id;
            $telephone_questions['telephone_pre_questions'] = 'suitability_offered_for';
            $telephone_questions['telephone_pre_answers']=$form_data['suitability_offered_for'];
            $Telephone_pre_answers = new Telephone_pre_answers($telephone_questions);
            $Telephone_pre_answers->save();

            $telephone_questions=array();
            $telephone_questions['application_forms_id']= $application_forms_id;
            $telephone_questions['telephone_pre_questions'] = 'suitability_offered_comments';
            $telephone_questions['telephone_pre_answers']=$form_data['suitability_offered_comments'];
            $Telephone_pre_answers = new Telephone_pre_answers($telephone_questions);
            $Telephone_pre_answers->save();
           
            
            $form_id = 'id';
                
            return response()->json(array('success' => true,'message' => 'Data inserted successfully','form_id' => $form_id), 200);
                  
           }catch (\Exception $e) 
           {
                $message = $e->getMessage();
                
                $text = strstr($message, ':', true);
            
                return response()->json(array('success' => false,'message'=> $message));
           }
    

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

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
