import React, { Component, Suspense } from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;


import './assets/css/styles.scss';
import './assets/css/app.scss';
import Aux from "../hoc/_Aux";
import DEMO from "../store/constant";
import Breadcrumb from "../App/layout/AdminLayout/Breadcrumb";

import Datetime from 'react-datetime';
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import Loki from 'react-loki';
import Loadable from 'react-loadable';
import Fullscreen from "react-full-screen";
import windowSize from 'react-window-size';

import MaskedInput from 'react-text-mask';
import validator from 'validator';
import axios from 'axios'
import PNotify from "pnotify/dist/es/PNotify";
import "pnotify/dist/es/PNotifyButtons";
import "pnotify/dist/es/PNotifyConfirm";
import "pnotify/dist/es/PNotifyCallbacks";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import SignatureCanvas from 'react-signature-canvas';
const baseurl= window.location.origin;

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
let ajaxabort;
function successDesktopPNotify(id) {
   let message = "Appication Form Send successfully";
    if(id!=''){
        message = "Application Form updated successfully"
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

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

const todaydate = dd + '/' + mm + '/' + yyyy;
class submitCertification extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            gas_safe_card:null,
            gas_metering_certificates:null,
            electrical_metering_certificates:null,
            eusr_card_not_issued:false,
            eusr_card:null,
            driving_licence_code:null,
            other_documents:[],
            chkBasic: false,
            chkCustom: false,
            checkMeSwitch: false,
            showModal: false,
            visible : true,
            formSubmitting: false,
            buttonName:'Submit'
    };
     // preserve the initial state in a new object
     this.baseState = this.state 
    }

    

    handleCheckboxChange = (e, value) => {
        this.setState({
            [e.target.name]: value
        })
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        
       /*test */  
        
    };

    handleSubmit = (e, formData, inputs) => {
        
        e.preventDefault();
        
        this.setState({formSubmitting:true});
        this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading</span>});
        const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
       
        const data = new FormData($('#documentUpload')[0]);
        data.append('id', this.props.match.params.id);
        data.append('eusr_card_not_issued',this.state.eusr_card_not_issued)
       // let formdata = this.state;
       // data.append('user_cv', this.state.user_cv);
        let urlid='';
            if(this.state.id!=''){
            urlid = '/'+this.state.id;
            } 
        axios.post(
            baseurl+'/api/submitdocument',
            data,
            {headers:{'Accept':'application/json','content-type': 'multipart/form-data'}} 
        ).then(res =>{
                          if(res.data.success){
                             // console.log(res.data.data);
                             this.setState({formSubmitting:false});
                             this.setState({buttonName:'Submit'});
                             successDesktopPNotify(this.state.id);
                             
                             let  userData= JSON.parse(localStorage.getItem('userData'));
                                  userData.application_forms_id=1;
                                  localStorage.setItem('userData',JSON.stringify(userData));
                                  this.props.history.push({pathname:'/document-uploaded',state: { user_name: res.data.form_user.fore_name }});
                                  this.setState(this.baseState);
                            // this.props.history.push('/application');
                          }else{
                              let errorMassage = '';
                            if(res.data.message){
                                errorMassage = res.data.message;
                            }  
                            if(res.data.errors){
                                errorMassage = res.data.errors.name;
                            }
                            //tes
                            if(res.data.email)
                            {
                                errorMassage = res.data.email;
                            } 
                            PNotify.error({
                                title: "System Error",
                                text:errorMassage,
                            });
                            this.setState({formSubmitting:false});
                            this.setState({buttonName:'Submit'});
                            
                          }
                     }
          )
          .catch(err =>{
                    PNotify.error({
                        title: "System Error",
                        text:err,
                    });
                    this.setState({formSubmitting:false});
                    this.setState({buttonName:'Submit'});
                    this.setState({selectedFile:null});
                          
                      }
          )
       
      //  this.props.history.push('/role');

      
    };


    handleErrorSubmit = (e, formData, errorInputs) => {
        //console.log(errorInputs);
    };


    handleClickOutside = (e) =>{
         $('#addressList').html('').hide();
         //$('#location').val('');
      }
    
      
    componentDidMount() {
        
        console.log(this.props.match.params.id);
        
    }

   //cv upload function
   onUploadCv=event=>{
    var file = event.target.files[0];
   
    
    if(this.validateSize(event)){ 
   
  // if return true allow to setState
     this.setState({
        user_cv: file
      });
    
    }
  }
  
  validateSize=(event)=>{
  let file = event.target.files[0];
  let size = 30000000;
  let err = '';
  console.log(file.size);
  if (file.size > size) {
      
   err = file.type+'is too large, please pick a smaller file\n';
   alert(err);
 //  toast.error(err);
 }
 return true
};
addOtherdocuments = () =>{
                            let other_documents = {document_name:''}
                            this.setState(previousState => ({other_documents: [...previousState.other_documents, other_documents]}));
                         }

other_documentDelete =(element) =>{
    let index = element.target.id;
    if (index !== -1) {
        const MySwal = withReactContent(Swal);
            MySwal.fire({
                title: 'Are you sure?',
                type: 'warning',
                showCloseButton: true,
                showCancelButton: true
            }).then((willDelete) => {
                if (willDelete.value) {
                    let other_documents = this.state.other_documents;
                    other_documents.splice(index, 1);
                this.setState({other_documents: other_documents});
                } else {
                    
                }
            });
        
      }
}

toggleHandler = () => {
    
    this.setState(prevState => { return {eusr_card_not_issued: !prevState.eusr_card_not_issued}})
};
    render() {
        
        const other_documents = this.state.other_documents.map((item, index) => {
            return (
                <Form.Row style={style.rowline} >
                    <Form.Group as={Col} md="6">
                        <TextInput
                            name="document_name[]"
                            
                            id={index}
                            
                            placeholder="Document Name"
                            required
                            autoComplete="off"
                            />
                    </Form.Group>
                    <Form.Group as={Col} md="4">
                        <div className="custom-file">
                            <FileInput
                            name="othersfile[]"
                            required
                            // maxFileSize="10000 kb"
                            errorMessage={
                            { required: "Please upload a file",
                            fileType:"Only pdf and word file is allowed",
                            // maxFileSize: "Max file size is 10000 kb"
                            }
                            }
                            onChange={this.onUploadCv}
                            />
                    </div>
                    </Form.Group>
                    <Form.Group as={Col} md="2">
                      <Button variant='outline-danger' style={{'marginTop':'15px'}}  id={index} onClick={(e) => this.other_documentDelete(e)} size='sm'>X</Button>
                    </Form.Group>
                </Form.Row>
                
                    )
                                        
        })
    
        
        return (
            <Aux>
                 <Fullscreen enabled={this.props.isFullScreen}>
                <Breadcrumb/>
                <div className="wrapper">
                    <div>
                    <nav className="navbar navbar-expand-lg navbar-light navbar-default navbar-fixed-top past-main" role="navigation">
                            <div className="container" style={{marginLeft:'0px'}} >
                                <a className="" href="#"><img style={{width:'70%'}} src={DEMO.logo_url} alt="Team Hr" /></a>
                              
                                <div className=" navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto"/>
                                    <ul  style={{position: 'absolute',top: '5px',right: '30px'}} className="navbar-nav my-2 my-lg-0">
                                        
                                        <li className="nav-item">
                                            <a className="nav-link" href={DEMO.BLANK_LINK}>Login</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                          
                        <div className="pcoded-wrapper">
                            <div className="pcoded-content">
                                <div className="pcoded-inner-content">
                                <div className="main-body">
                                        <div className="page-wrapper">
                           
                               
                                  
                        <Row>
                    <Col>
                      
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Documents</Card.Title>
                            </Card.Header>
                            <Card.Body>
                            
                                <ValidationForm autoComplete="off" id='documentUpload' onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                                        
                                        <Form.Row style={style.rowline} >
                                            <Form.Group as={Col} md="4" xs={12} xs={12} sm={12}>
                                                <Form.Label htmlFor="upload_avatar">Gas Safe Card (include front and back)</Form.Label>
                                                <div className="custom-file">
                                                    <FileInput style={{margin:'0px'}}
                                                    name="gas_safe_card[]"
                                                    multiple 
                                                    id="gas_safe_card"
                                                    required
                                                    fileType={["pdf","docx","jpeg","jpg"]}
                                                    // maxFileSize="10000 kb"
                                                    errorMessage={
                                                    { required: "Please upload a file",
                                                    fileType:"Only jpeg, pdf and word file is allowed",
                                                    // maxFileSize: "Max file size is 10000 kb"
                                                    }
                                                    }
                                                    onChange={this.onUploadCv}
                                                    />
                                                </div>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row style={style.rowline} >
                                            <Form.Group as={Col} md="4" xs={12} xs={12} sm={12}>
                                                <Form.Label htmlFor="upload_avatar">Gas Metering Certificates/Qualifications (include all that are relevant for Low Pressure, Medium Pressure, Metering)</Form.Label>
                                                <div className="custom-file">
                                                    <FileInput style={{margin:'0px'}}
                                                    name="gas_metering_certificates[]"
                                                    multiple 
                                                    id="gas_metering_certificates"
                                                    required
                                                    fileType={["pdf","docx","jpeg","jpg"]}
                                                    // maxFileSize="10000 kb"
                                                    errorMessage={
                                                    { required: "Please upload a file",
                                                    fileType:"Only jpeg, pdf and word file is allowed",
                                                    // maxFileSize: "Max file size is 10000 kb"
                                                    }
                                                    }
                                                    onChange={this.onUploadCv}
                                                    />
                                                </div>
                                            </Form.Group>
                                        </Form.Row>

<Form.Row style={style.rowline} >
                                            <Form.Group as={Col} md="4" xs={12} xs={12} sm={12}>
                                                <Form.Label htmlFor="upload_avatar">Electrical Metering Certificates/Qualifications (include all that are relevant for Single Phase, Single off Multi, Three Phase)</Form.Label>
                                                <div className="custom-file">
                                                    <FileInput style={{margin:'0px'}}
                                                    name="electrical_metering_certificates[]"
                                                    multiple 
                                                    id="electrical_metering_certificates"
                                                    required
                                                    fileType={["pdf","docx","jpeg","jpg"]}
                                                    // maxFileSize="10000 kb"
                                                    errorMessage={
                                                    { required: "Please upload a file",
                                                    fileType:"Only jpeg, pdf and word file is allowed",
                                                    // maxFileSize: "Max file size is 10000 kb"
                                                    }
                                                    }
                                                    onChange={this.onUploadCv}
                                                    />
                                                </div>
                                            </Form.Group>
                                        </Form.Row>
                                            <Form.Row style={style.rowline} >
                                            <Form.Group as={Col} md="3" xs={12} xs={12} sm={12}>
                                            
                                            <div className="switch d-inline m-r-10">
                                                <Form.Control type="checkbox" id="unchecked-default" defaultChecked={!this.state.eusr_card_not_issued} onChange={this.toggleHandler} />
                                                <Form.Label htmlFor="unchecked-default" className="cr" />
                                            </div>
                                            <Form.Label>Eusr card not issued</Form.Label>
                                        </Form.Group>
                                        <EUSRcard card_issued={this.state.eusr_card_not_issued} />
                                            </Form.Row>

<Form.Row style={style.rowline} >
                                            <Form.Group as={Col} md="4" xs={12} xs={12} sm={12}>
                                                <Form.Label htmlFor="upload_avatar">Driving Licence</Form.Label>
                                             {/*   <div className="custom-file">
                                                    <FileInput
                                                    name="driving_licence_code"
                                                    id="driving_licence_code"
                                                    required
                                                    fileType={["pdf","docx","jpeg","jpg"]}
                                                    // maxFileSize="10000 kb"
                                                    errorMessage={
                                                    { required: "Please upload a file",
                                                    fileType:"Only jpeg, pdf and word file is allowed",
                                                    // maxFileSize: "Max file size is 10000 kb"
                                                    }
                                                    }
                                                    onChange={this.onUploadCv}
                                                    />
                                                </div>
                                                */}
                                                <TextInput style={{margin:'0px'}}
                                                          name="driving_licence_number"
                                                         placeholder="Driving Licence Number"
                                                        required
                                                        autoComplete="off"
                                                   />
                                               <div style={{display:'block',color:'black'}} class="invalid-feedback">Please enter Last Eight characters of Driving Licence Number</div>
                                                </Form.Group>
                                            <Form.Group as={Col} md="4" xs={12} xs={12} sm={12}>
                                            <Form.Label htmlFor="upload_avatar">&nbsp;</Form.Label>
                                            <TextInput style={{margin:'0px'}}
                                                          name="driving_licence_code_text"
                                                         placeholder="Driving Licence Check Code"
                                                        required
                                                        autoComplete="off"
                                                   />
                                              <div style={{display:'block',color:'black'}} class="invalid-feedback"><a href="https://www.gov.uk/view-driving-licence" target="_blank" >Please click here to get your check code from DVLA website.</a> </div> 
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row style={style.rowline} >
                                        
                                                    <Form.Group as={Col} md="12">
                                                    <b>Other Documents</b>
                                                    <Button variant='secondary' style={{marginLeft:'10px'}}  onClick={this.addOtherdocuments}  size='sm'>+Add</Button>
                                                    </Form.Group>
                                        </Form.Row>
                                        {other_documents}
                                            
                                
                                        <Form.Row>   
                                        <Form.Group as={Col} sm={12}  style={{textAlign:'center'}} className="mt-3">
                                        <Button disabled={this.state.formSubmitting}  type="submit"> {this.state.buttonName}</Button>
                                        </Form.Group>
                                    </Form.Row>
                                </ValidationForm>
                              
                         
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>



                        
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
                </Fullscreen>
            </Aux>
        );
    }
}

class EUSRcard extends React.Component {
    render(){
        
        return(<>
        {(this.props.card_issued==false?<Form.Group as={Col} md="4" xs={12} xs={12} sm={12}>
                                                <Form.Label htmlFor="upload_avatar">EUSR Card (include front and back)</Form.Label>
                                                <div className="custom-file">
                                                    <FileInput style={{margin:'0px'}}
                                                    name="eusr_card[]"
                                                    multiple 
                                                    id="eusr_card"
                                                    required
                                                    fileType={["pdf","docx","jpeg","jpg"]}
                                                    // maxFileSize="10000 kb"
                                                    errorMessage={
                                                    { required: "Please upload a file",
                                                    fileType:"Only jpeg, pdf and word file is allowed",
                                                    // maxFileSize: "Max file size is 10000 kb"
                                                    }
                                                    }
                                                    onChange={this.onUploadCv}
                                                    />
                                                </div>
                                            </Form.Group>:'')
                                                }
        </>)
    }
}
const style = {
    rowline:{
             borderBottom:'solid 1px #f8f9fa',marginBottom:'15px'
            }
}
export default submitCertification;