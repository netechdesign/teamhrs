<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use DB;
use App\Models\Employee_details;
use App\Models\Application_Forms;
use App\Models\Address_histories;

class Employee_detailsController extends Controller
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
        try {
            $user = JWTAuth::toUser($request->input('token'));
            $request->request->add(['created_by'=> $user->id]);
            $request->request->add(['user_id'=> $user->id]);
            
            if(isset($request->date_of_birth) && $request->date_of_birth!='')
                {
                  $request['date_of_birth'] =date('Y-m-d', strtotime(str_replace('/', '-',$request->date_of_birth)));
                }
              if(isset($request->start_date) && $request->start_date!='')
                {
                  $request['start_date'] = date('Y-m-d', strtotime(str_replace('/', '-',$request->start_date)));
                }
            $data= $request->except('token','next');
            
            $Employee_details = new Employee_details($data);
            $Employee_details->save();
            $form_id = $Employee_details->id;
            $address_histories= $request->only('address_history');
            foreach($address_histories['address_history'] as $vl){ 
                  
                    $vl['created_by'] = $user->id;
                    $vl['user_id']  = $user->id;
                    
//                    use App\Models\Employment_references;

                    $Address_histories = new Address_histories($vl);
                    $Address_histories->save();
                    
               }
            return response()->json(array('success' => true,'message' => 'Data inserted successfully','form_id' => $form_id), 200);
                  
           }catch (\Exception $e) 
           {
                $message = $e->getMessage();
                
                $text = strstr($message, ':', true);
            
                return response()->json(array('success' => false,'message'=> $message));
           }
    

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
        //$id = user_id;
        try { 
        $Employee_details = Employee_details::where('user_id',$id)->first();
        if($Employee_details){
        $Employee_details->_method = 'PUT';
        if($Employee_details->start_date){
            $Employee_details->start_date = date('d/m/Y',strtotime($Employee_details->start_date));
        }
        if($Employee_details->date_of_birth){
            $Employee_details->date_of_birth = date('d/m/Y',strtotime($Employee_details->date_of_birth));
        }
    }else{
        $Application_Forms = Application_Forms::where('user_id',$id)->first();
        $Employee_details= new \stdClass();
        $Employee_details->first_name =	$Application_Forms->fore_name;
        
        $Employee_details->last_name= $Application_Forms->surname;
        $Employee_details->getaddress_id= $Application_Forms->getaddress_id;
        $Employee_details->telephone_number= $Application_Forms->telephone_number; 
        
    }
        return response()->json(array('success' => true,'Employee_details'=> $Employee_details));
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
        
 
            $Employee_details = Employee_details::find($id);
            $Employee_details->first_name = $request->first_name;
            
            $Employee_details->middle_name = $request->middle_name;
            $Employee_details->last_name = $request->last_name;

            $Employee_details->region = $request->region;

            if($request->start_date){
                $Employee_details->start_date =date('Y-m-d', strtotime(str_replace('/', '-',$request->start_date)));
            }
            if($request->date_of_birth){
                $Employee_details->date_of_birth =date('Y-m-d', strtotime(str_replace('/', '-',$request->date_of_birth)));
            }
            
            $Employee_details->gender = $request->gender;
            $Employee_details->telephone_number = $request->telephone_number;
            $Employee_details->mobile_number = $request->mobile_number;
            $Employee_details->email = $request->email;
            $Employee_details->house_no = $request->house_no;
            $Employee_details->street = $request->street;
            $Employee_details->city = $request->city;
            $Employee_details->county = $request->county;
            $Employee_details->postcode = $request->postcode;
            $Employee_details->time_at_address_year = $request->time_at_address_year;
            $Employee_details->time_at_address_month = $request->time_at_address_month;
            $Employee_details->town_of_birth_detail = $request->town_of_birth_detail;
            $Employee_details->ni_number = $request->ni_number;
            $Employee_details->mothers_maiden = $request->mothers_maiden;
            $Employee_details->emergency_contact = $request->emergency_contact;
            $Employee_details->relationship = $request->relationship;
            $Employee_details->contact_number = $request->contact_number;
            $Employee_details->address = $request->address;


            if($Employee_details->save()){
              
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
