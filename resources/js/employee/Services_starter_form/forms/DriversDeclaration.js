import React from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import Datetime from 'react-datetime';
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import MaskedInput from 'react-text-mask';
import validator from 'validator';
import axios from 'axios'
import PNotify from "pnotify/dist/es/PNotify";
import "pnotify/dist/es/PNotifyButtons";
import "pnotify/dist/es/PNotifyConfirm";
import "pnotify/dist/es/PNotifyCallbacks";
import Aux from "../../../hoc/_Aux";
import SignatureCanvas from 'react-signature-canvas'
const baseurl= window.location.origin;

let ajaxabort;
function successDesktopPNotify(id) {
    let message = "Drivers Declaration submitted successfully";
     if(id!=''){
         message = "Drivers Declaration updated successfully"
     }
     PNotify.success({
         title: 'Success',
         text:message,
         modules: {
             Desktop: {
                 desktop: true
             }
         }
     }).on('click', function(e) {
         
     });
 }
class DriversDeclaration extends React.Component {
    state = {
        _method:'',
        id:"",
        fullname:"",
        employee_name:'',
        employee_signature:null,
        employee_signature_show:null,
        employee_date:new Date(),
        confirm_employee_signature:null,
        confirm_employee_signature_show:null,
        confirm_Date:new Date(),
        showModal: false,
        visible : true,
        i_confirm:false,
        formSubmitting: false,
        buttonName:'Save',
    };

    handleCheckboxChange = (e, value) => {
        this.setState({
            [e.target.name]: value
        })
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = (e, formData, inputs) => {
        e.preventDefault();
        this.setState({formSubmitting:true});
        this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading</span>});
        const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
       
        //const data = new FormData()
        //data.append('name', this.state.name);
        let formdata = this.state; 
        let urlid='';
            if(this.state.id!=''){
            urlid = '/'+this.state.id;
            }
        axios.post(
            baseurl+'/api/drivers_declaration'+urlid,
            this.state,
            {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                          if(res.data.success){
                             // console.log(res.data.data);
                             this.setState({formSubmitting:false});
                             this.setState({buttonName:'Save'});
                             successDesktopPNotify(this.state.id);
                             this.props.history.push('/services-starter/Employee-Details');
                             
                          }else{
                              let errorMassage = '';
                            if(res.data.errors){
                                errorMassage = res.data.errors.name;
                            }else{
                                errorMassage = res.data.email;
                                
                            }
                            PNotify.error({
                                title: "System Error",
                                text:errorMassage,
                            });
                            this.setState({formSubmitting:false});
                            this.setState({buttonName:'Save'});
                            
                          }
                     }
          )
          .catch(err =>{
                    PNotify.error({
                        title: "System Error",
                        text:err,
                    });
                    this.setState({formSubmitting:false});
                    this.setState({buttonName:'Add'});
                    this.setState({selectedFile:null});
                          
                      }
          )
       
      //  this.props.history.push('/role');

      
    };


    handleErrorSubmit = (e, formData, errorInputs) => {
        //console.log(errorInputs);
    };

    matchPassword = (value) => {
        return value && value === this.state.password;
    };

    alreadyAdded =() =>{
        
        
        this.setState({formSubmitting:true});
        this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading</span>});
        const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
       
        //const data = new FormData()
        //data.append('name', this.state.name);
        
        axios.get(
            baseurl+'/api/drivers_declaration/'+id,
            {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                          if(res.data.success){
                             
                              this.setState(res.data.Drivers_declaration);
                              this.setState({employee_signature_show:this.state.employee_signature});
                              
                              

                              
                              
                              this.setState({confirm_employee_signature_show:this.state.confirm_employee_signature});
                              
                             this.setState({formSubmitting:false});
                             this.setState({buttonName:'Save'});
                            
                          }else{
                              let errorMassage = '';
                            if(res.data.errors){
                                errorMassage = res.data.errors.name;
                            }else{
                                errorMassage = res.data.email;
                                
                            }
                            
                            this.setState({formSubmitting:false});
                            this.setState({buttonName:'Save'});
                            
                          }
                     }
          )
          .catch(err =>{
                    PNotify.error({
                        title: "System Error",
                        text:err,
                    });
                    this.setState({formSubmitting:false});
                    this.setState({buttonName:'Add'});
                    this.setState({selectedFile:null});
                          
                      }
          )
        
      }
    componentDidMount() {
        this.Employee_details();
        this.alreadyAdded();
        const {name,email} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
        let emailaddress = email;
     
        
        
         
    }
    employee = {}
    employee_trim = () => {
        this.setState({ employee_signature: this.employee.getTrimmedCanvas()
          .toDataURL('image/png') })
          this.setState({employee_signature_show: this.state.employee_signature})
      }
      employee_clear = () => {
        this.employee.clear()
      }
      recruitmentChange = (e) => {
        var today = new Date(e);
        var dd = today.getDate(); 
        var mm = today.getMonth() + 1; 
  
        var yyyy = today.getFullYear(); 
        if (dd < 10) { 
            dd = '0' + dd; 
        } 
        if (mm < 10) { 
            mm = '0' + mm; 
        } 
        var today = dd + '/' + mm + '/' + yyyy; 

       this.setState({employee_date:today});
    };
    
    //confirm
    confirm_employee = {}
    confirm_employee_trim = () => {
        this.setState({confirm_employee_signature: this.confirm_employee.getTrimmedCanvas()
          .toDataURL('image/png') })
          this.setState({confirm_employee_signature_show: this.state.confirm_employee_signature })
      }
      confirm_employee_clear = () => {
        this.confirm_employee.clear()
      }
      confirmChange = (e) => {
        var today = new Date(e);
        var dd = today.getDate(); 
        var mm = today.getMonth() + 1; 
  
        var yyyy = today.getFullYear(); 
        if (dd < 10) { 
            dd = '0' + dd; 
        } 
        if (mm < 10) { 
            mm = '0' + mm; 
        } 
        var today = dd + '/' + mm + '/' + yyyy; 

       this.setState({confirm_Date:today});
    };
    Employee_details =() =>{
        
        
        this.setState({formSubmitting:true});
        this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading</span>});
        const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
       
        //const data = new FormData()
        //data.append('name', this.state.name);
        
        axios.get(
            baseurl+'/api/employee_details/'+id,
            {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                          if(res.data.success){
                            let fullname = res.data.Employee_details.first_name+' '+res.data.Employee_details.middle_name+' '+res.data.Employee_details.last_name;
                            
                            this.setState({fullname :fullname}); 
                            this.setState({employee_name :fullname}); 
                            this.setState({confirm_employee_name :fullname}); 
                            
                            this.setState({formSubmitting:false});
                             this.setState({buttonName:'Save'});
                            
                          }else{
                              let errorMassage = '';
                            if(res.data.errors){
                                errorMassage = res.data.errors.name;
                            }else{
                                errorMassage = res.data.email;
                                
                            }
                            
                            this.setState({formSubmitting:false});
                            this.setState({buttonName:'Save'});
                            
                          }
                     }
          )
          .catch(err =>{
                    PNotify.error({
                        title: "System Error",
                        text:err,
                    });
                    this.setState({formSubmitting:false});
                    this.setState({buttonName:'Add'});
                    this.setState({selectedFile:null});
                          
                      }
          )
        
      }
    render() {
        
        
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            
                            <Card.Body style={{color:'black'}}>
                                <ValidationForm autoComplete="off" id='formid' onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
             
                                <Form.Row style={style.rowline} >
                                        <Form.Group as={Col} md="12" style={{textAlign:'center',color:'black'}}>
                                        <h4><b>Bespoke Metering Solutions - Drivers Declaration Form</b></h4>
                                        <p><u>It is an offence for a person to drive any vehicle on a road otherwise than in accordance with a licence authorising them to drive that vehicle.</u></p>
                                        <p><u>It is also an offence for them to permit another person to drive a company vehicle.</u></p>

                                        </Form.Group>
                                          
                                        </Form.Row>
                                        <Form.Row style={style.rowline} >
                                        <Form.Group as={Col} md="12">
                                        <p>
                                            This is a declaration that I <span style={{borderBottom:'1px solid #ced4da',paddingBottom:'3px',textTransform:'capitalize'}}> {this.state.fullname} </span> have produced my latest licence, and that I have no pending convictions, endorsements or disqualifications.
                                        </p>
                                        <p>
                                        I have had no change in my health, which could affect my entitlement to drive, in particular, for ALL licences:
                                        </p>
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
                                        <p>Also, for vocational licences:</p>
                                        <ul>
                                            <li>Angina, other heart conditions or heart operation</li>
                                            <li>Diabetes controlled by tablets</li>
                                            <li>Visual problems affecting either eye</li>
                                            <li>Any form of stroke, including TIAs (Transiant Ischaemic Attacks)</li>
                                        </ul>
                                        <p>
                                        If any of the above affects me I will inform my employer as soon as possible. I understand that I must also inform DVLA by writing to the: Drivers Medical Group, DVLA, Swansea SA99 1TU (the appropriate medical questionnaires can be downloaded from www.direct.gov.uk/driverhealth). Failure to do so is a criminal offence punishable by a fine of up to a £1,000. I will inform my employer of any road traffic incidents, convictions, endorsements or disqualifications that occur, which could affect my entitlement to drive, as soon as possible.  I understand that the Company carry out driver’s licence checks and I agree to provide the relevant details when requested for these checks to be completed
                                        </p>    
                                        </Form.Group>
                                          
                                        </Form.Row>
                                    <Form.Row style={{borderBottom:'1px solid rgb(114 116 119)',marginBottom: '15px'}} >
                                        
                                        <Form.Group as={Col} md="3">
                                                              <Form.Label htmlFor="employee_name">Employee Name</Form.Label>
                                                            
                                                                    <TextInput
                                                                    name="employee_name"
                                                                    id="employee_name"
                                                                    placeholder="Employee Name"
                                                                    required value={this.state.employee_name}
                                                                    onChange={this.handleChange}
                                                                    autoComplete="off"
                                                                />
                                                            
                                                        </Form.Group>
                                                        {(this.state.id==''?              
                                        <Form.Group as={Col} md="4">
                                            <SignatureCanvas penColor='black' dotSize={() => (this.minWidth + this.maxWidth) / 5}  
    canvasProps={{width: 300, height: 100, className: 'sigCanvas'}} ref={(ref) => { this.employee = ref }} onEnd={this.employee_trim}  />
      <button type="button" style={{position:'absolute',bottom:'6px'}} onClick={this.employee_clear}>
          Clear
        </button>
                                       </Form.Group>:'')}
                                        <Form.Group as={Col} md="2">
                                        {(this.state.id!=''?<div htmlFor="region">Signature</div>:'')}
                                               {this.state.employee_signature_show ? <img src={this.state.employee_signature_show} />:null }
                                        </Form.Group>
                                        <Form.Group as={Col} md="2">
                                                <Form.Label htmlFor="region">Signature Date</Form.Label>
                                                <Datetime closeOnSelect={true} onChange={this.recruitmentChange} value={this.state.employee_date}  dateFormat="D/M/Y" timeFormat={false}  maxDate={new Date()} inputProps={{required:'required',name:"employee_date",placeholder: 'Select Date',autoComplete:'off'}} />
                                        </Form.Group>
                                            
                                            
                                       </Form.Row>

                                      <Form.Row>
                                        <Form.Group as={Col} md="12" style={{textAlign:'center',color:'black'}}>
                                           <h4><b>Bespoke Metering Solutions - DVLA License Checks</b></h4>
                                        </Form.Group>
                                        <Form.Group as={Col} md="12">
                                            <p>The Company will perform a check on your driver’s license before you are permitted to drive any company vehicle. These checks will then be carried out annually, in the event of an accident or upon the declaration of a driving offence. To enable the Company to perform these checks you must generate a code from the DVLA, please see below for instructions on how to do this.  </p>
                                        </Form.Group>
                                        <Form.Group as={Col} md="12">
                                        <p>Before you start you will need:</p>
                                        <ul>
                                            <li>Your driver’s license number</li>
                                            <li>Your national insurance number</li>
                                            <li>The post code on your driver’s license</li>
                                        </ul>
                                        <p>Go to <a href="https://www.gov.uk/view-driving-licence" target='_blanck'>www.gov.uk/view-driving-licence</a> and follow the instructions.</p>
                                        <p>
                                        Once you have generated the code you must provide this along with the last 8 characters of your driver’s license number. The code is valid for 21 days.
                                        </p>    
                                        </Form.Group>
                                        <Form.Group as={Col} md="12">
                                        <div className="checkbox">
                                                <Checkbox name="i_confirm" label="I confirm that I give permission for Bespoke Metering Solutions to carry out the necessary checks on my driving licence." id="i_confirm" value={this.state.i_confirm} required onChange={this.handleCheckboxChange} />
                                            </div>
                                        </Form.Group>
                                        <Form.Group as={Col} md="3">
                                                              <Form.Label htmlFor="confirm_employee_name">Employee Name</Form.Label>
                                                            
                                                                    <TextInput
                                                                    name="confirm_employee_name"
                                                                    id="confirm_employee_name"
                                                                    placeholder="Employee Name"
                                                                    required value={this.state.confirm_employee_name}
                                                                    onChange={this.handleChange}
                                                                    autoComplete="off"
                                                                />
                                                            
                                                        </Form.Group>
                                                        {
                                         (this.state.id==''?              
                                        <Form.Group as={Col} md="4">
                                            <SignatureCanvas penColor='black' dotSize={() => (this.minWidth + this.maxWidth) / 5}  
    canvasProps={{width: 300, height: 100, className: 'sigCanvas'}} ref={(ref) => { this.confirm_employee = ref }} onEnd={this.confirm_employee_trim}  />
      <button type="button" style={{position:'absolute',bottom:'6px'}} onClick={this.confirm_employee_clear}>
          Clear
        </button>
                                       </Form.Group>
                                       :'')
                                       }
                                       <Form.Group as={Col} md="2">
                                       {(this.state.id!=''?<div htmlFor="region">Signature</div>:'')}
                                               {this.state.confirm_employee_signature_show ? <img src={this.state.confirm_employee_signature_show} />:null }
                                        </Form.Group>
                                                   <Form.Group as={Col} md="2">
                                                <Form.Label htmlFor="region">Signature Date</Form.Label>
                                              
                                                <Datetime closeOnSelect={true} onChange={this.confirmChange} value={this.state.confirm_Date}  dateFormat="D/M/Y" timeFormat={false}  maxDate={new Date()} inputProps={{required:'required',name:"confirm_Date",placeholder: 'Select Date',autoComplete:'off'}} />
                                            
                                            </Form.Group>
                                            
                                       </Form.Row>
                                        {
                                         (this.state.id==''?
                                       <Form.Row>   
                                            <Form.Group as={Col} sm={12} className="mt-3">
                                                <Button disabled={this.state.formSubmitting}  type="submit"> {this.state.buttonName}</Button>
                                            </Form.Group>
                                       </Form.Row>
                                         :''
                                         )
                                       }
                                </ValidationForm>
                              </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}
const style = {
    rowline:{
             borderBottom:'solid 1px #f8f9fa',marginBottom:'15px'
            }
}
export default DriversDeclaration;