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

const AddHoliday = React.lazy(()=>import("./Tab/AddHoliday"))
const Holiday = React.lazy(() => import("./Tab/Holiday"))
const HolidayCalendar = React.lazy(() => import("./Tab/HolidayCalendar"))

let id='';
let data=[];
const routes = [
    { path:'/Employee/Holiday-Add', exact:true, name:'Oneform',component:AddHoliday},
    { path:'/Employee/Holiday', exact:true, name:'Oneform',component:Holiday},
    { path:'/Employee/Holiday-Calendar', exact:true, name:'Oneform',component:HolidayCalendar},
    { path:'/Employee/Holiday-Edit/:id', exact:true, name:'Oneform',component:AddHoliday},
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

return (
    <Aux>
        <Row>
            <Col>
              
                <Card>
                    <Card.Header>
                        <Card.Title as="h5">Holiday</Card.Title>
                    </Card.Header>
                    <Card.Body>
                            
                    <nav class="navbar navbar-expand-lg  navbar-expand-sm  navbar-light bg-light">
                        <div class="collapse navbar-collapse" style={{display:'block'}} id="navbarText">
                        <ul class="navbar-nav mr-auto formnev">
                        <li class="nav-item">
                            <NavLink  to='/Employee/Holiday' className="nav-link link" activeClassName="active" style={{borderRight: 'solid 1px #04a9f5'}}>Holiday Summary</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink  to='/Employee/Holiday-Calendar' className="nav-link link" activeClassName="active" style={{borderRight: 'solid 1px #04a9f5'}}>Calendar</NavLink>
                        </li>

                        <li class="nav-item">
                            <NavLink  to='/Employee/Holiday-Add' className="nav-link link" style={{borderRight: 'solid 1px #04a9f5'}} >Book holiday dates</NavLink>
                        </li>
                        </ul>
                        <span class="navbar-text">

                        </span>
                        </div>
                    </nav>
                            <div className="tabs">
                            <Suspense fallback={<loaders/>}>
                                    <Switch>
                                       {menu}
                                       <Redirect from="/" to='/Employee/Holiday' />
                                    </Switch>
                                </Suspense>
                            </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Aux>
);
}
}

export default EmployeeDetails;