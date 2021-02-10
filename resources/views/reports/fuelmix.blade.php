
@if($report_for=='weektodate')
<table style="border: solid 1px;width: 100%;">
    <tbody>
      
        <tr>
            <th style="border: solid 1px;" width="10%">{{$file_name}}</th>
            <th style="border: solid 1px;" width="5%">Mon</th>
            <th style="border: solid 1px;" width="5%">Tue</th>
            <th style="border: solid 1px;" width="5%">Wed</th>
            <th style="border: solid 1px;" width="5%">Thu</th>
            <th style="border: solid 1px;" width="5%">Fri</th>
            <th style="border: solid 1px;" width="5%">Sat</th>
            <th style="border: solid 1px;" width="5%">Sun</th>
        </tr>
     <?php
     $Mon=0;
     $Tue=0;
     $Wed=0;
     $Thu=0;
     $Fri=0;
     $Sat=0;
     $Sun=0;
     ?>
        @foreach($data as $ek =>$evl)
                  <tr>
                      <td style="border: solid 1px;padding:5px;">{{$evl->job_type}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->Mon}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->Tue}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->Wed}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->Thu}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->Fri}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->Sat}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->Sun}}</td>
                    </tr>
                    <?php
                      $Mon= $Mon + $evl->Mon;
                      $Tue= $Tue + $evl->Tue;
                      $Wed= $Wed + $evl->Wed;
                      $Thu= $Thu + $evl->Thu;
                      $Fri= $Fri + $evl->Fri;
                      $Sat= $Sat + $evl->Sat;
                      $Sun= $Sun + $evl->Sun;
                  
                     ?>
        @endforeach
            
            <tr>
                <th style="border: solid 1px;" width="10%">&nbsp;</th>
                <th style="border: solid 1px;" width="5%"></th>
                <th style="border: solid 1px;" width="5%"></th>
                <th style="border: solid 1px;" width="5%"></th>
                <th style="border: solid 1px;" width="5%"></th>
                <th style="border: solid 1px;" width="5%"></th>
                <th style="border: solid 1px;"width="5%"></th>
                <th style="border: solid 1px;"width="5%"></th>
            </tr>
            <tr>
                <th style="border: solid 1px;" width="10%">{{$file_name}}</th>
                <th style="border: solid 1px;" width="5%">Mon</th>
                <th style="border: solid 1px;" width="5%">Tue</th>
                <th style="border: solid 1px;" width="5%">Wed</th>
                <th style="border: solid 1px;" width="5%">Thu</th>
                <th style="border: solid 1px;" width="5%">Fri</th>
                <th style="border: solid 1px;" width="5%">Sat</th>
                <th style="border: solid 1px;" width="5%">Sun</th>
            </tr>
            @foreach($data as $ek =>$evl)
            <tr>
                <td style="border: solid 1px;padding:5px;">{{$evl->job_type}}</td>
                <td style="border: solid 1px;text-align: right;padding:5px;">
                    
                    @if($evl->Mon>0)
                    {{round(($evl->Mon *100)/$Mon,2)}}%
                    @else
                    0%
                    @endif
                </td>
                <td style="border: solid 1px;text-align: right;padding:5px;">
                    @if($evl->Tue>0)
                    {{round(($evl->Tue *100)/$Tue,2)}}%
                    @else
                    0%
                    @endif
                    </td>
                <td style="border: solid 1px;text-align: right;padding:5px;">
                    @if($evl->Wed>0)
                    {{round(($evl->Wed *100)/$Wed,2)}}%
                    @else
                    0%
                    @endif
                    </td>
                <td style="border: solid 1px;text-align: right;padding:5px;">
                    @if($evl->Thu>0)
                    {{round(($evl->Thu *100)/$Thu,2)}}%
                    @else
                    0%
                    @endif
                    </td>
                <td style="border: solid 1px;text-align: right;padding:5px;">
                    @if($evl->Fri>0)
                    {{round(($evl->Fri *100)/$Fri,2)}}%
                    @else
                    0%
                    @endif
                    </td>
                <td style="border: solid 1px;text-align: right;padding:5px;">
                    @if($evl->Sat>0)
                    {{round(($evl->Sat *100)/$Sat,2)}}%
                    @else
                    0%
                    @endif
                    </td>
                <td style="border: solid 1px;text-align: right;padding:5px;">
                    @if($evl->Sun>0)
                    {{round(($evl->Sun *100)/$Sun,2)}}%
                    @else
                    0%
                    @endif
                    </td>
              </tr>
             
  @endforeach
  
            
     </tbody>
</table> 
@elseif($report_for=='monthtodate')
    <table style="border: solid 1px;width: 100%;">
        <tbody>
          
            <tr>
                <th style="border: solid 1px;" width="10%">{{$file_name}}</th>
                <th style="border: solid 1px;" width="5%">Week 1</th>
                <th style="border: solid 1px;" width="5%">Week 2</th>
                <th style="border: solid 1px;" width="5%">Week 3</th>
                <th style="border: solid 1px;" width="5%">Week 4</th>
                <th style="border: solid 1px;" width="5%">Week 5</th>
                
            </tr>
         <?php
         $week_1=0;
        $week_2=0;
        $week_3=0;
        $week_4=0;
        $week_5=0;
         ?>
            @foreach($data as $ek =>$evl)
                      <tr>
                          <td style="border: solid 1px;padding:5px;">{{$evl->job_type}}</td>
                          <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->week_1}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->week_2}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->week_3}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->week_4}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->week_5}}</td>
                        </tr>
                        <?php
                      $week_1= $week_1 + $evl->week_1;
                    $week_2= $week_2 + $evl->week_2;
                    $week_3= $week_3 + $evl->week_3;
                    $week_4= $week_4 + $evl->week_4;
                    $week_5= $week_4 + $evl->week_5;
                         ?>
            @endforeach
                
                <tr>
                    <th style="border: solid 1px;" width="10%">&nbsp;</th>
                    <th style="border: solid 1px;" width="5%"></th>
                    <th style="border: solid 1px;" width="5%"></th>
                    <th style="border: solid 1px;" width="5%"></th>
                    <th style="border: solid 1px;" width="5%"></th>
                    <th style="border: solid 1px;" width="5%"></th>
                    
                </tr>
                <tr>
                    <th style="border: solid 1px;" width="10%">Utilita</th>
                    <th style="border: solid 1px;" width="5%">Week 1</th>
                    <th style="border: solid 1px;" width="5%">Week 2</th>
                    <th style="border: solid 1px;" width="5%">Week 3</th>
                    <th style="border: solid 1px;" width="5%">Week 4</th>
                    <th style="border: solid 1px;" width="5%">Week 5</th>
                </tr>
                @foreach($data as $ek =>$evl)
                <tr>
                    <td style="border: solid 1px;padding:5px;">{{$evl->job_type}}</td>
                    <td style="border: solid 1px;text-align: right;padding:5px;">
                        @if($evl->week_1>0)
                        {{round(($evl->week_1 *100)/$week_1,2)}}%
                        @else
                        0%
                        @endif
                    </td>
                    <td style="border: solid 1px;text-align: right;padding:5px;">
                        @if($evl->week_2>0)
                        {{round(($evl->week_2 *100)/$week_2,2)}}%
                        @else
                        0%
                        @endif
                    </td>
                    <td style="border: solid 1px;text-align: right;padding:5px;">
                        @if($evl->week_3>0)
                        {{round(($evl->week_3 *100)/$week_3,2)}}%
                        @else
                        0%
                        @endif
                    </td>
                    <td style="border: solid 1px;text-align: right;padding:5px;">
                        @if($evl->week_4>0)
                        {{round(($evl->week_4 *100)/$week_4,2)}}%
                        @else
                        0%
                        @endif
                    </td>
                    <td style="border: solid 1px;text-align: right;padding:5px;">
                        @if($evl->week_5>0)
                        {{round(($evl->week_5 *100)/$week_5,2)}}%
                        @else
                        0%
                        @endif
                    </td>
                    
                    
                  </tr>
                 
      @endforeach
      
                
         </tbody>
    </table> 
    
    @elseif($report_for=='yeartodate')
    <table style="border: solid 1px;width: 100%;">
        <tbody>
            
            <tr>
            <th style="border: solid 1px;" width="10%">{{$file_name}}</th>
                <th style="border: solid 1px;" width="5%">Jan</th>
                <th style="border: solid 1px;" width="5%">Feb</th>
                <th style="border: solid 1px;" width="5%">March</th>
                <th style="border: solid 1px;" width="5%">Apr</th>
                <th style="border: solid 1px;" width="5%">May</th>
                <th style="border: solid 1px;" width="5%">Jun</th>
                <th style="border: solid 1px;" width="5%">July</th>
                <th style="border: solid 1px;" width="5%">Aug</th>
                <th style="border: solid 1px;" width="5%">Sep</th>
                <th style="border: solid 1px;" width="5%">Oct</th>
                <th style="border: solid 1px;" width="5%">Nov</th>
                <th style="border: solid 1px;" width="5%">Dec</th>
            </tr>
         <?php
            $Jan= 0;
            $Feb=0;
            $Mar=0;
            $Apr=0;
            $May=0;
            $Jun=0;
            $Jul=0;
            $Aug=0;
            $Sep=0;
            $Oct=0;
            $Nov=0;
            $Dec= 0;
         ?>
            @foreach($data as $ek =>$evl)
                      <tr>
                          <td style="border: solid 1px;padding:5px;">{{$evl->job_type}}</td>
                          <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->Jan}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->Feb}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->Mar}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->Apr}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->May}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->Jun}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->Jul}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->Aug}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->Sep}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->Oct}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->Nov}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->Dec}}</td>
                        </tr>
                        <?php
                            $Jan = $Jan + $evl->Jan;
                            $Feb = $Feb + $evl->Feb;
                            $Mar = $Mar + $evl->Mar;
                            $Apr = $Apr + $evl->Apr;
                            $May = $May + $evl->May;
                            $Jun = $Jun + $evl->Jun;
                            $Jul = $Jul + $evl->Jul;
                            $Aug = $Aug + $evl->Aug;
                            $Sep = $Sep+ $evl->Sep;
                            $Oct = $Oct + $evl->Oct;
                            $Nov = $Nov + $evl->Nov;
                            $Dec = $Dec + $evl->Dec;
                         ?>
            @endforeach
                
                <tr>
                    <th style="border: solid 1px;" width="10%">&nbsp;</th>
                    <th style="border: solid 1px;" width="5%"></th>
                    <th style="border: solid 1px;" width="5%"></th>
                    <th style="border: solid 1px;" width="5%"></th>
                    <th style="border: solid 1px;" width="5%"></th>
                    <th style="border: solid 1px;" width="5%"></th>
                    <th style="border: solid 1px;" width="5%"></th>
                    <th style="border: solid 1px;" width="5%"></th>
                    <th style="border: solid 1px;" width="5%"></th>
                    <th style="border: solid 1px;" width="5%"></th>
                    <th style="border: solid 1px;" width="5%"></th>
                    <th style="border: solid 1px;" width="5%"></th>
                    <th style="border: solid 1px;" width="5%"></th>
                    
                </tr>
                <tr>
                    <th style="border: solid 1px;" width="10%">Utilita</th>
                    <th style="border: solid 1px;" width="5%">Jan</th>
                <th style="border: solid 1px;" width="5%">Feb</th>
                <th style="border: solid 1px;" width="5%">March</th>
                <th style="border: solid 1px;" width="5%">Apr</th>
                <th style="border: solid 1px;" width="5%">May</th>
                <th style="border: solid 1px;" width="5%">Jun</th>
                <th style="border: solid 1px;" width="5%">July</th>
                <th style="border: solid 1px;" width="5%">Aug</th>
                <th style="border: solid 1px;" width="5%">Sep</th>
                <th style="border: solid 1px;" width="5%">Oct</th>
                <th style="border: solid 1px;" width="5%">Nov</th>
                <th style="border: solid 1px;" width="5%">Dec</th>
                </tr>
                @foreach($data as $ek =>$evl)
                <tr>
                    <td style="border: solid 1px;padding:5px;">{{$evl->job_type}}</td>
                    <td style="border: solid 1px;text-align: right;padding:5px;">
                        @if($evl->Jan>0)
                        {{round(($evl->Jan *100)/$Jan,2)}}%
                        @else
                        0%
                        @endif
                    </td>
                    <td style="border: solid 1px;text-align: right;padding:5px;">
                        @if($evl->Feb>0)
                        {{round(($evl->Feb *100)/$Feb,2)}}%
                        @else
                        0%
                        @endif
                    </td>
                    <td style="border: solid 1px;text-align: right;padding:5px;">
                        @if($evl->Mar>0)
                        {{round(($evl->Mar *100)/$Mar,2)}}%
                        @else
                        0%
                        @endif
                    </td>
                    <td style="border: solid 1px;text-align: right;padding:5px;">
                        @if($evl->Apr>0)
                        {{round(($evl->Apr *100)/$Apr,2)}}%
                        @else
                        0%
                        @endif
                    </td>
                    <td style="border: solid 1px;text-align: right;padding:5px;">
                        @if($evl->May>0)
                        {{round(($evl->May *100)/$May,2)}}%
                        @else
                        0%
                        @endif
                    </td>
                    <td style="border: solid 1px;text-align: right;padding:5px;">
                        @if($evl->Jun>0)
                        {{round(($evl->Jun *100)/$Jun,2)}}%
                        @else
                        0%
                        @endif
                    </td>
                    <td style="border: solid 1px;text-align: right;padding:5px;">
                        @if($evl->Jul>0)
                        {{round(($evl->Jul *100)/$Jul,2)}}%
                        @else
                        0%
                        @endif
                    </td>
                    <td style="border: solid 1px;text-align: right;padding:5px;">
                        @if($evl->Aug>0)
                        {{round(($evl->Aug *100)/$Aug,2)}}%
                        @else
                        0%
                        @endif
                    </td>
                    <td style="border: solid 1px;text-align: right;padding:5px;">
                        @if($evl->Sep>0)
                        {{round(($evl->Sep *100)/$Sep,2)}}%
                        @else
                        0%
                        @endif
                    </td>
                    <td style="border: solid 1px;text-align: right;padding:5px;">
                        @if($evl->Oct>0)
                        {{round(($evl->Oct *100)/$Oct,2)}}%
                        @else
                        0%
                        @endif
                    </td>
                    <td style="border: solid 1px;text-align: right;padding:5px;">
                        @if($evl->Nov>0)
                        {{round(($evl->Nov *100)/$Nov,2)}}%
                        @else
                        0%
                        @endif
                    </td>
                    
                    <td style="border: solid 1px;text-align: right;padding:5px;">
                        @if($evl->Dec>0)
                        {{round(($evl->Dec *100)/$Dec,2)}}%
                        @else
                        0%
                        @endif
                    </td>
                  </tr>
                 
      @endforeach
      
                
         </tbody>
    </table> 

    @endif    