<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns:v="urn:schemas-microsoft-com:vml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;" />
    <!--[if !mso]-->
    <!-- -->
    <link href='https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700' rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Quicksand:300,400,700' rel="stylesheet">
    <!--<![endif]-->

    <title>Hr system</title>

    <style type="text/css">
        body {
            width: 100%;
            background-color: #ffffff;
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
            mso-margin-top-alt: 0px;
            mso-margin-bottom-alt: 0px;
            mso-padding-alt: 0px 0px 0px 0px;
        }

        p,
        h1,
        h2,
        h3,
        h4 {
            margin-top: 0;
            margin-bottom: 0;
            padding-top: 0;
            padding-bottom: 0;
        }

        span.preheader {
            display: none;
            font-size: 1px;
        }

        html {
            width: 100%;
        }

        table {
            font-size: 14px;
            border: 0;
        }

        /* ----------- responsivity ----------- */

        @media only screen and (max-width: 640px) {

            /*------ top header ------ */
            .main-header {
                font-size: 20px !important;
            }

            .main-section-header {
                font-size: 28px !important;
            }

            .show {
                display: block !important;
            }

            .hide {
                display: none !important;
            }

            .align-center {
                text-align: center !important;
            }

            .no-bg {
                background: none !important;
            }

            /*----- main image -------*/
            .main-image img {
                width: 440px !important;
                height: auto !important;
            }

            /* ====== divider ====== */
            .divider img {
                width: 440px !important;
            }

            /*-------- container --------*/
            .container590 {
                width: 440px !important;
            }

            .container580 {
                width: 400px !important;
            }

            .main-button {
                width: 220px !important;
            }

            /*-------- secions ----------*/
            .section-img img {
                width: 320px !important;
                height: auto !important;
            }

            .team-img img {
                width: 100% !important;
                height: auto !important;
            }
        }

        @media only screen and (max-width: 479px) {

            /*------ top header ------ */
            .main-header {
                font-size: 18px !important;
            }

            .main-section-header {
                font-size: 26px !important;
            }

            /* ====== divider ====== */
            .divider img {
                width: 280px !important;
            }

            /*-------- container --------*/
            .container590 {
                width: 280px !important;
            }

            .container590 {
                width: 280px !important;
            }

            .container580 {
                width: 260px !important;
            }

            /*-------- secions ----------*/
            .section-img img {
                width: 280px !important;
                height: auto !important;
            }
        }
        .days:nth-child(even) {
            background-color: #f3f3f3;
        }
    </style>
    <!--[if gte mso 9]><style type=”text/css”>
        body {
        font-family: arial, sans-serif!important;
        }
        </style>
    <![endif]-->
</head>


<body class="respond" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
    <!-- pre-header -->
    <table style="display:none!important;">
        <tr>
            <td>
                <div
                    style="overflow:hidden;display:none;font-size:1px;color:#ffffff;line-height:1px;font-family:Arial;maxheight:0px;max-width:0px;opacity:0;">
                    Holiday Request
                </div>
            </td>
        </tr>
    </table>
    <!-- pre-header end -->
    <!-- header -->
    <table border="0" width="100%" style="margin-top:10px;" cellpadding="0" cellspacing="0"  >

        <tr>
            <td align="center">
                <table border="0" align="center" style="border: solid 1px #ece7e7;border-bottom:none;background:#04a9f5;color:#ffff" width="60%" cellpadding="0" cellspacing="0" class="container590">

                    <tr>
                        <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
                    </tr>

                    <tr>
                        <td align="center">

                            <table border="0" align="center" width="590" cellpadding="0" cellspacing="0"
                                class="container590">

                                <tr>
                                    <td align="center" height="70" style="height:70px;">
                                        <a href=""
                                            style="display: block; border-style: none !important; border: 0 !important;"><img
                                                width="100" border="0" style="display: block; width: 100px;"
                                                src="{{ url('/images/team_hr_logo.png') }}" alt="" /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" style="color:white" >
                                        <h3>Holiday Request</h3>
                                    </td>
                                </tr>

                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
    <!-- end header -->

    
   <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="ffffff" class="bg_color">

        <tr>
            <td align="center">
                <table border="0" align="center" style="border: solid 1px #ece7e7;" width="60%" cellpadding="0" cellspacing="0" class="container590">


                    <tr>
                        <td align="left">
                            <table   border="0" width="97%" align="center" cellpadding="0" cellspacing="0"
                                class="container590">
                                
                                <tr>
                                    <td align="left" style=" font-size: 16px; font-family: 'Work Sans', Calibri, sans-serif; line-height: 35px;">
                                       <b>Name: </b> {{$data->fullname}}
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left" style=" font-size: 16px; font-family: 'Work Sans', Calibri, sans-serif; line-height: 35px;">
                                       <b>Date: </b> {{$data->from_date_text}} <b>To</b> {{$data->to_date_text}}
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left" style=" font-size: 16px; font-family: 'Work Sans', Calibri, sans-serif; line-height: 35px;">
                                       <b>Time Off: </b> {{$data->time_off}} @if($data->time_off>1) Days @else Day @endif
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left" style=" font-size: 16px; font-family: 'Work Sans', Calibri, sans-serif; line-height: 35px;">
                                       <b>Notes: </b> {{$data->notes}}
                                    </td>
                                </tr>
                                @if($data->dates)
                                    <tr>
                                        <td  style=" font-size: 16px; font-family: 'Work Sans', Calibri, sans-serif; line-height: 35px;">
                                            <table   border="0" width="100%"  cellpadding="0" cellspacing="0"
                                            class="container590">
                                            @foreach($data->dates as $vl)
                                                <tr class="days"><td width="10%" align="center">{{$vl['dates']}}</td><td>{{$vl['times']}}</td></tr>
                                            @endforeach    
                                            </table>    
                                        </td>
                                    </tr>
                                @endif
                                <tr>
                                    <td align="left" style=" font-size: 16px; font-family: 'Work Sans', Calibri, sans-serif; line-height: 35px;">
                                    <a href="{{url('Holiday/edit/'.$data->form_id)}}">click here</a>
                                    </td>
                                </tr>
                                
                            </table>
                        </td>
                    </tr>





                </table>

            </td>
        </tr>

    </table>
   
    <!-- end section -->




    <!-- footer ====== -->
    <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="f4f4f4">

        <tr>
            <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
        </tr>

        <tr >
            <td align="center">

                <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590">

                    <tr>
                        <td>
                            <table border="0" align="left" cellpadding="0" cellspacing="0"
                                style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"
                                class="container590">
                                <tr>
                                    <td align="left"
                                        style="color: #aaaaaa; font-size: 14px; font-family: 'Work Sans', Calibri, sans-serif; line-height: 24px;">
                                        <div style="line-height: 24px;">

                                           <!-- <span style="color: #333333;">itsupportpeople.co.uk</span> -->

                                        </div>
                                    </td>
                                </tr>
                            </table>

                            <table border="0" align="left" width="5" cellpadding="0" cellspacing="0"
                                style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"
                                class="container590">
                                <tr>
                                    <td height="20" width="5" style="font-size: 20px; line-height: 20px;">&nbsp;</td>
                                </tr>
                            </table>

                            <table border="0" align="right" cellpadding="0" cellspacing="0"
                                style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"
                                class="container590">


                            </table>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>

        <tr>
            <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
        </tr>

    </table>
    <!-- end footer ====== -->

</body>

</html>