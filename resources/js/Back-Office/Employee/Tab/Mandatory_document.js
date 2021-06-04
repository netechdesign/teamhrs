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
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
let ajaxabort;

class Mandatory_document extends React.Component {
    state = {
        apiload:true,
        document_list:[]
        
    };
    
    
    componentDidMount() {
        
        const {name,email} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
        if(this.props.location.state){
            this.alreadyAdded(this.props.location.state.userId);
        }
        
    }

    alreadyAdded =(id) =>{
        
        this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading</span>});
        const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
       
        
        axios.get(
            baseurl+'/api/checked_mandatory_document_list/'+id,
            {params: {'employee_details': '1'},headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                          if(res.data.success){
                           // this.getAddress(res.data.Employee_details.getaddress_id);
                             
                             let document_list = res.data.list;
                             this.setState({document_list:document_list});
    
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
        handleChange = (e) =>{
                            let id = e.target.name;
                            id = id.match(/\d+/)[0] 
                            let changelist = this.state.document_list[id]
                          
                            changelist['is_read']=e.target.value;
                            this.setState({document_list:this.state.document_list});
                            const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
                            axios.get(
                                baseurl+'/api/read_mandatory_document/'+changelist['checked_mandatory_documents_id'],
                                {params: {'is_read': e.target.value},headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
                            ).then(res =>{
                                              if(res.data.success){
                                                
                                                this.setState({apiload:false});
                                                 }else{
                                                  let errorMassage = '';
                                                if(res.data.errors){
                                                    errorMassage = res.data.errors.name;
                                                }else{
                                                    errorMassage = res.data.email;
                                                    
                                                }
                                                
                                                
                                              }
                                         }
                              )
                            
                           }
        handleSubmit = (e) => {}
    render(){
        const document_list= this.state.document_list.map((item,index)=>{
            
            return(
                <Tr key={index}>
                    
                        <Td>
                          {item.document_name}
                        </Td>
                        <Td>
                        {
                         (item.is_read==0?'No':'Yes'
                        ) 
                        }                               
                        </Td>
                        <Td width='20%'>{item.read_at}</Td>
                        <Td>
                        <a type="button" target="_blank" href={window.location.origin+'/uploaded/'+item.document_path} class="document_view btn btn-success btn-sm"  >View</a>
                        </Td>
                        
                        
                   </Tr>
           )
        })
        
    return (
        <Aux>
            <Row style={{padding: '0px 10px',borderLeft: 'solid 2px #04a9f5'}}>

<Col md={10} xl={10} style={{paddingTop:'15px'}}>
    <h5>Mandatory Document</h5>
</Col>

</Row>
<div class="details-tab" style={{borderTop: 'solid 1px #ebeff1',padding:'10px 20px'}}>
                    
                    <div style={{position:'absolute',zIndex:'99999',background:'rgba(255, 255, 255, 0.57)',top:'15%',left:'50%',display:(this.state.apiload?'block':'none')}}><div id="loader"></div></div>  
	
                        <ValidationForm autoComplete="off" onSubmit={this.handleSubmit}  onErrorSubmit={this.handleErrorSubmit}>
                                    <Form.Row>
                                                <Form.Group as={Col} md="12">
                                                    <Table>
                                                        <Thead>
                                                        <Tr>
                                                            <Th width='60%'>Document Name</Th>
                                                            <Th width='20%'>Read Document</Th>
                                                            <Th width='20%'>Read Time</Th>
                                                            <Th width='20%'></Th>
                                                            
                                                            
                                                        </Tr>
                                                        </Thead>
                                                        <Tbody>
                                                        {document_list}
                                                        </Tbody>
                                                        
                                                    </Table>
                                                </Form.Group>
                                    </Form.Row> 
                        </ValidationForm>
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
export default Mandatory_document;