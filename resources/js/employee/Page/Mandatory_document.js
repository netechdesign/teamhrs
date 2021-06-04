import React, { Component, Suspense } from 'react';
import {Route, Switch, Redirect,NavLink,Link} from 'react-router-dom';
import {Row, Col, Card,Button,Modal,Tabs, Tab,Form,Nav,Alert} from 'react-bootstrap';
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import Aux from "../../hoc/_Aux";
import {CheckPermission} from '../../HttpFunctions'; 
import Datetime from 'react-datetime';
import $ from 'jquery';
import axios from 'axios'
import avatar from '../../assets/images/user/avatar-6.png';



import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
const baseurl= window.location.origin;
class  Mandatory_document extends React.Component {

    constructor(props) {
        super(props);
        this.state={
                    id:"",
                    document_list:[]
                }
        if(this.props.location.state){
            
            //this.alreadyAdded(id);
        }
    }
    componentDidMount() {
                            this.alreadyAdded()
                         }
alreadyAdded =() =>{
        
    this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading</span>});
    const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
   
    
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
                     (item.is_read==0?<div className="custom-controls-stacked radio">
                                                            <Radio.RadioGroup 
                                                                name={'is_read'+index}
                                                                required
                                                                inline={true}
                                                                onChange={this.handleChange}>
                                                                <Radio.RadioItem id={'radio4'+item.mandatory_documents_id} label="yes" value="1" />
                                                                <Radio.RadioItem id={'radio5'+item.mandatory_documents_id} label="no" value="0" />
                                                                
                                                            </Radio.RadioGroup>
                                                        </div>
                     :'Yes'
                    ) 
                    }                               
                    </Td>
                    <Td>
                    <a type="button" target="_blank" href={window.location.origin+'/uploaded/'+item.document_path} class="document_view btn btn-success btn-sm"  >View</a>
                    </Td>
                    
                    
               </Tr>
       )
    })
    
return (
    <Aux>
        <Row>
            <Col>
                <Alert  variant="danger">
                    can you please read following doduments
                </Alert>
                <Card>
                    <Card.Header>
                        <Card.Title as="h5">Mandatory Documents</Card.Title>
                    </Card.Header>
                    <Card.Body>
                    <ValidationForm autoComplete="off" onSubmit={this.handleSubmit}  onErrorSubmit={this.handleErrorSubmit}>
                                <Form.Row>
                                            <Form.Group as={Col} md="12">
                                                <Table>
                                                    <Thead>
                                                    <Tr>
                                                        <Th width='60%'>Document Name</Th>
                                                        <Th width='20%'>have you confirmed to read?</Th>
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
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Aux>
);
}
}

export default Mandatory_document;