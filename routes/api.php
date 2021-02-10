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
        
        Route::get('newapplicationcount', 'Application_formsController@newapplicationcount');
        Route::get('roledropdown', 'RoleController@roledropdown');
        
        //telephone questions
        
        Route::get('telephone_questions',function(){
            $arraylist = App\Models\Telephone_pre_questions::where('is_active',1)->get();
            $response = ['success'=>true, 'data'=>$arraylist];
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
    Route::post('user/login', 'Admin\UserController@login');
    //Route::post('user/register', 'Auth\UserController@register');
});