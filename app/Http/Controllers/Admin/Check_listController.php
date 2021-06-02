<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use DB;
use App\Models\Check_lists;
use App\Models\Check_list_items;
use Illuminate\Support\Facades\Storage;

class Check_listController extends Controller
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
                $jobsrow = Check_lists::select("*",DB::raw('DATE_FORMAT(issued_date,"%d/%m/%Y") as issued_date'))->where(function($query) use ($request){
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
        
        try {
            
            $user = JWTAuth::toUser($request->input('token'));
            $request->request->add(['created_by'=> $user->id]);
            
            if(isset($request->issued_date) && $request->issued_date!='')
                {
                  $request['issued_date'] =date('Y-m-d', strtotime(str_replace('/', '-',$request->issued_date)));
                }

            if(isset($request->signature) && $request->signature!='')
                {
                    $confirm_employee_signature = $request->signature;
                    $encoded_image = explode(",", $confirm_employee_signature)[1];
                    $decoded_image = base64_decode($encoded_image);                  
                    $confirm_employee_signature = 'signatures/'.$user->id.'_confirm_'.time().'.png';
                    Storage::disk('public')->put($confirm_employee_signature, $decoded_image);
                    $request['signature'] = $confirm_employee_signature;
                }
                    $data= $request->except('token','next');
            
                    $Check_lists = new Check_lists($data);
                    $Check_lists->save();
                    $form_id = $Check_lists->id;
                    $employment_history= $request->only('tools_list');
                    foreach($employment_history['tools_list'] as $vl){ 
                        
                            $vl['created_by'] = $user->id;
                            $vl['check_lists_id']  = $form_id;
                            $vl['tool_categories_id']= $vl['id'];
                            $vl['tool_categories_name'] = $vl['name'];
        //                    use App\Models\Employment_references;

                            $Check_list_items = new Check_list_items($vl);
                            $Check_list_items->save();
                            
                    }
                    return response()->json(array('success' => true,'message' => 'Data inserted successfully','form_id' => $form_id), 200);        
        } 
        catch (\Exception $e) 
           {
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
        try { 
            $results = Check_lists::select("*",DB::raw('DATE_FORMAT(issued_date,"%d/%m/%Y") as issued_date'))->find($id);
            
            $results['check_list_items'] = Check_list_items::where('check_lists_id',$id)->get();
            
            
            return response()->json(array('success' => true,'application_data'=> $results));
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
