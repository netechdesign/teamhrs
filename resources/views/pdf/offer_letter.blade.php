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
            <div style="font-size: 11px;">Bespoke Metering Solutions Limited, Unit 6, Glover Network Centre, Spire Road, Washington, NE37 3HB.</div>
            <div style="font-size: 11px;">Company Number: 10670768</div>    
            <div style="font-size: 11px; text-align:center;">{PAGENO}/{nbpg}</div>
            </htmlpagefooter>
        
            <div>
                                    <p><b>Private & Confidential</b></p>
                                    <p>
                                    {{$title}} {{ucfirst($fore_name)}} {{ucfirst($surname)}} <br/>
                                    @if(isset($address_details['line_1']))
                                        {{$address_details['line_1']}} <br/>
                                        @if($address_details['line_2']!='') {{$address_details['line_2']}}  <br/> @endif
                                        @if($address_details['line_3']!='') {{$address_details['line_3']}} <br/> @endif
                                        @if($address_details['line_4']!='') {{$address_details['line_4']}} <br/> @endif
                                        {{$address_details['town_or_city']}}  <br/>
                                        {{$address_details['postcode']}}<br/>
                                    @elseif(isset($line_1))
                                        {{$line_1}} <br/>
                                        
                                        @if($line_2!='') {{$line_2}} <br/> @endif
                                        @if($line_3!='') {{$line_3}} <br/> @endif
                                        @if($line_4!='') {{$line_4}} <br/> @endif
                                        {{$town_or_city}} <br/>
                                        {{$postcode}} <br/>
                                    @else
                                    {{$address_details}} <br/>
                                    @endif
                                    DATE @if(isset($created_at)){{$created_at}} @else {{date('d/m/Y')}} @endif
                                    
                                    </p>
                        <p>Dear {{ucfirst($fore_name)}},</p>
                        <p style="text-align:center"><b>Employment with Bespoke Metering Solutions Limited. </b></p>
                        <p>
                        As discussed, we are delighted to offer you employment as {{$job_title}}. This offer is conditional upon Bespoke Metering Solutions Limited receiving satisfactory results from necessary pre-employment checks and assessments, which may include a basic DBS check depending on the nature of your role.
                        </p>
                        <p>Employment with the Bespoke Metering Solutions Limited will commence on the date shown in the Schedule. The first six months of your contract will be treated as a probationary period during which time Bespoke Metering Solutions Limited or yourself may terminate your employment by the notice period stated in your contract. 
                        </p>
                        <p>
                        Your basic remuneration at the commencement of your employment is as shown in the Schedule. Your entitlement to salary accrues daily, payable monthly in arrears on the last working day of the month, directly into your bank or building society account.
                        </p>
                        <p>
                        Your paid holiday entitlement will be at the rate of 31 days per year, inclusive of statutory bank holidays. Your holiday accrues daily. If you work part-time your holiday entitlement will be on a pro-rata basis.
                        </p>
                        <p>
                        Full terms of employment are available in the Employee Handbook, which will be made available to you. 
                        </p>
                        <p>
                        It’s a pleasure to welcome you fully on board and I am confident you will make a valuable contribution to the Company.
                        </p>
                        <p>
                        Yours Sincerely, 
                        </p>
                        <p>
                        <img style="width:30%;" src="images/offerletter_sign.png" /><br>
                        Gareth McKenna<br>
                        Operations Director
                        </p>
                        {{--
                        <p>
                        I understand that this is a fixed term contract and accept the employment terms set out in this Offer Letter and the enclosed Terms and Conditions of Employment.<br>
                        <table>
                        <tr>
                        <td valign="bottom">Signed:</td><td width="70%" style="border-bottom: dotted 0.1px;">
                        @if(isset($confirm_employee_signature))
                        
                             <img style="width:10%;" src="{{$confirm_employee_signature}}" /> 
                        @endif
                        </td>
                        </tr>
                        <tr >
                        <td style="padding-top:15px;">Dated:</td><td width="70%" style="border-bottom: dotted 0.1px;">
                        
                        @if(isset($confirm_employee_date))
                           {{$confirm_employee_date}}
                             
                        @endif</td>
                        </tr>
                        </table>

                        </p>
                        --}}
            </div>
            
            <pagebreak>
                <div style="padding-top:30%;">
                    <p style="font-size:22px;text-align:center;">Bespoke Metering Solutions Limited</p>
                    <p style="font-size:22px;text-align:center;">And</p>
                    <p style="font-size:22px;text-align:center;">{{ucfirst($fore_name)}} {{ucfirst($surname)}} <br/></p>
                    <p style="font-size:22px;text-align:center;">Contract of Employment</p>
                    <p style="font-size:22px;text-align:center;">Dated {{$confirm_Date }}</p>

                </div>
            <pagebreak>        
                <div>
                    <p><b>This is your contract of employment and contains a statement of the applicable terms and conditions of your employment as required by section 1 of the Employment Rights Act 1996. The Schedule attached to the Contract forms part of the Contract.</b></p>
                    <p><b>You are referred to the Employee Handbook and Employer Policies which detail the Employer’s employment policies and procedures. These policies and procedures may be changed from time to time and are not contractual. Although they do not form part of your Contract you are required by this Contract to abide by those policies and procedures that apply to you and to carry out any instructions and directions given to you by the Employer.</b></p>


                        <ol>

                        <li><b>Parties’ details</b>
                            <ol>
                            <li>The parties to the Contract are the employer (“Employer”/”us”/”our”/”we”) and the employee (“Employee”/”you”/”your”) both of whose details are set out in the Schedule hereto.</li>
                            </ol>
                        </li>
                        <li style="margin-top:20px"><b>Date of commencement of employment</b>
                            <ol>
                            <li>Your employment with the Employer will commence on the date shown in the Schedule. No employment with a previous employer shall be regarded as part of a period of continuous employment with the Employer unless otherwise stated.</li>
                            <li>You warrant that you are entitled to work in the UK without any additional approvals and will notify the Employer immediately if you cease to be so entitled at any time during your employment.</li>      
                            </ol>
                        </li>
                        <li style="margin-top:20px"><b>Job Title</b>
                            <ol>
                                <li>Your position with the Employer is shown in the Schedule.</li>
                                <li>You are required to undertake the duties as set out in your job description, which is attached.</li>
                                <li>You may be required from time to time to undertake such other duties as the Employer may reasonably require.</li>
                                <li>During your employment you will take instructions from such persons as are notified to you by us from time to time.</li>
                                <li>You shall not work for anyone else while you are employed by the Employer.</li>
                            </ol>
                        </li>
                        <li style="margin-top:20px"><b>Place of employment</b>
                            <ol>
                                <li>Your place of work is as shown in the Schedule or at such other location or locations within the United Kingdom as the Employer may from time to time direct. You may be required to travel to any location within the United Kingdom for the performance of your duties.</li>
                                <li>The Employer reserves the right, subject to prior discussion with you, to alter your place of work in line with the Employer’s assessment of business conditions.</li>
                                <li>You will not be paid any expenses incurred or time spent by you travelling to your normal place of work.</li>
                            </ol>     
                        </li>
                        
                        <li style="margin-top:20px"><b>References and criminal convictions</b>
                             <ol>
                              <li>Your employment is conditional upon receipt of references deemed satisfactory by the Employer. Whilst every effort will be made to obtain all such references as quickly as possible, your employment may start before some or all your references are received. If so, you agree that the Employer may terminate your employment either with or without notice, or by making a payment in lieu of notice, depending upon the circumstances if any reference fails to meet Employer requirements. The Employer’s decision is final as to whether your references meet the required standard.</li>
                              
                              <li>If your position requires you to have a satisfactory DBS check as a condition of employment this will be stated in the Schedule and by signing this contract you will be agreeing that:
                                
                                      <ol><li>we may conduct this check at our expense; and</li>

                                        <li>we may conduct further DBS checks as we require from time to time and on an annual basis at our expense; and</li>
                                        <li>should your DBS status change you are required to inform us as soon as possible; and</li>
                                        <li>should your DBS check reveal a status that is not consistent with you carrying out your duties your employment may be terminated, either with or without notice, depending upon the circumstances.</li>
                                       </ol>
                               <li>
                             </ol>
                       </li>
                       <li style="margin-top:20px"><b>Remuneration and benefits</b>
                            <ol>
                                <li>
                                Your basic remuneration is as shown in the Schedule. Your entitlement to salary accrues daily, payable monthly in arrears on the last working day of the month, directly into your bank or building society account.
                                </li>
                                <li>
                                We may, in our absolute discretion, pay you a bonus and any bonus that is applicable to you will be set out in the Schedule. However, you have no right to a bonus. Any bonus will be subject to the terms of the policy which applies to it from time to time, it may be withdrawn at any time and the basis upon which it is paid may be varied at any time.
                                </li>
                                <li>
                                Your salary will be reviewed annually and may be changed from time to time at the discretion of the Employer without affecting the other terms of your employment. There is no obligation to award an increase. There will be no review of salary after notice has been given by either party to terminate your employment.
                                </li>
                                <li>
                                If at any time money is owed and payable by you to the Employer, the Employer may lawfully deduct the sum or sums owing to it, from your salary or from any other payment due to be made to you by the Employer. Such deductions may include, but are not limited to, overpayments, loans or advances made to you by the Employer, the costs of repairing any damage or loss to the Employer’s property caused by you, any losses suffered by the Employer as a result of any negligence or breach of duty by you, and any other sums due.
                                </li>
                            </ol>
                       </li>
                       <li style="margin-top:20px"><b>Expenses</b> 
                            <ol>
                                <li>You will be reimbursed on a monthly basis for all reasonable expenses relating to travel, accommodation, entertainment and other out-of-pocket expenses incurred on authorised business in the proper performance of your duties subject to production of all receipts or other evidence as the Employer may require and provided that you comply with the terms of the Employer’s expenses policy.
                                </li>
                            </ol>
                       </li>
                       <li style="margin-top:20px"><b>Hours of work</b>
                            <ol>
                               <li>Your normal working hours are shown in the Schedule.</li>
                               <li>You agree that your weekly working hours may be in excess of those prescribed by law (“the Waiver”). The Waiver will remain in force indefinitely, but you may give the Employer not less than three months’ notice in writing of your intention to terminate the Waiver.</li>
                               <li>The Employer reserves the right to alter working hours as necessary.</li>
                               <li>You are required to comply with policies and procedures in force from time to time including those contained in the Employee Handbook, a copy of which will be made available to you.</li>
                            </ol>
                        </li>
                        <li style="margin-top:20px"><b>Driving</b>
                            <ol>
                                <li>Should your role require you to drive, your employment will be conditional upon you having a full current UK Driving Licence with the appropriate accreditations required for driving within your role. You are required to notify the Employer if you lose these accreditations, if a court fines you and ‘endorses’ your driving license with penalty points or you have your driving licence withdrawn as a result of a criminal conviction. Any failure to comply will be a disciplinary offence that may result in dismissal.</li>
                                <li>
                                Increasing Health and Safety and duty of care requirements mean that the Employer has a corporate responsibility to check the validity of driving licences for employees who are provided with a company vehicle, drive on company business using their own vehicle or are covered under the company insurance. The Employer requires you to submit your driving licence to carry out the necessary checks
                                </li>
                            </ol>
                        </li>
                        <li style="margin-top:20px"><b>Holiday and holiday pay</b>
                            <ol>
                              <li>The holiday year runs from 1st April to 31st March. </li>
                              <li>From the commencement of your employment, your paid holiday entitlement will be at the rate of 31 days per year, inclusive of statutory bank holidays. Your holiday accrues daily. If you work part-time your holiday entitlement will be on a pro-rata basis.</li>
                              <li>Holiday may be taken only at times convenient to the Employer as previously arranged by notice. Further details of the notice arrangements can be found in the Employer's Holiday Policy which is contained in the Employee Handbook.</li>
                             <li>Holiday not taken by 31st March may not be carried forward to the following holiday year without the Employer's written permission. Payment will not be made for holiday not taken.</li>
                             <li>On termination of your employment, any holiday entitlement untaken but accrued in the current holiday year, will be paid by the Employer. The amount of such sum shall be 1/260th of your full-time equivalent normal basic remuneration for each day accrued but untaken. Any holiday taken in excess of your pro rata entitlement will be deducted from your final salary payment.</li>
                            </ol>
                        </li>
                        <li style="margin-top:20px"><b>Pensions</b>
                           <ol><li>We will comply with the employer pension duties applicable to you under Part 1 of the Pensions Act 2008. Further details will be made available to you.</li>
                              <li>The Employer’s pension arrangement is subject to HM Revenue and Customers rules and the terms may change in the future in order to comply with government legislation.</li>
                             <li>If you do not want to be a pension scheme member, you can choose to opt out of saving towards your retirement altogether, although we do recommend you think carefully before you do so.</li>
                          </ol>
                        </li>
                        <li style="margin-top:20px"><b>Absence due to sickness or injury </b>
                          <ol>
                              <li>A self-certification system operates for absence from work due to sickness or injury not exceeding seven days.</Li>
                              <li> If you cannot attend work because of sickness or injury you must, unless there is some good reason to the contrary, follow absence reporting procedures. Failure to do so may result in sickness pay not being paid.</li>
                                <li>Immediately on your return to work you must obtain, complete and return a return-to-work form and a self- certification form or doctor's fit note for periods exceeding seven days.</li>
                               <li>Sickness or injury absence exceeding seven days must be covered by a doctor's fit note.</li>
                               <li>All sickness or injury absence will be entered on your employment record.</li>
                               <li>If you are absent from work for four or more days by reason of sickness or injury, you are entitled to statutory sick pay (SSP); as per SSP rules the first 3 qualifying days are not paid for each period of absence.</li>
                               <li>Sick pay is subject to the usual deductions for PAYE, national insurance, etc.</li>
                               <li>The Employer reserves the right to require you to undergo a medical examination at its request after 12 weeks' absence due to sickness. The Employer will pay the cost of any such examination and all information given in connection with it and any report on it shall be fully disclosed to the Employer.</li>

                          </ol>

                        </li>
                        <li style="margin-top:20px"><b>Probation period</b>
                            <ol>
                               <li>There is a probationary period of 6 months for new employees, during which time you shall be entitled to notice. The Employer's disciplinary scheme shall not apply. The Employer reserves the right to extend this period as appropriate.</li>
                               <li>The probation period will come to an end when confirmed in writing by the Employer.</li>
                            </ol>
                        </li>
                        <li style="margin-top:20px"><b>Notice to terminate</b>
                            <ol>
                                <li>Should your position require you to have a satisfactory DBS check as a condition of employment and you have for any reason not disclosed any information or an unsatisfactory DBS is received, then your contract will be terminated with immediate effect.</li>
                                <li>Once the probationary period is completed, save in cases of gross misconduct, this contract may be terminated at any time by the following periods of notice.</li>
                                <li>The Employer's notice to employees with continuous service from one month up to two years will be one week. Thereafter, employees are entitled to receive one additional week's notice for each year of continuous employment up to a maximum of 12 weeks' notice.</li>
                                <li>Employees' notice to the Employer will be 4 weeks’ notice in writing.</li>
                                <li>We may at our discretion terminate your employment without notice and make a payment in of basic salary in lieu of notice.</li>
                                <li>We shall be entitled to dismiss you at any time without notice or payment in lieu of notice if you commit a serious breach of your obligations as an employee, or if you cease to be entitled to work in the United Kingdom.</li>
                            </ol>
                        </li>
                        <li style="margin-top:20px"><b>Collective Agreements</b>
                           <ol>
                              <li>There are no collective agreements governing your terms and conditions of employment.</li>
                           </ol>
                        </li>
                        <li style="margin-top:20px"><b>Disciplinary and grievance procedures</b>
                            <ol>
                              <li> The disciplinary and grievance procedures applicable to your employment are contained in the employee handbook, a copy of which will be made available to you. They are for guidance only and do not form part of your contract of employment.</li>
                              <li>If you wish to appeal against a disciplinary decision, you may apply in writing in accordance with the disciplinary procedure.</li>
                              <li>We reserve the right to suspend you with pay for a reasonable period for the purposes of investigating any allegation of misconduct or neglect against you.</li>
                              <li>If you wish to raise a grievance, you may apply in writing in accordance with the grievance procedure.</li>
                            </ol>      
                        </li>
                        <li style="margin-top:20px"><b>Confidential Information</b>
                            <ol>
                             <li> You shall not use or disclose to any person either during or at any time after your employment with the Employer any confidential information about the business or affairs of the Employer or any of its business contacts, or about any other matters which may come to your knowledge in the course of your employment. For the purposes of this agreement, Confidential Information means any information or matter which is not in the public domain and which relates to the affairs of the Employer or any of its business contacts.<li>
                             <li>The restriction in clause 14.1 does not apply to:</li>
                            <li>prevent you from making a protected disclosure within the meaning of section 43A of the Employment Rights Act 1996; or<li>
                            <li>use or disclosure that has been authorised by the Employer, is required by law or by your employment.</li>

                            </ol>
                        </li>
                        <li style="margin-top:20px"><b>Data Protection</b>
                             <ol>
                               <li>
                               You confirm that you have read and understood the data protection policy of the Employer, a copy of which is contained in the employee handbook. The Employer is entitled to make changes to its data protection policy and will notify employees in writing of any such changes.
                               </li>
                               <li>You shall comply with the data protection policy when processing personal data during your employment including personal data relating to any employee, customer, client, supplier or agent of the Employer.</li>
                               <li>You consent to the Employer processing data relating to you for legal, personnel, administrative and management purposes and in particular to the processing of any sensitive personal data (as defined in the General Data Protection Regulations Act 2016) relating to you, including, as appropriate:</li>
                                <li>information about your physical or mental health or condition in order to monitor sick leave and take decisions as to your fitness for work; or</li>
                                <li>your racial or ethnic origin or religious or similar information in order to monitor compliance with equal opportunities legislation; or</li>
                                <li>information relating to any criminal proceedings in which you have been involved for insurance purposes and in order to comply with legal requirements and obligations to third parties.</li>
                                <li>The Employer may make such information available to those who provide products or services to the Employer (such as advisers and payroll administrators), regulatory authorities, potential or future employers, governmental or quasi-governmental organisations and potential purchasers of the business or the business in which you work.</li>

                             </ol>
                        </li>
                        <li style="margin-top:20px"><b>Changes to your employment</b>
                            <ol>
                               <li>We reserve the right to make reasonable adjustments to any terms of employment. You will be notified in writing of any changes as soon as possible and in event within one month of the change.</li>
                               <li>If there is a temporary shortage of work for any reason, we will try to maintain your continuity of employment even if this necessitates placing you on short time working, or alternatively, lay-off. If you are placed on short time working, your pay will be reduced according to time worked. If you are placed on lay-off, you will receive no pay other than statutory guarantee pay if you qualify for this.
                               </li>
                            </ol>
                        </li>
                        <li style="margin-top:20px"><b>Employer’s property</b>
                           <ol>
                              <li>All documents, manuals, hardware and software provided for your use by the Employer, and any data or documents (including copies) produced, maintained or stored on our computer systems or other electronic equipment (including mobile phones), remain the property of the Employer.</li>
                              <li>Any property of the Employer in your possession and any original or copy documents obtained by you in the course of your employment shall be returned to the Employer at any time on request and in any event prior to the termination of your employment with the Employer.</li> 
                           </ol>
                        </li>
                        <li style="margin-top:20px"><b>Use of communications</b>
                            <ol>
                            <li>You consent to the Employer monitoring, checking, recording and reviewing telephone calls, computer files, records and emails and to carry out any other compliance, security or risk analysis checks the Employer considers necessary on Employer's property.<li>
                          <li>You understand and accept that you have no expectation of privacy in respect of any electronic, telephone or other communications made at work using or stored on Employer's property.</li>

                            </ol>
                        </li>
                     </ol>
                </div>
                <pagebreak>
                <div>
                <p style="text-align:center"><b style="font-size:24px;">Schedule</b></p>
                <p><b>Parties: </b></p>
                <p><b>The Employer: </b>Bespoke Metering Solutions Limited incorporated and registered in England and Wales with company number 10670768 whose registered office is at Unit 6, Glover Network Centre, Spire Road, Washington, NE37 3HB (“Employer”/”us”/”our”/”we”)</p>
                <p><b>The Employee: </b> {{ucfirst($fore_name)}} {{ucfirst($surname)}},
                                     @if(isset($address_details['line_1']))
                                        {{$address_details['line_1']}} ,
                                        @if($address_details['line_2']!='') {{$address_details['line_2']}} , @endif
                                        @if($address_details['line_3']!='') {{$address_details['line_3']}} , @endif
                                        @if($address_details['line_4']!='') {{$address_details['line_4']}} , @endif
                                        {{$address_details['town_or_city']}}  ,
                                        {{$address_details['postcode']}}
                                    @elseif(isset($line_1))
                                    {{$line_1}} ,
                                        @if($line_2!='') {{$line_2}} , @endif
                                        @if($line_3!='') {{$line_3}} , @endif
                                        @if($line_4!='') {{$line_4}} , @endif
                                        {{$town_or_city}}  ,
                                        {{$postcode}}
                                    @else
                                    {{$address_details}}
                                    @endif
                 (“Employee”/” you”/” your”)</b></p>
                <p><b>Date of Commencement: </b> {{$confirm_Date }}.</p>
                <p><b>Job Title: </b>{{$job_title}}.</p>
                <p><b>Place of Employment: </b>
                @if($place_of_employment==1)
                Your place of employment shall not be fixed. Your region will be allocated in line with the Employer’s assessment of business conditions.
                @elseif($place_of_employment==2)
                Your line manager will allocate your region of management responsibility with your agreed assessment of business conditionsThe Employer reserves the right, subject to prior discussion with you, to alter the size or nature of this region or to reassign the region, in line with the Company’s assessment of business conditions.
                @elseif($place_of_employment==3)
                Bespoke Metering Solutions, Unit 6, Glover Network Centre, Spire Road, Washington, NE37 3HB
                @elseif($place_of_employment==4)
                Bespoke Metering Solutions, Gateway House, Gateway West, Newburn Riverside, Newcastle upon Tyne NE15 8NX
                @elseif($place_of_employment==5)
                Bespoke Metering Solutions, Unit 7, Grovewood Business Centre, Strathclyde Business Park, Bellhill, ML4 3NQ
                @endif
                      
                </p>
                @if($dbscheck=='Yes')
                <p><b>DBS Check: </b>Basic required</p>
                @endif
                <p><b>Remuneration and Benefits: </b></p>
                
                <p><b>Basic: </b>£{{$basic}} per annum</p>
                
                @if($bonus=='Yes')
                <p><b>Bonus: </b>
                    You will be paid bonus in accordance with the rules and rates set out in the Bonus Policy relevant to you as amended from time to time
                </p>
                @endif
                <p><b>Hours of Work: </b>
                @if($hours_of_work==1)
                    45 hours per week, between Monday to Sunday to be worked between the hours of 8am and 10pm. You may be required as part of your role to attend out of hours and emergency callouts as requested by the Employer
                @elseif($hours_of_work==2)
                    Your normal working hours will be 40 hours per week between 08.00 and 18.00 Monday to Friday. You are, however, expected to work without additional pay for additional hours according to the requirements of the Company
                 @elseif($hours_of_work==3)
                    Manually
                @endif
                </p>
                <table border='1'>
                <tr>
                    <td width="33.33%" valign="top">Signed by Gareth McKenna for and on behalf of Bespoke Metering Solutions Limited</td>
                    <td width="33.33%" valign="top">Signature
                    <img style="width:30%;" src="images/offerletter_sign.png" /><br>
                    </td>
                    <td width="33.33%" valign="top">Date <br/>
                    @if(!isset($created))
                    {{date('d/m/y')}}
                    @else
                    
                    @endif
                    </td>
                </tr>
                <tr>
                    <td valign="top">Signed by the Employee</td>
                    <td valign="top">Signature<br/>
                    @if(isset($information_provided_signature))
                        
                        <img style="width:10%;margin-top:10px;" src="{{$information_provided_signature}}" /> 
                   @endif
                    </td>
                    <td valign="top">Date<br/>
                    @if(isset($information_provided_date))
                        {{$information_provided_date}}
                   @endif
                    </td>
                </tr>
                </table>
                </div>
        </body>
        </html>