<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use DB;
use App\Models\Employee_details;
use App\Models\Application_Forms;
use App\Models\Address_histories;
use App\Models\Offerletters;
use App\User;
use App\Models\Documents;
use App\Models\Proof_of_identifications;


class DocumentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try{
                if(isset($request->user_id)){

                    $user = User::find($request->user_id);
                    if($user->application_forms_id){
                       $Documents = Documents::where('application_forms_id',$user->application_forms_id)->get();
                       //$Proof_of_identifications= Proof_of_identifications::where('user_id',$request->user_id)->first(); 
                       return response()->json(array('success' => true,'Documents'=> $Documents,'Proof_of_identifications'=> 'Proof_of_identifications'));   
                    }
                    
                }
        }
        catch(exception $e) {
            return response()->json([
                'response' => 'error',
                'message' => $e,
            ]);
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
