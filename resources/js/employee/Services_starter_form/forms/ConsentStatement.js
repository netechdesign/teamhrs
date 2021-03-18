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
    let message = "Consent Statement added successfully";
     if(id!=''){
         message = "Consent Statement updated successfully"
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
class ConsentStatement extends React.Component {
    state = {
        _method:'',
        id:"",
        recruitment_employee_name:'',
        recruitment_employee_signature:null,
        recruitment_employee_signature_show:null,
        recruitment_Date:new Date(),
        screening_employee_name:'',
        screening_employee_signature:null,
        screening_employee_signature_show:null,
        screening_Date:new Date(),
        confirm_employee_name:'',
        confirm_employee_signature:null,
        confirm_employee_signature_show:null,
        confirm_Date:new Date(),
        showModal: false,
        visible : true,
        i_confirm:false,
        is_produce_my_certificate:false,
        is_drug_and_alcohol:false,
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
            baseurl+'/api/consent_statement'+urlid,
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
            baseurl+'/api/consent_statement/'+id,
            {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                          if(res.data.success){
                             
                              this.setState(res.data.Consent_statements);
                              this.setState({recruitment_employee_signature_show:this.state.recruitment_employee_signature});
                              this.setState({recruitment_employee_signature:null});
                              
                              this.setState({screening_employee_signature_show:this.state.screening_employee_signature});
                              this.setState({screening_employee_signature:null});
                              
                              this.setState({confirm_employee_signature_show:this.state.confirm_employee_signature});
                              this.setState({confirm_employee_signature:null});
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
        this.alreadyAdded();
        const {name,email} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
        let emailaddress = email;
        this.setState({recruitment_employee_name: name,screening_employee_name: name,confirm_employee_name: name})
        
        
         
    }
    recruitment_employee = {}
    recruitment_employee_trim = () => {
        this.setState({ recruitment_employee_signature: this.recruitment_employee.getTrimmedCanvas()
          .toDataURL('image/png') })
          this.setState({recruitment_employee_signature_show: this.state.recruitment_employee_signature})
      }
      recruitment_employee_clear = () => {
        this.recruitment_employee.clear()
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

       this.setState({recruitment_Date:today});
    };
    // screening
    screening_employee = {}
    screening_employee_trim = () => {
        this.setState({screening_employee_signature: this.screening_employee.getTrimmedCanvas()
          .toDataURL('image/png') })
          
          this.setState({screening_employee_signature_show:this.state.screening_employee_signature})
      }
      screening_employee_clear = () => {
        this.screening_employee.clear()
      }
      screeningChange = (e) => {
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

       this.setState({screening_Date:today});
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
    render() {
        
        
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            
                            <Card.Body>
                                <ValidationForm autoComplete="off" id='formid' onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
             
                                <Form.Row style={style.rowline} >
                                        <Form.Group as={Col} md="12">
                                        Should your role require a DBS check the Company will apply through a third-party intermediary for a basic disclosure. If you have any unspent convictions they should have been disclosed on the application form you completed. Company policy requires any unspent convictions to be reviewed and a risk assessment to be complete. A basic disclosure will contain information about any unspent convictions in your name. By ticking the below boxes and signing this statement you are consenting to some or all the statements. 
                                        </Form.Group>
                                          <Form.Group as={Col} md="12">
                                      <p>I understand and give my consent to Bespoke Metering Solutions Limited:</p>
                                      <ul>
                                           <li>Submitting an online application to Staffvetting.com for me to complete;</li>
                                           <li>Reviewing the application process;</li>
                                           <li>Being advised by email from Staffvetting.com should my disclosure certificate contain information regarding unspent convictions;</li>
                                        </ul>
                                        </Form.Group>
                                        </Form.Row>
                                    <Form.Row style={style.rowline} >
                                        <Form.Group as={Col} md="12">
                                        <div className="checkbox">
                                        <Checkbox name="is_produce_my_certificate" label="I also hereby agree to produce my certificate if requested to do so during the recruitment process." id="is_produce_my_certificate" value={this.state.is_produce_my_certificate} required onChange={this.handleCheckboxChange} />
                                          </div>
                                            </Form.Group>
                                        <Form.Group as={Col} md="3">
                                                              <Form.Label htmlFor="recruitment_employee_name">Employee Name</Form.Label>
                                                            
                                                                    <TextInput
                                                                    name="recruitment_employee_name"
                                                                    id="recruitment_employee_name"
                                                                    placeholder="Employee Name"
                                                                    required value={this.state.recruitment_employee_name}
                                                                    onChange={this.handleChange}
                                                                    autoComplete="off"
                                                                />
                                                            
                                                        </Form.Group>
                                                        
                                        <Form.Group as={Col} md="4">
                                            <SignatureCanvas penColor='black' dotSize={() => (this.minWidth + this.maxWidth) / 5}  
    canvasProps={{width: 300, height: 100, className: 'sigCanvas'}} ref={(ref) => { this.recruitment_employee = ref }} onEnd={this.recruitment_employee_trim}  />
      <button type="button" style={{position:'absolute',bottom:'6px'}} onClick={this.recruitment_employee_clear}>
          Clear
        </button>
                                       </Form.Group>
                                        <Form.Group as={Col} md="2">
                                               {this.state.recruitment_employee_signature_show ? <img src={this.state.recruitment_employee_signature_show} />:null }
                                        </Form.Group>
                                        <Form.Group as={Col} md="2">
                                                <Form.Label htmlFor="region">Signature Date</Form.Label>
                                                <Datetime closeOnSelect={true} onChange={this.recruitmentChange} value={this.state.recruitment_Date}  dateFormat="D/M/Y" timeFormat={false}  maxDate={new Date()} inputProps={{required:'required',name:"recruitment_Date",placeholder: 'Select Date',autoComplete:'off'}} />
                                        </Form.Group>
                                            
                                            
                                       </Form.Row>


                                    <Form.Row style={style.rowline} >
                                        <Form.Group as={Col} md="12">
                                        <div className="checkbox">
                                        <Checkbox name="is_drug_and_alcohol" label="Should your role require drug and alcohol screening tests you understand and consent to such screening tests for the detection of drugs and alcohol from a sample of saliva." id="is_drug_and_alcohol" value={this.state.is_drug_and_alcohol} required onChange={this.handleCheckboxChange} />
                                        </div>
                                            </Form.Group>
                                        <Form.Group as={Col} md="3">
                                                              <Form.Label htmlFor="screening_employee_name">Employee Name</Form.Label>
                                                            
                                                                    <TextInput
                                                                    name="screening_employee_name"
                                                                    id="screening_employee_name"
                                                                    placeholder="Employee Name"
                                                                    required value={this.state.screening_employee_name}
                                                                    onChange={this.handleChange}
                                                                    autoComplete="off"
                                                                />
                                                            
                                                        </Form.Group>
                                                        
                                        <Form.Group as={Col} md="4">
                                            <SignatureCanvas penColor='black' dotSize={() => (this.minWidth + this.maxWidth) / 5}  
    canvasProps={{width: 300, height: 100, className: 'sigCanvas'}} ref={(ref) => { this.screening_employee = ref }} onEnd={this.screening_employee_trim}  />
      <button type="button" style={{position:'absolute',bottom:'6px'}} onClick={this.screening_employee_clear}>
          Clear
        </button>
                                       </Form.Group>
                                       <Form.Group as={Col} md="2">
                                               {this.state.screening_employee_signature_show ? <img src={this.state.screening_employee_signature_show} />:null }
                                        </Form.Group>
                                                   <Form.Group as={Col} md="2">
                                                <Form.Label htmlFor="region">Signature Date</Form.Label>
                                              
                                                <Datetime closeOnSelect={true} onChange={this.screeningChange} value={this.state.screening_Date}  dateFormat="D/M/Y" timeFormat={false}  maxDate={new Date()} inputProps={{required:'required',name:"screening_Date",placeholder: 'Select Date',autoComplete:'off'}} />
                                            
                                            </Form.Group>
                                       </Form.Row>

                                    <Form.Row style={style.rowline} >
                                        <Form.Group as={Col} md="12">
                                        <div className="checkbox">
                                                <Checkbox name="i_confirm" label="I confirm that the information given in this form is true, complete and accurate." id="i_confirm" value={this.state.i_confirm} required onChange={this.handleCheckboxChange} />
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
                                                        
                                        <Form.Group as={Col} md="4">
                                            <SignatureCanvas penColor='black' dotSize={() => (this.minWidth + this.maxWidth) / 5}  
    canvasProps={{width: 300, height: 100, className: 'sigCanvas'}} ref={(ref) => { this.confirm_employee = ref }} onEnd={this.confirm_employee_trim}  />
      <button type="button" style={{position:'absolute',bottom:'6px'}} onClick={this.confirm_employee_clear}>
          Clear
        </button>
                                       </Form.Group>
                                       <Form.Group as={Col} md="2">
                                               {this.state.confirm_employee_signature_show ? <img src={this.state.confirm_employee_signature_show} />:null }
                                        </Form.Group>
                                                   <Form.Group as={Col} md="2">
                                                <Form.Label htmlFor="region">Signature Date</Form.Label>
                                              
                                                <Datetime closeOnSelect={true} onChange={this.confirmChange} value={this.state.confirm_Date}  dateFormat="D/M/Y" timeFormat={false}  maxDate={new Date()} inputProps={{required:'required',name:"confirm_Date",placeholder: 'Select Date',autoComplete:'off'}} />
                                            
                                            </Form.Group>
                                            <Form.Group as={Col} md="12">
                                            All information provided on these forms will be handled with the utmost sensitivity and confidentiality
                                            </Form.Group>
                                            
                                       </Form.Row>
                                        
                                        <Form.Row>   
                                        <Form.Group as={Col} sm={12} className="mt-3">
                                        <Button disabled={this.state.formSubmitting}  type="submit"> {this.state.buttonName}</Button>
                                        </Form.Group>
                                    </Form.Row>
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
export default ConsentStatement;