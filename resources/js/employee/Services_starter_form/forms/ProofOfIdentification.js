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
    let message = "Proof Of Identification added successfully";
     if(id!=''){
         message = "Proof Of Identification updated successfully"
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
class Passport_birth extends React.Component {
    

    render(){
       const contents= (this.props.passport_birth==1?<><Form.Group as={Col} md="4" xs={12} xs={12} sm={12}>
       <Form.Label htmlFor="upload_avatar">Passport Inside </Form.Label>
       <div className="custom-file">
           <FileInput style={{margin:'0px'}}
           name="passport_inside"
           id="passport_inside"
           required
           fileType={["pdf","docx","jpeg","jpg"]}
           // maxFileSize="10000 kb"
           errorMessage={
           { required: "Please upload Passport Inside",
           fileType:"Only jpeg, pdf and word file is allowed",
           // maxFileSize: "Max file size is 10000 kb"
           }
           }
           onChange={this.onUploadCv}
           />
       </div>
   </Form.Group>  
   
   <Form.Group as={Col} md="4" xs={12} xs={12} sm={12}>
       <Form.Label htmlFor="upload_avatar">Passport Outside</Form.Label>
       <div className="custom-file">
           <FileInput style={{margin:'0px'}}
           name="passport_outside"
           id="passport_outside"
           required
           fileType={["pdf","docx","jpeg","jpg","png"]}
           // maxFileSize="10000 kb"
           errorMessage={
           { required: "Please upload Passport Inside", fileType:"Only jpeg, pdf and word file is allowed",
           // maxFileSize: "Max file size is 10000 kb"
           }
           }
           onChange={this.onUploadCv}
           />
       </div>
   </Form.Group></>:(this.props.passport_birth==2?<Form.Group as={Col} md="4" xs={12} xs={12} sm={12}>
                                                <Form.Label htmlFor="upload_avatar">Birth Certificate</Form.Label>
                                                <div className="custom-file">
                                                    <FileInput style={{margin:'0px'}}
                                                    name="birth_certificate"
                                                    id="birth_certificate"
                                                    required
                                                    fileType={["pdf","docx","jpeg","jpg","png"]}
                                                    // maxFileSize="10000 kb"
                                                    errorMessage={
                                                    { required: "Please upload Birth Certificate", fileType:"Only jpeg, pdf and word file is allowed",
                                                    // maxFileSize: "Max file size is 10000 kb"
                                                    }
                                                    }
                                                    onChange={this.onUploadCv}
                                                    />
                                                </div>
                                            </Form.Group>:''));
        return(<>{contents}</>);
    }
}
 
class ProofOfIdentification extends React.Component {
    state = {
        _method:'',
        id:"",
        passport_birth:'',
        p45_available:'',
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
        const {id,auth_token,application_forms_id,name} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
       
        const data = new FormData($('#ProofofIdentification')[0]);
        data.append('passport_birth', this.state.passport_birth);
        data.append('p45_available', this.state.p45_available);
        data.append('application_forms_id', application_forms_id);
        data.append('fore_name', name);
        
        
        let urlid='';
            if(this.state.id!=''){
            urlid = '/'+this.state.id;
            }
        axios.post(
            baseurl+'/api/proof_of_identification'+urlid,
            data,
            {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token,'content-type': 'multipart/form-data'}} 
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
       // this.alreadyAdded();
        const {name,email} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
     
        
         
    }
    
    render() {
        
        
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            
                            <Card.Body>
                                <ValidationForm autoComplete="off" id='ProofofIdentification' onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
             
                                        <Form.Row style={style.rowline} >
                                        <Form.Group as={Col} md="4" xs={12} xs={12} sm={12}>
                                                    
                                                    <Form.Label htmlFor="gender">&nbsp;</Form.Label>
                                                    
                                                        <div className="custom-controls-stacked radio">
                                                            <Radio.RadioGroup 
                                                                name="passport_birth"
                                                                required
                                                                valueSelected={this.state.passport_birth}
                                                                inline={true}
                                                                onChange={this.handleChange}>
                                                                <Radio.RadioItem  id="radio4" label="Passport" value="1" />
                                                                <Radio.RadioItem id="radio5" label="Birth Certificate" value="2" />
                                                                
                                                            </Radio.RadioGroup>
                                                        </div>
                                                    
                                                </Form.Group>
                                                <Passport_birth passport_birth={this.state.passport_birth} />
                                         
                                              
                                        </Form.Row>
                                        <Form.Row style={style.rowline} >
                                                <Form.Group as={Col} md="4" xs={12} xs={12} sm={12}>
                                                
                                                <Form.Label htmlFor="upload_avatar">Proof of Address (Dated within 3 months)</Form.Label>
                                                <div className="custom-file">
                                                    <FileInput style={{margin:'0px'}}
                                                    name="proof_of_address"
                                                    id="proof_of_address"
                                                    required
                                                    fileType={["pdf","docx","jpeg","jpg","png"]}
                                                    // maxFileSize="10000 kb"
                                                    errorMessage={
                                                    { required: "Please upload Proof of Address",
                                                    fileType:"Only jpeg, pdf and word file is allowed",
                                                    // maxFileSize: "Max file size is 10000 kb"
                                                    }
                                                    }
                                                    onChange={this.onUploadCv}
                                                    />
                                                </div>
                                                 </Form.Group>
                                                 
                                                 <Form.Group as={Col} md="4" xs={12} xs={12} sm={12}>
                                                
                                                    <Form.Label htmlFor="upload_avatar">Proof of National Insurance number</Form.Label>
                                                    <div className="custom-file">
                                                        <FileInput style={{margin:'0px'}}
                                                        name="national_insurance_number"
                                                        id="national_insurance_number"
                                                        required
                                                        fileType={["pdf","docx","jpeg","jpg","png"]}
                                                        // maxFileSize="10000 kb"
                                                        errorMessage={
                                                        { required: "Please upload National Insurance Number",
                                                        fileType:"Only jpeg, pdf and word file is allowed",
                                                        // maxFileSize: "Max file size is 10000 kb"
                                                        }
                                                        }
                                                        onChange={this.onUploadCv}
                                                        />
                                                    </div>
                                                 </Form.Group>

                                                 <Form.Group as={Col} md="4" xs={12} xs={12} sm={12}>
                                                    <Form.Label htmlFor="upload_avatar">Proof of right to work (if required)</Form.Label>
                                                    <div className="custom-file">
                                                        <FileInput style={{margin:'0px'}}
                                                        name="right_to_work"
                                                        id="right_to_work"
                                                        fileType={["pdf","docx","jpeg","jpg","png"]}
                                                        // maxFileSize="10000 kb"
                                                        errorMessage={
                                                        {fileType:"Only jpeg, pdf and word file is allowed",
                                                        // maxFileSize: "Max file size is 10000 kb"
                                                        }
                                                        }
                                                        onChange={this.onUploadCv}
                                                        />
                                                    </div>
                                                 </Form.Group>
                                                 </Form.Row>
                                        
                                        <Form.Row> 
                                                 <Form.Group as={Col} md="4" xs={12} xs={12} sm={12}>
                                                
                                                    <Form.Label htmlFor="upload_avatar">Driving Licence (Front)</Form.Label>
                                                    <div className="custom-file">
                                                        <FileInput style={{margin:'0px'}}
                                                        name="driving_licence_front"
                                                        id="driving_licence_front"
                                                        required
                                                        fileType={["pdf","docx","jpeg","jpg","png"]}
                                                        // maxFileSize="10000 kb"
                                                        errorMessage={
                                                        { required: "Please upload Driving Licence Front",
                                                        fileType:"Only jpeg, pdf and word file is allowed",
                                                        // maxFileSize: "Max file size is 10000 kb"
                                                        }
                                                        }
                                                        onChange={this.onUploadCv}
                                                        />
                                                    </div>
                                                 </Form.Group>
                                                 <Form.Group as={Col} md="4" xs={12} xs={12} sm={12}>
                                                    <Form.Label htmlFor="upload_avatar">Driving Licence (Back)</Form.Label>
                                                    <div className="custom-file">
                                                        <FileInput style={{margin:'0px'}}
                                                        name="driving_licence_back"
                                                        id="driving_licence_back"
                                                        required
                                                        fileType={["pdf","docx","jpeg","jpg","png"]}
                                                        // maxFileSize="10000 kb"
                                                        errorMessage={
                                                        { required: "Please upload Driving Licence Back",
                                                        fileType:"Only jpeg, pdf and word file is allowed",
                                                        // maxFileSize: "Max file size is 10000 kb"
                                                        }
                                                        }
                                                        onChange={this.onUploadCv}
                                                        />
                                                    </div>
                                                 </Form.Group>
                                        </Form.Row>
                                        <Form.Row>  
                                        
                                        
                                                 <Form.Group as={Col} md="4" xs={12} xs={12} sm={12}>
                                                    <Form.Label htmlFor="upload_avatar">Passport style photograph (On white background)</Form.Label>
                                                    <div className="custom-file">
                                                        <FileInput style={{margin:'0px'}}
                                                        name="passport_style_photograph"
                                                        id="passport_style_photograph"
                                                        required
                                                        fileType={["pdf","docx","jpeg","jpg","png"]}
                                                        // maxFileSize="10000 kb"
                                                        errorMessage={
                                                        {required: "Please upload Passport style photograph",fileType:"Only jpeg, pdf and word file is allowed",
                                                        // maxFileSize: "Max file size is 10000 kb"
                                                        }
                                                        }
                                                        onChange={this.onUploadCv}
                                                        />
                                                    </div>
                                                 </Form.Group>
                                                 <Form.Group as={Col} md="4" xs={12} xs={12} sm={12}>
                                                    
                                                    <Form.Label htmlFor="gender">is P45 available?</Form.Label>
                                                    
                                                        <div className="custom-controls-stacked radio">
                                                            <Radio.RadioGroup 
                                                                name="p45_available"
                                                                required
                                                                valueSelected={this.state.p45_available}
                                                                inline={true}
                                                                onChange={this.handleChange}>
                                                                <Radio.RadioItem  id="p45_available4" label="Yes" value="Yes" />
                                                                <Radio.RadioItem id="p45_available5" label="No" value="No" />
                                                                
                                                            </Radio.RadioGroup>
                                                        </div>
                                                    
                                                </Form.Group>
                                                {
                                                    (this.state.p45_available=='Yes'?
                                                    <Form.Group as={Col} md="4" xs={12} xs={12} sm={12}>
                                                        <Form.Label htmlFor="upload_avatar">P45</Form.Label>
                                                        <div className="custom-file">
                                                            <FileInput style={{margin:'0px'}}
                                                            name="p45form"
                                                            id="p45"
                                                            required
                                                            fileType={["pdf","docx","jpeg","jpg","png"]}
                                                            // maxFileSize="10000 kb"
                                                            errorMessage={
                                                            {required: "Please upload P45",fileType:"Only jpeg, pdf and word file is allowed",
                                                            // maxFileSize: "Max file size is 10000 kb"
                                                            }
                                                            }
                                                            onChange={this.onUploadCv}
                                                            />
                                                        </div>
                                                    </Form.Group>:
                                                    (this.state.p45_available=='No'?<Form.Group as={Col} md="4" xs={12} xs={12} sm={12}>
                                                        <Form.Label htmlFor="upload_avatar">HMRC Starter Checklist</Form.Label>
                                                        <div className="custom-file">
                                                        <FileInput style={{margin:'0px'}}
                                                        name="hmrc_starter_checklist"
                                                        id="hmrc_starter_checklist"
                                                        required
                                                        fileType={["pdf","docx","jpeg","jpg","png"]}
                                                        // maxFileSize="10000 kb"
                                                        errorMessage={
                                                        {required: "Please upload HMRC Starter Checklist",fileType:"Only jpeg, pdf and word file is allowed",
                                                        // maxFileSize: "Max file size is 10000 kb"
                                                        }
                                                        }
                                                        onChange={this.onUploadCv}
                                                        />
                                                        </div>
                                                        <div style={{display:'block',color:'black',marginTop: '15px'}} class="invalid-feedback"><a href={baseurl+'/uploaded/HMRC_STARTER_CHECKLIST.pdf'} target="_blank" >Please click here to download  HMRC STARTER CHECKLIST.</a> </div> 
                                                    </Form.Group>:'')
                                                    )
                                                }
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
export default ProofOfIdentification;