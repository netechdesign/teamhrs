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

    </style>
    <!--[if gte mso 9]><style type=”text/css”>
        body {
        font-family: arial, sans-serif!important;
        }
        </style>
    <![endif]-->
</head>


<body>
    <!-- pre-header -->
    <table width='100%'>
        <tbody>
            <tr style="text-align: center;">
                <td>
                    <b><u>POSITION APPLIED FOR</u></b>
                </td>
            </tr>
            <tr style="border:solid 1px;">
                <td style="border:solid 1px;padding:5px;">
                    {{ $data->position_applied_for }}
                </td>
            </tr>
        </tbody>
    </table>

    <table width='100%' style="margin-top: 10px;">
        <tbody>
            <tr style="text-align: center;border:none;">
                <td colspan="2">
                    <b><u>PERSONAL DETAILS</u></b>
                </td>
            </tr>
            <tr>
                <td style="border:solid 1px;padding:5px;">Title (Optional)</td>
                <td style="border:solid 1px;padding:5px;">{{ $data->title }}</td>
            </tr>
            <tr>
                <td style="border:solid 1px;padding:5px;">Forename</td>
                <td style="border:solid 1px;padding:5px;">{{ $data->fore_name }}</td>
            </tr>
            <tr>
                <td style="border:solid 1px;padding:5px;">Surname</td>
                <td style="border:solid 1px;padding:5px;">{{ $data->surname }}</td>
            </tr>
            <tr>
                <td style="border:solid 1px;padding:5px;">Address</td>
                <td style="border:solid 1px;padding:5px;">{{ $data->address }}</td>
            </tr>
            <tr>
                <td style="border:solid 1px;padding:5px;">Postcode</td>
                <td style="border:solid 1px;padding:5px;">{{ $data->postcode }}</td>
            </tr>
            <tr>
                <td style="border:solid 1px;padding:5px;">Email</td>
                <td style="border:solid 1px;padding:5px;">{{ $data->email }}</td>
            </tr>
            <tr>
                <td style="border:solid 1px;padding:5px;">Telephone Number</td>
                <td style="border:solid 1px;padding:5px;">{{ $data->telephone_number }}</td>
            </tr>
            </tr>
        </tbody>
    </table>

    <!--table width='100%' style="margin-top: 10px;">
        <tbody>

            <tr>
                <td style="border:solid 1px;padding:5px;">
                    If selected for interview, do you require any reasonable adjustments to be made on account of a
                    disability? (delete as appropriate)
                </td>
                <td style="border:solid 1px;padding:5px;">{{ $data->selected_interview }}</td>
            </tr>
        </tbody>
    </table-->
</body>

</html>