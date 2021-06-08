import React, { Component, Suspense } from 'react';


const baseurl= window.location.origin;

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import {Link} from "react-router-dom";
import {Row, Col, Card,Button,Modal,Tabs, Tab,Form} from 'react-bootstrap';
import Aux from "../../hoc/_Aux";
import {CheckPermission} from '../../HttpFunctions'; 
import Datetime from 'react-datetime';
import $ from 'jquery';
import axios from 'axios'
import SignatureCanvas from 'react-signature-canvas';
import { ValidationForm, TextInput, BaseFormControl, SelectGroup,Select, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import MaskedInput from 'react-text-mask';
import validator from 'validator';
import PNotify from "pnotify/dist/es/PNotify";
import "pnotify/dist/es/PNotifyButtons";
import "pnotify/dist/es/PNotifyConfirm";
import "pnotify/dist/es/PNotifyCallbacks";

import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
window.jQuery = $;
window.$ = $;
global.jQuery = $;
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
class Edit extends React.Component {
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
        data.append('_method', 'PUT');
        data.append('position_applied_for', this.state.position_applied_for);
        data.append('title', this.state.title);
        data.append('fore_name', this.state.fore_name);
        data.append('surname', this.state.surname);
        data.append('email', this.state.email);
        data.append('telephone_number', this.state.telephone_number);
        data.append('getaddress_id', this.state.getaddress_id);
        data.append('address', this.state.address);
        data.append('postcode', this.state.postcode);
        
        data.append('user_cv', this.state.user_cv);
        
        let urlid='';
            if(this.state.id!=''){
            urlid = '/'+this.state.id;
            } 
        axios.post(
            baseurl+'/api/application_form'+urlid,
            data,
            {headers:{'Accept':'application/json','content-type': 'multipart/form-data','Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                          if(res.data.success){
                             // console.log(res.data.data);
                             this.setState({formSubmitting:false});
                             this.setState({buttonName:'Submit'});
                             successDesktopPNotify(this.state.id);
                             
                             let  userData= JSON.parse(localStorage.getItem('userData'));
                                  userData.application_forms_id=1;
                                  localStorage.setItem('userData',JSON.stringify(userData));
                                  this.props.history.push({pathname:'/applications'});
                                  
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
    
      getData = (id)=>{
        
        
        this.setState({formSubmitting:true});
        this.setState({formShow:true});
        
        this.setState({apiload:true});
        //this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading</span>});
        const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
       
        //const data = new FormData()
        //data.append('name', this.state.name);
       
        axios.get(
            baseurl+'/api/application_form/'+id,
            {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                          if(res.data.success){
                              this.setState(res.data.application_data);
                              this.setState({apiload:false});
                              this.setState({formSubmitting:false});
                              this.setState({formShow:true});
                              this.setState({buttonName:'Edit'});
                            
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
        CheckPermission('application_form','show',history);
        const {name,email} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
        if(this.props.match.params.id){
            this.getData(this.props.match.params.id);
        }
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
    addEmployment =()=>{
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
                 <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Application Edit</Card.Title>
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
                                        <Form.Row>
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

            </Aux>
        );
    }
}
const style = {
    rowline:{
             borderBottom:'solid 1px #f8f9fa',marginBottom:'15px'
            }
}
export default Edit;