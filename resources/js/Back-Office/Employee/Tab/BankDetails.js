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

class BankDetails extends React.Component {
    state = {
        apiload:true,
        bank_name:'',
        bank_address:'',
        name_of_account_holder:'',
        sort_code:'',
        account_number:'',
        
    };
    
    alreadyAdded =(id) =>{
        
        this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading</span>});
        const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
       
        
        axios.get(
            baseurl+'/api/bank_details/'+id,
            {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                          if(res.data.success){
                           
                            this.setState(res.data.Bank_details);
                              this.setState({apiload:false});
                             }else{
                                this.setState({apiload:false});
                              let errorMassage = '';
                            
                            PNotify.error({
                                title: "Alert",
                                text:res.data.message,
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
                        <h5>Bank Detail</h5>
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
														<label class="pmd-list-subtitle">Name of Account Holder</label>
														<p class="pmd-list-title">{this.state.name_of_account_holder}&nbsp; </p>
													</div>
                                                    <div class="col-12 col-md-6 col-lg-3">
														<label class="pmd-list-subtitle">Account Number</label>
														<p class="pmd-list-title">{this.state.account_number}&nbsp; </p>
													</div>
                                                    <div class="col-12 col-md-6 col-lg-3">
														<label class="pmd-list-subtitle">Sort Code</label>
														<p class="pmd-list-title">{this.state.sort_code}&nbsp; </p>
													</div>
                                                    
                                                    <div class="col-12 col-md-6 col-lg-3">
														<label class="pmd-list-subtitle">Bank Name</label>
														<p class="pmd-list-title">{this.state.bank_name}&nbsp; </p>
													</div>
													<div class="col-12 col-md-6 col-lg-3">
														<label class="pmd-list-subtitle">Bank Address</label>
														<p class="pmd-list-title">{this.state.bank_address}&nbsp; </p>
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
export default BankDetails;