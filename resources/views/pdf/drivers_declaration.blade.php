<html>
        <head>
        <style>
            @page {
              size: auto;
              odd-header-name: html_MyHeader1;
              odd-footer-name: html_MyFooter1;
            }
        
            body{
                border: none;
                font-size: 13px;
                line-height:18px;
                color:#000;
                font-family:"calibri" !important;
            }  
            ol {
  counter-reset: item
}

li:before {
  
}
        </style>
        </head>
        <body>
            <htmlpageheader name="MyHeader1">
                <img style="width:30%" src="https://lirp-cdn.multiscreensite.com/d1cedec6/dms3rep/multi/opt/Bespoke+Metering+logo+%281%29-1440w.png" />
            </htmlpageheader>
        
        
            <htmlpagefooter name="MyFooter1" >
            <img style="width:100%;height:7px;" src="images/footerborderpdf.png" />
            <div style="font-size: 11px;color:#1b6cab;text-align:center;">Bespoke Metering Solutions Limited, Unit 6, Glover Network Centre, Spire Road, Washington, NE37 3HB.</div>
            <div style="font-size: 11px;color:#1b6cab;text-align:center;">Company Number: 10670768</div>    
            <div style="font-size: 11px; text-align:center;">{PAGENO}/{nbpg}</div>
            </htmlpagefooter>
        
                <div style="text-align:center;margin-bottom:10px;">
                <div style="font-size: 18px;">Bespoke Metering Solutions - Drivers Declaration Form</div>
                    
                        <div style="margin-top:15px;"><u><b>It is an offence for a person to drive any vehicle on a road otherwise than in accordance with a licence authorising them to drive that vehicle.</b></u></div>
                            <div style="margin-top:10px;"><b><u>It is also an offence for them to permit another person to drive a company vehicle.</u></b></div>
                        
                </div>
                <div>
                <div>This is a declaration that I <span style="border-bottom:1px solid black,padding-bottom:'3px',text-transform:capitalize"> {{$fullname}} </span> have produced my latest licence, and that I have no pending convictions, endorsements or disqualifications.
</div>
                                        <div>
                                        I have had no change in my health, which could affect my entitlement to drive, in particular, for ALL licences:
                                        </div>
                                        <ul>
                                        <li>Epilepsy</li>
                                        <li>Fits or blackouts</li>
                                        <li>Repeated attacks of sudden disabling giddiness (dizziness that prevents you from functioning normally)</li>
                                        <li>Diabetes controlled by insulin </li>
                                        <li>An implanted cardiac defibrillator (ICD)</li>
                                        <li>Persistent alcohol abuse or dependency</li>
                                        <li>Persistent drug abuse or dependency </li>
                                        <li>Parkinson’s disease</li>
                                        <li>Narcolepsy or sleep apnoea syndrome </li>
                                        <li>Stroke, with any symptoms lasting longer than one month, recurrent ‘mini strokes’ or TIAs (Transiant Ischaemic Attacks) </li>
                                        <li>Any type of brain surgery, severe head injury involving inpatient treatment, or brain tumour</li>
                                        <li>Any other chronic (long term) neurological condition </li>
                                        <li>A serious problem with memory or episodes of confusion </li>
                                        <li>Severe learning disability</li>
                                        <li>Serious psychiatric illness or mental ill-health</li>
                                        <li>Total loss of sight in one eye </li>
                                        <li>Any condition affecting both eyes, or the remaining eye only (not including short or long sight or colour blindness)</li>
                                        <li>Any condition affecting your visual field (the surrounding area you can see when looking directly ahead)</li>
                                        <li>Any persistent limb problem for which your driving has to be restricted to certain types of vehicles or those with adapted controls</li>
                                        </ul>
                                        <div>Also, for vocational licences:</div>
                                        <ul>
                                            <li>Angina, other heart conditions or heart operation</li>
                                            <li>Diabetes controlled by tablets</li>
                                            <li>Visual problems affecting either eye</li>
                                            <li>Any form of stroke, including TIAs (Transiant Ischaemic Attacks)</li>
                                        </ul>
                                        <div>
                                        If any of the above affects me I will inform my employer as soon as possible. I understand that I must also inform DVLA by writing to the: Drivers Medical Group, DVLA, Swansea SA99 1TU (the appropriate medical questionnaires can be downloaded from www.direct.gov.uk/driverhealth). Failure to do so is a criminal offence punishable by a fine of up to a £1,000. I will inform my employer of any road traffic incidents, convictions, endorsements or disqualifications that occur, which could affect my entitlement to drive, as soon as possible.  I understand that the Company carry out driver’s licence checks and I agree to provide the relevant details when requested for these checks to be completed
                                        </div> 
                                        <div>
                                            <table border="1" style="border-collapse:collapsed;margin-top:15px;text-align:left" width="100%">
                                           <tr><th height="25px"  style="border-collapse:collapsed;text-align:left;padding:0px 5px;"  width="30%">Name</th><td style="border-collapse:collapsed;text-align:left;padding:0px 5px;">{{$employee_name}}</td></tr>  
                                                <tr>
                                                    <th height="25px" style="border-collapse:collapsed;text-align:left;padding:0px 5px;">Signature</th>
                                                    <td style="border-collapse:collapsed;text-align:left;padding:0px 5px;">

                                                    @if(isset($employee_signature))
                                                        <img src="{{$employee_signature}}" width="2%" style="marhin:0px 5px;" />
                                                    @endif
                                                </td>
                                                </tr>  
                                                <tr><th height="25px" style="border-collapse:collapsed;text-align:left;padding:0px 5px;">Date</th><td style="border-collapse:collapsed;text-align:left;padding:0px 5px;">
                                                 {{date('d/m/Y',strtotime($employee_date))}}
                                                </td></tr>  
                                                
                                            </table>   
                                        </div>      
                </div>    
            <pagebreak>
            <div style="text-align:center;margin-bottom:10px;">
                <div style="font-size: 18px;">Bespoke Metering Solutions - DVLA License Checks</div>
            </div>  
            <div>
                <p>The Company will perform a check on your driver’s license before you are permitted to drive any company vehicle. These checks will then be carried out annually, in the event of an accident or upon the declaration of a driving offence. To enable the Company to perform these checks you must generate a code from the DVLA, please see below for instructions on how to do this.  </p>
                <p>Before you start you will need:</p>
                <ul>
                                        <li>Your driver’s license number </li>
                                        <li>Your national insurance number</li>
                                        <li>The post code on your driver’s license</li>
                                        </ul>  
                <p>Go to <a href="https://www.gov.uk/view-driving-licence" target="_blank">www.gov.uk/view-driving-licence</a> and follow the instructions.</p>
                <p>Once you have generated the code you must provide this along with the last 8 characters of your driver’s license number. The code is valid for 21 days.</p>  
                <table  border="1" style="border-collapse:collapsed;margin-top:15px;text-align:left" width="100%">
                <tr ><th height="25px" colspan="2" style="border-collapse:collapsed;text-align:left;padding:0px 5px;">I confirm that I give permission for Bespoke Metering Solutions to carry out the necessary checks on my driving licence.</th></tr>    
                                                <tr><th height="25px"  style="border-collapse:collapsed;text-align:left;padding:0px 5px;"  width="30%">Name</th><td style="border-collapse:collapsed;text-align:left;padding:0px 5px;">{{$confirm_employee_name}}</td></tr>  
                                                <tr>
                                                    <th height="25px" style="border-collapse:collapsed;text-align:left;padding:0px 5px;">Signature</th>
                                                    <td style="border-collapse:collapsed;text-align:left;padding:0px 5px;">

                                                    @if(isset($employee_signature))
                                                        <img src="{{$employee_signature}}" width="2%" style="marhin:0px 5px;" />
                                                    @endif
                                                </td>
                                                </tr>  
                                                <tr><th height="25px" style="border-collapse:collapsed;text-align:left;padding:0px 5px;">Date</th><td style="border-collapse:collapsed;text-align:left;padding:0px 5px;">
                                                {{date('d/m/Y',strtotime($confirm_Date))}}
                                            </td></tr>  
                                                
                                            </table>                                            
            </div>      
        </body>
        </html>