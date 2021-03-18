<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use DB;
use App\Models\Uniform_orders;
class Uniform_ordersController extends Controller
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
            
            $Uniform_orders = new Uniform_orders($data);
            $Uniform_orders->save();
            $form_id = $Uniform_orders->id;
                
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
            $Uniform_orders = Uniform_orders::where('user_id',$id)->first();
            $Uniform_orders->_method = 'PUT';
            
            return response()->json(array('success' => true,'Uniform_orders'=> $Uniform_orders));
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
            $request->request->add(['updated_by'=> $user->id]);
            
            
            $Uniform_orders = Uniform_orders::find($id);
            
            $Uniform_orders->polo_shirts = $request->polo_shirts;
            $Uniform_orders->sweater = $request->sweater;
            $Uniform_orders->jacket = $request->jacket;
            $Uniform_orders->shoe_size = $request->shoe_size;
            $Uniform_orders->glove_size = $request->glove_size;
            $Uniform_orders->trouser_waist = $request->trouser_waist;
            $Uniform_orders->trouser_length = $request->trouser_length;
            $Uniform_orders->updated_by = $request->updated_by;
            
            if($Uniform_orders->save()){
              
                return response()->json(array('success' => true,
                'message' => 'Uniform orders updated successfully'
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
