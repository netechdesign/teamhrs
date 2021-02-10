
<table style="border: solid 1px;width: 100%;">
    <tbody>
       @foreach($data as $k =>$vl)
        <tr>
            <th style="border: solid 1px;" width="10%">Team Leader - {{$k}}</th>
            <th style="border: solid 1px;" width="5%">Week 1</th>
            <th style="border: solid 1px;" width="5%">Week 2</th>
            <th style="border: solid 1px;" width="5%">Week 3</th>
            <th style="border: solid 1px;" width="5%">Week 4</th>
            <th style="border: solid 1px;" width="5%">Total</th>
            <th style="border: solid 1px;"width="5%">Target</th>
        </tr>
        <?php
        $week_1=0;
        $week_2=0;
        $week_3=0;
        $week_4=0;
        $total=0;
        $Target=0;
         ?>
        @foreach($vl as $ek =>$evl)
                  <tr>
                      <td style="border: solid 1px;">{{$evl->engineer}}</td>
                      <td style="border: solid 1px;">{{$evl->week_1}}</td>
                      <td style="border: solid 1px;">{{$evl->week_2}}</td>
                      <td style="border: solid 1px;">{{$evl->week_3}}</td>
                      <td style="border: solid 1px;">{{$evl->week_4}}</td>
                      <td style="border: solid 1px;">{{$evl->week_1+$evl->week_2+$evl->week_3+$evl->week_4}} </td>
                      <td style="border: solid 1px;">75</td>
                    </tr>
                    <?php
                    $week_1= $week_1 + $evl->week_1;
                    $week_2= $week_2 + $evl->week_2;
                    $week_3= $week_3 + $evl->week_3;
                    $week_4= $week_4 + $evl->week_4;
                    $total=  $total + $evl->week_1+$evl->week_2+$evl->week_3+$evl->week_4;
                    $Target = $Target + 75;
                     ?>
            @endforeach
            <tr>
                <th style="border: solid 1px;" width="10%">Total</th>
            <th style="border: solid 1px;" width="5%">{{$week_1}}</th>
                <th style="border: solid 1px;" width="5%">{{$week_2}}</th>
                <th style="border: solid 1px;" width="5%">{{$week_3}}</th>
                <th style="border: solid 1px;" width="5%">{{$week_4}}</th>
                <th style="border: solid 1px;" width="5%">{{$total}}</th>
                <th style="border: solid 1px;"width="5%">{{$Target}}</th>
            </tr>
            <tr>
                <th style="border: solid 1px;" width="10%"></th>
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
