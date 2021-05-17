import React from 'react';
import {Row, Col, Card, Form, Button,Dropdown,DropdownButton,Table} from 'react-bootstrap';
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

class AddressHistory extends React.Component {
    state = {
        apiload:true,
        current_address:[],
        address_histories:[]
        
        
    };
    
    alreadyAdded =(id) =>{
        
        this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading</span>});
        const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
       
        
        axios.get(
            baseurl+'/api/address_history/'+id,
            {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                          if(res.data.success){
                            
                            this.setState({current_address:res.data.current_address});
                              if(res.data.Address_histories){
                                this.setState({address_histories:res.data.Address_histories});
                              }
                              
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
        
        const current_address = (this.state.current_address!=''?<tr>
            <td>{this.state.current_address.street}</td>
            <td>{this.state.current_address.city}</td>
            <td>{this.state.current_address.county}</td>
            <td>{this.state.current_address.postcode}</td>
            <td>{this.state.current_address.time_at_address_year} {(this.state.current_address.time_at_address_month!=''?'.'+this.state.current_address.time_at_address_month:'')} Year</td>
            
        </tr>
        :'');
        const address_histories = (this.state.address_histories.length>0?this.state.address_histories.map((item,inx)=>{
            return (<tr>
                <td>{item.street}</td>
                <td>{item.city}</td>
                <td>{item.county}</td>
                <td>{item.postcode}</td>
                <td>{item.time_at_address_year} {(item.time_at_address_month!=''?'.'+item.time_at_address_month:'')} Year</td>
                
            </tr>)
        }):'')
        return (
            <Aux>
                    
                        <Row style={{padding: '0px 10px',borderLeft: 'solid 2px #04a9f5'}}>

                    <Col md={10} xl={10} style={{paddingTop:'15px'}}>
                        <h5>Address History</h5>
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
	
											    
                                                <Table responsive>
                                    <thead>
                                    <tr>
                                        <th>Street</th>
                                        <th>City</th>
                                        <th>County</th>
                                        <th>Postcode</th>
                                        <th>Time at Address</th>
                                        
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {current_address}
                                        {address_histories}
    
                                    </tbody>
                                </Table>
                            
											
										</div>
                </Aux>
        );
    }
}
const style = {
    rowline:{
             borderBottom:'solid 1px #d4d6dc',marginBottom:'15px'
            }
}
export default AddressHistory;