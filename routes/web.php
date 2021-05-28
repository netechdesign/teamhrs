<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*
Route::get('/git', function () {
    return view('welcome');
});
*/


 Route::group(array('prefix' => '/'), function() {
    Route::namespace('Admin')->group(function () {
        Route::get('permission/add', 'ParmissionController@index');
        Route::get('offer-letter', 'Application_formsController@offer_letter');
 });
  
 
    Route::view('/{path?}', 'app');
    Route::view('/{path?}/{segment1?}/{segmen2?}', 'app');
    
      
    
    
    });

