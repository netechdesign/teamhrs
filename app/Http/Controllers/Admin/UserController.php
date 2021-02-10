<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;
use Mail;
use App\User;
use App\Models\Roles;
use JWTAuth;
use JWTAuthException;
use App\Mail\UserSendMail;
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        
        //dd()
        if(!$request->ajax()){
            view('error_handler', compact('exception'));
          } 
          else{
          
            try {
                
                $totalCol = $request->input('iColumns');
                $search = $request->input('sSearch');
                $columns = explode(',', $request->input('columns'));
                $start = $request->input('iDisplayStart');
                $page_length = $request->input('iDisplayLength');
                
                $jobsrow = User::select("users.id","users.name","users.email","roles.name as role_name")->leftJoin('roles','roles.id','=','users.roles')
                ->where(function($query) use ($request){
                  if($request->input('email')!=''){
                    $query->where('email','=',$request->input('email'));
                    
                   } 
                })->offset($start);
               
                $jobs = $jobsrow->limit($page_length)->get();
                $totalRecords = $jobsrow->count();
                
                
                $response = array(
                "aaData" => $jobs,
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

    private function getToken($email, $password)
    {
        $token = null;
       
        try {
            if (!$token = JWTAuth::attempt( ['email'=>$email, 'password'=>$password])) {
                return response()->json([
                    'response' => 'error',
                    'message' => 'Password or email is invalid',
                    'token'=>$token
                ]);
            }
        } catch (JWTAuthException $e) {
            return response()->json([
                'response' => 'error',
                'message' => 'Token creation failed',
            ]);
        }
        return $token;
        
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
        
            $v = Validator::make($request->all(), [
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            ]);
        
            if ($v->fails())
            {
                
                return response()->json($v->errors(), 201);
            }
        
       
        $parmissions_list=[];
            foreach($request->permission as $Pv){
                foreach($Pv as $Cv){
                    foreach($Cv as $v){
                        
                if(isset($v['Ischeck']) && $v['Ischeck']==true){
                    
                    array_push($parmissions_list, $v['name']);

                }
                    }
                }
            }
          
            $parmissions = json_encode($request->permission);    
            
        $payload = [
            'password'=>\Hash::make($request->password),
            'email'=>$request->email,
            'name'=>$request->name,
            'lastName'=>$request->lastName,
            'roles' => $request->roles,
            'parmissions' =>$parmissions,
            'parmissions_list' =>json_encode($parmissions_list),
            'auth_token'=> 'test',
            ];
           
        $user = new \App\User($payload);
        if ($user->save())
        {
          
            $token = self::getToken($request->email, $request->password); // generate user token
           
            if (!is_string($token))  return response()->json(['success'=>false,'data'=>'Token generation failed'], 201);
            
            $user = \App\User::where('email', $request->email)->get()->first();
            
            $user->auth_token = $token; // update user token
            
            $user->save();
            $userDetail = ['email'=>$request->email,'name'=>$request->name,'lastName'=>$request->lastName,'password'=>$request->password];
           $this->sendEmail(json_encode($userDetail));
            $response = ['success'=>true, 'data'=>['name'=>$user->name,'id'=>$user->id,'email'=>$request->email,'auth_token'=>$token]];        
        }
        else
            $response = ['success'=>false, 'data'=>'Couldnt register user'];
        
        
        return response()->json($response, 201);
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
        $User = User::find($id);
        if($User){
            if($User->roles){
                     $roles = Roles::find($User->roles);
                     if($roles){
                        $User->role_name = $roles->name; 
                     }
            }
         $User->parmissions = json_decode($User->parmissions);
         return response()->json(array('success' => true,
         'data' => $User
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
                'email' =>'required'
                ]);
                
 
            $User = User::find($id);
            $User->name = $request->name;
            $User->lastName = $request->lastName;
            $User->roles = $request->roles;
            $User->email = $request->email;
            $User->parmissions = json_encode($request->permission);
            $parmissions_list=[];
            foreach($request->permission as $Pv){
                foreach($Pv as $Cv){
                    foreach($Cv as $v){
                        
                if(isset($v['Ischeck']) && $v['Ischeck']==true){
                    
                    array_push($parmissions_list, $v['name']);

                }
                    }
                }
            }
            $User->parmissions_list = $parmissions_list;
            
            if($request->password){
               $User->password = \Hash::make($request->password);
            }

            if($User->save()){
              
                return response()->json(array('success' => true,
                'message' => 'User updated successfully'
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
    public function login(Request $request)
    {
        
        $user = \App\User::where('email', $request->email)->get()->first();
        if ($user && \Hash::check($request->password, $user->password)) // The passwords match...
        {
            $token = self::getToken($request->email, $request->password);
            $user->auth_token = $token;
            $user->save();

            $expires_at='';
            if ($request->remember_me)  $expires_at = Carbon::now()->addWeeks(1);
            
            
            $response = ['success'=>true, 'data'=>['id'=>$user->id,'name'=>$user->name, 'email'=>$user->email,'roles'=>$user->roles,'auth_token'=>$user->auth_token,'is_one_time_password'=>$user->is_one_time_password,'parmissions'=>json_decode($user->parmissions),'application_forms_id'=>$user->application_forms_id,'expires_at' => Carbon::parse($expires_at)->toDateTimeString()]];           
        }
        else 
          $response = ['success'=>false, 'data'=>[
            'response' => 'error',
            'message' => 'Password or email is invalid',
            
        ]];
      

        return response()->json($response, 201);
    }
    
    public function logout( Request $request ) {

        $token = $request->header( 'Authorization' );

        try {
            JWTAuth::parseToken()->invalidate( $token );

            return response()->json( [
                'error'   => false,
                'message' => trans( 'auth.logged_out' )
            ] );
        } catch ( TokenExpiredException $exception ) {
            return response()->json( [
                'error'   => true,
                'message' => trans( 'auth.token.expired' )

            ], 401 );
        } catch ( TokenInvalidException $exception ) {
            return response()->json( [
                'error'   => true,
                'message' => trans( 'auth.token.invalid' )
            ], 401 );

        } catch ( JWTException $exception ) {
            return response()->json( [
                'error'   => true,
                'message' => trans( 'auth.token.missing' )
            ], 500 );
        }
    }

    public function changepassword(Request $request)
    {
        //
        try{
        
            $validation = $request->validate([
                'current_password' => 'required',
                'new_password' =>'|required_with:confirm_password|same:confirm_password',
                'confirm_password' =>'required'
                ]);
                
                
            
            $User = User::where('id',$request->user_id)->first();
            if ($User && \Hash::check($request->current_password, $User->password)) // The passwords match...
            {
                    
                    if($request->new_password){
                    $User->password = \Hash::make($request->new_password);
                    $User->is_one_time_password = 1;
                    }

                    if($User->save()){
                    
                        return response()->json(array('success' => true,
                        'message' => 'password has been  changed successfully'
                        ), 200);
                    }
                    else{
                        return response()->json(array('success' => false,'message'=> 'not update')); 
                    }
            }
            else{
                  return response()->json(array('success' => false,'message'=> 'Password not match')); 
            }
            
        }catch (\Exception $e) 
        {
           $message = $e->getMessage();
           
            return response()->json(array('success' => false,'message'=> $message));
        }
    }

    public function sendEmail($userDetail)
    {
        try {
            $userDetail = json_decode($userDetail);
           
            // return view('UserMailHtml')->with('content', $userDetail);
            Mail::to([$userDetail->email])->send(new UserSendMail($userDetail));
        } catch (Exception $ex) {
            dd($ex);
        }
    }
}
