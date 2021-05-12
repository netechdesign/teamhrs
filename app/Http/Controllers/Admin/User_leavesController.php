<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\User_leaves;
use JWTAuth;
class User_leavesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        
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
                $jobsrow = User_leaves::select("*")->where(function($query) use ($request){
                    $search = $request->input('sSearch');
                  if($request->input('user_id')!=''){
                    $query->where('user_id','=',$request->input('user_id'));
                   }
                   if($search!=''){
                                    $query->Where('allotted_year', 'LIKE', "%{$search}%");
                                    $query->orWhere('leave_balance', 'LIKE', "%{$search}%");
                                    $query->orWhere('used_leave', 'LIKE', "%{$search}%");
                                    $query->orWhere('allotted_leave_limit', 'LIKE', "%{$search}%");
                                  } 
                   
                });
                $jobs =$jobsrow->orderBy('allotted_year', 'DESC')->paginate($page_length)->toArray();

                
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
        try{
            $v = Validator::make($request->all(), [
                'allotted_year' => ['required']
            ]);
        
            if ($v->fails()) {return response()->json($v->errors(), 201);}
            $user = JWTAuth::toUser($request->input('token'));
            $request->request->add(['created_by'=> $user->id]);
           
                       
            $data= $request->except('token','next');
            $userAdded= User_leaves::where('allotted_year',$request->allotted_year)->where('user_id',$request->user_id)->count();
            if($userAdded==0){
            $User_leaves = new User_leaves($data);
            $User_leaves->save();
            $form_id = $User_leaves->id;
            return response()->json(array('success' => true,'message' => 'Data inserted successfully','form_id' => $form_id), 200);
            }else{
                return response()->json(array('success' => false,'message'=> $request->allotted_year.' year already added')); 
            }
        }
        catch (\Exception $e) 
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
            //$id = user_id;
            try {
                
                $User_leaves = User_leaves::where('id',$id)->first();
                
                if($User_leaves){
                    $User_leaves->_method = 'PUT';
                    return response()->json(array('success' => true,'User_leaves'=> $User_leaves));
                }else{
                    return response()->json(array('success' => false,'message'=> 'Data not found')); 
                }
                
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
            
            
 
            $User_leaves = User_leaves::find($id);
            
            $User_leaves->allotted_year = $request->allotted_year;
            $User_leaves->leave_balance = $request->leave_balance;
            $User_leaves->used_leave = $request->used_leave;
            $User_leaves->allotted_leave_limit = $request->allotted_leave_limit;
            $User_leaves->updated_by = $request->updated_by;
            
            if($User_leaves->save()){
              
                return response()->json(array('success' => true,'updated'=>true,
                'message' => 'Leave updated successfully'
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
