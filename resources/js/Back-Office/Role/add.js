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
        text: "Role added successfully",
        modules: {
            Desktop: {
                desktop: true
            }
        }
    }).on('click', function(e) {
        
    });
}


const Trrow = (property) =>{
    
   let pageName = property.rows.map((value,index)=>{
        return <td key={index}> <Checkbox name={value.name}  label={value.page_name} id={property.index+'_'+value.name} value={value.Ischeck} onChange={property.onchildChange}  /></td>
    })
     return(<tr><th><Checkbox name={property.parent}  label={property.parent.toUpperCase()} onChange={property.onparentChange} id={property.index}   /></th>{pageName}</tr>);
    
}
const baseurl= window.location.origin;
class add  extends React.Component{

    state = {
        name: "",
        slug: "",
        
        chkCustom:false,
        permission:[],
        pageArray:[],
        visible : true,
        formSubmitting: false,
        buttonName:'Save',
        };
    
       
        
        chageParent = (e,value)=>{
            
           // e.target.checked=true;
           const checkValue = e.target.checked;
           const parentname = e.target.name;
           const parentIndex= e.target.id;
           let permission = [ ...this.state.permission ];

           if(permission[parentIndex][parentname]){
            permission[parentIndex][parentname].map((vl,ind)=>{
                vl.Ischeck = checkValue;
            })
           }
           this.setState({permission})
           


        }
   
    handleCheckboxChange = (e, value) => {
       
    
       const ckname = e.target.name;
       const parentIndex= e.target.id.split("_")[0];
       const checkValue = e.target.checked;

       
       let permission = [ ...this.state.permission ];
       const  parentname = Object.keys(permission[parentIndex]);
       if(permission[parentIndex][parentname]){
        permission[parentIndex][parentname].filter((vl,i)=>{
            
            if(vl.name==ckname){
                vl.Ischeck = checkValue;
                

            }
        })
        this.setState({permission})
       }

       /*    
       if(permission[parentIndex][parentname]){
            permission[parentIndex][parentname].map((vl,ind)=>{
                vl.Ischeck = checkValue;
            })
           }
           this.setState({permission})
           */

    
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
       
        const data = new FormData()
        data.append('name', this.state.name);
        data.append('permission', this.state.permission);
        
        axios.post(
            baseurl+'/api/role',
            {name:this.state.name,permission:this.state.permission},
            {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                          if(res.data.success){
                             // console.log(res.data.data);
                             this.setState({formSubmitting:false});
                             this.setState({buttonName:'Save'});
                             this.setState({name:''});
                             this.PemissionGet();
                             $('input[type="checkbox"]').prop('checked',false);
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
    PemissionGet = (e) =>{
        document.getElementById("requestLoder").innerHTML = '<img style="width:2%"  src="'+baseurl+'/images/ajax_loader_gray_512.gif"></img>';
        Pemissionlist()
        .then(res =>{
                        if(res.data.success){
                            //console.log(res.data.data);
                            
                           this.setState({permission:res.data.data})
                           document.getElementById("requestLoder").innerHTML = '';
                           /*
                           this.state.permission.map((val,index)=>{
                                 console.log(val[Object.keys(val)[0]]);
                           })
                           */
                         
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
        CheckPermission('role','add',history);
        this.PemissionGet();
    }
 
    
    render() {
        var  addPage =[];
        const { match, location, history } = this.props
        return( <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Add Role</Card.Title>
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
                                        
                                        <Form.Group as={Col} md="12">
                                            <hr/>
                                            <h5>Permission</h5>
                                            <div id="requestLoder" style={{'textAlign': 'center'}}></div>
                                        </Form.Group>
                                        <Table ref="tbl" striped hover responsive className="table table-condensed" id="data-table-responsive">
                                                <tbody id='listdata'>
                                                {
                                                      this.state.permission.map((val,index)=>{
                                                      //  console.log(val[Object.keys(val)[0]]);
                                                        return(<Trrow key={index} index={index} parent={Object.keys(val)[0]} onparentChange={this.chageParent} rows={val[Object.keys(val)[0]]} onchildChange={this.handleCheckboxChange} />)
                                                  })
                                                
                                                }
                                                </tbody>
                                            </Table>
                                            
                            
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