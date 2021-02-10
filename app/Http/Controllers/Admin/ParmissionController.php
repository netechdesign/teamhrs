<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Permissions;

class ParmissionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $app = app();
        $routes = $app->routes->getRoutes();

       
        foreach ($routes as $route ){
           
            $pos = explode ('\\',$route->action['namespace']);
            $namespace = end($pos);
                if($namespace=='Admin'){
                               
                      // $route->uri
                    $apiUrl=  $route->getPrefix();
                    $name =  $route->getName();
                 
                  if(!$name){
                    continue;
                    }
                    
                    
                    if($apiUrl!='api'){continue;}
                    
                    $method_name = $route->getActionMethod();
                    $page_name =$method_name;
                    $status = 0;

                    if($method_name=='index'){
                        continue;
                    }
                    
                    switch($method_name){
                         case 'create':
                            $page_name ='add';
                            $status = 1;
                         break;
                         case 'index':
                            $page_name ='list';
                            $status = 1;
                         break;   
                            case 'show':
                                $status = 1;
                             break;
                             case 'edit':
                                $status = 1;
                             break;
                             case 'destroy':
                                $page_name ='delete';
                                $status = 1;
                             break;
                            
                         break;
 
                    }
                    
                    if (!Permissions::where('name', $name)->first())
                    {
                          
                        $data = [
                            'name'=>$name,
                            'method_name'=> $method_name,
                            'page_name'=>$page_name,
                            'status' => $status,
                            ];
                           
                        $parmissions = new Permissions($data);
                        $parmissions->save();
                    }                
                     //$route->getAction()
                    
                        
                }
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
