import React, { Component, Suspense } from 'react';
import {Route, Switch, Redirect,NavLink} from 'react-router-dom';
import {Row, Col, Card, ButtonGroup, Button} from 'react-bootstrap';
import Loki from 'react-loki';
import Loadable from 'react-loadable';
import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

const loaders = () => {
    return (
        <div className="loader-bg">
            <div className="loader-track">
                <div className="loader-fill"/>
            </div>
        </div>
    );
};



const Oneform = React.lazy(() => import("./forms/EmployeeDetails"));
const BankDetails = React.lazy(() => import("./forms/BankDetails"));
const UniformOrder = React.lazy(() => import("./forms/UniformOrder"));
const ConsentStatement = React.lazy(() => import("./forms/ConsentStatement"));

const routes = [
    { path:'/services-starter/Employee-Details', exact:true, name:'Oneform',component:Oneform},
    { path:'/services-starter/Bank-Details',exact:true,name:'Services_starter_one',component:BankDetails},
    { path:'/services-starter/Uniform-Order',exact:true,name:'Services_starter_one',component:UniformOrder},
    { path:'/services-starter/Consent-Statement',exact:true,name:'Services_starter_one',component:ConsentStatement},
    
  ];

class Services_starter_one extends Component {
    state = {
        isFinished: false
    };

    render() {
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
                                <Card.Title as="h5">EMPLOYEE FORM</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                    
                            <nav class="navbar navbar-expand-lg  navbar-expand-sm  navbar-light bg-light">
                                <div class="collapse navbar-collapse" id="navbarText">
                                <ul class="navbar-nav mr-auto formnev">
                                <li class="nav-item">
                                <NavLink  to='/services-starter/Employee-Details' className="nav-link link" activeClassName="active" style={{borderRight: 'solid 1px #04a9f5'}}>Employee Details</NavLink>
                                </li>
                                <li class="nav-item">
                                <NavLink  to='/services-starter/Bank-Details' className="nav-link link" style={{borderRight: 'solid 1px #04a9f5'}} >Bank Details</NavLink>
                                </li>
                                 
                                <li class="nav-item">
                                <NavLink  to='/services-starter/Uniform-Order' className="nav-link link" style={{borderRight: 'solid 1px #04a9f5'}} >Uniform Order</NavLink>
                                </li>
                                <li class="nav-item">
                                <NavLink  to='/services-starter/Consent-Statement' className="nav-link link" style={{borderRight: 'solid 1px #04a9f5'}} >Consent Statement</NavLink>
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
                                               <Redirect from="/" to='/services-starter/Employee-Details' />
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


export default Services_starter_one;