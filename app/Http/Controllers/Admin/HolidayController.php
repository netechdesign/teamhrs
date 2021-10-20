<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use DB;
use App\Models\Holidays;
use App\Models\Holidays_dates;
use Illuminate\Support\Facades\Storage;
use App\User;
use Mail;
use App\Models\User_leaves;
use App\Models\Application_Forms;
class HolidayController extends Controller
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
                $jobsrow = Holidays::select("id","time_off","notes",DB::raw('(select CONCAT(name," ",lastName) as name from users where id=holidays.user_id) as user_name'),DB::raw('DATE_FORMAT(from_date,"%d/%m/%Y") as from_date'),DB::raw('DATE_FORMAT(to_date,"%d/%m/%Y") as to_date'),"is_approved",'is_withdraw',DB::raw('timestampdiff(day,from_date,concat(year(now()),"-",month(now()),"-",day(now()))) as total_days'))->where(function($query) use ($request){
                    $search = $request->input('sSearch');
                  if($request->input('user_id')){
                    $query->where('user_id','=',$request->input('user_id'));
                   }
                   if($request->input('is_approved')){
                    $query->where('is_approved','=',$request->input('is_approved'));
                   }
                   
                   if($request->input('selectedYear')){
             
                    if(isset($request->selectedYear) && $request->selectedYear != date('Y'))
                    {
                        $finasial_year = explode("_",$request->selectedYear);
                        $calculate_fiscal_year_for_date['start_date'] = $finasial_year[0].'-04-01';
                        $calculate_fiscal_year_for_date['end_date'] = $finasial_year[1].'-03-31';
                        
                        
                    }else{
                        $calculate_fiscal_year_for_date['start_date'] = date('Y').'-04-01';
                        $nextY = date('Y')+1;
                        $calculate_fiscal_year_for_date['end_date'] = $nextY.'-03-31';
                        
                    }
                    $query->where('from_date','>=',$calculate_fiscal_year_for_date['start_date'])->where('from_date','<=',$calculate_fiscal_year_for_date['end_date']);
                   }
             
                   if($search!=''){
                       
                    $query->Where('time_off', 'LIKE', "%{$search}%");
                    $query->orWhere('notes', 'LIKE', "%{$search}%");
                    $query->orWhere('from_date', 'LIKE', "%{$search}%");
                    $query->orWhere('to_date', 'LIKE', "%{$search}%");
                    $query->orWhere('is_approved', 'LIKE', "%{$search}%");
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
    public function create(Request $request)
    {
        
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
        try {
             
            $user = JWTAuth::toUser($request->input('token'));
            
            if($request->user_id){
                //$request->request->add(['user_id'=> $request->user_id]);
                $request->request->add(['created_by'=> $request->user_id]);
                $request->request->add(['user_id'=> $request->user_id]);
                $user_data = User::find($request->user_id);
                $request->request->add(['fullname'=> $user_data->name.' '.$user_data->lastName]);
            }else{
                $request->request->add(['created_by'=> $user->id]);
                $request->request->add(['user_id'=> $user->id]);
                $request->request->add(['fullname'=> $user->name.' '.$user->lastName]);
            }
            if($request->from_date){
                
                $request->request->add(['from_date'=> date('Y-m-d', strtotime(str_replace('/', '-',$request->from_date_text)))]);
                  
            }
            if($request->to_date){
                $request->request->add(['to_date'=> date('Y-m-d', strtotime(str_replace('/', '-',$request->to_date_text)))]);
            }
            
            $data= $request->except('token','next');
            $Holidays = new Holidays($data);
            $Holidays->save();
            $form_id = $Holidays->id;
            $request->request->add(['form_id'=> $form_id]);
            
            if($request->dates){
                
                foreach($request->dates as $k =>$vl)
                {
                    $vl['holiday_date'] = date('Y-m-d', strtotime(str_replace('/', '-',$vl['dates'])));  
                    
                    $vl['holidays_id'] = $form_id;
                    $vl['user_id'] =$request->user_id;
                    if($request->from_date == $vl['holiday_date']){
                        $vl['day_time'] = $request->day_off_start;
                    }
                    elseif($request->to_date == $vl['holiday_date']){
                        $vl['day_time'] = $request->day_off_end;
                    }
                    else{
                        $vl['day_time'] = $vl['times'];
                    }
                    
                    $Holidays = new Holidays_dates($vl);
                    $Holidays->save(); 
                    
                }
            }
            
            
            Mail::send(['html'=>'holidayrequest'], ['data'=>$request], function($message) use ($request)
            {
                //$message->to('admin@teamhrs.co.uk')->subject('New application submitted');
                //,'hr@bespokemeteringsolutions.co.uk','recruitment@bespokemeteringsolutions.co.uk'
                $message->to(['sandeep@itsupportpeople.co.uk','prakash@itsupportpeople.co.uk','hr@bespokemeteringsolutions.co.uk'])->subject('Holiday Request');
                

             });          
                
            return response()->json(array('success' => true,'message' => 'Data inserted successfully','form_id' => $form_id), 200);
                  
           }catch (\Exception $e) 
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
        //
            //$id = user_id;
            try {
                
                $Holidays = Holidays::select("*",DB::raw('DATE_FORMAT(from_date,"%d/%m/%Y") as from_date'),DB::raw('DATE_FORMAT(to_date,"%d/%m/%Y") as to_date'))->where('id',$id)->first();
                
                if($Holidays){
                    $Holidays->_method = 'PUT';
                    $Holidays_dates = Holidays_dates::where('holidays_id',$id)->get();
                    
                    foreach($Holidays_dates as $vl){
                         $vl->dates = date('d/m/Y', strtotime($vl->holiday_date));  
                         $vl->times = $vl->day_time;
                    }
                    
                    return response()->json(array('success' => true,'Holidays'=> $Holidays,'Holidays_dates'=>$Holidays_dates));
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
            $data= $request->except('token','next');
            $Holidays = Holidays::find($id);
            if($request->from_date_text){
                $Holidays->from_date= date('Y-m-d', strtotime(str_replace('/', '-',$request->from_date_text)));
            }
            if($request->to_date_text){
                $Holidays->to_date= date('Y-m-d', strtotime(str_replace('/', '-',$request->to_date_text)));
            }
            $Holidays->time_off = $request->time_off;
            $Holidays->notes = $request->notes;
            $Holidays->day_off_start = $request->day_off_start;
            $Holidays->day_off_end = $request->day_off_end;
            $Holidays->is_approved = $request->is_approved;
            $Holidays->no_approved_notes = $request->no_approved_notes;
            
            $allotted_year	= date('Y',strtotime($Holidays->from_date));
            
            
            if($Holidays->save()){
              
                if($request->dates){

                    if($request->dateChangedCheck==0){
                    foreach($request->dates as $k =>$vl)
                    {
                        
                        $holiday_date = Holidays_dates::find($vl['id']);
                        
                       if($holiday_date){
                        
                        if($vl['is_approved']=='no'){
                            $holiday_date->is_approved = $vl['is_approved'];
                            $holiday_date->notes = $vl['notes'];
                            $holiday_date->approved_by=$user->id;
                            
                        }else{
                            
                            
                            $holiday_date->holiday_date = date('Y-m-d', strtotime(str_replace('/', '-',$vl['dates'])));  
                            $holiday_date->day_time = $vl['times'];
                             $holiday_date->is_approved = $vl['is_approved'];
                            $holiday_date->approved_by=$user->id;
                        }
                            
                       }else{
                       $vl['holiday_date'] = date('Y-m-d', strtotime(str_replace('/', '-',$vl['dates'])));  
                        
                        $vl['holidays_id'] = $id;
                        $vl['user_id'] =$request->user_id;
                        if($request->from_date == $vl['holiday_date']){
                            $vl['day_time'] = $request->day_off_start;
                        }
                        elseif($request->to_date == $vl['holiday_date']){
                            $vl['day_time'] = $request->day_off_end;
                        }
                        else{
                            $vl['day_time'] = $vl['times'];
                        }
                        $vl['is_approved'] = $vl['is_approved'];
                        if($vl['is_approved']=='no'){
                            $vl['notes'] = $vl['notes'];
                            $vl['approved_by']=$user->id;
                        }else{
                            $vl['approved_by']=$user->id;
                            
                        }
                        $holiday_date = new Holidays_dates($vl);
                       }
                        $holiday_date->save(); 
                        
                    }
                }else{
                    
                   $Holidays_dates = Holidays_dates::where('holidays_id',$id)->delete();
    if($Holidays_dates){
                    foreach($request->dates as $k =>$vl)
                    {
                        $vl['holiday_date'] = date('Y-m-d', strtotime(str_replace('/', '-',$vl['dates'])));  
                        $vl['holidays_id'] = $id;
                        $vl['user_id'] =$request->user_id;
                        $vl['day_time'] = $vl['times'];
                        
                        if(isset($vl['is_approved'])){
                            $vl['is_approved'] = $vl['is_approved'];
                            if($vl['is_approved']=='no'){
                                $vl['notes'] = $vl['notes'];
                                $vl['approved_by']=$user->id;
                            }else{
                                $vl['approved_by']=$user->id;
                             
                            }
                        }    
                        $holiday_date = new Holidays_dates($vl);
                       }
                        $holiday_date->save(); 
                        
                    }
                }
                }
    
                return response()->json(array('success' => true,'updated'=>true,
                'message' => 'Holidays updated successfully'
                ), 200);
            }
            else{
                return response()->json(array('success' => false,'message'=> 'not update')); 
            }
            
        }catch(\Exception $e)
        {
            $message = $e->getMessage();
                
            $text = strstr($message, ':', true);
        
            return response()->json(array('success' => false,'message'=> $message));
        }
    }

    /* using User_leaves for year  */
    public function update_(Request $request, $id)
    {
        //
        try{
            

            $user = JWTAuth::toUser($request->input('token'));
            $data= $request->except('token','next');
            $Holidays = Holidays::find($id);
            if($request->from_date_text){
                $Holidays->from_date= date('Y-m-d', strtotime(str_replace('/', '-',$request->from_date_text)));
            }
            if($request->to_date_text){
                $Holidays->to_date= date('Y-m-d', strtotime(str_replace('/', '-',$request->to_date_text)));
            }
            $Holidays->time_off = $request->time_off;
            $Holidays->notes = $request->notes;
            $Holidays->day_off_start = $request->day_off_start;
            $Holidays->day_off_end = $request->day_off_end;
            $Holidays->is_approved = $request->is_approved;
            $Holidays->no_approved_notes = $request->no_approved_notes;
            $allotted_year	= date('Y',strtotime($Holidays->from_date));
            $used_live =User_leaves::where('allotted_year',$allotted_year)->where('allotted_leave_limit','!=',0)->first();
            if(!$used_live){

               return response()->json(array('success' => false,'message'=> 'allotted leave limit not available'));
            }
            
            if($Holidays->save()){
              
                if($request->dates){

                    if($request->dateChangedCheck==0){
                    foreach($request->dates as $k =>$vl)
                    {
                        
                        $holiday_date = Holidays_dates::find($vl['id']);
                        
                       if($holiday_date){
                        
                        if($vl['is_approved']=='no'){
                            $holiday_date->notes = $vl['notes'];
                            $holiday_date->approved_by=$user->id;
                            $used_live =User_leaves::where('allotted_year',$allotted_year)->where('start_date','<=',$vl['holiday_date'])->where('end_date','>=',$vl['holiday_date'])->first();
                            if($used_live){
                              if($holiday_date->is_approved=='yes'){  
                                    $used_live->used_leave = $used_live->used_leave -1;
                                    $used_live->allotted_leave_limit = $used_live->allotted_leave_limit+1;
                                    $used_live->save();
                              }
                            }
                            
                        }else{
                            
                            $used_live =User_leaves::where('allotted_year',$allotted_year)->where('start_date','<=',$vl['holiday_date'])->where('end_date','>=',$vl['holiday_date'])->first();
                            if($used_live){
                                
                              if($holiday_date->is_approved!='yes'){  
                                $holiday_date->notes = '';
                                    $used_live->used_leave = $used_live->used_leave +1;
                                    $used_live->allotted_leave_limit = $used_live->allotted_leave_limit-1;
                                    $used_live->save();
                              }
                            }
                            $holiday_date->holiday_date = date('Y-m-d', strtotime(str_replace('/', '-',$vl['dates'])));  
                        $holiday_date->day_time = $vl['times'];
                        $holiday_date->is_approved = $vl['is_approved'];
                            $holiday_date->approved_by=$user->id;
                        }
                            
                       }else{
                       $vl['holiday_date'] = date('Y-m-d', strtotime(str_replace('/', '-',$vl['dates'])));  
                        
                        $vl['holidays_id'] = $id;
                        $vl['user_id'] =$request->user_id;
                        if($request->from_date == $vl['holiday_date']){
                            $vl['day_time'] = $request->day_off_start;
                        }
                        elseif($request->to_date == $vl['holiday_date']){
                            $vl['day_time'] = $request->day_off_end;
                        }
                        else{
                            $vl['day_time'] = $vl['times'];
                        }
                        $vl['is_approved'] = $vl['is_approved'];
                        if($vl['is_approved']=='no'){
                            $vl['notes'] = $vl['notes'];
                            $vl['approved_by']=$user->id;
                        }else{
                            $vl['approved_by']=$user->id;
                            $used_live =User_leaves::where('allotted_year',$allotted_year)->where('start_date','<=',$vl['holiday_date'])->where('end_date','>=',$vl['holiday_date'])->first();
                            if($used_live){
                              
                                    $used_live->used_leave = $used_live->used_leave +1;
                                    $used_live->allotted_leave_limit = $used_live->allotted_leave_limit-1;
                                    $used_live->save();
                              
                            }
                        }
                        $holiday_date = new Holidays_dates($vl);
                       }
                        $holiday_date->save(); 
                        
                    }
                }else{
                    
                   $Holidays_dates = Holidays_dates::where('holidays_id',$id)->delete();
    if($Holidays_dates){
                    foreach($request->dates as $k =>$vl)
                    {
                        $vl['holiday_date'] = date('Y-m-d', strtotime(str_replace('/', '-',$vl['dates'])));  
                        $vl['holidays_id'] = $id;
                        $vl['user_id'] =$request->user_id;
                        $vl['day_time'] = $vl['times'];
                        
                        if(isset($vl['is_approved'])){
                            $vl['is_approved'] = $vl['is_approved'];
                            if($vl['is_approved']=='no'){
                                $vl['notes'] = $vl['notes'];
                                $vl['approved_by']=$user->id;
                            }else{
                                $vl['approved_by']=$user->id;
                                $used_live =User_leaves::where('allotted_year',$allotted_year)->where('start_date','<=',$vl['holiday_date'])->where('end_date','>=',$vl['holiday_date'])->first();
                            if($used_live){
                              
                                    $used_live->used_leave = $used_live->used_leave +1;
                                    $used_live->allotted_leave_limit = $used_live->allotted_leave_limit-1;
                                    $used_live->save();
                              
                            }
                            }
                        }    
                        $holiday_date = new Holidays_dates($vl);
                       }
                        $holiday_date->save(); 
                        
                    }
                }
                }
    
                return response()->json(array('success' => true,'updated'=>true,
                'message' => 'Holidays updated successfully'
                ), 200);
            }
            else{
                return response()->json(array('success' => false,'message'=> 'not update')); 
            }
            
        }catch(\Exception $e)
        {
            $message = $e->getMessage();
                
            $text = strstr($message, ':', true);
        
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
        try {
            $row = Holidays::find($id)->delete();  
           
 
            if($row){
                Holidays_dates::where('holidays_id', $id)->delete();
 
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
    public function Holiday_calendar(Request $request)
    {
        
        //
        
            try {
                
                $totalCol = $request->input('iColumns');
               
                
                $columns = explode(',', $request->input('columns'));
                $start = $request->input('iDisplayStart');
                $page_length = $request->input('iDisplayLength');
                
                
                $jobsrow = Holidays::select("id","notes",DB::raw('(select CONCAT(name," ",lastName) as name from users where id=holidays.user_id) as user_name'),DB::raw('from_date as start'),DB::raw('to_date as end'),DB::raw('notes as title'))->where(function($query) use ($request){
                    $search = $request->input('sSearch');
                  if($request->input('user_id')){
                    $query->where('user_id','=',$request->input('user_id'));
                   }
                   
                });
                $jobs =$jobsrow->orderBy('id', 'DESC')->get();
                foreach($jobs as $vl){

                    if($vl->end){
                        $vl->end= date("Y-m-d", strtotime($vl->end."+1 day"));
                    }
                    $vl->borderColor= '#f44236';
                    $vl->approved_by = Holidays_dates::where('holidays_id', $vl->id)->where('approved_by','!=' ,'null')->count();
                    if($vl->approved_by>0){
                        $vl->backgroundColor= '#15c37b';
                        $vl->borderColor= '#15c37b';
                    }else{
                        $vl->backgroundColor= '#f44236';
                    }
                    
                    $vl->textColor= '#fff';
            }
            
                $response = array(
                'success' => true,
                "result" => $jobs,
                
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

    public function outstanding_entitlement(Request $request)
    {
            $entitlement=23;
            $curr_date_month = date('m');
            $calculate_fiscal_year_for_date = $this->calculateFiscalYearForDate($curr_date_month);
            $application_Forms = Application_Forms::select('offerletters.confirm_Date')->join('offerletters','application_forms.offer_letter_approved_id','=','offerletters.id')->where('is_approved',1)->where('user_id',$request->user_id)->first();
             if($application_Forms){
                  $confirm_Date= date('Y-m-d', strtotime(str_replace('/', '-',$application_Forms->confirm_Date)));
             
           
            $full_holiday_year=365;
            $day_in_period =365;  
            
            if(isset($request->selected_year) && $request->selected_year != date('Y'))
            {
                $finasial_year = explode("_",$request->selected_year);
                $calculate_fiscal_year_for_date['start_date'] = $finasial_year[0].'-04-01';
                $calculate_fiscal_year_for_date['end_date'] = $finasial_year[1].'-03-31';
                
                
            }
                if($confirm_Date >=$calculate_fiscal_year_for_date['start_date'] && $confirm_Date <=$calculate_fiscal_year_for_date['end_date'])
                {
                    $date1 = $confirm_Date;
                    $date2 = $calculate_fiscal_year_for_date['end_date'];
                    $diff = abs(strtotime($date2) - strtotime($date1));
                    $years = floor($diff / (365*60*60*24));
                    $months = floor(($diff - $years * 365*60*60*24) / (30*60*60*24));
                    $day_in_period = round(($diff)/ (60*60*24));
                
                }
        $total_hours=40;
        $working_hours=40;
        $hours_per = $working_hours/$total_hours;
                
        /* get week holidays */        
            $week_in_period = $day_in_period/7;
            $entitlement_week = $entitlement/($full_holiday_year/7);
            $entitlement_week_period = $week_in_period * $entitlement_week*$hours_per;
            $entitlement_week_period = ceil($entitlement_week_period);
        /* get days holidays */
            $entitlement_day = $entitlement/$full_holiday_year;
            $entitlement_day_period = $day_in_period * $entitlement_day*$hours_per;
            $entitlement_day_period = ceil($entitlement_day_period);
            $part_time_percentage = ($hours_per*100).'%'; 

            $result = new \stdClass; 
            
            $result->working_days= $day_in_period;
            $result->entitlement_day_period= $entitlement_day_period;
            $result->entitlement_week_period= $entitlement_week_period;
            $result->part_time_percentage= $part_time_percentage;
        /*Outstanding Entitlement */
        
        $days_taken = Holidays_dates::where('user_id',$request->user_id)->where('holiday_date','>=',$calculate_fiscal_year_for_date['start_date'])->where('holiday_date','<=',$calculate_fiscal_year_for_date['end_date'])->where('is_withdraw','!=',2)->count();
        $result->days_taken = $days_taken;
        $result->outstanding_entitlement= $entitlement_day_period - $days_taken;

            $response = array('success' => true,"result" => $result);
            return response()->json($response, 201);
            }  
                
    }
    function calculateFiscalYearForDate($month)
    {
     $FiscalYear=[];   
    if($month > 4)
    {
    $y = date('Y');
    $pt = date('Y', strtotime('+1 year'));
    
    $FiscalYear['start_date']= $y."-04-01";
    $FiscalYear['end_date']= $pt."-03-31";
    }
    else
    {
    $y = date('Y', strtotime('-1 year'));
    $pt = date('Y');
    $FiscalYear['start_date']= $y."-04-01";
    $FiscalYear['end_date']= $pt."-03-31";
    }
    return $FiscalYear;
    }

    
    public function Holiday_withdraw_request(Request $request, $id)
    {
        //
        try{
            

            $user = JWTAuth::toUser($request->input('token'));
            $data= $request->except('token','next');
            $Holidays = Holidays::find($id);
            
            if(isset($request->is_withdraw)){
                $Holidays->is_withdraw = $request->is_withdraw;
            }
            
            
            
            
            if($Holidays->save()){
                                 
                
                 
                 if(isset($request->is_withdraw)){
                    Holidays_dates::where('holidays_id',$id)->update(['is_withdraw' => $request->is_withdraw]);
                 }  
                
                 
                
                 
                
    
                return response()->json(array('success' => true,'updated'=>true,
                'message' => 'Holidays updated successfully'
                ), 200);
            }
            else{
                return response()->json(array('success' => false,'message'=> 'not update')); 
            }
            
        }catch(\Exception $e)
        {
            $message = $e->getMessage();
                
            $text = strstr($message, ':', true);
        
            return response()->json(array('success' => false,'message'=> $message));
        }
    }


}
