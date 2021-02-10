@if($report_for=='monthtodate')
<table style="border: solid 1px;width: 100%;">
    <tbody>
       @foreach($data as $k =>$vl)
        <tr>
            <th style="border: solid 1px;" width="10%">Team Leader - {{$k}}</th>
            <th style="border: solid 1px;" width="5%">Week 1</th>
            <th style="border: solid 1px;" width="5%">Week 2</th>
            <th style="border: solid 1px;" width="5%">Week 3</th>
            <th style="border: solid 1px;" width="5%">Week 4</th>
            <th style="border: solid 1px;" width="5%">Week 5</th>
            <th style="border: solid 1px;" width="5%">Total</th>
            
        </tr>
        <?php
        $week_1=0;
        $week_2=0;
        $week_3=0;
        $week_4=0;
        $week_5=0;
        $total=0;
        $Target=0;
         ?>
        @foreach($vl as $ek =>$evl)
                  <tr>
                      <td style="border: solid 1px;">{{$evl->engineer}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->week_1}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->week_2}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->week_3}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->week_4}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->week_5}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->week_1+$evl->week_2+$evl->week_3+$evl->week_4+$evl->week_5}} </td>
                     
                    </tr>
                    <?php
                    $week_1= $week_1 + $evl->week_1;
                    $week_2= $week_2 + $evl->week_2;
                    $week_3= $week_3 + $evl->week_3;
                    $week_4= $week_4 + $evl->week_4;
                    $week_5= $week_5 + $evl->week_5;
                    
                    $total=  $total + $evl->week_1+$evl->week_2+$evl->week_3+$evl->week_4+$evl->week_5;
                    
                     ?>
            @endforeach
            <tr>
                <th style="border: solid 1px;" width="10%">Total</th>
            <th style="border: solid 1px;text-align: right;padding:5px;" width="5%">{{$week_1}}</th>
                <th style="border: solid 1px;text-align: right;padding:5px;" width="5%">{{$week_2}}</th>
                <th style="border: solid 1px;text-align: right;padding:5px;" width="5%">{{$week_3}}</th>
                <th style="border: solid 1px;text-align: right;padding:5px;" width="5%">{{$week_4}}</th>
                <th style="border: solid 1px;text-align: right;padding:5px;" width="5%">{{$week_5}}</th>
                <th style="border: solid 1px;text-align: right;padding:5px;" width="5%">{{$total}}</th>
                
            </tr>
            <tr>
                <th style="border: solid 1px;" width="10%">&nbsp;</th>
                <th style="border: solid 1px;" width="5%"></th>
                <th style="border: solid 1px;" width="5%"></th>
                <th style="border: solid 1px;" width="5%"></th>
                <th style="border: solid 1px;" width="5%"></th>
                <th style="border: solid 1px;" width="5%"></th>
                <th style="border: solid 1px;"width="5%"></th>
            </tr>
        @endforeach
            
     </tbody>
</table> 
@elseif($report_for=='weektodate')

<table style="border: solid 1px;width: 100%;">
    <tbody>
       @foreach($data as $k =>$vl)
        <tr>
            <th style="border: solid 1px;" width="10%">Team Leader - {{$k}}</th>
            <th style="border: solid 1px;" width="5%">Mon</th>
            <th style="border: solid 1px;" width="5%">Tue</th>
            <th style="border: solid 1px;" width="5%">Wed</th>
            <th style="border: solid 1px;" width="5%">Thu</th>
            <th style="border: solid 1px;" width="5%">Fri</th>
            <th style="border: solid 1px;" width="5%">Sat</th>
            <th style="border: solid 1px;" width="5%">Sun</th>
            <th style="border: solid 1px;" width="5%">Total</th>
            
        </tr>
        <?php
        $Mon=0;
        $Tue=0;
        $Wed=0;
        $Thu=0;
        $Fri=0;
        $Sat=0;
        $Sun=0;
        $total=0;
        
         ?>
        @foreach($vl as $ek =>$evl)
                  <tr>
                      <td style="border: solid 1px;">{{$evl->engineer}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->Mon}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->Tue}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->Wed}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->Thu}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->Fri}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->Sat}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->Sun}}</td>
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->Mon+$evl->Tue+$evl->Wed+$evl->Thu+$evl->Fri+$evl->Sat+$evl->Sun}} </td>
                     
                    </tr>
                    <?php
                      $Mon= $Mon + $evl->Mon;
                      $Tue= $Tue + $evl->Tue;
                      $Wed= $Wed + $evl->Wed;
                      $Thu= $Thu + $evl->Thu;
                      $Fri= $Fri + $evl->Fri;
                      $Sat= $Sat + $evl->Sat;
                      $Sun= $Sun + $evl->Sun;
                    $total=  $total + $evl->Mon+$evl->Tue+$evl->Wed+$evl->Thu+$evl->Fri+$evl->Sat+$evl->Sun;
                    
                     ?>
            @endforeach
            <tr>
                <th style="border: solid 1px;" width="10%">Total</th>
            <th style="border: solid 1px;text-align: right;padding:5px;" width="5%">{{$Mon}}</th>
                <th style="border: solid 1px;text-align: right;padding:5px;" width="5%">{{$Tue}}</th>
                <th style="border: solid 1px;text-align: right;padding:5px;" width="5%">{{$Wed}}</th>
                <th style="border: solid 1px;text-align: right;padding:5px;" width="5%">{{$Thu}}</th>
                <th style="border: solid 1px;text-align: right;padding:5px;" width="5%">{{$Fri}}</th>
                <th style="border: solid 1px;text-align: right;padding:5px;" width="5%">{{$Sat}}</th>
                <th style="border: solid 1px;text-align: right;padding:5px;" width="5%">{{$Sun}}</th>
                <th style="border: solid 1px;text-align: right;padding:5px;" width="5%">{{$total}}</th>
                
            </tr>
            <tr>
                <th style="border: solid 1px;" width="10%">&nbsp;</th>
                <th style="border: solid 1px;" width="5%"></th>
                <th style="border: solid 1px;" width="5%"></th>
                <th style="border: solid 1px;" width="5%"></th>
                <th style="border: solid 1px;" width="5%"></th>
                <th style="border: solid 1px;" width="5%"></th>
                <th style="border: solid 1px;"width="5%"></th>
                <th style="border: solid 1px;"width="5%"></th>
                <th style="border: solid 1px;"width="5%"></th>
            </tr>
        @endforeach
            
     </tbody>
</table> 

@elseif($report_for=='yeartodate')

<table style="border: solid 1px;width: 100%;">
    <tbody>
       @foreach($data as $k =>$vl)
        <tr>
            <th style="border: solid 1px;" width="10%">Team Leader - {{$k}}</th>
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
            <th style="border: solid 1px;" width="5%">Total</th>
            
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
        $total=0;
        
         ?>
        @foreach($vl as $ek =>$evl)
                  <tr>
                      <td style="border: solid 1px;">{{$evl->engineer}}</td>
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
                      <td style="border: solid 1px;text-align: right;padding:5px;">{{$evl->Jan+$evl->Feb+$evl->Mar+$evl->Apr+$evl->May+$evl->Jun+$evl->Jul+$evl->Aug+$evl->Sep+$evl->Oct+$evl->Nov+$evl->Dec}} </td>
                     
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
                    $total=  $total + $evl->Jan+$evl->Feb+$evl->Mar+$evl->Apr+$evl->May+$evl->Jun+$evl->Jul+$evl->Aug+$evl->Sep+$evl->Oct+$evl->Nov+$evl->Dec;
                    
                     ?>
            @endforeach
            <tr>
                <th style="border: solid 1px;" width="10%">Total</th>
                <th style="border: solid 1px;text-align: right;padding:5px;" width="5%">{{$Jan}}</th>
                <th style="border: solid 1px;text-align: right;padding:5px;" width="5%">{{$Feb}}</th>
                <th style="border: solid 1px;text-align: right;padding:5px;" width="5%">{{$Mar}}</th>
                <th style="border: solid 1px;text-align: right;padding:5px;" width="5%">{{$Apr}}</th>
                <th style="border: solid 1px;text-align: right;padding:5px;" width="5%">{{$May}}</th>
                <th style="border: solid 1px;text-align: right;padding:5px;" width="5%">{{$Jun}}</th>
                <th style="border: solid 1px;text-align: right;padding:5px;" width="5%">{{ $Jul}}</th>
                <th style="border: solid 1px;text-align: right;padding:5px;" width="5%">{{$Aug}}</th>
                <th style="border: solid 1px;text-align: right;padding:5px;" width="5%">{{$Sep}}</th>
                <th style="border: solid 1px;text-align: right;padding:5px;" width="5%">{{$Oct}}</th>
                <th style="border: solid 1px;text-align: right;padding:5px;" width="5%">{{$Nov}}</th>
                <th style="border: solid 1px;text-align: right;padding:5px;" width="5%">{{$Dec}}</th>
                <th style="border: solid 1px;text-align: right;padding:5px;" width="5%">{{$total}}</th>
                
            </tr>
            <tr>
                <th style="border: solid 1px;" width="10%">&nbsp;</th>
                <th style="border: solid 1px;" width="5%"></th>
                <th style="border: solid 1px;" width="5%"></th>
                <th style="border: solid 1px;" width="5%"></th>
                <th style="border: solid 1px;" width="5%"></th>
                <th style="border: solid 1px;" width="5%"></th>
                <th style="border: solid 1px;"width="5%"></th>
                <th style="border: solid 1px;"width="5%"></th>
                <th style="border: solid 1px;"width="5%"></th>
                <th style="border: solid 1px;"width="5%"></th>
                <th style="border: solid 1px;"width="5%"></th>
                <th style="border: solid 1px;"width="5%"></th>
                <th style="border: solid 1px;"width="5%"></th>
                <th style="border: solid 1px;"width="5%"></th>
            </tr>
        @endforeach
            
     </tbody>
</table> 
@endif   
