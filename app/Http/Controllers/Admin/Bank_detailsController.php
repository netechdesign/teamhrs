<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use DB;
use App\Models\Bank_details;
class Bank_detailsController extends Controller
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
            
            
            $data= $request->except('token','next');
            
            $Bank_details = new Bank_details($data);
            $Bank_details->save();
            $form_id = $Bank_details->id;
                
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
                $Bank_details = Bank_details::where('user_id',$id)->first();
                $Bank_details->_method = 'PUT';
                
                return response()->json(array('success' => true,'Bank_details'=> $Bank_details));
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
        
 
            $Bank_details = Bank_details::find($id);
            
            $Bank_details->bank_name = $request->bank_name;
            $Bank_details->bank_address = $request->bank_address;
            $Bank_details->name_of_account_holder = $request->name_of_account_holder;
            $Bank_details->sort_code = $request->sort_code;
            $Bank_details->account_number = $request->account_number;
         
            if($Bank_details->save()){
              
                return response()->json(array('success' => true,
                'message' => 'Bank details updated successfully'
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
