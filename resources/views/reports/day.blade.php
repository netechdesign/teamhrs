
<table>
    <tbody>
    <tr><td>Published:</td>
    <td>{{date('d/m/Y')}}</td>
    </tr>
    <tr><td>For period ending:</td>
    <td>{{$on_site_time}}</td>
    </tr>
    <tr><td></td>
        
    </tr>
    <tr><td></td>
        
    </tr>
    <tr><td></td>
        
    </tr>
    
    <tr>
       
        <td>&nbsp;</td>
        <td>
            <table style="border: 2px solid #000000;" >
                <thead>
                        <tr style="border: 2px solid #000000;">
                        <td style="background-color: #808080;"> Day</td>
                        <td style="background-color: #808080;"> </td>
                
                        @foreach ($table1['Days_worked'] as $title => $val)
                               <td valign="middle" style="text-align: center;background-color: #808080;" colspan="3"> {{$title}}</td>
                        @endforeach                      
                                              
                        </tr>
                        <tr>
                            <td> </td>
                            <td> </td>
                            @foreach ($table1['Days_worked'] as $title => $val)
                            <td>Actual</td>
                            <td>Target</td>
                            <td>Variance</td>
                              @endforeach 
                            

                        </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Days worked</td>
                            <td></td>
                            
                           
                                @foreach ($table1['Days_worked'] as $title =>$vl)
                                
                                <td>{{ $vl}}</td>
                                <td>{{ $vl}}</td>
                                <td>0</td>    
                            @endforeach
                           
                            
                    </tr>

<tr>
    <td>In day installs (jobs)</td>
    <td></td>
    
       
        @foreach ($table1['In_day_installs_jobs'] as $title =>$vl)
            
        <td>{{ $vl}}</td>
        <td>{{ $Variance = $table1['Days_worked'][$title]*6}}</td>
        <td>{{$Variance-$vl}}</td>    
        @endforeach

       

       
</tr>


<tr>
    <td>OOH (jobs)</td>
    <td></td>
    
  
    @foreach ($table1['OOH_jobs'] as $title =>$vl)
            
    <td>{{ $vl}}</td>
    <td>{{ $Variance = $table1['Days_worked'][$title]*0.5}}</td>
    <td>{{$Variance-$vl}}</td>    
    @endforeach

   
</tr>

<tr>
    <td>Total installs (jobs)</td>
    <td></td>
    
    @foreach ($table1['total'] as $title =>$vl)
            
    <td>{{ $vl}}</td>
    <td>{{ $Variance = ($table1['Days_worked'][$title]*6) +($table1['Days_worked'][$title]*0.5)}}</td>
    <td>{{$Variance-$vl}}</td>   
    @endforeach

</tr>

<tr>
    <td>Faults In Day</td>
    <td></td>
    
    @foreach ($table1['Faults_In_Day'] as $title =>$vl)
            
    <td>{{ $vl}}</td>
    <td>{{ 0}}</td>
    <td style="color: green;">{{ $vl}}</td>    
    @endforeach

</tr>

<tr>
    <td>Faults OOH</td>
    <td></td>
    
    @foreach ($table1['Faults_OOH'] as $title =>$vl)
            
    <td>{{ $vl}}</td>
    <td>5.5</td>
    <td>{{ 5.5- $vl}}</td>    
    @endforeach

</tr>

<tr>
    <td>Fuels</td>
    <td></td>
    
    @foreach ($table1['Fuels'] as $title =>$Fuelsvl)
            
    <td>{{ $Fuelsvl}}</td>
    <td>{{ $Variance = $table1['Days_worked'][$title]*8}}</td>
    <td>{{$Variance-$Fuelsvl}}</td>    
    @endforeach

</tr>

<tr>
    <td>Jobs per man day</td>
    <td></td>

    @foreach ($table1['total'] as $title =>$vl)
            
    <td>{{$vl= round($vl/$table1['Days_worked'][$title],2)}}</td>
    <td>{{ $Variance = round((($table1['Days_worked'][$title]*6) +($table1['Days_worked'][$title]*0.5))/$table1['Days_worked'][$title],2)}}</td>
    <td>{{$Variance-$vl}}</td>   
    @endforeach

</tr>

<tr>
    <td>Fuels per man day</td>
    <td></td>

    @foreach ($table1['Fuels'] as $title =>$vl)
            
    <td>{{ $vl= round($vl/$table1['Days_worked'][$title],2)}}</td>
    <td>{{ $Variance = round(($table1['Days_worked'][$title]*8)/$table1['Days_worked'][$title],2)}}</td>
    <td>{{$Variance-$vl}}</td>   
    @endforeach

</tr>

<tr>
    <td>DF %(inc aborts)</td>
    <td></td>

    @foreach ($table1['df'] as $title =>$vl)
            
    <td style="text-align:right">{{$vl}}%</td>
    <td style="text-align:right">75%</td>
    <td style="text-align:right">{{75- $vl}}%</td>   
    @endforeach

</tr>

<tr>
    <td>Abort %</td>
    <td></td>
    @foreach ($table1['Aborts'] as $title =>$vl)
            
<td style="text-align:right">
    @if(($vl*100) > 0)   
    {{round(($vl*100)/($table1['total'][$title]),2).'%'}}
    @else
    0%
    @endif
        
</td>
    <td style="text-align:right">15%</td>
    <td style="text-align:right">
        @if(($vl*100) > 0)   
        {{15-round(($vl*100)/($table1['total'][$title]),2).'%'}}
    @else
    15%
    @endif    
    </td>   
    @endforeach

</tr>

<!-- Engineer -->
<tr><td></td>
        
</tr>
<tr><td></td>
    
</tr>
<tr><td>{{$on_site_time}}</td>
    
</tr>
<tr><td></td></tr>
<tr>
    <td>
        <table style="border: 2px solid #000000;" >
            <thead>
                    <tr style="border: 2px solid #000000;">
                    <td style="background-color: #808080;vertical-align: top;"> WC {{ date('d F',strtotime(str_replace('/', '-',$on_site_time)))}}</td>
                    <td style="background-color: #808080;"> </td>
                   
                    @foreach ($data['Days_worked'] as $title)
                    @foreach ($title as $k=> $users)
                    
                    <td valign="middle" style="text-align: center;background-color: #808080;word-wrap:break-word;vertical-align: top;" > 
                    {{$k}}
                    </td>
                    @endforeach 
                    @endforeach  
                </tr>
            </thead>
            <tbody>

                <tr>
                    <td>Days worked</td>
                        <td></td>
                    @foreach ($data['Days_worked'] as $title)
                @foreach ($title as $k=> $users)
                
                <td> 
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
                </tr>
                

<tr>
    <td>In Day Installs</td>
    <td></td>
    @foreach ($data['In_day_installs_jobs'] as $title)
                @foreach ($title as $k=> $users)
                
                <td> 
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
</tr>

<tr>
    <td>OOH Installs</td>
    <td></td>
    @foreach ($data['OOH_jobs'] as $title)
                @foreach ($title as $k=> $users)
                
                <td> 
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
</tr>

<tr>
    <td>Total</td>
    <td></td>
    @foreach ($data['total'] as $title)
    @foreach ($title as $k=> $users)
    
    <td> 
    {{$users}}
    </td>
    @endforeach 
    @endforeach  
</tr>

<tr>
    <td>Aborts</td>
    <td></td>
    @foreach ($data['Aborts'] as $title)
                @foreach ($title as $k=> $users)
                
                <td> 
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
</tr>
<tr><td></td></tr>
<tr><td></td></tr>
<tr>
    <td>Installs (Jobs)</td>
    <td></td>
    @foreach ($data['InstallsJob'] as $title)
                @foreach ($title as $k=> $users)
                
                <td> 
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
</tr>

<tr>
    <td>Fuels</td>
    <td></td>
    @foreach ($data['Fuels'] as $title)
                @foreach ($title as $k=> $users)
                
                <td> 
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
</tr>
<tr>
    <td>Dual</td>
    <td></td>
    @foreach ($data['Dual'] as $title)
                @foreach ($title as $k=> $users)
                
                <td> 
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
</tr>
<tr>
    <td>Elec Only</td>
    <td></td>
    @foreach ($data['Elec_Only'] as $title)
                @foreach ($title as $k=> $users)
                
                <td> 
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
</tr>
<tr>
    <td>Gas Only</td>
    <td></td>
    @foreach ($data['Gas_Only'] as $title)
                @foreach ($title as $k=> $users)
                
                <td> 
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
</tr>

<tr>
    <td>Check Comms</td>
    <td></td>
    @foreach ($data['Check_Comms'] as $title)
                @foreach ($title as $k=> $users)
                
                <td> 
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
</tr>

<tr><td></td></tr>
<tr><td></td></tr>

<tr>
    <td>Aborts</td>
    <td></td>
    @foreach ($data['Aborts'] as $title)
                @foreach ($title as $k=> $users)
                
                <td> 
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
</tr>
<tr>
    <td>Dual</td>
    <td></td>
    @foreach ($data['Aborts_Fuels'] as $title)
                @foreach ($title as $k=> $users)
                
                <td> 
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
</tr>

<tr>
    <td>Elec Only</td>
    <td></td>
    @foreach ($data['Aborts_Elec_Only'] as $title)
                @foreach ($title as $k=> $users)
                
                <td> 
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
</tr>

<tr>
    <td>Gas Only</td>
    <td></td>
    @foreach ($data['Aborts_Gas_Only'] as $title)
                @foreach ($title as $k=> $users)
                
                <td> 
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
</tr>

<tr>
    <td>Check Comms</td>
    <td></td>
    @foreach ($data['Aborts_Check_Comms'] as $title)
                @foreach ($title as $k=> $users)
                
                <td> 
                {{$users}}
                </td>
                @endforeach 
                @endforeach  
</tr>
<tr><td></td></tr>
<tr><td></td></tr>
<tr>
    <td>Dual Fuel %</td>
    <td></td>
    @foreach ($data['InstallsJob'] as $p => $title)
                @foreach ($title as $k=> $users)
                
                <td style="text-align: right;"> 
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
    <td>Elec only %</td>
    <td></td>
    @foreach ($data['InstallsJob'] as $p => $title)
                @foreach ($title as $k=> $users)
                
                <td style="text-align: right;"> 
                    @if(($data['Aborts_Elec_Only'][$p][$k]+ $data['Elec_Only'][$p][$k])*100 > 0)     
                {{ round((($data['Aborts_Elec_Only'][$p][$k]+ $data['Elec_Only'][$p][$k])*100)/($data['Aborts'][$p][$k]+$users),2).'%'}}
                @else
                0%
                @endif
                </td>
                @endforeach 
                @endforeach  
</tr>

<tr>
    <td>Gas Only %</td>
    <td></td>
    @foreach ($data['InstallsJob'] as $p => $title)
                @foreach ($title as $k=> $users)
                
                <td style="text-align: right;"> 
                    @if(($data['Aborts_Gas_Only'][$p][$k]+ $data['Gas_Only'][$p][$k])*100 > 0)     
                {{ round((($data['Aborts_Gas_Only'][$p][$k]+ $data['Gas_Only'][$p][$k])*100)/($data['Aborts'][$p][$k]+$users),2).'%'}}
                @else
                0%
                @endif
                </td>
                @endforeach 
                @endforeach  
</tr>

<tr>
    <td>Check Comms %</td>
    <td></td>
    @foreach ($data['InstallsJob'] as $p => $title)
                @foreach ($title as $k=> $users)
                
                <td style="text-align: right;"> 
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
        </td>
    </tr>

    </tbody>
</table>
