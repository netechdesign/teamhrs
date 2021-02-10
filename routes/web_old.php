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
Route::get('/', function () {
    return view('welcome');
});
*/

Route::group(array('prefix' => '/'), function() {
  
   Route::namespace('Admin')->group(function () {
      Route::resource('parmission', 'ParmissionController');
});
   Route::get('/', function(){
        return view('app');
     });
     
     Route::get('auth/signin', function(){
      return view('welcome');
   });
     Route::get('/list/utilita/{id}', function(){
      return view('welcome');
   });
   Route::get('/list/morrison/{id}', function(){
      return view('welcome');
   }); 
   Route::get('/dataimport', function(){
      return view('welcome');
   }); 
   
   Route::get('/dailyperformance/{id}', function(){
      return view('welcome');
   });
   Route::get('/list', function(){
      return view('welcome');
   }); 
   

   Route::get('/siteengineer', function(){
      return view('welcome');
   }); 
   
   Route::get('/utilitachart', function(){
      return view('welcome');
   }); 
   
   Route::get('/Engineer', function(){
      return view('welcome');
   });
   Route::get('/report', function(){
      return view('welcome');
   }); 
   Route::get('/report', function(){
      return view('welcome');
   }); 
     
     Route::get('/dashboard', function(){
        return view('welcome');
     }); 
     
     Route::get('/role', function(){
      return view('welcome');
   });
   Route::get('/role/add', function(){
      return view('welcome');
   });
   
   Route::get('/role/edit/{id}', function(){
      return view('welcome');
   });

   Route::get('/user', function(){
      return view('welcome');
   });
   Route::get('/user/add', function(){
      return view('welcome');
   });
   
   Route::get('/user/edit/{id}', function(){
      return view('welcome');
   });
   
   Route::get('/settarget', function(){
      return view('welcome');
   });
   
   Route::get('/vehicle', function(){
      return view('welcome');
   });
     Route::get('/export', 'Admin\MdsController@export');

    
    
    });

