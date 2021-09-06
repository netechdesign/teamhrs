import React from "react";
import {Link} from "react-router-dom";
import {Row, Col, Card, Form, Button,Alert,Table} from 'react-bootstrap';
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import MaskedInput from 'react-text-mask';
import validator from 'validator';
import Aux from "../../hoc/_Aux";
import AnimatedModal from "../../App/components/AnimatedModal";
import {Pemissionlist} from '../../HttpFunctions'; 
import axios from 'axios'
import PNotify from "pnotify/dist/es/PNotify";
import "pnotify/dist/es/PNotifyButtons";
import "pnotify/dist/es/PNotifyConfirm";
import "pnotify/dist/es/PNotifyCallbacks";
import {CheckPermission} from '../../HttpFunctions'; 
function successDesktopPNotify() {
    PNotify.success({
        title: 'Success',
        text: "Tool added successfully",
        modules: {
            Desktop: {
                desktop: true
            }
        }
    }).on('click', function(e) {
        
    });
}



const baseurl= window.location.origin;
class add  extends React.Component{

    state = {
        name: "",
        chkCustom:false,
        
        visible : true,
        formSubmitting: false,
        buttonName:'Save',
        };
    
       
        
   

    handleChange = (e) => {
        
        this.setState({
            [e.target.name]: e.target.value
        })
        
        var str = e.target.value;
        str = str.replace(/\s/g, '-');
        this.setState({
           slug:str
        })
    };

    handleSubmit = (e, formData, inputs) => {
        e.preventDefault();
        this.setState({formSubmitting:true});
        this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading</span>});
        const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
       
        
        axios.post(
            baseurl+'/api/tool',
            {name:this.state.name,},
            {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                          if(res.data.success){
                             // console.log(res.data.data);
                             this.setState({formSubmitting:false});
                             this.setState({buttonName:'Save'});
                             this.setState({name:''});
                           
                             successDesktopPNotify();
                          }else{
                            if(res.data.errors){
                                res.data.message= res.data.errors.name;
                            }
                            PNotify.error({
                                title: "System Error",
                                text:res.data.errors.name,
                            });
                            this.setState({formSubmitting:false});
                            this.setState({buttonName:'Add'});
                            
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
    
    componentDidMount(){
        const { match, location, history } = this.props;
        CheckPermission('application_form','show',history);
    
    }
 
    
    render() {
        var  addPage =[];
        const { match, location, history } = this.props
        return( <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Add Tool</Card.Title>
                                <Button className="btn-sm" style={{'float':'right'}} onClick={()=>{history.goBack()}} ><i  class="feather icon-chevron-left"></i>Back</Button>
                            </Card.Header>
                            <Card.Body>
                                <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                                    <Form.Row>
                                        <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="name">Name</Form.Label>
                                            <TextInput
                                                name="name"
                                                id="name"
                                                placeholder="Name"
                                                required value={this.state.name}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                            
                            
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

export default add;