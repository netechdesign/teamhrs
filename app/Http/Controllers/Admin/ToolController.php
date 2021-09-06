<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Tool_categories;

class ToolController extends Controller
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
            $totalCol = $request->input('iColumns');
               
                
                $columns = explode(',', $request->input('columns'));
                $start = $request->input('iDisplayStart');
                $page_length = $request->input('iDisplayLength');
                
                $request['page'] = ($start/$page_length)+1;
                $jobsrow = Tool_categories::select("*")->where(function($query) use ($request){
                    $search = $request->input('sSearch');
                    $query->where('is_delete','=',0);
                  if($request->input('sheets_id')!=''){
                  //  $query->where('is_delete','=',$request->input('sheets_id'));
                   }
                   if($search!=''){
                       
                    $query->Where('name', 'LIKE', "%{$search}%");
                    
                    
                    
                   } 
                   
                });
                $jobs =$jobsrow->orderBy('id', 'DESC')->paginate($page_length)->toArray();

                
                $response = array(
                "aaData" => $jobs['data'],
                "iTotalDisplayRecords" => $jobs['total'],
                "iTotalRecords" => $jobs['total'],
                "sColumns" => $request->input('sColumns'),
                "sEcho" => $request->input('sEcho'),
                "cuttentPage"=>$request['page']
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
                    'name' => 'required|unique:tool_categories',
                    ]);
                    
     
                $Roles =new Tool_categories();
                $Roles->name = $request->name;
                
               
    
                if($Roles->save()){
                    return response()->json(array('success' => true,
                    'message' => 'tool_categories inserted successfully'
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
       $row = Tool_categories::find($id);
       if($row){
         
         
        
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
        
            
 
            $Roles = Tool_categories::find($id);
            $Roles->name = $request->name;
            
           

            if($Roles->save()){
                return response()->json(array('success' => true,
                'message' => 'Tool_categories updated successfully'
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
        try {
           $deleted= Tool_categories::find($id);  
           $deleted->is_delete = 1;
           if($deleted->save()){
              return response()->json(array('success' => true,'message'=> 'deleted'));
           }
            
            
        }
        catch (exception $e) {
            return response()->json([
                'response' => 'error',
                'message' => $e,
            ]);
        }
    }
}
