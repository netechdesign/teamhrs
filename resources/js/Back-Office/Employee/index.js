import React from 'react';
import {Route, Switch, Redirect,NavLink,Link} from 'react-router-dom';
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


import avatar from '../../assets/images/user/avatar-6.png';
import './employee.css';
$.DataTable = require( 'datatables.net-bs' );

const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
function telephoneQuestionsAlert(id) {
  let message = "Telephone pre answers save successfully";
   
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

function request_certificationAlert(id) {
  let message = "Certificate request send successfully";
   
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
function offerletterapproveAlert(id) {
  let message = "offer letter has been approved successfully";
   
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


function sendOfferLetterAlert(id) {
  let message = "offer letter has been sent successfully";
   
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
var oTable="";


const baseurl= window.location.origin;
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

const todaydate = dd + '/' + mm + '/' + yyyy;
class List extends React.Component {

   
    constructor(props) {
        super(props);
        this.formRef = React.createRef();

        this.state={ apiload:false,
                      search:'',
                      iDisplayStart:0,
                      iDisplayLength:12,
                      aaData:[],
                      cuttentPage:'',
                      iTotalDisplayRecords:'',
                      iTotalRecords:'',
                      totalPage:0,
                      setFocusOnError:true,
                      clearInputOnReset:false
                    }
    }
    handleErrorSubmit = (e,formData, errorInputs) => {
      console.log(e,formData, errorInputs)
  }


  employeeList =(page_no) =>{
   
        
    this.setState({apiload:true});
    
    const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
    
    axios.get(
        baseurl+'/api/employee_details',{params: {iDisplayStart: this.state.iDisplayStart,iDisplayLength:this.state.iDisplayLength,page:page_no,sSearch:this.state.search},headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
    ).then(res =>{
      

                      if(res.data.success){
                        this.setState({apiload:false});  
                        this.setState(res.data);    
                                    
                         
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
  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.employeeList(1);
    }
  }
    componentDidMount() {  
      
      /* test */
        const { match, location, history } = this.props;
        CheckPermission('application_form','show',history);
        this.employeeList(1);
        
        const self= this;
        
    }
    handleChange = (e) => {
      
      this.setState({
          [e.target.name]: e.target.value
      })
      
  };
 
 
    render() {

      var pages = [];
for (var i = 1; i <= this.state.totalPage; i++) {
  let pagehtml = (this.state.cuttentPage==i ? <span class="page-link">{i}</span> : <a class="page-link" onClick={(element) => { let id = element.target.id; this.employeeList(id)} } role="button" id={i} href="javascript:;">{i}</a>);
  pages.push(<li className={"page-item  " + (this.state.cuttentPage==i ? 'active' : '')}>{pagehtml}</li>);
}

            return (
            <Aux>
                <Row>
                    <Col>
                     <Card>
                            <Card.Header>
                                <Card.Title as="h5">Employee</Card.Title>
                            </Card.Header>
                            <Card.Body>
                            <div className="shadow-sm p-3 mb-5 bg-white rounded">
                                
                                <Col style={{background:'white'}} className="input-group" sm={12} md={6} xl={3}>
                                        <input type="text" className="form-control" name="search" onChange={this.handleChange} placeholder="Search.."/>
                                        <div className="input-group-append">
                                            <button className="btn btn-primary btn-icon" type="button"><i className="fa fa-search"/></button>
                                        </div>
                                </Col>
                                
                            </div>
                                <Row>
                                <div style={{position:'absolute',zIndex:'99999',background:'rgba(255, 255, 255, 0.57)',width:'99%',height:'65%',textAlign:'center',display:(this.state.apiload?'block':'none')}}><div id="loader"></div></div>  

                                
                                <Employee data={this.state.aaData} />
                                  
                                  </Row>
                                {(this.state.aaData.length >0? 
                                <Row>
                                <Col sm={12} md={6} xl={3}>
                                <ul class="pagination">
                                  {pages}
                                </ul>
                                </Col>
                                </Row>
                                :''
                                )
                                }
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

class Employee extends React.Component {

  
  render(){
    const baseurl= window.location.origin;
    const employee = (this.props.data.length>0?this.props.data.map((item, index) => {
      
      return(
        <Col sm={12} md={6} xl={3}>  
        <Link to={{pathname: "/employee-Detail",state: {userId: item.user_id}}} >
        <Card className="hovereffect" >
        <Card.Body>
          <Row>
            <Col sm={12} md={6} xl={4}>
            
            <img src={(item.passport_style_photograph?baseurl+'/uploaded/'+item.passport_style_photograph:avatar)} width="100%" className="mb-4" style={{borderRadius:'10%'}} alt="User-Profile"/>
            </Col>
            <Col sm={12} md={6} xl={8}>
            <h5 style={{color:'#04a9f5'}}>{item.full_name}</h5>
              
              <p style={{margin:'0px',color:'#3f4d67',fontSize:'12px',fontWeight:'bold'}}>{item.position_applied_for}</p>
              <p style={{margin:'0px',color:'#3f4d67',fontSize:'11px',fontWeight:'bold'}}>{item.email}</p>
              <p style={{margin:'0px',color:'#3f4d67',fontSize:'11px',fontWeight:'bold'}}>{item.telephone_number}</p> 
            </Col>
          </Row> 
              <Card.Text style={{fontSize:'12px',color:'#3f4d67'}} ><b>Address:</b> {item.address}</Card.Text>
              
                 
        </Card.Body>
    </Card>
         </Link>
    </Col>
      )
  }):<Col sm={12} md={6} xl={3}>Sorry Employee not found</Col>);
    return(<>{employee}</>)
  }
}
const style= {
  title:{
    color:'#215f75'
  },
  rowline:{
    borderBottom:'1px dotted hsl(216deg 70% 86% / 60%)'
   }
}
export default List;

