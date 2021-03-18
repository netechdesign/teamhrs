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
    let message = "Uniform orders added successfully";
     if(id!=''){
         message = "Uniform orders updated successfully"
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
class UniformOrder extends React.Component {
    state = {
        _method:'',
        id:"",
        polo_shirts:'',
        sweater:'',
        jacket:'',
        shoe_size:'',
        glove_size:'',
        trouser_waist:'',
        trouser_length:'',
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
            baseurl+'/api/uniform_orders'+urlid,
            this.state,
            {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                          if(res.data.success){
                             // console.log(res.data.data);
                             this.setState({formSubmitting:false});
                             this.setState({buttonName:'Save'});
                             successDesktopPNotify(this.state.id);
                             this.props.history.push('/services-starter/Consent-Statement');
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
            baseurl+'/api/uniform_orders/'+id,
            {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                          if(res.data.success){
                              
                              this.setState(res.data.Uniform_orders);
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
                                   <b>Uniform</b>
                                        <Form.Row style={style.rowline} >
                                        
                                        <Form.Group as={Row} style={{width:'100%',marginBottom:'0rem'}} controlId="formHorizontalpolo_shirts">           
                                        <Form.Label column sm={2}>Polo Shirts:</Form.Label>
                                                    <Col sm={10}>
                                                        <div className="custom-controls-stacked radio">
                                                            <Radio.RadioGroup 
                                                                name="polo_shirts"
                                                                required
                                                                valueSelected={this.state.polo_shirts}
                                                                inline={true}
                                                                onChange={this.handleChange}>
                                                                <Radio.RadioItem  id="polo_shirtsS" label="S" value="S" />
                                                                <Radio.RadioItem id="polo_shirtsM" label="M" value="M" />
                                                                <Radio.RadioItem id="polo_shirtsL" label="L" value="L" />
                                                                <Radio.RadioItem id="polo_shirtsXL" label="XL" value="XL" />
                                                                <Radio.RadioItem id="polo_shirts2XL" label="2XL" value="2XL" />
                                                                <Radio.RadioItem id="polo_shirts3XL" label="3XL" value="3XL" />

                                                            </Radio.RadioGroup>
                                                        </div>
                                                    </Col>
                                                </Form.Group> 

                                                 <Form.Group as={Row} style={{width:'100%',marginBottom:'0rem'}} controlId="formHorizontalSweater">           
                                        <Form.Label column sm={2}>Sweater:</Form.Label>
                                                    <Col sm={10}>
                                                        <div className="custom-controls-stacked radio">
                                                            <Radio.RadioGroup 
                                                                name="sweater"
                                                                required
                                                                valueSelected={this.state.sweater}
                                                                inline={true}
                                                                onChange={this.handleChange}>
                                                                <Radio.RadioItem  id="SweaterS" label="S" value="S" />
                                                                <Radio.RadioItem id="SweaterM" label="M" value="M" />
                                                                <Radio.RadioItem id="SweaterL" label="L" value="L" />
                                                                <Radio.RadioItem id="SweaterXL" label="XL" value="XL" />
                                                                <Radio.RadioItem id="Sweater2XL" label="2XL" value="2XL" />
                                                                <Radio.RadioItem id="Sweater3XL" label="3XL" value="3XL" />

                                                            </Radio.RadioGroup>
                                                        </div>
                                                    </Col>
                                                </Form.Group>  
                                                <Form.Group as={Row} style={{width:'100%',marginBottom:'0rem'}} controlId="formHorizontalJacket">           
                                        <Form.Label column sm={2}>Jacket:</Form.Label>
                                                    <Col sm={10}>
                                                        <div className="custom-controls-stacked radio">
                                                            <Radio.RadioGroup 
                                                                name="jacket"
                                                                required
                                                                valueSelected={this.state.jacket}
                                                                inline={true}
                                                                onChange={this.handleChange}>
                                                                <Radio.RadioItem  id="JacketS" label="S" value="S" />
                                                                <Radio.RadioItem id="JacketM" label="M" value="M" />
                                                                <Radio.RadioItem id="JacketL" label="L" value="L" />
                                                                <Radio.RadioItem id="JacketXL" label="XL" value="XL" />
                                                                <Radio.RadioItem id="Jacket2XL" label="2XL" value="2XL" />
                                                                <Radio.RadioItem id="Jacket3XL" label="3XL" value="3XL" />

                                                            </Radio.RadioGroup>
                                                        </div>
                                                    </Col>
                                                </Form.Group> 
                                                                                                             
                                        </Form.Row>
                                        <Form.Row style={style.rowline} >
                                        <Form.Group as={Col} md="2">
                                                        <Form.Label htmlFor="shoe_size">Shoe Size</Form.Label>
                                                        <TextInput
                                                            name="shoe_size"
                                                            id="shoe_size"
                                                            type="number"
                                                            step=".01"
                                                            placeholder="Shoe Size"
                                                            onChange={this.handleChange}
                                                            required
                                                            value={this.state.shoe_size}
                                                            autoComplete="off"
                                                        />
                                                    </Form.Group>
                                                    </Form.Row>
                                        <Form.Row style={style.rowline} >
                                                    <Form.Group as={Col} md="2">
                                                        <Form.Label htmlFor="glove_size">Glove Size</Form.Label>
                                                        <TextInput
                                                            name="glove_size"
                                                            id="glove_size"
                                                            type="number"
                                                            step=".01"
                                                            placeholder="Glove Size"
                                                            onChange={this.handleChange}
                                                            required
                                                            value={this.state.glove_size}
                                                            autoComplete="off"
                                                        />
                                                    </Form.Group>
                                                    </Form.Row>
                                                    <Form.Row style={style.rowline} >
                                                    <Form.Group as={Col} md="1">
                                                    <br/><br/>
                                                        <Form.Label htmlFor="trouser">Trouser:</Form.Label>
                                                        
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="2">
                                                        <Form.Label htmlFor="trouser_waist">waist</Form.Label>
                                                        <TextInput
                                                            name="trouser_waist"
                                                            id="trouser_waist"
                                                            type="number"
                                                            step=".01"
                                                            placeholder="waist"
                                                            onChange={this.handleChange}
                                                            required
                                                            value={this.state.trouser_waist}
                                                            autoComplete="off"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="2">
                                                        <Form.Label htmlFor="trouser_length">length</Form.Label>
                                                       
                                                        <div className="custom-controls-stacked radio">
                                                            <Radio.RadioGroup 
                                                                name="trouser_length"
                                                                required
                                                                valueSelected={this.state.trouser_length}
                                                                inline={true}
                                                                onChange={this.handleChange}>
                                                                <Radio.RadioItem  id="trouser_lengthS" label="Short" value="Short" />
                                                                <Radio.RadioItem id="trouser_lengthR" label="Regular" value="Regular" />
                                                                <Radio.RadioItem id="trouser_lengthL" label="Long" value="Long" />
                                                                

                                                            </Radio.RadioGroup>
                                                        </div>
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
export default UniformOrder;