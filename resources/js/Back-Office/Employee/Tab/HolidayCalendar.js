import React from 'react';
import FullCalendar from 'fullcalendar-reactwrapper';
import Aux from "../../../hoc/_Aux";
import {Row, Col, Card, Table,Button,Modal,Tabs, Tab,Form,Nav} from 'react-bootstrap';
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import validator from 'validator';
import axios from 'axios'
import PNotify from "pnotify/dist/es/PNotify";
const baseurl= window.location.origin;
class HolidayCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id:'',
            today: '2021-05-27',
            events:[]
        };
    }
    componentDidMount(){
        
        if(this.props.location.state){
            this.setState({user_id:this.props.location.state.userId});
            this.getData(this.props.location.state.userId);
        }
        
    }
    
    getData = (userId)=>{
        
        
        this.setState({formSubmitting:true});
        this.setState({apiload:true});
        this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading</span>});
        const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
       
        //const data = new FormData()
        //data.append('name', this.state.name);
        
        axios.post(
            baseurl+'/api/holiday_calendar',{user_id:userId},
            {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                          if(res.data.success){
                              this.setState({events:res.data.result});
                              
                              this.setState({apiload:false});
                             this.setState({formSubmitting:false});
                             
                            
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
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Holiday Calendar</Card.Title>
                            </Card.Header>
                            <Card.Body className='calendar'>
                            <div style={{position:'absolute',zIndex:'99999',background:'rgba(255, 255, 255, 0.57)',top:'25%',left:'50%',display:(this.state.apiload?'block':'none')}}>
                        <div id="loader"></div>
                        </div>  

                                <FullCalendar
                                    id = "datta-calendar"
                                    className='calendar'
                                    header = {{
                                        left: 'prev,next today',
                                        center: 'title',
                                        right: 'month,basicWeek,basicDay'
                                    }}
                                    defaultDate={this.state.today}
                                    navLinks= {true}
                                    editable= {false}
                                    eventLimit= {true}
                                    events = {this.state.events}
                                    eventClick = {function(calEvent, jsEvent, view, resourceObj) {
                                                 console.log(calEvent);
                                                }}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default HolidayCalendar;