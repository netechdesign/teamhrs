<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use DB;
use App\Models\Check_lists;
use App\Models\Mandatory_documents;
use App\Models\Checked_mandatory_documents;
use Illuminate\Support\Facades\Storage;
use App\User;
use Mail;

class Mandatory_documentsController extends Controller
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
                $jobsrow = Mandatory_documents::select("*",DB::raw('DATE_FORMAT(created_at,"%d/%m/%Y") as createdat'))->where(function($query) use ($request){
                    $search = $request->input('sSearch');
                  if($request->input('sheets_id')!=''){
                  //  $query->where('sheets_id','=',$request->input('sheets_id'));
                   }
                   if($search!=''){
                       
                    $query->Where('issued_engineer_name', 'LIKE', "%{$search}%");
                    
                    
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
            $roles = array();
            if($request->selected_role){
            $selected_role =json_decode($request->selected_role);
            
                foreach($selected_role as $vl){
                    array_push($roles,$vl->value);                  
                }
            
             }
            
                if(isset($request->othersfile))
                {
                    if($request->hasfile('othersfile'))
                    {
                        foreach($request->file('othersfile') as $i => $file)
                        {
                            $cma_1 = $file->store('documents/mandatory_documents', 'public');
                                $vl = array();
                                $vl['document_name'] = $request->document_name[$i];
                                $vl['document_path'] = $cma_1;
                                $vl['role_can_read'] = json_encode($roles);
                                $Documents = new Mandatory_documents($vl);
                                $Documents->save();
                        }
                    }
                    return response()->json(array('success' => true,'message' => 'Mandatory_documents inserted successfully'), 200);
                }
           }
        catch(\Exception $e){
            $message = $e->getMessage();
                
            $text = strstr($message, ':', true);
        
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
    
    public function add_mandatory_document_to_user(Request $request,$id)
    {
        //
        $Mandatory_documents = Mandatory_documents::get();
        $user = JWTAuth::toUser($request->input('token'));
        //dd($user->roles);
        foreach($Mandatory_documents as $vl){
            $role_can_read =json_decode($vl->role_can_read);
            if (in_array($user->roles, $role_can_read))
            {
                $Checked_mandatory_documents = Checked_mandatory_documents::where('users_id',$id)->where('mandatory_documents_id',$vl->id)->first();
                if(!$Checked_mandatory_documents)
                {
                    $data['users_id'] = $id;
                    $data['mandatory_documents_id'] = $vl->id;
                    $Checked_mandatory_documents = new Checked_mandatory_documents($data);
                    $Checked_mandatory_documents->save();
                }
            }
  
            

        }
        return response()->json(array('success' => true,'message' => 'Mandatory_documents inserted successfully'), 200); 
        
    }
    public function checked_mandatory_document($id)
    {
        $Checked_mandatory_documents = Checked_mandatory_documents::where('users_id',$id)->where('is_read',0)->count();
        
        return response()->json(array('success' => true,'note_read' => $Checked_mandatory_documents), 200); 
        
    }
    
    public function checked_mandatory_document_list($id)
    {
        $Checked_mandatory_documents = Checked_mandatory_documents::select('*','checked_mandatory_documents.id as checked_mandatory_documents_id',DB::raw('DATE_FORMAT(read_at,"%d/%m/%Y %I:%i %p") as read_at'))->join('mandatory_documents', 'mandatory_documents.id', '=', 'checked_mandatory_documents.mandatory_documents_id')->where('users_id',$id)->get();
        
        return response()->json(array('success' => true,'list' => $Checked_mandatory_documents), 200); 
        
    }
    public function read_mandatory_document(Request $request,$id)
    {
        try{
        $Checked_mandatory_documents = Checked_mandatory_documents::find($id);
        $Checked_mandatory_documents->is_read = $request->is_read;
        $Checked_mandatory_documents->read_at = Now();
        if($Checked_mandatory_documents->save()){
            return response()->json(array('success' => true,'message' => 'Mandatory_documents read successfully'), 200); 
        }
    }
        catch(\Exception $e){
            $message = $e->getMessage();
                
            $text = strstr($message, ':', true);
        
            return response()->json(array('success' => false,'message'=> $message));
        } 
    }
    
}

