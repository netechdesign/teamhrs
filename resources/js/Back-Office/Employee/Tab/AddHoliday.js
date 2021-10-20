import React, { Component, Suspense } from 'react';
import {Route, Switch, Redirect,NavLink,Link} from 'react-router-dom';
import {Row, Col, Card, Table,Button,Modal,Tabs, Tab,Form,Nav} from 'react-bootstrap';
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import MaskedInput from 'react-text-mask';
import validator from 'validator';
import axios from 'axios'
import PNotify from "pnotify/dist/es/PNotify";
import Datetime from 'react-datetime';
import Aux from "../../../hoc/_Aux";
import { formatSingle } from 'highcharts';
import Outstanding_entitlement from '../../../employee/Holiday/Outstanding_entitlement'
let id='';
const baseurl= window.location.origin;
function successDesktopPNotify(edit='') {
    
    let message = (edit!=''?"Holiday edited successfully":"Holiday added successfully");
     
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
class AddHoliday extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            _method:'',
            user_id:'',
            from_date:'',
            from_date_text:'',
            to_date:'',
            to_date_text:'',
            buttonName:'Add',
            apiload:false,
            totalDays:'',
            dates:[],
            heading:'',
            time_off:'',
            notes:'',
            dateChangedCheck:0,
            day_off_start:'',
            day_off_end:'',
            is_approved:'',
            no_approved_notes:'',
            outstanding_entitlement:[],
        }
        if(this.props.location.state){
            id = this.props.location.state.userId;
            }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    handleSubmit =(e) =>{
        e.preventDefault();
        
        
        this.setState({apiload:true});
        this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading</span>});
        const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
        let Id='';
        if(this.props.match.params.id){
            Id = '/'+this.props.match.params.id;
            }
        axios.post(baseurl+'/api/holiday'+Id,
        this.state,
        {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}}
        ).then(res =>{
                        if(res.data.success){
                        // console.log(res.data.data);
                        
                        this.setState({apiload:false});
                        this.setState({formSubmitting:false});
                        this.setState({buttonName:'Add'});
                        
                        if(res.data.updated){
                            successDesktopPNotify('edit');
                            
                            this.props.history.push({pathname:'/employee-Detail/Holiday',state:{userId:this.state.user_id}}); 
                            this.setState({buttonName:'Edit'});
                        }else{
                              successDesktopPNotify();
                              this.props.history.push({pathname:'/employee-Detail/Holiday',state:{userId:this.state.user_id}}); 
                         }
                        
                        }else{
                         
                        PNotify.error({
                            title: "Alert",
                            text:res.data.message,
                        });
                        this.setState({apiload:false});
                        this.setState({formSubmitting:false});
                        this.setState({buttonName:'Add'});
                        
                        }
                    }
          ).catch(err =>{
                    PNotify.error({
                        title: "System Error",
                        text:err,
                    });
                    this.setState({formSubmitting:false});
                    this.setState({buttonName:'add'});
                    
                    
                }
        )
    }
    componentWillMount(){
        
        if(this.props.location.state){
            this.setState({user_id:this.props.location.state.userId});
            
        }
        if(this.props.match.params.id){
            this.getData(this.props.match.params.id);
            
        }
    }
    
    getData = (id)=>{
        
        
        this.setState({formSubmitting:true});
        this.setState({apiload:true});
        this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading</span>});
        const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
       
        //const data = new FormData()
        //data.append('name', this.state.name);
        
        axios.get(
            baseurl+'/api/holiday/'+id,
            {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                          if(res.data.success){
                              this.setState(res.data.Holidays);
                              
                              this.setState({dates:res.data.Holidays_dates});
                              this.Outstanding_entitlement(res.data.Holidays.user_id);
                              this.setState({apiload:false});
                             this.setState({formSubmitting:false});
                             this.setState({buttonName:'Edit'});
                            
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
      fromDateChange = (e) => {
                        var today = new Date(e);
                        var dd = today.getDate(); 
                        var mm = today.getMonth() + 1; 

                        var yyyy = today.getFullYear(); 
                        if (dd < 10) { 
                        dd = '0' + dd; 
                        } 
                        if (mm < 10) { 
                        mm = '0' + mm; 
                        } 
                        var today = dd + '/' + mm + '/' + yyyy; 
           this.setState({from_date:e});
           this.setState({from_date_text:today});
           this.setState({dateChangedCheck:1});
           
                    
        }; 
        
        toDateChange = (e) => {
            let dates = []
            //to avoid modifying the original date
            this.setState({to_date:e});
            const theDate = new Date(this.state.from_date)
            let dys =0;
            while (theDate <= e) {
                let dt = new Date(theDate);
                let dy = dt.getDay();
                if(dy==0 || dy==6){
                    dys = dys + 1;
                    let getdt= this.getDate(theDate);
                    console.log(getdt);
                }else{ // sunday 0  saturday 6 
                let array_v={dates:this.getDate(new Date(theDate)),times:''}
                 dates = [...dates, array_v]
                }
              theDate.setDate(theDate.getDate() + 1)
            }
            var timediff = e - this.state.from_date;
            var second=1000, minute=second*60, hour=minute*60, day=hour*24, week=day*7;

            let totalDays = Math.floor(timediff / day)+1; 
            totalDays = totalDays - dys;
            this.setState({dates:dates,time_off:totalDays});
            var today = new Date(e);
            var dd = today.getDate(); 
            var mm = today.getMonth() + 1; 

            var yyyy = today.getFullYear(); 
            if (dd < 10) { 
            dd = '0' + dd; 
            } 
            if (mm < 10) { 
            mm = '0' + mm; 
            } 
            var today = dd + '/' + mm + '/' + yyyy; 

          this.setState({to_date_text:today});
          this.setState({dateChangedCheck:1});
          }
          getDate = (e) => {
            var today = new Date(e);
            var dd = today.getDate(); 
            var mm = today.getMonth() + 1; 
    
            var yyyy = today.getFullYear(); 
            if (dd < 10) { 
            dd = '0' + dd; 
            } 
            if (mm < 10) { 
            mm = '0' + mm; 
            } 
            return dd + '/' + mm + '/' + yyyy; 
           
        
    };   
    holidaytime=(e) =>{
        let changetime = this.state.dates[e.target.name]
        changetime['times']=e.target.value;
        this.setState({dates:this.state.dates});
        
        
    }
    
    noteChange=(e) =>{
        let id = e.target.name;
        id = id.match(/\d+/)[0] 
        let changetime = this.state.dates[id]
        changetime['notes']=e.target.value;
        this.setState({dates:this.state.dates});
        
        
    }
    onChangedApproved=(e) =>{
        let id = e.target.name;
        id = id.match(/\d+/)[0] 
        let changeapprove = this.state.dates[id]
        changeapprove['is_approved']=e.target.value;
       if(e.target.value=='no'){
        changeapprove['add_note'] = 1;
       }else{
        changeapprove['add_note'] = 0;
       }
        this.setState({dates:this.state.dates});
        
        
    }
    Changeheading=(e) =>{
        
        this.setState({heading:e.target.value});
        const dates = this.state.dates;
        dates.map((itm,inx)=>{
            
            itm.is_approved = '';
            if(e.target.value==1){
                  itm.times = 'Full day';
                }
            else if(e.target.value==2){
                    itm.times = 'Morning only';
                  } 
            else if(e.target.value==3){
                    itm.times = 'Afternoon only';
                  }           
        })
        
        
        
        this.setState({dates:dates});
        
    } 
    approvedChange =(e) =>{
        
        this.setState({
            [e.target.name]: e.target.value
        })
        const dates = this.state.dates;
        dates.map((itm,inx)=>{
            
            itm.is_approved = e.target.value;      
        })
        
        this.setState({dates:dates,no_approved_notes:''});
        
    }  
    Outstanding_entitlement=(user_id)=>{
            
        const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
               axios.post(
            baseurl+'/api/outstanding_entitlement',{user_id:user_id},{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                          if(res.data.success){
                              
                             this.setState({outstanding_entitlement:res.data.result});
                            
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
     return(
        <Aux>
                    
                <Row style={{padding: '0px 10px',borderLeft: 'solid 2px #04a9f5'}}>
                        <Col md={12} xl={12} style={{paddingTop:'15px'}}>
                            <h5>{(this.props.match.params.id?'Edit':'Add')} Holiday</h5>
                                <div class="invoice-lable text-right"  style={{position: 'absolute',top: '10px',right:'5px'}}>
                                       <NavLink  to= {{pathname:'/employee-Detail/Holiday',state:{userId: this.state.user_id}}} className="shadow-5 btn-sm btn-info"><i class="fa fa-mail-reply"></i></NavLink> 
                                </div>
                        </Col>
                        
                </Row>
    
                    <div class="details-tab" style={{borderTop: 'solid 1px #ebeff1',padding:'10px 20px'}}>
                        <div style={{position:'absolute',zIndex:'99999',background:'rgba(255, 255, 255, 0.57)',top:'15%',left:'50%',display:(this.state.apiload?'block':'none')}}>
                        <div id="loader"></div>
                        </div>  
<Outstanding_entitlement user_id={this.state.user_id} entitlement={this.state.outstanding_entitlement} />
                        <ValidationForm autoComplete="off" id='formid' onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                                        <Form.Row style={style.rowline} >
                                            <Form.Group as={Col} xm={12}>
                                                <Form.Label htmlFor="region">Date</Form.Label>
                                              
                                                <Datetime closeOnSelect={true} onChange={this.fromDateChange} value={this.state.from_date}  dateFormat="D/M/Y" timeFormat={false}  maxDate={new Date()} inputProps={{required:'required',name:"from_date",placeholder: 'Select Date',autoComplete:'off'}} />
                                                <div style={{padding:'0px','marginTop':'10px'}} className="custom-controls-stacked radio">
                                                            <Radio.RadioGroup 
                                                                name= "day_off_start"
                                                                required
                                                                valueSelected={this.state.day_off_start}
                                                                inline={true}
                                                                
                                                                onChange={this.handleChange}>
                                                                <Radio.RadioItem  id={'start_full'}  label="Full day" value="Full day" />
                                                                <Radio.RadioItem id={'start_Morning'}  label="Morning only" value="Morning only" />
                                                                <Radio.RadioItem id={'start_Afternoon'}  label="Afternoon only" value="Afternoon only" />
                                                                

                                                            </Radio.RadioGroup>
                                                        </div>
                                            </Form.Group>
                                            <Form.Group as={Col} md="1"  style={{paddingTop:'37px',textAlign:'center'}}>
                                                <Form.Label htmlFor="region">To</Form.Label>
                                            </Form.Group>
                                            <Form.Group as={Col} xm={12}>
                                                <Form.Label htmlFor="region">&nbsp;</Form.Label>
                                              
                                                <Datetime closeOnSelect={true} onChange={this.toDateChange} value={this.state.to_date}  dateFormat="D/M/Y" timeFormat={false}  maxDate={new Date()} inputProps={{required:'required',name:"to_date",placeholder: 'Select Date',autoComplete:'off'}} />
                                            <div style={{padding:'0px','marginTop':'10px'}} className="custom-controls-stacked radio">
                                                            <Radio.RadioGroup 
                                                                name= "day_off_end"
                                                                required
                                                                valueSelected={this.state.day_off_end}
                                                                inline={true}
                                                                
                                                                onChange={this.handleChange}>
                                                                <Radio.RadioItem  id={'end_full'}  label="Full day" value="Full day" />
                                                                <Radio.RadioItem id={'end_Morning'}  label="Morning only" value="Morning only" />
                                                                <Radio.RadioItem id={'end_Afternoon'}  label="Afternoon only" value="Afternoon only" />
                                                                

                                                            </Radio.RadioGroup>
                                                        </div>
                                            </Form.Group>
                                            <Form.Group as={Col} md="2">
                                                              <Form.Label htmlFor="time_off">Time Off</Form.Label>
                                                            
                                                                    <TextInput
                                                                    name="time_off"
                                                                    type="number"
                                                                    id="time_off"
                                                                    readonly
                                                                    placeholder="Time Off"
                                                                    required value={this.state.time_off}
                                                                    
                                                                    autoComplete="off"
                                                                />
                                                     <div style={{float:'right',marginTop:'-31px',paddingRight: '10px'}}>Day</div>                
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="12" >
                                                        <Form.Label htmlFor="first_name">Notes</Form.Label>
                                                        <TextInput
                                                            name="notes"
                                                            id="notes"
                                                            placeholder="Notes"
                                                            multiline
                                                            required
                                                            value={this.state.notes}
                                                            onChange={this.handleChange}
                                                            rows="3"
                                                            autoComplete="off"
                                                        />
                                             </Form.Group>                  
                                        </Form.Row>
                                        <Form.Row>
                                        <Form.Group as={Col} md="4">
                                            <div style={{padding:'0px'}} className="custom-controls-stacked radio">
                                            <label class="form-check-label" for="approved_yes" style={{marginRight: '10px',float:'left'}}>Approved: </label>
                                                <Radio.RadioGroup 
                                                name= "is_approved"
                                                valueSelected={this.state.is_approved}
                                                inline={true}
                                                onChange={this.approvedChange}
                                                >
                                                <Radio.RadioItem  id="approved_yes"  label="Yes" value="yes" />
                                                <Radio.RadioItem id="approved_no"  label="No" value="no" />
                                                </Radio.RadioGroup>
                                            </div>
                                        </Form.Group>   
                                        <Form.Group as={Col} md="8" >
                                        {
                                            (this.state.is_approved=='no'?
                                                        <div><Form.Label htmlFor="first_name">Notes</Form.Label>
                                                        <TextInput
                                                            name="no_approved_notes"
                                                            id="notes"
                                                            placeholder="Notes"
                                                            multiline
                                                            required
                                                            value={this.state.no_approved_notes}
                                                            onChange={this.handleChange}
                                                            rows="3"
                                                            autoComplete="off"
                                                        />
                                                       </div>
                                            :''
                                            )
                                            }  
                                            &nbsp;   
                                        </Form.Group>      
                                </Form.Row>
                                {/* 
                                        <Form.Row>
                                            <Form.Group as={Col} md="12"><SelectTime noteChange={(e)=>this.noteChange(e)} checkedit={this.state._method} heading={this.state.heading} Changeheading={(e)=>this.Changeheading(e)} handleChange={(e)=>this.holidaytime(e)} handleChangeApproved={(e)=>this.onChangedApproved(e)} fromdate={this.state.dates} /></Form.Group>
                                        </Form.Row>
                                */}       
                                        <Form.Row>   
                                        <Form.Group as={Col} sm={12} className="mt-3">
                                        <Button disabled={this.state.formSubmitting}  type="submit"> {this.state.buttonName}</Button>
                                        </Form.Group>
                                    </Form.Row>
                                </ValidationForm>
                              

                        

                    </div>
         </Aux>

     );
 }

}

class SelectTime extends React.Component{
    state={display:'none',times:''}
   
    
   render(){
    
    const display = (this.props.fromdate.length>0?'block':'none');
    let is_approved ='';
    let approved='';
    let addNote='';
    const dateList = (this.props.fromdate.length>0?
                         this.props.fromdate.map((item,inx)=>{
                            
                            
                                if(this.props.checkedit=='PUT'){
                                is_approved = 'Approve';
                                if(item.is_approved=='no'){
                                    item.add_note=1;
                                }
                                
                             approved = <td>
                                 <div style={{padding:'0px'}} className="custom-controls-stacked radio">
                                    <Radio.RadioGroup 
                                        name= {inx+'a'}
                                        
                                        valueSelected={item.is_approved}
                                        inline={true}
                                        onChange={this.props.handleChangeApproved}
                                        >
                                        <Radio.RadioItem  id={inx+'a_yes'}  label="Yes" value="yes" />
                                        <Radio.RadioItem id={inx+'a_no'}  label="No" value="no" />
                                    </Radio.RadioGroup>
                                </div>
                                 </td>
                                 addNote=<td>
                                            {(item.add_note==1?<TextInput
                                            name= {inx+'notes'}
                                            id="notes"
                                            placeholder="Notes"
                                            multiline
                                            required
                                            value={item.notes}
                                            onChange={this.props.noteChange}
                                            rows="3"
                                            autoComplete="off"
                                            />
                                           :'')}
                                 </td>
                                } 
        return (<tr key={inx}>
                    <td>{item.dates}</td>
                    <td>
                    <div style={{padding:'0px'}} className="custom-controls-stacked radio">
                                                            <Radio.RadioGroup 
                                                                name= {inx}
                                                                required
                                                                valueSelected={item.times}
                                                                inline={true}
                                                                
                                                                onChange={this.props.handleChange}>
                                                                <Radio.RadioItem  id={inx+'_full'}  label="Full day" value="Full day" />
                                                                <Radio.RadioItem id={inx+'_Morning'}  label="Morning only" value="Morning only" />
                                                                <Radio.RadioItem id={inx+'_Afternoon'}  label="Afternoon only" value="Afternoon only" />
                                                                

                                                            </Radio.RadioGroup>
                                                        </div>
                    </td>
                    {approved}
                    {addNote}
                    
                </tr>
                )
                        }):'')
                       
       return(<Aux><Table style={{display:display}} responsive>
           <thead><th>Date</th>
           <th>
           <div style={{padding:'0px'}} className="custom-controls-stacked radio">
                                                            <Radio.RadioGroup 
                                                                name="date_time"
                                                                
                                                                valueSelected={this.props.heading}
                                                                inline={true}
                                                                onChange={this.props.Changeheading}>
                                                                <Radio.RadioItem  id={'heading_1'} label="Full day" value="1" />
                                                                <Radio.RadioItem id={'heading_2'} label="Morning only" value="2" />
                                                                <Radio.RadioItem id={'heading_3'} label="Afternoon only" value="3" />
                                                                

                                                            </Radio.RadioGroup>
                                                        </div>
           </th>
           <th>{is_approved}</th>
           </thead>
           <tbody>{dateList}</tbody></Table></Aux>);
   }
}
const style = {
    rowline:{
             borderBottom:'solid 1px #f8f9fa',marginBottom:'15px'
            }
}
export default AddHoliday;