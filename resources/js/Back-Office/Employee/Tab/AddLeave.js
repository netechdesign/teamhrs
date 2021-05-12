import React, { Component, Suspense } from 'react';
import {Route, Switch, Redirect,NavLink,Link} from 'react-router-dom';
import {Row, Col, Card, Table,Button,Modal,Tabs, Tab,Form,Nav} from 'react-bootstrap';
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import MaskedInput from 'react-text-mask';
import validator from 'validator';
import axios from 'axios'
import PNotify from "pnotify/dist/es/PNotify";

import Aux from "../../../hoc/_Aux";
import { formatSingle } from 'highcharts';
let id='';
const baseurl= window.location.origin;
function successDesktopPNotify(edit='') {
    
    let message = (edit!=''?"Leave edited successfully":"Leave added successfully");
     
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
class AddLeave extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            _method:'',
            user_id:'',
            allotted_year:'',
            leave_balance:'',
            used_leave:'',
            allotted_leave_limit:'',
            buttonName:'Add',
            apiload:false
        }
        if(this.props.location.state){
            id = this.props.location.state.userId;
            }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    handleSubmit =(e) =>{
        e.preventDefault();
        
        
        this.setState({apiload:true});
        this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading</span>});
        const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
        let Id='';
        if(this.props.match.params.id){
            Id = '/'+this.props.match.params.id;
            }
        axios.post(baseurl+'/api/leaves'+Id,
        this.state,
        {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}}
        ).then(res =>{
                        if(res.data.success){
                        // console.log(res.data.data);
                        
                        this.setState({apiload:false});
                        this.setState({formSubmitting:false});
                        this.setState({buttonName:'Add'});
                        
                        if(res.data.updated){
                            successDesktopPNotify('edit');
                            this.setState({buttonName:'Edit'});
                        }else{
                              successDesktopPNotify();
                              this.props.history.push({pathname:'/employee-Detail/Leave',state:{userId:id}}); 
                         }
                        
                        }else{
                         
                        PNotify.error({
                            title: "Alert",
                            text:res.data.message,
                        });
                        this.setState({apiload:false});
                        this.setState({formSubmitting:false});
                        this.setState({buttonName:'Add'});
                        
                        }
                    }
          ).catch(err =>{
                    PNotify.error({
                        title: "System Error",
                        text:err,
                    });
                    this.setState({formSubmitting:false});
                    this.setState({buttonName:'add'});
                    
                    
                }
        )
    }
    componentDidMount(){
        
        if(this.props.location.state){
            this.setState({user_id:this.props.location.state.userId});
            
        }
        if(this.props.match.params.id){
            this.getData(this.props.match.params.id);
        }
    }
    
    getData = (id)=>{
        
        
        this.setState({formSubmitting:true});
        this.setState({apiload:true});
        this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading</span>});
        const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
       
        //const data = new FormData()
        //data.append('name', this.state.name);
        
        axios.get(
            baseurl+'/api/leaves/'+id,
            {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                          if(res.data.success){
                              this.setState(res.data.User_leaves);
                              this.setState({apiload:false});
                             this.setState({formSubmitting:false});
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
 render(){
     return(
        <Aux>
                    
                <Row style={{padding: '0px 10px',borderLeft: 'solid 2px #04a9f5'}}>
                        <Col md={12} xl={12} style={{paddingTop:'15px'}}>
                            <h5>{(this.props.match.params.id?'Edit':'Add')} Leave</h5>
                                <div class="invoice-lable text-right"  style={{position: 'absolute',top: '10px',right:'5px'}}>
                                       <NavLink  to= {{pathname:'/employee-Detail/Leave',state:{userId: this.state.user_id}}} className="shadow-5 btn-sm btn-info"><i class="fa fa-mail-reply"></i></NavLink> 
                                </div>
                        </Col>
                        
                </Row>
    
                    <div class="details-tab" style={{borderTop: 'solid 1px #ebeff1',padding:'10px 20px'}}>
                        <div style={{position:'absolute',zIndex:'99999',background:'rgba(255, 255, 255, 0.57)',top:'15%',left:'50%',display:(this.state.apiload?'block':'none')}}>
                        <div id="loader"></div>
                        </div>  

                        <div class="row view-basic-card ">
                        <ValidationForm autoComplete="off" id='formid' onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                                        <Form.Row style={style.rowline} >
                                        <Form.Group as={Col} md="3">
                                                              <Form.Label htmlFor="bank_name">Allotted Year</Form.Label>
                                                            
                                                                    <TextInput
                                                                    name="allotted_year"
                                                                    type="number"
                                                                    id="allotted_year"
                                                                    placeholder="Allotted Year"
                                                                    required value={this.state.allotted_year}
                                                                    onChange={this.handleChange}
                                                                    autoComplete="off"
                                                                />
                                                            
                                                        </Form.Group>
                                                        
                                                        
        
        <Form.Group as={Col} md="3">
                                                              <Form.Label htmlFor="name_of_account_holder">Leave Balance</Form.Label>
                                                            
                                                                    <TextInput
                                                                    name="leave_balance"
                                                                    id="leave_balance"
                                                                    placeholder="Leave Balance"
                                                                    type="number"
                                                                    required value={this.state.leave_balance}
                                                                    onChange={this.handleChange}
                                                                    autoComplete="off"
                                                                />
                                                            
                                                        </Form.Group>
        
        <Form.Group as={Col} md="3">
                                                              <Form.Label htmlFor="account_number">Used Leave</Form.Label>
                                                            
                                                                    <TextInput
                                                                    name="used_leave"
                                                                    id="used_leave"
                                                                    placeholder="Used leave"
                                                                    type="number"
                                                                    required value={this.state.used_leave}
                                                                    onChange={this.handleChange}
                                                                    autoComplete="off"
                                                                />
                                                            
                                                        </Form.Group>
        
        <Form.Group as={Col} md="3">
                                                              <Form.Label htmlFor="allotted_leave_limit">Allotted leave limit</Form.Label>
                                                            
                                                                    <TextInput
                                                                    name="allotted_leave_limit"
                                                                    id="allotted_leave_limit"
                                                                    placeholder="Allotted leave limit"
                                                                    type="number"
                                                                    required value={this.state.allotted_leave_limit}
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
                              

                        </div>

                    </div>
         </Aux>

     );
 }

}
const style = {
    rowline:{
             borderBottom:'solid 1px #f8f9fa',marginBottom:'15px'
            }
}
export default AddLeave;