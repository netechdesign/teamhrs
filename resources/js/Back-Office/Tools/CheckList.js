import React from 'react';
import {Link} from "react-router-dom";
import {Row, Col, Card, Table,Button,Modal,Tabs, Tab,Form} from 'react-bootstrap';
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
import { Table as Tbl, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
window.jQuery = $;
window.$ = $;
global.jQuery = $;


const baseurl= window.location.origin;
function checklistAlert(id) {
    let message = "Added successfully";
     
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
  
class CheckList extends React.Component {

    state = {
        issued_engineer_name: "",
        tools_list:[],
        issued_date:'',
        visible : true,
        formSubmitting: false,
        buttonName:'Save',
        signature:'',
        signature_show:''
        };
    
    toolsList = () =>{
        
          
          document.getElementById("requestLoder").innerHTML = '<img style="width:2%"  src="'+baseurl+'/images/ajax_loader_gray_512.gif"></img>';
          
          const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
      
        axios.get(
          baseurl+'/api/checklist',{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
      ).then(res =>{
                      if(res.data.success){
                        
                           if(res.data.data){
                            document.getElementById("requestLoder").innerHTML = '';
                               this.setState({tools_list:res.data.data}) 
                          }
                             
                      }else{
                         
                      }
                 }
      )
      .catch(err =>{
                      console.log(err);
                  }
      )
      }
    componentDidMount(){
        const { match, location, history } = this.props;
        CheckPermission('user','add',history);
       this.toolsList();
    }
    handleSubmit  = (e, formData, inputs) => {
    
        e.preventDefault();
        
        this.setState({formSubmitting:true,apiload:true});
        this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading</span>});
        const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
        
        //const data = new FormData()
        //data.append('name', this.state.name);
       
        axios.post(
            baseurl+'/api/check_list',this.state,
            {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                          if(res.data.success){
                            checklistAlert();
                          
                           
                             // console.log(res.data.data);
                             this.setState({formSubmitting:false,apiload:false,certification:false});
                             this.setState({buttonName:'Save'});
                             this.props.history.push('/check-list'); 
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
     
       }


    startdateChange = (e) => {

       this.setState({issued_date:e});
    };
    tools_listChange = (element) =>{
        let index = element.target.id;
        
        if(element.target.name=='serial_number'){
            this.state.tools_list[index].serial_number = element.target.value;
         }else{
            let index =element.target.getAttribute("data-id");
           this.state.tools_list[index].is_received  = element.target.value;
        }
        
        this.setState({tools_list:this.state.tools_list});
    
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
//confirm
confirm_employee = {}
confirm_employee_trim = () => {
    this.setState({signature: this.confirm_employee.getTrimmedCanvas()
      .toDataURL('image/png') })
      this.setState({signature_show: this.state.signature })
  }
  confirm_employee_clear = () => {
    this.confirm_employee.clear()
  }

    render(){
        const { match, location, history } = this.props
        const tools_list = this.state.tools_list.map((item, index) => {
            
            return(
                <Tr key={index}>
                <Td style={{padding:'5px'}}>
                    {item.name}
                </Td>
                <Td style={{padding:'5px'}}>
                <TextInput
                                            name="serial_number"
                                            id="serial_number"
                                            placeholder={item.name}
                                             value={item.serial_number}
                                             id={index}
                                             onChange={(e) => this.tools_listChange(e) }
                                            autoComplete="off"
                                        />
                </Td>
                <Td style={{padding:'5px'}}>
                <div className="custom-controls-stacked radio">
                                                <Radio.RadioGroup
                                                    name={'name_'+index}
                                                    required
                                                    valueSelected={item.is_received}
                                                    id={index}
                                                    onChange={(e) =>this.tools_listChange(e)}
                                                    inline={true}
                                                    >
                                                    <Radio.RadioItem id={index+'_yes'} data-id={index} label="Yes" value="Yes" />
                                                    <Radio.RadioItem id={index+'_no'} data-id={index} label="No" value="No" />
                                                    
                                                </Radio.RadioGroup>
                                            </div>
                                            
                </Td>
            </Tr>
            )
        });
        
        return( <Aux>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Add Tools issued</Card.Title>
                            <Button className="btn-sm" style={{'float':'right'}} onClick={()=>{history.goBack()}} ><i  class="feather icon-chevron-left"></i>Back</Button>
                        </Card.Header>
                        <Card.Body>
                            
                            <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                                <Form.Row>
                                    <Form.Group as={Col} md="4">
                                        <Form.Label htmlFor="firstName">Engineer name</Form.Label>
                                        <TextInput
                                            name="issued_engineer_name"
                                            id="issued_engineer_name"
                                            placeholder="Engineer Name"
                                            required value={this.state.issued_engineer_name}
                                            onChange={this.handleChange}
                                            autoComplete="off"
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} md="2">
                                                <Form.Label htmlFor="region">Date</Form.Label>
                                              
                                                <Datetime closeOnSelect={true} onChange={this.startdateChange} value={this.state.issued_date}  dateFormat="D/M/Y" timeFormat={false}  maxDate={new Date()} inputProps={{required:'required',name:"issued_date",placeholder: 'Select Date',autoComplete:'off'}} />
                                            
                                            </Form.Group>

                                </Form.Row>
                                   <Form.Row>
                                    <Form.Group as={Col} md="12">   
                                        <Tbl>
                                            <Thead>
                                            <Tr style={{lineHeight:2.5,borderTop:'solid 1px lightgray',borderBottom:'solid 1px lightgray'}}>
                                                <Th width='60%'>Tools issued</Th>
                                                <Th width='30%'>Serial number</Th>
                                                <Th width='10%'>Received</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                            {tools_list}
                                            </Tbody>
                                        </Tbl> 
                                    </Form.Group>
                                    
                                     <Form.Group as={Col} md="4">
                                         <label>Signed:</label>
                                                          <SignatureCanvas penColor='black' dotSize={() => (this.minWidth + this.maxWidth) / 5}  
                                                                        canvasProps={{width: 300, height: 100, className: 'sigCanvas'}} ref={(ref) => { this.confirm_employee = ref }} onEnd={this.confirm_employee_trim}  />
                                                                        <button type="button" style={{position:'absolute',bottom:'6px'}} onClick={this.confirm_employee_clear}>
                                                                            Clear
                                                                            </button>
                                     </Form.Group>
                                     
                                    <Form.Group as={Col} md="12" id="requestLoder" style={{textalign:'center'}}>   
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

export default CheckList;