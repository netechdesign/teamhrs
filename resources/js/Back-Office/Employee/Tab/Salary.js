import React from 'react';
import {Row, Col, Card, Form, Button,Dropdown,DropdownButton} from 'react-bootstrap';
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
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../employee.css';
const baseurl= window.location.origin;

let ajaxabort;

class Salary extends React.Component {
    state = {
        apiload:true,
        employee_details:[]
        
    };
    
    alreadyAdded =(id) =>{
        
        this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading</span>});
        const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
       
        
        axios.get(
            baseurl+'/api/employee_details/'+id,
            {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                          if(res.data.success){
                           // this.getAddress(res.data.Employee_details.getaddress_id);
                             
                             let employee_details = res.data.Employee_details;
                             this.setState(previousState => ({employee_details: [...previousState.employee_details, employee_details]}));

                              this.setState({apiload:false});
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
        
        const {name,email} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
        if(this.props.location.state){
            this.alreadyAdded(this.props.location.state.userId);
        }
        
    }

    render() {
        
        const title = <i className='feather icon-more-vertical' />;
        return (
            <Aux>
                    
                        <Row style={{padding: '0px 10px',borderLeft: 'solid 2px #04a9f5'}}>

                    <Col md={10} xl={10} style={{paddingTop:'15px'}}>
                        <h5>Employee Detail</h5>
                    </Col>
                    <Col md={2} xl={2} style={{padding:'0px'}}>
                    <DropdownButton alignRight={true}  style={{float: 'right',border: 'none'}}
                        title={title}
                        variant={'outline-secondary'}
                        id={`dropdown-variants-secondary`}
                        key={'secondary'}
                        className='drp-icon'
                    >
                        <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                        
                         </DropdownButton>
                    
                    </Col>
                    </Row>
                    
                    <div class="details-tab" style={{borderTop: 'solid 1px #ebeff1',padding:'10px 20px'}}>
                    
                    <div style={{position:'absolute',zIndex:'99999',background:'rgba(255, 255, 255, 0.57)',top:'15%',left:'50%',display:(this.state.apiload?'block':'none')}}><div id="loader"></div></div>  
	
											<div class="row view-basic-card ">
													<div class="col-12 col-md-6 col-lg-3">
														<label class="pmd-list-subtitle">First Name</label>
														<p class="pmd-list-title">{(this.state.employee_details.length>0?this.state.employee_details[0].first_name:'')}&nbsp; </p>
													</div>
													<div class="col-12 col-md-6 col-lg-3">
														<label class="pmd-list-subtitle">Last Name</label>
														<p class="pmd-list-title">{(this.state.employee_details.length>0?this.state.employee_details[0].last_name:' ')}</p>
													</div>
													<div class="col-12 col-md-6 col-lg-3">
														<label class="pmd-list-subtitle">Middle Name</label>
														<p class="pmd-list-title">{(this.state.employee_details.length>0?this.state.employee_details[0].middle_name:' ')}</p>
													</div>
                                                    <div class="col-12 col-md-6 col-lg-3">
														<label class="pmd-list-subtitle">Date of Birth</label>
														<p class="pmd-list-title">{(this.state.employee_details.length>0?this.state.employee_details[0].date_of_birth:' ')}&nbsp;</p>
													</div>
													
													<div class="col-12 col-md-6 col-lg-3">
														<label class="pmd-list-subtitle">Personal Email</label>
														<p class="pmd-list-title"><a href={(this.state.employee_details.length>0?'mailto:'+this.state.employee_details[0].email:' ')} title={(this.state.employee_details.length>0?this.state.employee_details[0].email:' ')}>
                                                        {(this.state.employee_details.length>0?this.state.employee_details[0].email:' ')}</a></p>
													</div>
                                                    <div class="col-12 col-md-6 col-lg-3">
														<label class="pmd-list-subtitle">Telephone Number</label>
														<p class="pmd-list-title"><a href={(this.state.employee_details.length>0?'tel:'+this.state.employee_details[0].telephone_number:' ')} title={(this.state.employee_details.length>0?this.state.employee_details[0].telephone_number:' ')}>
                                                        {(this.state.employee_details.length>0?this.state.employee_details[0].telephone_number:' ')}
                                                            </a></p>
													</div>
                                                    <div class="col-12 col-md-6 col-lg-3">
														<label class="pmd-list-subtitle">Mobile Number</label>
														<p class="pmd-list-title"><a href={(this.state.employee_details.length>0?'tel:'+this.state.employee_details[0].mobile_number:' ')} title={(this.state.employee_details.length>0?this.state.employee_details[0].mobile_number:' ')}>
                                                        {(this.state.employee_details.length>0?this.state.employee_details[0].mobile_number:' ')}
                                                            </a></p>
													</div>
                                                    <div class="col-12 col-md-6 col-lg-3">
														<label class="pmd-list-subtitle">Emergency Contact</label>
														<p class="pmd-list-title"><a href={(this.state.employee_details.length>0?'tel:'+this.state.employee_details[0].emergency_contact:' ')} title={(this.state.employee_details.length>0?this.state.employee_details[0].emergency_contact:' ')}>
                                                        {(this.state.employee_details.length>0?this.state.employee_details[0].emergency_contact:' ')}
                                                            </a></p>
													</div>
                                                    
													<div class="col-12 col-md-6 col-lg-3">
														<label class="pmd-list-subtitle">Start Date</label>
														<p class="pmd-list-title">{(this.state.employee_details.length>0?this.state.employee_details[0].start_date:' ')} &nbsp;</p>
													</div>
													<div class="col-12 col-md-6 col-lg-3">
														<label class="pmd-list-subtitle">Gender</label>
														<p class="pmd-list-title">{(this.state.employee_details.length>0?(this.state.employee_details[0].gender==1?'Male':'Female'):'')}</p>
													</div>
                                                    <div class="col-12 col-md-6 col-lg-3">
														<label class="pmd-list-subtitle">Address</label>
														<p class="pmd-list-title">{(this.state.employee_details.length>0?this.state.employee_details[0].street+', '+this.state.employee_details[0].city+', '+this.state.employee_details[0].county+', '+this.state.employee_details[0].postcode:'')}</p>
													</div>
													   
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
export default Salary;