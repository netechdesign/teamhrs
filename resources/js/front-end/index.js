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
   let message = "Application Form submitted successfully";
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
class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        _method:'',
        id:"",
        position_applied_for: "",
        title: "",
        fore_name:"",
        surname: "",
        email:"",
        telephone_number:'',
        getaddress_id:'',
        address:'',
        postcode:'',
        selected_interview:'',
        disability:'',
        medical_condition:'',
        medical_condition_reasonable:'',
        any_convictions:'',
        any_convictions_yes:'',
        work_permit_uk:'',
        qualifications:'',
        user_cv:null,
        employment_history:[{name:'',position:'',reason_for_leaving:''}],
        employment_references:[{company_name:'',name:'',position:'',telephone_no:'',email:''},{company_name:'',name:'',position:'',telephone_no:'',email:''}],
        unavailable_for_interview:'',
        confirm_employee_name:'',
        confirm_employee_signature:null,
        confirm_employee_signature_show:null,
        confirm_Date: todaydate,
        information_provided_name:'',
        information_provided_signature:null,
        information_provided_signature_show:null,
        information_provided_Date: todaydate,
        chkBasic: false,
        chkCustom: false,
        checkMeSwitch: false,
        showModal: false,
        visible : true,
        formSubmitting: false,
        buttonName:'Submit',
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
        if(e.target.name=='selected_interview'){ (e.target.value=='NO'? this.setState({disability:''}):'') }
        if(e.target.name=='medical_condition'){ (e.target.value=='NO'? this.setState({medical_condition_reasonable:''}):'') }
        if(e.target.name=='any_convictions'){ (e.target.value=='NO'? this.setState({any_convictions_yes:''}):'') }

        
        
         
        
    };

    handleSubmit = (e, formData, inputs) => {
        
        e.preventDefault();
        
        this.setState({formSubmitting:true});
        this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading</span>});
        const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
       
        const data = new FormData()
        //data.append('name', this.state.name);
        let formdata = this.state;
        data.append('position_applied_for', this.state.position_applied_for);
        data.append('title', this.state.title);
        data.append('fore_name', this.state.fore_name);
        data.append('surname', this.state.surname);
        data.append('email', this.state.email);
        data.append('telephone_number', this.state.telephone_number);
        data.append('getaddress_id', this.state.getaddress_id);
        data.append('address', this.state.address);
        data.append('postcode', this.state.postcode);
        data.append('selected_interview', this.state.selected_interview);
        data.append('disability', this.state.disability);
        data.append('medical_condition', this.state.medical_condition);
        data.append('medical_condition_reasonable', this.state.medical_condition_reasonable);
        data.append('any_convictions', this.state.any_convictions);
        data.append('any_convictions_yes', this.state.any_convictions_yes);
        data.append('work_permit_uk', this.state.work_permit_uk);
        data.append('qualifications', this.state.qualifications);
        data.append('user_cv', this.state.user_cv);
        data.append('employment_history',  JSON.stringify(this.state.employment_history));
        data.append('employment_references', JSON.stringify(this.state.employment_references));
        data.append('unavailable_for_interview', this.state.unavailable_for_interview);
        data.append('confirm_employee_name', this.state.confirm_employee_name);
        data.append('confirm_employee_signature', this.state.confirm_employee_signature);
        
        data.append('confirm_Date', this.state.confirm_Date);
        data.append('information_provided_name', this.state.information_provided_name);
        data.append('information_provided_signature', this.state.information_provided_signature);
        
        data.append('information_provided_Date', this.state.information_provided_Date);
        let urlid='';
            if(this.state.id!=''){
            urlid = '/'+this.state.id;
            } 
        axios.post(
            baseurl+'/api/submitapplication'+urlid,
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
                                  this.props.history.push({pathname:'/thanks',state: { user_name: this.state.fore_name }});
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

     // getaddress list

      locationChange = (e) => {
        
        
          var currentCar = parseInt(e.target.value.length)+1;
         
          
        if(currentCar >2){ 
          $('#addressList').html('<li class="list-group-item">Loading...</li>');
        var currentVal= e.target.value;
        if(ajaxabort && ajaxabort.readyState != 4){
              ajaxabort.abort();
          }
    
    let self=this;
    ajaxabort = $.ajax({
        dataType: 'json',
        method: 'get',
        url:"https://api.getaddress.io/autocomplete/"+currentVal+"?api-key=XrOjpdAkTEiMj4o5WV_uSQ26499&all=true",
        beforeSend: function() {
                                    // setting a timeout
                                    $('#addressList').html('<li class="list-group-item">Loading...</li>');
                                    },
        success:function(data){
          var listData='';
            if(data.suggestions.length>0){
            $.each(data.suggestions, function (key, val) {
              listData += '<li class="list-group-item getArress" data-id="'+val.id+'">'+val.address+'</li>';
                 });
                 $('#addressList').html(listData).show();
                  $('.getArress').click(function(){
                      var id = $(this).attr('data-id');
                      self.getAddress(id);
                  })
            }else{
              listData += '<li class="list-group-item">Address not found</li>';
              $('#addressList').html(listData);
            }
    
                                   
        }
    });
    
    }
    }

    // get address details
  getAddress =(id) => {
    
      let self= this;
    $.ajax({
        dataType: 'json',
        method: 'get',
        url:"https://api.getAddress.io/get/"+id+"?api-key=XrOjpdAkTEiMj4o5WV_uSQ26499",
        success:function(data){
            
          var fullAddress='';
          if(data.formatted_address){
            $.each(data.formatted_address,function(k,vl){
                  if(vl!='')
                     {
                      fullAddress +=vl+', ';
                     }
            })
          }
          let houseno =  data.building_number+' '+data.building_name;
          self.setState({house_no:houseno});
          let street_line='';
          if(data.line_1!=''){
            street_line = data.line_1;
          }
          if(data.line_2!=''){
          //  street_line +=' ,'+data.line_2;
          }
          
          if(data.line_3!=''){
            street_line +=' ,'+data.line_3;
          }
          
          if(data.line_4!=''){
            street_line +=' ,'+data.line_4;
          }

          self.setState({street:street_line});
          self.setState({city:data.town_or_city});
          self.setState({county:data.county});
          self.setState({postcode:data.postcode});
          self.setState({getaddress_id:id});
          
          self.setState({address:fullAddress+' '+data.postcode});
          
          // data.latitude data.longitude
          $( "#location" ).val('');
          $('#addressList').html('').hide();
        }
    }); 
 }

    handleClickOutside = (e) =>{
         $('#addressList').html('').hide();
         //$('#location').val('');
      }
    
      
    componentDidMount() {
      
        const {name,email} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
        let emailaddress = email;
        this.setState({first_name:name,confirm_employee_name:name,information_provided_name:name});
        this.setState({email:emailaddress});
        
    }
    employment_historyChange =(element)=>{
        
        let index = element.target.id;
        
        if(element.target.name=='name'){
           this.state.employment_history[index].name = element.target.value;
        }
        if(element.target.name=='position'){
            this.state.employment_history[index].position = element.target.value;
         }
         if(element.target.name=='reason_for_leaving'){
            this.state.employment_history[index].reason_for_leaving = element.target.value;
         }
        
        this.setState({employment_history:this.state.employment_history});
    }
    employment_historyDelete =(element) =>{
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
                        let employment_history = this.state.employment_history;
                    employment_history.splice(index, 1);
                    this.setState({employment_history: employment_history});
                    } else {
                        
                    }
                });
            
          }
    }
    addEmployment=()=>{
       let employment_history = {name:'',position:'',reason_for_leaving:''}
       
       if(this.state.employment_history.length< 5){
        this.setState(previousState => ({employment_history: [...previousState.employment_history, employment_history]}));
       }
    } 
    
    employment_referencesChange =(element)=>{
        
        let index = element.target.id;
        
        if(element.target.name=='company_name'){
            this.state.employment_references[index].company_name = element.target.value;
         }
        if(element.target.name=='name'){
           this.state.employment_references[index].name = element.target.value;
        }
        if(element.target.name=='position'){
            this.state.employment_references[index].position = element.target.value;
         }
         if(element.target.name=='telephone_no'){
            this.state.employment_references[index].telephone_no = element.target.value;
         }
         if(element.target.name=='email'){
            this.state.employment_references[index].email = element.target.value;
         }
         
        this.setState({employment_references:this.state.employment_references});
    }

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

       this.setState({confirm_Date:e});
    };
   // information_provided
   information_provided = {}
   information_provided_trim = () => {
       this.setState({information_provided_signature: this.information_provided.getTrimmedCanvas()
         .toDataURL('image/png') })
         this.setState({information_provided_signature_show: this.state.information_provided_signature })
     }
     information_provided_clear = () => {
       this.information_provided.clear()
     }
     information_providedChange = (e) => {

      this.setState({information_provided_Date:e});
   };

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

    render() {
        const employmenthistoryList = this.state.employment_history.map((item, index) => {
            
            return(
                 <Tr key={index}>
                    <Td style={{padding:'5px'}}>
                        <TextInput
                        name="name"
                        value ={item.name}
                        id={index}
                        onChange={(e) => this.employment_historyChange(e) }
                        placeholder="Company Name"
                        required={index !=0?true:false}
                        autoComplete="off"
                        />
                    </Td>
                    <Td style={{padding:'5px'}}>
                        <TextInput  
                        name="position"
                        value ={item.position}
                        id={index}
                        onChange={(e) => this.employment_historyChange(e) }
                        placeholder="Position"
                        required={index !=0?true:false}
                        autoComplete="off"
                        />
                    </Td>
                    <Td style={{padding:'5px'}}>
                        <TextInput  
                        name="reason_for_leaving"
                        value ={item.reason_for_leaving}
                        id={index}
                        onChange={(e) => this.employment_historyChange(e) }
                        placeholder="Reason for leaving"
                        required={index !=0?true:false} 
                        autoComplete="off"
                        />
                    </Td>
                    <Td style={{padding:'5px'}}>
                       <Button variant='outline-danger' style={{display:index==0?'none':''}} id={index} onClick={(e) => this.employment_historyDelete(e)} size='sm'>X</Button>
                      { (index==0?<Button variant='secondary'  onClick={this.addEmployment}  size='sm'>+Add</Button>:'') }
                    </Td>
                    </Tr>
            )
        });
        const referencesList = this.state.employment_references.map((item, index) => {
                
            return(
                 <Tr key={index}>
                     
                     <Td style={{padding:'5px'}}>
                        <TextInput
                        name="company_name"
                        value ={item.company_name}
                        id={index}
                        onChange={(e) => this.employment_referencesChange(e) }
                        placeholder="Company Name"
                        required={index !=1?true:false}
                        autoComplete="off"
                        />
                    </Td>
                    <Td style={{padding:'5px'}}>
                        <TextInput
                        name="name"
                        value ={item.name}
                        id={index}
                        onChange={(e) => this.employment_referencesChange(e) }
                        placeholder="Name"
                        required={index !=1?true:false}
                        autoComplete="off"
                        />
                    </Td>
                    <Td style={{padding:'5px'}}>
                        <TextInput  
                        name="position"
                        value ={item.position}
                        id={index}
                        onChange={(e) => this.employment_referencesChange(e) }
                        placeholder="Position"
                        required={index !=1?true:false}
                        autoComplete="off"
                        />
                    </Td>
                    <Td style={{padding:'5px'}}>
                        <TextInput  
                        name="telephone_no"
                        value ={item.telephone_no}
                        id={index}
                        onChange={(e) => this.employment_referencesChange(e) }
                        placeholder="Telephone No"
                        required={index !=1?true:false} 
                        autoComplete="off"
                        />
                    </Td>
                    <Td style={{padding:'5px'}}>
                    <TextInput  
                        name="email"
                        value ={item.email}
                        id={index}
                        onChange={(e) => this.employment_referencesChange(e) }
                        placeholder="Email"
                        required={index !=1?true:false}
                        autoComplete="off"
                        />
                        
                    </Td>
                    </Tr>
            )
        });
        return (
            <Aux>
                 <Fullscreen enabled={this.props.isFullScreen}>
                <Breadcrumb/>
                <div className="wrapper">
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-light navbar-default navbar-fixed-top past-main" role="navigation">
                            <div className="container" style={{marginLeft:'0px'}} >
                                <a className="" href="#"><img style={{width:'70%'}} src={DEMO.logo_url} alt="Team Hr" /></a>
                              
                              {/*  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"/>
                                </button>
        */}
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
                                <Card.Title as="h5">Application Form</Card.Title>
                            </Card.Header>
                            <Card.Body>
                            
                                <ValidationForm autoComplete="off" id='formid' onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                                        
                                                    <Form.Row style={style.rowline} >
                                                         <Form.Group as={Col} md="6">
                                                              <Form.Label htmlFor="position_applied_for"><b>POSITION APPLIED FOR</b></Form.Label>
                                                            
                                                                    <TextInput
                                                                    name="position_applied_for"
                                                                    id="position_applied_for"
                                                                    placeholder="Position applied for"
                                                                    required value={this.state.position_applied_for}
                                                                    onChange={this.handleChange}
                                                                    autoComplete="off"
                                                                />
                                                            
                                                         </Form.Group>
                                                    </Form.Row>
                                                        <Form.Row style={style.rowline} >
                                                        <Form.Group as={Col} md="12">
                                                            <b>PERSONAL DETAILS</b>
                                                            </Form.Group>
                                        <Form.Group as={Col} md="2">
                                                              <Form.Label htmlFor="first_name">Title</Form.Label>
                                                            
                                                                    <TextInput
                                                                    name="title"
                                                                    id="title"
                                                                    placeholder="Title"
                                                                    required value={this.state.title}
                                                                    onChange={this.handleChange}
                                                                    autoComplete="off"
                                                                />
                                                            
                                                        </Form.Group>

                                                        <Form.Group as={Col} md="2">
                                                              <Form.Label htmlFor="asm_name">Forename</Form.Label>
                                                        
                                                        <TextInput
                                                            name="fore_name"
                                                            id="fore_name"
                                                            type="text"
                                                            placeholder="Forename"
                                                            value={this.state.fore_name}
                                                            onChange={this.handleChange}
                                                            autoComplete="off"
                                                        />
                                                        
                                                    </Form.Group>
                                                        <Form.Group as={Col} md="2">
                                                              <Form.Label htmlFor="surname">Surname</Form.Label>
                                                        
                                                        <TextInput
                                                            name="surname"
                                                            id="surname"
                                                            placeholder="Surname"
                                                            value={this.state.surname}
                                                            onChange={this.handleChange}
                                                            autoComplete="off"
                                                        />
                                                        
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="2">
                                                        <Form.Label htmlFor="email">Email</Form.Label>
                                                        <TextInput
                                                            name="email"
                                                            id="email"
                                                            type="text"
                                                            placeholder="Email"
                                                            onChange={this.handleChange}
                                                            required
                                                            value={this.state.email}
                                                            autoComplete="off"
                                                        />
                                                    </Form.Group>     
                                                    <Form.Group as={Col} md="2">
                                                <Form.Label htmlFor="telephone_number">Telephone Number</Form.Label>
                                                    
                                                        <TextInput
                                                            name="telephone_number"
                                                            id="telephone_number"
                                                            type="text"
                                                            placeholder="Telephone Number"
                                                            onChange={this.handleChange}
                                                            required
                                                            value={this.state.telephone_number}
                                                            autoComplete="off"
                                                        />
                                                        
                                                    </Form.Group>
                                                    
                                        </Form.Row>
                                        <Form.Row>   
                                                    <Form.Group as={Col} md="2">
                                                    <Form.Label htmlFor="mobile_number">&nbsp;</Form.Label>
                                                    <TextInput style={{marginBottom:'0px'}}
                                                            name="location"
                                                            id="location"
                                                            type="text"
                                                            placeholder="Search Address"
                                                            onChange={this.locationChange}
                                                            autoComplete="off"
                                                        />
                                                     <ul className="list-group" id="addressList" style={{display: 'none',position: 'absolute',zIndex: '100',height:'600%',overflowY:'overlay'}}></ul>
                                                    </Form.Group>
                                                    
                                        <Form.Group as={Col} md="4">
                                                        <Form.Label htmlFor="mobile_number">Address</Form.Label>
                                                        <TextInput
                                                            name="address"
                                                            id="address"
                                                            type="text"
                                                            placeholder="Address"
                                                            onChange={this.handleChange}
                                                            required
                                                            value={this.state.address}
                                                            autoComplete="off"
                                                        />
                                                    </Form.Group>

<Form.Group as={Col} md="2">
                                                        <Form.Label htmlFor="mobile_number">Postcode</Form.Label>
                                                        <TextInput
                                                            name="postcode"
                                                            id="postcode"
                                                            type="text"
                                                            placeholder="Postcode"
                                                            onChange={this.handleChange}
                                                            required
                                                            value={this.state.postcode}
                                                            autoComplete="off"
                                                        />
                                                    </Form.Group>




                                        </Form.Row>
                                         <Form.Row style={style.rowline} >
                                              <Form.Group as={Col} md="12">
                                                    
                                                    <Form.Label htmlFor="selected_interview">If selected for interview, do you require any reasonable adjustments to be made on account of a disability?</Form.Label>
                                                    
                                                        <div className="custom-controls-stacked radio">
                                                            <Radio.RadioGroup 
                                                                name="selected_interview"
                                                                required
                                                                valueSelected={this.state.selected_interview}
                                                                inline={true}
                                                                onChange={this.handleChange}>
                                                                <Radio.RadioItem  id="selected_interview4" label="YES" value="YES" />
                                                                <Radio.RadioItem id="selected_interview5" label="NO" value="NO" />
                                                                
                                                            </Radio.RadioGroup>
                                                        </div>
                                                        <Form.Label htmlFor="selected_interview">
                                                        Please tell us if there are any ‘reasonable adjustments’ we can make to assist you in your application or with our recruitment process……
                                                        </Form.Label>
                                                        <TextInput
                                                            name="disability"
                                                            id="disability"
                                                            type="text"
                                                            placeholder=""
                                                            onChange={this.handleChange}
                                                            readOnly={this.state.selected_interview=="YES"?false:true}
                                                            
                                                            value={this.state.disability}
                                                            autoComplete="off"
                                                        />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row style={style.rowline} >
                                              <Form.Group as={Col} md="12">
                                                    
                                                    <Form.Label htmlFor="selected_interview">If selected for interview, do you require any reasonable adjustments to be made on account of a medical condition?</Form.Label>
                                                    
                                                        <div className="custom-controls-stacked radio">
                                                            <Radio.RadioGroup 
                                                                name="medical_condition"
                                                                required
                                                                valueSelected={this.state.medical_condition}
                                                                inline={true}
                                                                onChange={this.handleChange}>
                                                                <Radio.RadioItem  id="medical_condition4" label="YES" value="YES" />
                                                                <Radio.RadioItem id="medical_condition5" label="NO" value="NO" />
                                                                
                                                            </Radio.RadioGroup>
                                                        </div>
                                                        <Form.Label htmlFor="selected_interview">
                                                        Please tell us if there are any ‘reasonable adjustments’ we can make to assist you in your application or with our recruitment process……
                                                        </Form.Label>
                                                        <TextInput
                                                            name="medical_condition_reasonable"
                                                            id="medical_condition_reasonable"
                                                            type="text"
                                                            placeholder=""
                                                            onChange={this.handleChange}
                                                            readOnly={this.state.medical_condition=="YES"?false:true}
                                                            
                                                            value={this.state.medical_condition_reasonable}
                                                            autoComplete="off"
                                                        />
                                                </Form.Group>
                                            </Form.Row>
                                            
<Form.Row style={style.rowline} >
                                              <Form.Group as={Col} md="12">
                                                    
                                                    <Form.Label htmlFor="selected_interview">Have you any convictions that are not spent under the rehabilitation of offenders act?</Form.Label>
                                                    
                                                        <div className="custom-controls-stacked radio">
                                                            <Radio.RadioGroup 
                                                                name="any_convictions"
                                                                required
                                                                valueSelected={this.state.any_convictions}
                                                                inline={true}
                                                                onChange={this.handleChange}>
                                                                <Radio.RadioItem  id="any_convictions4" label="YES" value="YES" />
                                                                <Radio.RadioItem id="any_convictions5" label="NO" value="NO" />
                                                                
                                                            </Radio.RadioGroup>
                                                        </div>
                                                        <Form.Label htmlFor="any_convictions">
                                                        If Yes, please provide further details:
                                                        </Form.Label>
                                                        <TextInput
                                                            name="any_convictions_yes"
                                                            id="any_convictions_yes"
                                                            type="text"
                                                            placeholder=""
                                                            onChange={this.handleChange}
                                                            readOnly={this.state.any_convictions=="YES"?false:true}
                                                            
                                                            value={this.state.any_convictions_yes}
                                                            autoComplete="off"
                                                        />
                                                </Form.Group>
                                                
                                                <Form.Group as={Col} md="12">
                                                    
                                                    <Form.Label htmlFor="selected_interview">Do you need a work permit to be employed in the UK?</Form.Label>
                                                    
                                                        <div className="custom-controls-stacked radio">
                                                            <Radio.RadioGroup 
                                                                name="work_permit_uk"
                                                                required
                                                                valueSelected={this.state.work_permit_uk}
                                                                inline={true}
                                                                onChange={this.handleChange}>
                                                                <Radio.RadioItem  id="work_permit_uk4" label="YES" value="YES" />
                                                                <Radio.RadioItem id="work_permit_uk5" label="NO" value="NO" />
                                                                
                                                            </Radio.RadioGroup>
                                                        </div>
                                                        
                                                </Form.Group>
                                            </Form.Row>
                                      
                                            <Form.Row style={style.rowline} >
                                                    <Form.Group as={Col} md="12" >
                                                    <b>QUALIFICATIONS</b>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="12" xs={12} xs={12} sm={12}>
                                                        <Form.Label htmlFor="first_name">I confirm that I have the minimum required qualifications for the role I am applying for, please specify below:</Form.Label>
                                                        <TextInput
                                                            name="qualifications"
                                                            id="qualifications"
                                                            placeholder=""
                                                            multiline
                                                            required
                                                            value={this.state.qualifications}
                                                            onChange={this.handleChange}
                                                            rows="3"
                                                            autoComplete="off"
                                                        />
                                             </Form.Group>
                                                    <Form.Group as={Col} md="4" xs={12} xs={12} sm={12}>
                                            <Form.Label htmlFor="upload_avatar">Upload CV</Form.Label>
                                            <div className="custom-file">
                                                <FileInput
                                                    name="user_cv"
                                                    id="user_cv"
                                                    
                                                    fileType={["pdf","docx","xlsx","jpeg","jpg"]}
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
                                            </Form.Row>
                                      
                                            <Form.Row style={style.rowline} >
                                                    <Form.Group as={Col} md="12">
                                                    <b>EMPLOYMENT HISTORY (5YEARS)</b>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="12">
                                                <Table>
                                                    <Thead>
                                                    <Tr>
                                                        <Th width='20%'>Company Name</Th>
                                                        <Th width='30%'>Position</Th>
                                                        <Th width='40%'>Reason for leaving</Th>
                                                        <Th width='10%'></Th>
                                                    </Tr>
                                                    </Thead>
                                                    <Tbody>
                                                    {employmenthistoryList}
                                                    </Tbody>
                                                    
                                                </Table>
                                                      
                                                    </Form.Group>
                                            </Form.Row>
                                            <Form.Row style={style.rowline} >
                                                    <Form.Group as={Col} md="12">
                                                    <b>REFERENCES</b>
                                                    <p>Please provide details of two referees, one should be your most recent employer. By providing their details, you consent to us contacting them.</p>
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="12">
                                                <Table>
                                                    <Thead>
                                                    <Tr> 
                                                    	 
                                                        <Th width='20%'>Company Name</Th>
                                                        <Th width='20%'>Name</Th>
                                                        <Th width='20%'>Position</Th>
                                                        <Th width='20%'>Telephone No.</Th>
                                                        <Th width='20%'>Email</Th>
                                                    </Tr>
                                                    </Thead>
                                                    <Tbody>
                                                    {referencesList}
                                                    </Tbody>
                                                    
                                                </Table>
                                                      
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="12">
                                                        <Form.Label htmlFor="first_name">Please tell us if there are any dates that you would be unavailable for interview……</Form.Label>
                                                        <TextInput
                                                            name="unavailable_for_interview"
                                                            id="unavailable_for_interview"
                                                            placeholder=""
                                                            multiline
                                                            required
                                                            value={this.state.unavailable_for_interview}
                                                            onChange={this.handleChange}
                                                            rows="3"
                                                            autoComplete="off"
                                                        />
                                                    </Form.Group>
                                            </Form.Row>
                                            <Form.Row style={style.rowline} >
                                                         <Form.Group as={Col} md="12">I confirm that the information I have provided on this form is correct and I accept that providing deliberately false information could result in my dismissal.</Form.Group>
                                                         <Form.Group as={Col} md="3">
                                                              <Form.Label htmlFor="confirm_employee_name">Applicant Name</Form.Label>
                                                            
                                                                    <TextInput
                                                                    name="confirm_employee_name"
                                                                    id="confirm_employee_name"
                                                                    placeholder="Employee Name"
                                                                    required value={this.state.fore_name+" "+this.state.surname}
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
                                            </Form.Row>
                                
                                            <Form.Row style={style.rowline} >
                                                         <Form.Group as={Col} md="12">I hereby give my consent for the contact information provided on this form to be held on computer or other relevant filing systems and to be shared with other accredited organisations or agencies for recruitment opportunities.</Form.Group>
                                                         <Form.Group as={Col} md="3">
                                                              <Form.Label htmlFor="information provided_name">Applicant Name</Form.Label>
                                                            
                                                                    <TextInput
                                                                    name="information_provided_name"
                                                                    id="information_provided_name"
                                                                    placeholder="Applicant Name"
                                                                    required value={this.state.fore_name+" "+this.state.surname}
                                                                    onChange={this.handleChange}
                                                                    autoComplete="off"
                                                                />
                                                            
                                                        </Form.Group>
                                                        
                                                        <Form.Group as={Col} md="4">
                                                          <SignatureCanvas penColor='black' dotSize={() => (this.minWidth + this.maxWidth) / 5}  
                                                                        canvasProps={{width: 300, height: 100, className: 'sigCanvas'}} ref={(ref) => { this.information_provided = ref }} onEnd={this.information_provided_trim}  />
                                                                        <button type="button" style={{position:'absolute',bottom:'6px'}} onClick={this.information_provided_clear}>
                                                                            Clear
                                                                            </button>
                                                         </Form.Group>
                                                        <Form.Group as={Col} md="2">
                                                                {this.state.information_provided_signature_show ? <img src={this.state.information_provided_signature_show} />:null }
                                                            </Form.Group>
                                                                    <Form.Group as={Col} md="2">
                                                                    <Form.Label htmlFor="region">Signature Date</Form.Label>
                                                                
                                                                    <Datetime closeOnSelect={true} onChange={this.information_providedChange} value={this.state.information_provided_Date}  dateFormat="D/M/Y" timeFormat={false}  maxDate={new Date()} inputProps={{required:'required',name:"confirm_Date",placeholder: 'Select Date',autoComplete:'off'}} />
                                                                
                                                        </Form.Group>
                                            </Form.Row>
                                
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
const style = {
    rowline:{
             borderBottom:'solid 1px #f8f9fa',marginBottom:'15px'
            }
}
export default Home;