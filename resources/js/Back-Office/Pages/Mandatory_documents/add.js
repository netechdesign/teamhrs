import React, { Component, Suspense } from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;
import Aux from "../../../hoc/_Aux";



import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import Select from 'react-select';
import Loki from 'react-loki';
import Loadable from 'react-loadable';
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

let ajaxabort;
function successDesktopPNotify(id) {
   let message = "Document added successfully";
    if(id!=''){
        message = "Document updated successfully"
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
            id:'',
            other_documents:[{document_name:''}],
            role_list:[],
            selected_role:null,
            chkBasic: false,
            chkCustom: false,
            checkMeSwitch: false,
            showModal: false,
            visible : true,
            formSubmitting: false,
            buttonName:'Save'
    };
     // preserve the initial state in a new object
     this.baseState = this.state 
    }

    
    RoleList = (e) =>{
        const id = this.state.id;
          
          //document.getElementById("requestLoder").innerHTML = '<img style="width:2%"  src="'+baseurl+'/images/ajax_loader_gray_512.gif"></img>';
          const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
          
            axios.get(
              baseurl+'/api/roledropdown',{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
          ).then(res =>{
                          if(res.data.success){
                              
                           
                             this.setState({role_list:res.data.data})
                          
                            // document.getElementById("requestLoder").innerHTML = '';
                             
                          }else{
                             
                          }
                     }
          )
          .catch(err =>{
                          console.log(err);
                      }
          )
         
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
        data.append('selected_role', JSON.stringify(this.state.selected_role));
        
       // let formdata = this.state;
       // data.append('user_cv', this.state.user_cv);
        let urlid='';
            if(this.state.id!=''){
            urlid = '/'+this.state.id;
            } 
        axios.post(
            baseurl+'/api/mandatory_documents',
            data,
            {headers:{'Accept':'application/json','content-type': 'multipart/form-data','Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                          if(res.data.success){
                             // console.log(res.data.data);
                             this.setState({formSubmitting:false});
                             this.setState({buttonName:'Submit'});
                             successDesktopPNotify(this.state.id);
                                  this.props.history.push({pathname:'/Mandatory-Documents'});
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
        this.RoleList();
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
RoleHandleChange = selectedOption => {
   // this.setState({ selectedOption });
   this.setState({selected_role:selectedOption})
   // console.log(`Option selected:`, selectedOption);
  };
    render() {
        const { match, location, history } = this.props
        const other_documents = this.state.other_documents.map((item, index) => {
           let dltBtn= (index>0?<Button variant='outline-danger' style={{'marginTop':'15px'}}  id={index} onClick={(e) => this.other_documentDelete(e)} size='sm'>X</Button>:'')
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
                      {dltBtn}
                    </Form.Group>
                </Form.Row>
                
                    )
                                        
        })
    
        
        return (
            <Aux>
                 <Row>
                    <Col>
                      
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Mandatory Documents</Card.Title>
                                <Button className="btn-sm" style={{'float':'right'}} onClick={()=>{history.goBack()}} ><i  class="feather icon-chevron-left"></i>Back</Button>
                            </Card.Header>
                            <Card.Body>
                            
                                <ValidationForm autoComplete="off" id='documentUpload' onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                                        {other_documents}
                                        <Form.Row style={style.rowline} >
                                        
                                        <Form.Group as={Col} md="12">
                                        
                                        <Button variant='secondary' style={{marginLeft:'10px'}}  onClick={this.addOtherdocuments}  size='sm'>+ Add Documents</Button>
                                        </Form.Group>
                            </Form.Row> 
                            <Form.Row>       
                                    <Form.Group as={Col} md="4">
                                    <Form.Label htmlFor="firstName">Role</Form.Label>
                                    <Select isMulti  onChange={this.RoleHandleChange}
                                            className="basic-single"
                                            classNamePrefix="select"
                                            name="role_id"
                                            options={this.state.role_list}
                                            value={this.state.selected_role}
                                            placeholder="Select Role"
                                        />
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
export default submitCertification;