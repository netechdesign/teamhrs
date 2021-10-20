import React, { Component, Suspense } from 'react';
import {Route, Switch, Redirect,NavLink,Link} from 'react-router-dom';
import {Row, Col, Card,Button,Modal,Tabs, Tab,Form,Nav} from 'react-bootstrap';
import axios from 'axios'
import PNotify from "pnotify/dist/es/PNotify";
import Aux from "../../hoc/_Aux";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
const baseurl= window.location.origin;

class Outstanding_entitlement extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            user_id:'',
            
        }
        
    }
    componentDidMount(){
        
    }
    
    render(){
        
        return(
            
            <Aux>
                
                        <Form.Row style={style.rowline} >
                            <Form.Group as={Col} xm={12} >
                                
                            <Table width="100%">
                                                    <Thead>
                                                    <Tr style={{background:'#3f4d67',color:'#f5f3f3'}}>
                                                        <Th style={{padding:'10px'}} width='10%'>Holiday Year</Th>
                                                        <Th width='20%'>Paid Entitlement</Th>
                                                        <Th width='35%'>Hols taken / requested</Th>
                                                        <Th width='35%'>Outstanding entitlement</Th>
                                                    </Tr>
                                                    </Thead>
                                                    <Tbody>
                                                    <Tr>
                                                        <Td valign="top" style={{padding: '5px 10px'}}>Apr 01 and ends on Mar 31</Td>
                                                        <Td style={{padding: '5px 10px'}}>
                                                            <div><b>f/t entitlement:</b>{(this.props.entitlement.entitlement_day_period?this.props.entitlement.entitlement_day_period:'')} days</div>
                                                            <div><b>p/t %:</b>{(this.props.entitlement.part_time_percentage?this.props.entitlement.part_time_percentage:'')}</div>
                                                            <div><a>View entitlement summary</a></div>
                                                            <div><b>Holidays:</b>Not included</div>
                                                        </Td>
                                                        <Td style={{padding: '5px 10px'}} valign="top">
                                                        {(this.props.entitlement.days_taken?this.props.entitlement.days_taken:'')}</Td>
                                                        <Td style={{padding: '5px 10px'}} valign="top">{(this.props.entitlement.outstanding_entitlement?this.props.entitlement.outstanding_entitlement:'')}</Td>
                                                    </Tr>
                                                    </Tbody>
                                                    
                                                </Table>
                            </Form.Group>     
                        </Form.Row>    
                       
            </Aux>
        )
    }
}
const style = {
    rowline:{
             borderBottom:'solid 2px #f8f9fa',marginBottom:'15px'
            }
}
export default Outstanding_entitlement;
