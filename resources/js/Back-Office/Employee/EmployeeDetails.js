import React, { Component, Suspense } from 'react';
import {Route, Switch, Redirect,NavLink,Link} from 'react-router-dom';
import {Row, Col, Card, Table,Button,Modal,Tabs, Tab,Form,Nav} from 'react-bootstrap';
import Aux from "../../hoc/_Aux";
import {CheckPermission} from '../../HttpFunctions'; 
import Datetime from 'react-datetime';
import $ from 'jquery';
import axios from 'axios'
import avatar from '../../assets/images/user/avatar-6.png';
import './employee.css';




const Oneform = React.lazy(() => import("./Tab/Official"));
const Documents = React.lazy(() => import("./Tab/Documents"));
const Leave = React.lazy(() => import("./Tab/Leave"))
const AddLeave = React.lazy(() => import("./Tab/AddLeave"))
const Salary = React.lazy(() => import("./Tab/Salary"))
const BankDetails = React.lazy(() => import("./Tab/BankDetails")) 
const AddressHistory =React.lazy(()=> import("./Tab/AddressHistory"))
const JobHistory =React.lazy(()=> import("./Tab/JobHistory"))

let id='';
let data=[];
const routes = [
    { path:'/employee-Detail/Official', exact:true, name:'Oneform',component:Oneform},
    { path:'/employee-Detail/Documents', exact:true, name:'Oneform',component:Documents},
    { path:'/employee-Detail/Leave', exact:true, name:'Oneform',component:Leave},
    { path:'/employee-Detail/Leave/Add', exact:true, name:'Oneform',component:AddLeave},
    { path:'/employee-Detail/Leave/Edit/:id', exact:true, name:'Oneform',component:AddLeave},
    { path:'/employee-Detail/Salary', exact:true, name:'Oneform',component:Salary},
    { path:'/employee-Detail/Bank-Details', exact:true, name:'Oneform',component:BankDetails},
    { path:'/employee-Detail/Address-History', exact:true, name:'Oneform',component:AddressHistory},
    { path:'/employee-Detail/Job-History', exact:true, name:'Oneform',component:JobHistory},
    ];
    const baseurl= window.location.origin;
    
class  EmployeeDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state={id:id,employee_details:[]}
        if(this.props.location.state){
            id = this.props.location.state.userId;
            this.alreadyAdded(id);
        }
    }
componentDidMount(){
    
   

}
componentWillMount(){
    
}
alreadyAdded =(id) =>{
        
    this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading</span>});
    const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
   
    
    axios.get(
        baseurl+'/api/employee_details/'+id,
        {params: {'employee_details': '1'},headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
    ).then(res =>{
                      if(res.data.success){
                       // this.getAddress(res.data.Employee_details.getaddress_id);
                         
                         let employee_details = res.data.Employee_details;
                         data = employee_details;
                         
                         this.setState(previousState => ({employee_details: [...previousState.employee_details, employee_details]}));

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
render(){
    
    const menu = routes.map((route, index) => {
        return (route.component) ? (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={props => (
                    <route.component {...props} />
                )} />
        ) : (null);
    });
    const photo = (data.passport_style_photograph?baseurl+'/uploaded/'+data.passport_style_photograph:avatar);
    return(<Aux>
        <Col md={12} xl={12} style={{padding:'0px'}}>
                        <Card className='theme-bg' style={{margin:'0px',marginBottom:'10px'}}>
                            <Card.Body style={{padding:'15px'}}>
                            <Row>
                            <Col sm={12} md={6} xl={1}>
            <img src={photo} width="100%" style={{borderRadius:'10%'}} alt="User-Profile"/>
            </Col>
            <Col sm={12} md={6} xl={9}>
            <p className="text-white " style={{margin:'0px'}}><b style={{marginRight:'2px'}}>Employee Name </b><span class="">:
             {data.title} {data.fore_name} {data.surname}&nbsp;</span></p>
            <p className="text-white " style={{margin:'0px'}}><b style={{marginRight:'62px'}}>Job Title</b><span >: {data.position_applied_for} </span></p>
            <p className="text-white " style={{margin:'0px'}}><b style={{marginRight:'64px'}}>Email Id</b><span >: {data.email}</span></p>
            <p className="text-white " style={{margin:'0px'}}><b style={{marginRight:'5px'}}>Contact Number</b><span >: {data.telephone_number}</span></p>
            <p className="text-white " style={{margin:'0px'}}><b style={{marginRight:'63px'}}>Address</b><span >: {data.address}</span></p>
            
            </Col>
            </Row>
            <div class="invoice-lable text-right"  style={{position: 'absolute',top: '10px',right:'5px'}}>
                <Button className="shadow-5 btn-sm btn-secondary"><i class="fa fa-download"></i>Download</Button>
                <NavLink  to= {{pathname:'/employee'}} className="shadow-5 btn-sm btn-info"><i class="fa fa-mail-reply"></i> BACK</NavLink> 
            </div>
                            </Card.Body>
                        </Card>
                    </Col>
        <Tab.Container defaultActiveKey="Official">
    <Row>
        <Col sm={2} className="employeedetails"> 
            <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                        
                        <NavLink to={{pathname: "/employee-Detail/Official",state: {userId: this.state.id}}}  className="nav-link"><i class="feather icon-user"></i>Official</NavLink> 
                        </Nav.Item>
                        <Nav.Item>
                        <NavLink  to= {{pathname:'/employee-Detail/Documents',state:{userId: this.state.id}}} className="nav-link"><i class="feather icon-file-text"></i> Documents</NavLink> 
                        
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink  to= {{pathname:'/employee-Detail/Bank-Details',state:{userId: this.state.id}}} className="nav-link"><i class="fa fa-university"></i> Bank Details</NavLink> 
                        </Nav.Item>
                        
                        <Nav.Item>
                            <NavLink  to= {{pathname:'/employee-Detail/Address-History',state:{userId: this.state.id}}} className="nav-link"><i class="fa fa-map-marker" aria-hidden="true"></i> Address History</NavLink> 
                        </Nav.Item>
                        <Nav.Item>
                    <NavLink  to= {{pathname:'/employee-Detail/Leave',state:{userId: this.state.id}}} className="nav-link"><i class="fa fa-minus-square" aria-hidden="true"></i> Leave</NavLink> 
                        </Nav.Item>
                        <Nav.Item>
                        
                        <NavLink  to= {{pathname:'/employee-Detail/Job-History',state:{userId: this.state.id}}} className="nav-link"><i class="fa fa-history" aria-hidden="true"></i> Job History</NavLink> 
                        
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="Education"><i class="fa fa-graduation-cap" aria-hidden="true"></i> Education</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <NavLink  to= {{pathname:'/employee-Detail/Salary',state:{userId: this.state.id}}} className="nav-link"><i class="feather icon-file-text"></i> Salary</NavLink> 
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="Holidays"><i class="fa fa-lights-holiday"></i> Holidays</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                        <Nav.Link eventKey="Skills">Skills</Nav.Link>
                        </Nav.Item>
                        
                        <Nav.Item>
                        <Nav.Link eventKey="Training_Certification">Training & Certification</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                        <Nav.Link eventKey="Medical_Claims">Medical Claims</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                        <Nav.Link eventKey="Disability">Disability</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                        <Nav.Link eventKey="Dependency">Dependency</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                        <Nav.Link eventKey="Visa_and_Immigration">Visa and Immigration</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                        <Nav.Link eventKey="Corporate_Card">Corporate Card</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                        <Nav.Link eventKey="Work_Eligibility">Work Eligibility</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                        <Nav.Link eventKey="Additional_Details">Additional Details</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                        <Nav.Link eventKey="Pay_slips">Pay slips</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                        <Nav.Link eventKey="Benefits">Benefits</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                        <Nav.Link eventKey="Remuneration">Remuneration</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                        <Nav.Link eventKey="Security_Credentials">Security Credentials</Nav.Link>
                        </Nav.Item>
            </Nav>
        </Col>
        <Col sm={10} style={{padding:'0px',paddingRight:'15px'}}>
            <Tab.Content style={{padding:'0px 15px'}}>
            <Suspense  fallback={<div className="loader-bg"></div>}>
                                            <Switch>
                                               {menu}
                                               <Redirect from="/" to={{pathname: "/employee-Detail/Official",state: {userId: id}}} />
                                            </Switch>
                                        </Suspense>
            </Tab.Content>
        </Col>
    </Row>
</Tab.Container>
</Aux>);
}
}

export default EmployeeDetails;