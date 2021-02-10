<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Roles;
use App\Models\Permissions;
class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
     
      if(!$request->ajax()){
        view('error_handler', compact('exception'));
      } 
      else{
      
        try {
            $roles = Roles::all();
            $totalRecords=2;
            $response = array(
            "aaData" => $roles,
            "iTotalDisplayRecords" => $totalRecords,
            "iTotalRecords" => $totalRecords,
            "sColumns" => $request->input('sColumns'),
            "sEcho" => $request->input('sEcho'),
        );
           
            return response()->json($response, 201);
        }
        catch (exception $e) {
            return response()->json([
                'response' => 'error',
                'message' => $e,
            ]);
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
        echo 'create';
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
         try{
        
                $validation = $request->validate([
                    'name' => 'required|unique:roles|max:255',
                    ]);
                    
     
                $Roles =new Roles();
                $Roles->name = $request->name;
                $Roles->parmissions= json_encode($request->permission);
               
    
                if($Roles->save()){
                    return response()->json(array('success' => true,
                    'message' => 'Role inserted successfully'
                    ), 200);
                }
                else{
                    return response()->json(array('success' => false,'message'=> 'not added')); 
                }
                
            }catch (\Exception $e) 
            {
               $message = $e->getMessage();
               
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
       $row = Roles::find($id);
       if($row){
         $Permissionslist =  $this->Permissionslist();
         
        $row->parmissions = json_decode($row->parmissions);
        return response()->json(array('success' => true,
        'data' => $row
        ), 200);
    }
    else{
        return response()->json(array('success' => false,'message'=> 'not found')); 
    }
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
        
            $validation = $request->validate([
                'name' => 'required',
                ]);
                
 
            $Roles = Roles::find($id);
            $Roles->name = $request->name;
            $Roles->parmissions= json_encode($request->permission);
           

            if($Roles->save()){
                return response()->json(array('success' => true,
                'message' => 'Role updated successfully'
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

    public function roledropdown()
    {
        //
        $row = Roles::all();
        if($row){
       
            foreach($row as $vl){
                $vl->value = $vl->id;
                $vl->label = $vl->name;
               $vl->permission = json_decode($vl->parmissions);
             unset($vl->id);
             unset($vl->name);
            }
         return response()->json(array('success' => true,
         'data' => json_decode($row)
         ), 200);
     }
     else{
         return response()->json(array('success' => false,'message'=> 'not found')); 
     }
    }

    public function Permissionslist(Type $var = null)
    {
        $parmission = Permissions::select('id','name','page_name','method_name')->where('status',1)->get();
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
       return $arraylist;
        # code...
    }
}
