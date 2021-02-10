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

const baseurl= window.location.origin;

let ajaxabort;
function successDesktopPNotify(id) {
    let message = "Bank Details added successfully";
     if(id!=''){
         message = "Bank Details updated successfully"
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
class BankDetails extends React.Component {
    state = {
        _method:'',
        id:"",
        bank_name:'',
        bank_address:'',
        name_of_account_holder:'',
        sort_code:'',
        account_number:'',
        showModal: false,
        visible : true,
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
            baseurl+'/api/bank_details'+urlid,
            this.state,
            {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                          if(res.data.success){
                             // console.log(res.data.data);
                             this.setState({formSubmitting:false});
                             this.setState({buttonName:'Save'});
                             successDesktopPNotify(this.state.id);
                             this.props.history.push('/services-starter/Uniform-Order');
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
            baseurl+'/api/bank_details/'+id,
            {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                          if(res.data.success){
                              console.log(res.data.Bank_details);
                              this.setState(res.data.Bank_details);
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
        
    }

    render() {

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            
                            <Card.Body>
                                <ValidationForm autoComplete="off" id='formid' onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                                        <Form.Row style={style.rowline} >
                                        <Form.Group as={Col} md="3">
                                                              <Form.Label htmlFor="bank_name">Bank Name</Form.Label>
                                                            
                                                                    <TextInput
                                                                    name="bank_name"
                                                                    id="bank_name"
                                                                    placeholder="Bank Name"
                                                                    required value={this.state.bank_name}
                                                                    onChange={this.handleChange}
                                                                    autoComplete="off"
                                                                />
                                                            
                                                        </Form.Group>
                                                        
                                                        
        
        <Form.Group as={Col} md="3">
                                                              <Form.Label htmlFor="name_of_account_holder">name of account holder</Form.Label>
                                                            
                                                                    <TextInput
                                                                    name="name_of_account_holder"
                                                                    id="name_of_account_holder"
                                                                    placeholder="name of account holder"
                                                                    required value={this.state.name_of_account_holder}
                                                                    onChange={this.handleChange}
                                                                    autoComplete="off"
                                                                />
                                                            
                                                        </Form.Group>
        
        <Form.Group as={Col} md="3">
                                                              <Form.Label htmlFor="account_number">Account Number</Form.Label>
                                                            
                                                                    <TextInput
                                                                    name="account_number"
                                                                    id="account_number"
                                                                    placeholder="account number"
                                                                    required value={this.state.account_number}
                                                                    onChange={this.handleChange}
                                                                    autoComplete="off"
                                                                />
                                                            
                                                        </Form.Group>
        
        <Form.Group as={Col} md="3">
                                                              <Form.Label htmlFor="sort_code">sort code</Form.Label>
                                                            
                                                                    <TextInput
                                                                    name="sort_code"
                                                                    id="sort_code"
                                                                    placeholder="sort code"
                                                                    required value={this.state.sort_code}
                                                                    onChange={this.handleChange}
                                                                    autoComplete="off"
                                                                />
                                                            
                                                        </Form.Group>
          
        <Form.Group as={Col} md="6">
                                                              <Form.Label htmlFor="bank_address">Bank Address</Form.Label>
                                                            
                                                                    <TextInput
                                                                    name="bank_address"
                                                                    id="bank_address"
                                                                    placeholder="Bank Address"
                                                                    required value={this.state.bank_address}
                                                                    onChange={this.handleChange}
                                                                    autoComplete="off"
                                                                />
                                                            
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
export default BankDetails;