
<hr/>
<table>
    <tbody>
    <tr><th>Day: {{$show_day}}</th>
   
    </tr>
    <tr><th>For period ending:{{$on_site_time}}</th>
    </tr>
    </tbody>
</table>
<table>
    <tbody>
    <tr>
      
        <td>
            <table style="border: 1px solid #000000;width:100%" >
                <thead>
                        <tr style="border: 1px solid #000000;">
                        <td style="background-color: #808080;color:white;border: 1px solid #000000;"> Day</td>
                       
                
                        @foreach ($table1['Days_worked'] as $title => $val)
                               <td valign="middle" style="border: 1px solid #000000;text-align: center;background-color: #808080;color:white;" colspan="3"> {{$title}}</td>
                        @endforeach                      
                                              
                        </tr>
                        <tr valign="middle" style="text-align: center;background-color: #808080;color:white;">
                            <td> </td>
                           
                            @foreach ($table1['Days_worked'] as $title => $val)
                            <td style="border: 1px solid #000000;text-align:center;">Actual</td>
                            <td style="border: 1px solid #000000;text-align:center;">Target</td>
                            <td style="border: 1px solid #000000;text-align:center;">Variance</td>
                              @endforeach 
                            

                        </tr>
                </thead>
                <tbody>
                    <tr valign="middle" style="border: 1px solid #000000;" >
                        <td style="border: 1px solid #000000;text-align: left;padding-left: 10px;">Days worked</td>
                            
                            
                           
                                @foreach ($table1['Days_worked'] as $title =>$vl)
                                
                                <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">{{ $vl}}</td>
                                <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">{{ $vl}}</td>
                                <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">0</td>    
                            @endforeach
                           
                            
                    </tr>

<tr>
    <td style="border: 1px solid #000000;text-align: left;padding-left: 10px;">In day installs (jobs)</td>
       
        @foreach ($table1['In_day_installs_jobs'] as $title =>$vl)
            
        <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;" >{{ $vl}}</td>
        <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">{{ $Variance = $table1['Days_worked'][$title]*6}}</td>
        <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">{{$Variance-$vl}}</td>    
        @endforeach

       

       
</tr>


<tr>
    <td style="border: 1px solid #000000;text-align: left;padding-left: 10px;">OOH (jobs)</td>
   
    
  
    @foreach ($table1['OOH_jobs'] as $title =>$vl)
            
    <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">{{ $vl}}</td>
    <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">{{ $Variance = $table1['Days_worked'][$title]*0.5}}</td>
    <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">{{$Variance-$vl}}</td>    
    @endforeach

   
</tr>

<tr>
    <td style="border: 1px solid #000000;text-align: left;padding-left: 10px;">Total installs (jobs)</td>
  
    
    @foreach ($table1['total'] as $title =>$vl)
            
    <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">{{ $vl}}</td>
    <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">{{ $Variance = ($table1['Days_worked'][$title]*6) +($table1['Days_worked'][$title]*0.5)}}</td>
    <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">{{$Variance-$vl}}</td>   
    @endforeach

</tr>

<tr>
    <td style="border: 1px solid #000000;text-align: left;padding-left: 10px;">Faults In Day</td>
   
    
    @foreach ($table1['Faults_In_Day'] as $title =>$vl)
            
    <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">{{ $vl}}</td>
    <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">{{ 0}}</td>
    <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">{{ $vl}}</td>    
    @endforeach

</tr>

<tr>
    <td style="border: 1px solid #000000;text-align: left;padding-left: 10px;">Faults OOH</td>
   
    
    @foreach ($table1['Faults_OOH'] as $title =>$vl)
            
    <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">{{ $vl}}</td>
    <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">5.5</td>
    <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">{{ 5.5- $vl}}</td>    
    @endforeach

</tr>

<tr>
    <td style="border: 1px solid #000000;text-align: left;padding-left: 10px;">Fuels</td>
   
    
    @foreach ($table1['Fuels'] as $title =>$Fuelsvl)
            
    <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">{{ $Fuelsvl}}</td>
    <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">{{ $Variance = $table1['Days_worked'][$title]*8}}</td>
    <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">{{$Variance-$Fuelsvl}}</td>    
    @endforeach

</tr>

<tr>
    <td style="border: 1px solid #000000;text-align: left;padding-left: 10px;">Jobs per man day</td>
    

    @foreach ($table1['total'] as $title =>$vl)
            
    <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">{{$vl= round($vl/$table1['Days_worked'][$title],2)}}</td>
    <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">{{ $Variance = round((($table1['Days_worked'][$title]*6) +($table1['Days_worked'][$title]*0.5))/$table1['Days_worked'][$title],2)}}</td>
    <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">{{$Variance-$vl}}</td>   
    @endforeach

</tr>

<tr>
    <td style="border: 1px solid #000000;text-align: left;padding-left: 10px;">Fuels per man day</td>
    

    @foreach ($table1['Fuels'] as $title =>$vl)
            
    <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">{{ $vl= round($vl/$table1['Days_worked'][$title],2)}}</td>
    <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">{{ $Variance = round(($table1['Days_worked'][$title]*8)/$table1['Days_worked'][$title],2)}}</td>
    <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">{{$Variance-$vl}}</td>   
    @endforeach

</tr>
              
<tr>
    <td style="border: 1px solid #000000;text-align: left;padding-left: 10px;">DF %(inc aborts)</td>
    

    @foreach ($table1['df'] as $title =>$vl)
            
    <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">{{$vl}}%</td>
    <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">75%</td>
    <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">{{75- $vl}}%</td>   
    @endforeach

</tr>

<tr>
    <td style="border: 1px solid #000000;text-align: left;padding-left: 10px;">Abort %</td>
   
    @foreach ($table1['Aborts'] as $title =>$vl)
            
<td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">
    @if(($vl*100) > 0)   
    {{round(($vl*100)/($table1['total'][$title]),2).'%'}}
    @else
    0%
    @endif
    
    </td>
    <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">15%</td>
    <td style="border: 1px solid #000000;text-align:right;padding-right: 5px;">
        @if(($vl*100) > 0)   
        {{15-round(($vl*100)/($table1['total'][$title]),2).'%'}}
    @else
    15%
    @endif
    
       </td>   
    @endforeach

</tr>
</tbody>
</table>
<table>
<tbody>
<!-- Engineer -->
<table><tbody><tr><td>{{$on_site_time}}</td></tr></tbody></table>


        <table >
            <thead>
                    <tr>
                    <td style="background-color: #808080;color:white;border: 1px solid #000000;vertical-align: top;"> WC  {{ date('d F',strtotime(str_replace('/', '-',$on_site_time)))}}</td>
                   
                   
                    @foreach ($data['Days_worked'] as $title)
                    @foreach ($title as $k=> $users)
                    
                    <td valign="middle" style="color:white;border: 1px solid #000000;text-align: center;background-color: #808080;word-wrap:break-word;vertical-align: top;" > 
                    {{$k}}
                    </td>
                    @endforeach 
                    @endforeach  
                </tr>
            </thead>
            <tbody>

                <tr>
                    <td style="border: 1px solid #000000;text-align: right;"> Days worked</td>
                        
                    @foreach ($data['Days_worked'] as $title)
                @foreach ($title as $k=> $users)
                
                <td style="border: 1px solid #000000;text-align: right;"> 
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
                </tr>
                

<tr>
    <td style="border: 1px solid #000000;text-align: right;"> In Day Installs</td>
    
    @foreach ($data['In_day_installs_jobs'] as $title)
                @foreach ($title as $k=> $users)
                
                <td style="border: 1px solid #000000;text-align: right;"> 
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
</tr>

<tr>
    <td style="border: 1px solid #000000;text-align: right;"> OOH Installs</td>
   
    @foreach ($data['OOH_jobs'] as $title)
                @foreach ($title as $k=> $users)
                
                <td style="border: 1px solid #000000;text-align: right;"> 
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
</tr>

<tr>
    <td style="border: 1px solid #000000;text-align: right;"> Total</td>
    
    @foreach ($data['total'] as $title)
    @foreach ($title as $k=> $users)
    
    <td style="border: 1px solid #000000;text-align: right;"> 
    {{$users}}
    </td>
    @endforeach 
    @endforeach  
</tr>

<tr>
    <td style="border: 1px solid #000000;text-align: right;"> Aborts</td>
    
    @foreach ($data['Aborts'] as $title)
                @foreach ($title as $k=> $users)
                
                <td style="border: 1px solid #000000;text-align: right;"> 
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
</tr>
<tr style="border: none"><td>&nbsp;</td></tr>
<tr>
    <td style="border: 1px solid #000000;text-align: right;"> Installs (Jobs)</td>
    
    @foreach ($data['InstallsJob'] as $title)
                @foreach ($title as $k=> $users)
                
                <td style="border: 1px solid #000000;text-align: right;"> 
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
</tr>

<tr>
    <td style="border: 1px solid #000000;text-align: right;"> Fuels</td>
    
    @foreach ($data['Fuels'] as $title)
                @foreach ($title as $k=> $users)
                
                <td style="border: 1px solid #000000;text-align: right;"> 
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
</tr>
<tr>
    <td style="border: 1px solid #000000;text-align: right;"> Dual</td>
  
    @foreach ($data['Dual'] as $title)
                @foreach ($title as $k=> $users)
                
                <td style="border: 1px solid #000000;text-align: right;"> 
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
</tr>
<tr>
    <td style="border: 1px solid #000000;text-align: right;"> Elec Only</td>
    
    @foreach ($data['Elec_Only'] as $title)
                @foreach ($title as $k=> $users)
                
                <td style="border: 1px solid #000000;text-align: right;"> 
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
</tr>
<tr>
    <td style="border: 1px solid #000000;text-align: right;"> Gas Only</td>
    
    @foreach ($data['Gas_Only'] as $title)
                @foreach ($title as $k=> $users)
                
                <td style="border: 1px solid #000000;text-align: right;">  
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
</tr>

<tr>
    <td style="border: 1px solid #000000;text-align: right;"> Check Comms</td>
    
    @foreach ($data['Check_Comms'] as $title)
                @foreach ($title as $k=> $users)
                
                <td style="border: 1px solid #000000;text-align: right;"> 
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
</tr>

<tr style="border: none"><td>&nbsp;</td></tr>

<tr>
    <td style="border: 1px solid #000000;text-align: right;"> Aborts</td>
    
    @foreach ($data['Aborts'] as $title)
                @foreach ($title as $k=> $users)
                
                <td style="border: 1px solid #000000;text-align: right;"> 
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
</tr>
<tr>
    <td style="border: 1px solid #000000;text-align: right;"> Dual</td>
    
    @foreach ($data['Aborts_Fuels'] as $title)
                @foreach ($title as $k=> $users)
                
                <td style="border: 1px solid #000000;text-align: right;"> 
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
</tr>

<tr>
    <td style="border: 1px solid #000000;text-align: right;"> Elec Only</td>
    
    @foreach ($data['Aborts_Elec_Only'] as $title)
                @foreach ($title as $k=> $users)
                
                <td style="border: 1px solid #000000;text-align: right;"> 
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
</tr>

<tr>
    <td style="border: 1px solid #000000;text-align: right;"> Gas Only</td>
    
    @foreach ($data['Aborts_Gas_Only'] as $title)
                @foreach ($title as $k=> $users)
                
                <td style="border: 1px solid #000000;text-align: right;"> 
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
</tr>

<tr>
    <td style="border: 1px solid #000000;text-align: right;"> Check Comms</td>
    
    @foreach ($data['Aborts_Check_Comms'] as $title)
                @foreach ($title as $k=> $users)
                
                <td style="border: 1px solid #000000;text-align: right;"> 
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
</tr>

<tr style="border: none"><td>&nbsp;</td></tr>
<tr>
    <td style="border: 1px solid #000000;text-align: right;"> Dual Fuel %</td>
   
    @foreach ($data['InstallsJob'] as $p => $title)
                @foreach ($title as $k=> $users)
                
                <td style="border: 1px solid #000000;text-align: right;"> 
                    <!--Aborts_Fuels = Aborts_Dual-->
                @if(($data['Aborts_Fuels'][$p][$k]+ $data['Dual'][$p][$k])*100 > 0)   
                {{ round((($data['Aborts_Fuels'][$p][$k]+ $data['Dual'][$p][$k])*100)/($data['Aborts'][$p][$k]+$users),2).'%'}}
                @else
                0%
                @endif
                </td>
                @endforeach 
                @endforeach  
</tr>
<tr>
    <td style="border: 1px solid #000000;text-align: right;">Elec only %</td>
    
    @foreach ($data['InstallsJob'] as $p => $title)
                @foreach ($title as $k=> $users)
                
                <td style="border: 1px solid #000000;text-align: right;"> 
                    @if(($data['Aborts_Elec_Only'][$p][$k]+ $data['Elec_Only'][$p][$k])*100 > 0)     
                {{ round((($data['Aborts_Elec_Only'][$p][$k]+ $data['Elec_Only'][$p][$k])*100)/($data['Aborts'][$p][$k]+$users),2).'%' }}
                @else
                0%
                @endif
                </td>
                @endforeach 
                @endforeach  
</tr>

<tr>
    <td style="border: 1px solid #000000;text-align: right;">Gas Only %</td>
    
    @foreach ($data['InstallsJob'] as $p => $title)
                @foreach ($title as $k=> $users)
                
                <td style="border: 1px solid #000000;text-align: right;"> 
                    @if(($data['Aborts_Gas_Only'][$p][$k]+ $data['Gas_Only'][$p][$k])*100 > 0)     
                {{ round((($data['Aborts_Gas_Only'][$p][$k]+ $data['Gas_Only'][$p][$k])*100)/($data['Aborts'][$p][$k]+$users),2).'%' }}
                @else
                0%
                @endif
                </td>
                @endforeach 
                @endforeach  
</tr>

<tr>
    <td style="border: 1px solid #000000;text-align: right;">Check Comms %</td>
    
    @foreach ($data['InstallsJob'] as $p => $title)
                @foreach ($title as $k=> $users)
                
                <td style="border: 1px solid #000000;text-align: right;"> 
                    @if(($data['Aborts_Check_Comms'][$p][$k]+ $data['Check_Comms'][$p][$k])*100 > 0)     
                {{ round((($data['Aborts_Check_Comms'][$p][$k]+ $data['Check_Comms'][$p][$k])*100)/($data['Aborts'][$p][$k]+$users),2).'%'}}
                @else
                0%
                @endif
                </td>
                @endforeach 
                @endforeach  
</tr>
</tbody>
            </table> 
