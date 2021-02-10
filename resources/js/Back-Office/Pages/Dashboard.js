import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import AmChartEarnings from "../../Demo/Widget/Chart/AmChartEarnings";
import DEMO from "../../store/constant";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';

import axios from 'axios'
import ApexCharts from 'apexcharts';


const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
const baseurl= window.location.origin;


class Dashboard extends React.Component {

    
          constructor(props) {
            super(props);
            this.state = {jobstatus: [],msd_job_status:[]};
          }

    componentDidMount() {
       
    }
    render() {

        return (
            <Aux>
                
               <Row>
                   
               </Row>
                

            </Aux>
        );
    }
}

export default Dashboard;