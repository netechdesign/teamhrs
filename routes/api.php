<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/

Route::group(['middleware' => ['jwt.auth','api-header']], function () {
  
    // all routes to protected resources are registered here  
    Route::get('users/list', function(){
        $users = App\User::all();
        
        $response = ['success'=>true, 'data'=>$users];
        return response()->json($response, 201);
    });
   
    

    Route::namespace('Admin')->group(function () {
        
        Route::resource('user', 'UserController');
        Route::post('user/changepassword', 'UserController@changepassword');
        
        Route::resource('role', 'RoleController');
        Route::resource('employee_details', 'Employee_detailsController');
        Route::resource('bank_details', 'Bank_detailsController');
        Route::resource('uniform_orders', 'Uniform_ordersController');
        Route::resource('consent_statement', 'Consent_statementsController');
        Route::resource('application_form', 'Application_formsController');
        Route::resource('telephone_pre_answers', 'Telephone_pre_answersController');
        Route::resource('check_list', 'Check_listController');
        Route::resource('proof_of_identification', 'Proof_of_identificationController');
        Route::resource('documents', 'DocumentsController');
        Route::resource('leaves', 'User_leavesController');
        Route::resource('holiday', 'HolidayController');
        Route::resource('mandatory_documents', 'Mandatory_documentsController');
        Route::resource('tool', 'ToolController');
        Route::resource('drivers_declaration', 'Drivers_declarationController');
        
        Route::get('address_history/{id}', 'Employee_detailsController@Address_history');
        Route::get('job_history/{id}', 'Employee_detailsController@job_history');
        Route::post('holiday_calendar', 'HolidayController@Holiday_calendar');
        Route::get('checked_mandatory_document/{id}', 'Mandatory_documentsController@checked_mandatory_document');
        Route::get('add_mandatory_document_to_user/{id}', 'Mandatory_documentsController@add_mandatory_document_to_user');
        Route::get('checked_mandatory_document_list/{id}', 'Mandatory_documentsController@checked_mandatory_document_list');
        Route::get('read_mandatory_document/{id}', 'Mandatory_documentsController@read_mandatory_document');
        

        Route::get('newapplicationcount', 'Application_formsController@newapplicationcount');
        Route::post('request_certification', 'Application_formsController@request_certification');
        Route::post('request_other_certification', 'Application_formsController@request_other_certification');
        Route::get('roledropdown', 'RoleController@roledropdown');  
        Route::get('job_positions/list', 'Job_positionsController@list');
        Route::get('sendOfferLetter', 'Application_formsController@sendOfferLetter');
        Route::get('getofferletter/{id}', 'Application_formsController@getofferletter');
        Route::post('resendOfferLetter', 'Application_formsController@resendOfferLetter');
        Route::post('approvedOfferLetter', 'Application_formsController@approvedOfferLetter');
        Route::post('application_status', 'Application_formsController@application_status');
        Route::get('application_status_list/{id}', 'Application_formsController@application_status_list');
        
        Route::get('engineer_list', 'Check_listController@engineer_list');
        
        
        Route::get('usersbyrole/{id}', 'UserController@usersbyrole');
        
        //telephone questions
        
        Route::get('telephone_questions',function(){
            $arraylist = App\Models\Telephone_pre_questions::where('is_active',1)->get();
            $response = ['success'=>true, 'data'=>$arraylist];
            return response()->json($response, 201);
        });
         Route::get('checklist',function(){
            $list = App\Models\Tool_categories::select('id','name',DB::raw('created_by as is_received'),DB::raw('created_by as serial_number'))->where('is_delete',0)->get();
            $response = ['success'=>true, 'data'=>$list];
                            return response()->json($response, 201);
         });
        //parmission list          
        
        Route::post('parmission/list', function(){
                            $parmission = App\Models\Permissions::select('id','name','page_name','method_name')->where('status',1)->get();
                            $list=array();
                            foreach($parmission as $vl){
                              $arr =  explode('.',$vl->name); 
                              if(count($arr)>1){
                                
                                    
                                    $list[$arr[0]][] =$vl;

                              }else{
                                
                              }
                            }
                            $arraylist=array();
                            foreach($list as $ky => $vl){
                                $row=[];
                                $row[$ky]= $vl;
                                array_push($arraylist,$row);
                            }
                           
                            $response = ['success'=>true, 'data'=>$arraylist];
                            return response()->json($response, 201);
                        })->name('permission');
               
   /** dashboard route */
   
  
                    });
  

    Route::get('users/logout', 'Auth\UserController@logout');
    
});

Route::group(['middleware' => 'api-header'], function () {
  
    // The registration and login requests doesn't come with tokens 
    // as users at that point have not been authenticated yet
    // Therefore the jwtMiddleware will be exclusive of them
    Route::post('submitapplication', 'Admin\Application_formsController@applicant');
    Route::post('submitofferletter', 'Admin\Application_formsController@submitofferletter');
    
    Route::post('submitdocument', 'Admin\Application_formsController@submitdocument');
    Route::post('user/login', 'Admin\UserController@login');
    //Route::post('user/register', 'Auth\UserController@register');
    Route::get('getjobtitle/{id}',function($id){
        $arraylist = App\Models\Job_positions::find($id);
        $response = ['success'=>true, 'data'=>$arraylist];
        return response()->json($response, 201);
    });
    Route::get('applicant_send_offer_letter/{id}', function ($id) {
           $count = App\Models\Offerletters::where('id',$id)->where('confirm_employee_date','!=','')->count();
          $response = ['success'=>true, 'data'=>$count];
           return response()->json($response, 201);
    });
});