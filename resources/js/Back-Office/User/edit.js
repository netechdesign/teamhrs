import React from "react";
import {Link} from "react-router-dom";
import {Row, Col, Card, Form, Button,Alert,Table} from 'react-bootstrap';
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import Select from 'react-select';
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
        text: "User updated successfully",
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
const Dropdown = (property) =>{
    
    let pageName = property.rows.map((value,index)=>{
         return <td key={index}> <Checkbox name={value.name}  label={value.page_name} id={property.index+'_'+value.name} value={value.Ischeck} onChange={property.onchildChange}  /></td>
     })
      return(<tr><th><Checkbox name={property.parent}  label={property.parent.toUpperCase()} onChange={property.onparentChange} id={property.index}   /></th>{pageName}</tr>);
     
 }
const baseurl= window.location.origin;

class edit  extends React.Component{

    state = {
        name: "",
        id: this.props.match.params.id,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        role_id:'',
        role_name:'',
        role_list:[],
        chkCustom:false,
        permission:[],
        pageArray:[],
        visible : true,
        formSubmitting: false,
        buttonName:'Save',
        };
    
       
        RoleList = (e) =>{
            const id = this.state.id;
              
              document.getElementById("requestLoder").innerHTML = '<img style="width:2%"  src="'+baseurl+'/images/ajax_loader_gray_512.gif"></img>';
              const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
              
                axios.get(
                  baseurl+'/api/roledropdown',{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
              ).then(res =>{
                              if(res.data.success){
                                  
                               
                                 this.setState({role_list:res.data.data})
                              
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
           
        axios.post(
            baseurl+'/api/user/'+this.state.id,
            {_method: 'PUT',name:this.state.firstName,lastName:this.state.lastName,email:this.state.email,password:this.state.password,roles:this.state.role_id,permission:this.state.permission}, 
            {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                          if(res.data.success){
                             // console.log(res.data.data);
                             successDesktopPNotify();
                             const {history } = this.props;
                             history.push('/user');
                          }else{
                            if(res.data.errors){
                                res.data.message= res.data.errors.name;
                            }
                            PNotify.error({
                                title: "System Error",
                                text:res.data.errors.name,
                            });
                            this.setState({formSubmitting:false});
                            this.setState({buttonName:'Edit'});
                            
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
    defaultPemission = (e) =>{
        
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
    PemissionGet = (e) =>{
      const id = this.state.id;
        
        document.getElementById("requestLoder").innerHTML = '<img style="width:2%"  src="'+baseurl+'/images/ajax_loader_gray_512.gif"></img>';
        const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
       
        const data = new FormData()
        data.append('name', this.state.name);
        data.append('permission', this.state.permission);
        
        axios.get(
            baseurl+'/api/user/'+id+'/edit',
            {headers:{'Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                        if(res.data.success){
                            
                          const parmissions =  res.data.data.parmissions;
                          if(parmissions){
                            this.setState({permission:parmissions})
                          }else{
                            this.defaultPemission(); 
                          }
                          this.setState({role_name:res.data.data.role_name,firstName:res.data.data.name,lastName:res.data.data.lastName,email:res.data.data.email,role_id:res.data.data.roles})
                           
                           
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
        CheckPermission('user','edit',history);
        this.PemissionGet();
        this.RoleList();
    }

    RoleChange = (e) => {
        
        this.setState({role_id:e.value}); 
           const curPermission = this.state.role_list.filter((vl,idx)=> vl.value===e.value);
           
           if(curPermission){
                this.setState({permission:curPermission[0].permission}); 
           }
        
    };
    
    
    render() {
        var  addPage =[];
        const { match, location, history } = this.props
        return( <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Edit User</Card.Title>
                                <Button className="btn-sm" style={{'float':'right'}} onClick={()=>{history.goBack()}} ><i  className="feather icon-chevron-left"></i>Back</Button>
                            </Card.Header>
                            <Card.Body>
                                <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                                    <Form.Row>
                                    <Form.Group as={Col} md="4">
                                            <Form.Label htmlFor="firstName">First name</Form.Label>
                                            <TextInput
                                                name="firstName"
                                                id="firstName"
                                                placeholder="First Name"
                                                required value={this.state.firstName}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="4">
                                            <Form.Label htmlFor="lastName">Last name</Form.Label>
                                            <TextInput
                                                name="lastName"
                                                id="lastName"
                                                placeholder="Last Name"
                                                minLength="4"
                                                value={this.state.lastName}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="4">
                                            <Form.Label htmlFor="email">Email</Form.Label>
                                            <TextInput
                                                name="email"
                                                id="email"
                                                type="email"
                                                placeholder="Email Address"
                                                validator={validator.isEmail}
                                                errorMessage={{validator:"Please enter a valid email"}}
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="4">
                                            <Form.Label htmlFor="password">Password</Form.Label>
                                            <TextInput
                                                name="password"
                                                id="password"
                                                type="password"
                                                placeholder="Password"
                                                pattern="(?=.*[A-Z]).{6,}"
                                                errorMessage={{required:"Password is required", pattern: "Password should be at least 6 characters and contains at least one upper case letter"}}
                                                value={this.state.password}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="4">
                                            <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
                                            <TextInput
                                                name="confirmPassword"
                                                id="confirmPassword"
                                                type="password"
                                                placeholder="Confirm Password"
                                                
                                                validator={this.matchPassword}
                                                errorMessage={{required:"Confirm password is required", validator: "Password does not match"}}
                                                value={this.state.confirmPassword}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                                  
                            <Form.Group as={Col} md="4">
                            <Form.Label htmlFor="firstName">Role</Form.Label>
                            <Select onChange={this.RoleChange}
                                    className="basic-single"
                                    classNamePrefix="select"
                                    name="role_id"
                                    defaultValue={{ label: this.state.role_name, value: this.state.role_id }}
                                    value={this.state.role_id}
                                    options={this.state.role_list}
                                    placeholder="Select Role"
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

export default edit;