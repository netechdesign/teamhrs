import React from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import Datetime from 'react-datetime';
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import MaskedInput from 'react-text-mask';
import validator from 'validator';
import axios from 'axios'
import PNotify from "pnotify/dist/es/PNotify";
import "pnotify/dist/es/PNotifyButtons";
import "pnotify/dist/es/PNotifyConfirm";
import "pnotify/dist/es/PNotifyCallbacks";
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const baseurl= window.location.origin;

let ajaxabort;
function successDesktopPNotify(id) {
   let message = "Employee Details added successfully";
    if(id!=''){
        message = "Employee Details updated successfully"
    }
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
class EmployeeDetails extends React.Component {
    state = {
        _method:'',
        id:"",
        first_name: "",
        last_name: "",
        middle_name:"",
        asm_name: "",
        region: "",
        refferal: "",
        start_date:'',
        date_of_birth:"",
        gender:"",
        telephone_number:"",
        mobile_number:"",
        email:"",
        house_no:"",
        street:"",
        city:"",
        county:"",
        postcode:"",
        time_at_address_year:"",
        time_at_address_month:"",
        address_history:[],
        total_history_year:false,
        totalmonths:0,
        town_of_birth_detail:"",
        ni_number:"",
        mothers_maiden:"",
        emergency_contact:'',
        relationship:'',
contact_number:'',
address:'',
        chkBasic: false,
        chkCustom: false,
        checkMeSwitch: false,
        showModal: false,
        visible : true,
        formSubmitting: false,
        buttonName:'Save',
    };
    
    componentDidUpdate(prevProps,prevState){
        //total_history_year
        let totalmonth=0; //five year month
        let five_year_month= 5*12;
        if(this.state.time_at_address_year!=''){
            totalmonth = this.state.time_at_address_year *12;
        }
        if(this.state.time_at_address_month!=''){
            totalmonth = parseInt(totalmonth) + parseInt(this.state.time_at_address_month);
        }
        if(this.state.address_history.length>0){
            this.state.address_history.map((vl,index)=>{
                if(vl.time_at_address_year!=''){
                    let monthtotal = vl.time_at_address_year *12;
                    totalmonth = parseInt(totalmonth)+ parseInt(monthtotal);
                }
                if(vl.time_at_address_month!=''){
                    totalmonth = parseInt(totalmonth) + parseInt(vl.time_at_address_month);
                }
                
            })
        }
        if(totalmonth>0){
            if(totalmonth< five_year_month){
                if(prevState.total_history_year==false){
                           this.setState({total_history_year:true}) 
                }
                
                }else{
                    if(prevState.total_history_year==true){
                        this.setState({total_history_year:false}) 
                        }
               }
            
           
               if(prevState.totalmonths!=totalmonth){
                this.setState({totalmonths:totalmonth}) 
            }
            }
        
        
    }
    
    addAddressHistory=()=>{
        let address_history = {house_no:'',street:'',city:'',county:'',postcode:'',time_at_address_year:'',time_at_address_month:''};
         this.setState(previousState => ({address_history: [...previousState.address_history, address_history]}));
        
     }
    handleCheckboxChange = (e, value) => {
        this.setState({
            [e.target.name]: value
        })
        
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

        
                    
                  //  time_at_address_month:"",
    };

    handleSubmit = (e, formData, inputs) => {
        e.preventDefault();
        
        if(this.state.totalmonths<60){
            const MySwal = withReactContent(Swal);
                MySwal.fire({
                    title: 'Address History',
                    text: 'Please add 5 years address history',
                    type: 'error',
                })
                return true;
        }
        
        this.setState({formSubmitting:true});
        this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading</span>});
        const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
       
        //const data = new FormData()
        //data.append('name', this.state.name);
       

        let urlid='';
            if(this.state.id!=''){
            urlid = '/'+this.state.id;
            } 
        axios.post(
            baseurl+'/api/employee_details'+urlid,
            this.state,
            {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                          if(res.data.success){
                             // console.log(res.data.data);
                             this.setState({formSubmitting:false});
                             this.setState({buttonName:'Save'});
                             successDesktopPNotify(this.state.id);
                             this.props.history.push('/services-starter/Bank-Details');
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
       
      //  this.props.history.push('/role');


      
      
    };


    handleErrorSubmit = (e, formData, errorInputs) => {
        //console.log(errorInputs);
    };

    matchPassword = (value) => {
        return value && value === this.state.password;
    };
    startdateChange = (e) => {
        // var today = new Date(e);
        // var dd = today.getDate(); 
        // var mm = today.getMonth() + 1; 
  
        // var yyyy = today.getFullYear(); 
        // if (dd < 10) { 
        //     dd = '0' + dd; 
        // } 
        // if (mm < 10) { 
        //     mm = '0' + mm; 
        // } 
        // var today = dd + '/' + mm + '/' + yyyy; 

       this.setState({start_date:e});
    };
    dateofbirthChange = (e) => {

       this.setState({date_of_birth:e});
    };
    addressHistoryDelete =(element) =>{
        let index = element.target.id;
        if (index !== -1) {
            const MySwal = withReactContent(Swal);
                MySwal.fire({
                    title: 'Are you sure?',
                    text: 'Once deleted, you will not be able to recover this',
                    type: 'warning',
                    showCloseButton: true,
                    showCancelButton: true
                }).then((willDelete) => {
                    if (willDelete.value) {
                        let address_history = this.state.address_history;
                        address_history.splice(index, 1);
                    this.setState({address_history: address_history});
                    } else {
                        
                    }
                });
            
          }
    }
    addressHistoryChange =(element)=>{
        
        let index = element.target.id;
        
        if(element.target.name=='house_no'){
           this.state.address_history[index].house_no = element.target.value;
        }
        if(element.target.name=='street'){
            this.state.address_history[index].street = element.target.value;
         }
         if(element.target.name=='city'){
            this.state.address_history[index].city = element.target.value;
         }
         if(element.target.name=='county'){
            this.state.address_history[index].county = element.target.value;
         }
         if(element.target.name=='postcode'){
            this.state.address_history[index].postcode = element.target.value;
         }
         if(element.target.name=='time_at_address_year'){
            this.state.address_history[index].time_at_address_year = element.target.value;
         }
         if(element.target.name=='time_at_address_month'){
            this.state.address_history[index].time_at_address_month = element.target.value;
         }
        
        this.setState({address_history:this.state.address_history});
    }
      // getaddress list

      locationChange = (e) => {
        
        
          var currentCar = parseInt(e.target.value.length)+1;
          
        if(currentCar >2){ 
          $('#addressList').html('<li class="list-group-item">Loading...</li>');
        var currentVal= e.target.value;
        if(ajaxabort && ajaxabort.readyState != 4){
              ajaxabort.abort();
          }
    
    let self=this;
    ajaxabort = $.ajax({
        dataType: 'json',
        method: 'get',
        url:"https://api.getaddress.io/autocomplete/"+currentVal+"?api-key=XrOjpdAkTEiMj4o5WV_uSQ26499&all=true",
        beforeSend: function() {
                                    // setting a timeout
                                    $('#addressList').html('<li class="list-group-item">Loading...</li>');
                                    },
        success:function(data){
          var listData='';
            if(data.suggestions.length>0){
            $.each(data.suggestions, function (key, val) {
              listData += '<li class="list-group-item getArress" data-id="'+val.id+'">'+val.address+'</li>';
                 });
                 $('#addressList').html(listData).show();
                  $('.getArress').click(function(){
                      var id = $(this).attr('data-id');
                      self.getAddress(id);
                  })
            }else{
              listData += '<li class="list-group-item">Address not found</li>';
              $('#addressList').html(listData);
            }
    
                                   
        }
    });
    
    }
    }

     
    locationHistoryChange = (e) => {
        
        let index = e.target.id;
          var currentCar = parseInt(e.target.value.length)+1;
          
        if(currentCar >2){ 
          $('#addressList'+index).html('<li class="list-group-item">Loading...</li>');
        var currentVal= e.target.value;
        
        if(ajaxabort && ajaxabort.readyState != 4){
              ajaxabort.abort();
          }
    
    let self=this;
    ajaxabort = $.ajax({
        dataType: 'json',
        method: 'get',
        url:"https://api.getaddress.io/autocomplete/"+currentVal+"?api-key=XrOjpdAkTEiMj4o5WV_uSQ26499&all=true",
        beforeSend: function() {
                                    // setting a timeout
                                    $('#addressList'+index).html('<li class="list-group-item">Loading...</li>');
                                    },
        success:function(data){
          var listData='';
            if(data.suggestions.length>0){
            $.each(data.suggestions, function (key, val) {
              listData += '<li class="list-group-item getArress'+index+'" data-index="'+index+'" data-id="'+val.id+'">'+val.address+'</li>';
                 });
                 $('#addressList'+index).html(listData).show();
                  $('.getArress'+index).click(function(){
                      var id = $(this).attr('data-id');
                      var indexId= $(this).attr('data-index');  
                      self.getHistoryAddress(id,indexId);
                  })
            }else{
              listData += '<li class="list-group-item">Address not found</li>';
              $('#addressList'+index).html(listData);
            }
    
                                   
        }
    });
    
    }
    }

    // get address details
    getHistoryAddress =(id,index) =>{
      
        
        let self= this;
    $.ajax({
        dataType: 'json',
        method: 'get',
        url:"https://api.getAddress.io/get/"+id+"?api-key=XrOjpdAkTEiMj4o5WV_uSQ26499",
        success:function(data){
            
          var fullAddress='';
          if(data.formatted_address){
            $.each(data.formatted_address,function(k,vl){
                  if(vl!='')
                     {
                      fullAddress +=vl+', ';
                     }
            })
          }
          let houseno =  data.building_number;//+' '+data.building_name;
         
          let street_line='';
          if(data.line_1!=''){
            street_line = data.line_1;
          }
          if(data.line_2!=''){
            //street_line +=' ,'+data.line_2;
          }
          
          if(data.line_3!=''){
           street_line +=' ,'+data.line_3;
          }
          
          if(data.line_4!=''){
            street_line +=' ,'+data.line_4;
          }
          if(data.building_number!=''){
            self.state.address_history[index].house_no = data.building_number;
          }else{
           
          }
          self.state.address_history[index].house_no = data.building_number;
          self.state.address_history[index].street = street_line;
          self.state.address_history[index].city = data.town_or_city;
          self.state.address_history[index].county = data.county;
          self.state.address_history[index].postcode = data.postcode;
         
          self.setState({address_history:self.state.address_history});
          
          // data.latitude data.longitude
          $( "#location"+index).val('');
          $('#addressList'+index).html('').hide();
        }
    });

    }
  getAddress =(id) => {
      let self= this;
    $.ajax({
        dataType: 'json',
        method: 'get',
        url:"https://api.getAddress.io/get/"+id+"?api-key=XrOjpdAkTEiMj4o5WV_uSQ26499",
        success:function(data){
            
          var fullAddress='';
          if(data.formatted_address){
            $.each(data.formatted_address,function(k,vl){
                  if(vl!='')
                     {
                      fullAddress +=vl+', ';
                     }
            })
          }
          let houseno =  data.building_number;//+' '+data.building_name;
          self.setState({house_no:houseno});
          let street_line='';
          if(data.line_1!=''){
            street_line = data.line_1;
          }
          if(data.line_2!=''){
            //street_line +=' ,'+data.line_2;
          }
          
          if(data.line_3!=''){
           street_line +=' ,'+data.line_3;
          }
          
          if(data.line_4!=''){
            street_line +=' ,'+data.line_4;
          }

          self.setState({street:street_line});
          self.setState({city:data.town_or_city});
          self.setState({county:data.county});
          self.setState({postcode:data.postcode});
            
          self.setState({address:fullAddress+' '+data.postcode});
          
          // data.latitude data.longitude
          $( "#location" ).val('');
          $('#addressList').html('').hide();
        }
    }); 
 }
 
    handleClickOutside = (e) =>{
         $('#addressList').html('').hide();
         //$('#location').val('');
      }
    
      alreadyAdded =() =>{
        
        
        this.setState({formSubmitting:true});
        this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading</span>});
        const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
       
        //const data = new FormData()
        //data.append('name', this.state.name);
        
        axios.get(
            baseurl+'/api/employee_details/'+id,
            {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                          if(res.data.success){
                            this.getAddress(res.data.Employee_details.getaddress_id);
                              this.setState(res.data.Employee_details);
                             this.setState({formSubmitting:false});
                             this.setState({buttonName:'Save'});
                            
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
    componentDidMount() {
        this.alreadyAdded();
        const {name,email} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
        let emailaddress = email;
        this.setState({first_name:name});
        this.setState({email:emailaddress});
        
    }

    render() {
        const address_historyList = this.state.address_history.map((item, index) => {
            
            return(
                <div key={index}>
                <Form.Row  style={style.rowline}>
                <Form.Group as={Col} md="12">
                   <Button variant='outline-danger' style={{position:'absolute',right:0,zIndex:'1001'}} id={index} onClick={(e) => this.addressHistoryDelete(e)} size='sm'>X</Button>
                </Form.Group>
                        <Form.Group as={Col} md="2">
                        <Form.Label htmlFor="house_no">&nbsp;</Form.Label>
                        
                        <TextInput
                                name="location"
                                id="location"
                                type="text"
                                id={index}
                                placeholder="Search Address"
                                onChange={this.locationHistoryChange}
                                autoComplete="off"
                            />
                        <ul className="list-group" id={"addressList"+index} style={{display: 'none',position: 'absolute',zIndex: '100',height:'600%',overflowY:'overlay'}}></ul>
                        </Form.Group>
               
                    <Form.Group as={Col} md="2">
                        <Form.Label htmlFor="house_no">House no</Form.Label>
                        <TextInput
                            name="house_no"
                            id="house_no"
                            type="text"
                            placeholder="house no"
                            id={index}
                            onChange={(e) => this.addressHistoryChange(e) }
                            
                            value={item.house_no}
                            autoComplete="off"
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="4">
                        <Form.Label htmlFor="mobile_number">Street</Form.Label>
                        <TextInput
                            name="street"
                            id="street"
                            type="text"
                            id={index}
                            placeholder="street"
                            onChange={(e) => this.addressHistoryChange(e) }
                            required
                            value={item.street}
                            autoComplete="off"
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="2">
                                        <Form.Label htmlFor="mobile_number">City</Form.Label>
                                        <TextInput
                                            name="city"
                                            id="city"
                                            type="text"
                                            placeholder="city"
                                            id={index}
                                            onChange={(e) => this.addressHistoryChange(e) }
                                            required
                                            value={item.city}
                                            autoComplete="off"
                                        />
                                    </Form.Group>

                    <Form.Group as={Col} md="2">
                                        <Form.Label htmlFor="mobile_number">County</Form.Label>
                                        <TextInput
                                            name="county"
                                            id="county"
                                            type="text"
                                            placeholder="county"
                                            onChange={(e) => this.addressHistoryChange(e) }
                                            required
                                            value={item.county}
                                            id={index}
                                            autoComplete="off"
                                        />
                                    </Form.Group>

                    <Form.Group as={Col} md="2">
                                        <Form.Label htmlFor="mobile_number">Postcode</Form.Label>
                                        <TextInput
                                            name="postcode"
                                            id="postcode"
                                            type="text"
                                            placeholder="Postcode"
                                            onChange={(e) => this.addressHistoryChange(e) }
                                            required
                                            value={item.postcode}
                                            id={index}
                                            autoComplete="off"
                                        />
                                    </Form.Group>

                    <Form.Group as={Col} md="2">
                                        <Form.Label htmlFor="time_at_address_year">Time at Address</Form.Label>
                                        
                                        <SelectGroup
                                        name="time_at_address_year"
                                        id="time_at_address_year"
                                        value={item.time_at_address_year}
                                        required
                                        errorMessage="Please select a year."
                                        id={index}
                                        onChange={(e) => this.addressHistoryChange(e) }
                                        >
                                            <option value="">select a Year</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>

                                        </SelectGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} md="1">
                                                        <Form.Label htmlFor="mobile_number">&nbsp;</Form.Label>
                                                        
                                                        <SelectGroup
                                                        name="time_at_address_month"
                                                        id="time_at_address_month"
                                                        value={item.time_at_address_month}
                                                        id={index}
                                                        
                                                        errorMessage="Month."
                                                        onChange={(e) => this.addressHistoryChange(e) }
                                                        >
                                                            <option value="">Please select a Month</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                                <option value="6">6</option>
                                                                <option value="7">7</option>
                                                                <option value="8">8</option>
                                                                <option value="9">9</option>
                                                                <option value="10">10</option>
                                                                <option value="11">11</option>
                                                                <option value="12">12</option>


                                                        </SelectGroup>
                                                    </Form.Group>
                </Form.Row>
                </div>
            )
        });
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            
                            <Card.Body>
                                <ValidationForm autoComplete="off" id='formid' onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                                        <Form.Row style={style.rowline} >
                                        <Form.Group as={Col} md="3">
                                                              <Form.Label htmlFor="first_name">First name</Form.Label>
                                                            
                                                                    <TextInput
                                                                    name="first_name"
                                                                    id="first_name"
                                                                    placeholder="First Name"
                                                                    required value={this.state.first_name}
                                                                    onChange={this.handleChange}
                                                                    autoComplete="off"
                                                                />
                                                            
                                                        </Form.Group>

                                                        <Form.Group as={Col} md="2">
                                                              <Form.Label htmlFor="asm_name">Middle Name</Form.Label>
                                                        
                                                        <TextInput
                                                            name="middle_name"
                                                            id="middle_name"
                                                            type="text"
                                                            placeholder="middle name"
                                                            value={this.state.middle_name}
                                                            onChange={this.handleChange}
                                                            autoComplete="off"
                                                        />
                                                        
                                                    </Form.Group>
                                                        <Form.Group as={Col} md="3">
                                                              <Form.Label htmlFor="last_name">Last Name</Form.Label>
                                                        
                                                        <TextInput
                                                            name="last_name"
                                                            id="last_name"
                                                            placeholder="Last Name"
                                                            value={this.state.last_name}
                                                            onChange={this.handleChange}
                                                            autoComplete="off"
                                                        />
                                                        
                                                    </Form.Group>
                                                    
                                                    <Form.Group as={Col} md="2">
                                                <Form.Label htmlFor="region">start date</Form.Label>
                                              
                                                <Datetime closeOnSelect={true} onChange={this.startdateChange} value={this.state.start_date}  dateFormat="D/M/Y" timeFormat={false}  maxDate={new Date()} inputProps={{required:'required',name:"start_date",placeholder: 'Select Date',autoComplete:'off'}} />
                                            
                                            </Form.Group>

                                                    <Form.Group as={Col} md="2">
                                                              <Form.Label htmlFor="region">region</Form.Label>
                                                        
                                                        <TextInput
                                                            name="region"
                                                            id="region"
                                                            type="text"
                                                            placeholder="region"
                                                            onChange={this.handleChange}
                                                            required
                                                            value={this.state.region}
                                                            autoComplete="off"
                                                        />
                                                        
                                                    </Form.Group>
                                                    
                                        </Form.Row>
                                        <Form.Row>   
                                        <Form.Group as={Col} md="2">
                                                <Form.Label htmlFor="region">Date of birth</Form.Label>
                                              
                                                <Datetime closeOnSelect={true} onChange={this.dateofbirthChange} value={this.state.date_of_birth}  dateFormat="D/M/Y" timeFormat={false}  maxDate={new Date()} inputProps={{required:'required',name:"date_of_birth",placeholder: 'Select Date',autoComplete:'off'}} />
                                            
                                            </Form.Group>

                                           

                                            <Form.Group as={Col} md="2">
                                                <Form.Label htmlFor="telephone_number">Telephone Number</Form.Label>
                                                    
                                                        <TextInput
                                                            name="telephone_number"
                                                            id="telephone_number"
                                                            type="text"
                                                            placeholder="Telephone Number"
                                                            onChange={this.handleChange}
                                                            required
                                                            value={this.state.telephone_number}
                                                            autoComplete="off"
                                                        />
                                                        
                                                    </Form.Group>
                                                    
                                                    <Form.Group as={Col} md="2">
                                                        <Form.Label htmlFor="mobile_number">Mobile Number</Form.Label>
                                                        <TextInput
                                                            name="mobile_number"
                                                            id="mobile_number"
                                                            type="text"
                                                            placeholder="Mobile Number"
                                                            onChange={this.handleChange}
                                                            required
                                                            value={this.state.mobile_number}
                                                            autoComplete="off"
                                                        />
                                                    </Form.Group>
                                                    
                                                    <Form.Group as={Col} md="2">
                                                        <Form.Label htmlFor="email">Email</Form.Label>
                                                        <TextInput
                                                            name="email"
                                                            id="email"
                                                            type="text"
                                                            placeholder="Email"
                                                            onChange={this.handleChange}
                                                            required
                                                            value={this.state.email}
                                                            autoComplete="off"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="2">
                                                    
                                                    <Form.Label htmlFor="gender">Gender</Form.Label>
                                                    
                                                        <div className="custom-controls-stacked radio">
                                                            <Radio.RadioGroup 
                                                                name="gender"
                                                                required
                                                                valueSelected={this.state.gender}
                                                                inline={true}
                                                                onChange={this.handleChange}>
                                                                <Radio.RadioItem  id="radio4" label="Male" value="1" />
                                                                <Radio.RadioItem id="radio5" label="Female" value="0" />
                                                                
                                                            </Radio.RadioGroup>
                                                        </div>
                                                    
                                                </Form.Group>
                                                    </Form.Row>
                                         <Form.Row>   
                                                    <Form.Group as={Col} md="2">
                                                    
                                                    <TextInput
                                                            name="location"
                                                            id="location"
                                                            type="text"
                                                            placeholder="Search Address"
                                                            onChange={this.locationChange}
                                                            autoComplete="off"
                                                        />
                                                     <ul className="list-group" id="addressList" style={{display: 'none',position: 'absolute',zIndex: '100',height:'600%',overflowY:'overlay'}}></ul>
                                                    </Form.Group>
                                                    </Form.Row>
                                        <Form.Row>   
                                <Form.Group as={Col} md="2">
                                                        <Form.Label htmlFor="house_no">House no</Form.Label>
                                                        <TextInput
                                                            name="house_no"
                                                            id="house_no"
                                                            type="text"
                                                            placeholder="house no"
                                                            onChange={this.handleChange}
                                                            
                                                            value={this.state.house_no}
                                                            autoComplete="off"
                                                        />
                                                    </Form.Group>

<Form.Group as={Col} md="4">
                                                        <Form.Label htmlFor="mobile_number">Street</Form.Label>
                                                        <TextInput
                                                            name="street"
                                                            id="street"
                                                            type="text"
                                                            placeholder="street"
                                                            onChange={this.handleChange}
                                                            required
                                                            value={this.state.street}
                                                            autoComplete="off"
                                                        />
                                                    </Form.Group>

<Form.Group as={Col} md="2">
                                                        <Form.Label htmlFor="mobile_number">City</Form.Label>
                                                        <TextInput
                                                            name="city"
                                                            id="city"
                                                            type="text"
                                                            placeholder="city"
                                                            onChange={this.handleChange}
                                                            required
                                                            value={this.state.city}
                                                            autoComplete="off"
                                                        />
                                                    </Form.Group>

<Form.Group as={Col} md="2">
                                                        <Form.Label htmlFor="mobile_number">County</Form.Label>
                                                        <TextInput
                                                            name="county"
                                                            id="county"
                                                            type="text"
                                                            placeholder="county"
                                                            onChange={this.handleChange}
                                                            required
                                                            value={this.state.county}
                                                            autoComplete="off"
                                                        />
                                                    </Form.Group>

<Form.Group as={Col} md="2">
                                                        <Form.Label htmlFor="mobile_number">Postcode</Form.Label>
                                                        <TextInput
                                                            name="postcode"
                                                            id="postcode"
                                                            type="text"
                                                            placeholder="Postcode"
                                                            onChange={this.handleChange}
                                                            required
                                                            value={this.state.postcode}
                                                            autoComplete="off"
                                                        />
                                                    </Form.Group>

<Form.Group as={Col} md="2">
                                                        <Form.Label htmlFor="time_at_address_year">Time at Address</Form.Label>
                                                        
                                                        <SelectGroup
                                                        name="time_at_address_year"
                                                        id="time_at_address_year"
                                                        value={this.state.time_at_address_year}
                                                        required
                                                        errorMessage="Please select a year."
                                                        onChange={this.handleChange}>
                                                            <option value="">select a Year</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>

                                                        </SelectGroup>
                                                    </Form.Group>

<Form.Group as={Col} md="1">
                                                        <Form.Label htmlFor="mobile_number">&nbsp;</Form.Label>
                                                        
                                                        <SelectGroup
                                                        name="time_at_address_month"
                                                        id="time_at_address_month"
                                                        value={this.state.time_at_address_month}
                                                        
                                                        errorMessage="Month."
                                                        onChange={this.handleChange}>
                                                            <option value="">Please select a Month</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                                <option value="6">6</option>
                                                                <option value="7">7</option>
                                                                <option value="8">8</option>
                                                                <option value="9">9</option>
                                                                <option value="10">10</option>
                                                                <option value="11">11</option>
                                                                <option value="12">12</option>


                                                        </SelectGroup>
                                                    </Form.Group>

<Form.Group as={Col} md="2">
                                                        <Form.Label htmlFor="mobile_number">Town of Birth</Form.Label>
                                                        <TextInput
                                                            name="town_of_birth_detail"
                                                            id="town_of_birth_detail"
                                                            type="text"
                                                            placeholder="town of birth"
                                                            onChange={this.handleChange}
                                                            required
                                                            value={this.state.town_of_birth_detail}
                                                            autoComplete="off"
                                                        />
                                                    </Form.Group>

<Form.Group as={Col} md="2">
                                                        <Form.Label htmlFor="mobile_number">Ni Number</Form.Label>
                                                        <TextInput
                                                            name="ni_number"
                                                            id="ni_number"
                                                            type="text"
                                                            placeholder="Ni Number"
                                                            onChange={this.handleChange}
                                                            required
                                                            value={this.state.ni_number}
                                                            autoComplete="off"
                                                        />
                                                    </Form.Group>

                                                     <Form.Group as={Col} md="2">
                                                        <Form.Label htmlFor="mobile_number">Mothers Maiden</Form.Label>
                                                        <TextInput
                                                            name="mothers_maiden"
                                                            id="mothers_maiden"
                                                            type="text"
                                                            placeholder="mothers maiden"
                                                            onChange={this.handleChange}
                                                            required
                                                            value={this.state.mothers_maiden}
                                                            autoComplete="off"
                                                        />
                                                    </Form.Group>
                                                    </Form.Row>
                                        <Form.Row> 
                                                    <Form.Group as={Col} md="2">
                                                        <Form.Label htmlFor="mobile_number">Emergency contact</Form.Label>
                                                        <TextInput
                                                            name="emergency_contact"
                                                            id="emergency_contact"
                                                            type="text"
                                                            placeholder="emergency contact"
                                                            onChange={this.handleChange}
                                                            required
                                                            value={this.state.emergency_contact}
                                                            autoComplete="off"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="2">
                                                        <Form.Label htmlFor="mobile_number">relationship</Form.Label>
                                                        <TextInput
                                                            name="relationship"
                                                            id="relationship"
                                                            type="text"
                                                            placeholder="relationship"
                                                            onChange={this.handleChange}
                                                            required
                                                            value={this.state.relationship}
                                                            autoComplete="off"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="2">
                                                        <Form.Label htmlFor="mobile_number">contact number</Form.Label>
                                                        <TextInput
                                                            name="contact_number"
                                                            id="contact_number"
                                                            type="text"
                                                            placeholder="contact number"
                                                            onChange={this.handleChange}
                                                            required
                                                            value={this.state.contact_number}
                                                            autoComplete="off"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group as={Col} md="4">
                                                        <Form.Label htmlFor="mobile_number">Address</Form.Label>
                                                        <TextInput
                                                            name="address"
                                                            id="address"
                                                            type="text"
                                                            placeholder="Address"
                                                            onChange={this.handleChange}
                                                            required
                                                            value={this.state.address}
                                                            autoComplete="off"
                                                        />
                                                    </Form.Group>



                                        </Form.Row>
                                        <hr/>
                                      { (this.state.total_history_year?<><Button variant='secondary' onClick={this.addAddressHistory}  size='sm'>+Add Address</Button></>:'') }   
                                        {this.state.address_history.length>0?
                                         <div style={{marginBottom:'10px'}}><i class="fa fa-history" aria-hidden="true"></i> <b>Address History</b></div>:''}
                                     
                                        {address_historyList}
                                        <Form.Row>   
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
const style = {
    rowline:{
             borderBottom:'solid 1px #f8f9fa',marginBottom:'15px'
            }
}
export default EmployeeDetails;