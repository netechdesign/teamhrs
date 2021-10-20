import React from 'react';
import {Row, Col, Card, Form, Button,Dropdown,DropdownButton,Table} from 'react-bootstrap';
import {Route, Switch, Redirect,NavLink,Link} from 'react-router-dom';
import Datetime from 'react-datetime';
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import MaskedInput from 'react-text-mask';
import validator from 'validator';
import axios from 'axios'
import Select from 'react-select';
import PNotify from "pnotify/dist/es/PNotify";
import "pnotify/dist/es/PNotifyButtons";
import "pnotify/dist/es/PNotifyConfirm";
import "pnotify/dist/es/PNotifyCallbacks";
import Aux from "../../../hoc/_Aux";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import Outstanding_entitlement from '../../../employee/Holiday/Outstanding_entitlement'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
window.jQuery = $;
window.$ = $;
global.jQuery = $;



$.DataTable = require( 'datatables.net-bs' );
require( 'jszip' );
//require('pdfmake/build/pdfmake.js'); test
//require('pdfmake/build/vfs_fonts.js');
require( 'datatables.net-autofill' );
require( 'datatables.net-buttons-bs' );
require( 'datatables.net-buttons/js/buttons.colVis.js' );
require( 'datatables.net-buttons/js/buttons.flash.js' );
require( 'datatables.net-buttons/js/buttons.html5.js' );
require( 'datatables.net-buttons/js/buttons.print.js' );
require( 'datatables.net-colreorder' );
require( 'datatables.net-keytable' );
require( 'datatables.net-responsive-bs' );
require( 'datatables.net-rowgroup' );
require( 'datatables.net-rowreorder' );
require( 'datatables.net-scroller' );
require( 'datatables.net-select' );
require( 'datatables.net-fixedcolumns' );
require( 'datatables.net-fixedheader' );

const baseurl= window.location.origin;
var selectedYear='';
let ajaxabort;

var oTable="";
var user_id="";
const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
function atable() {
  
    
    let tableResponsive = '#data-table-responsive';

oTable = $(tableResponsive).DataTable({
    "bStateSave": true,
    "processing": true,
    "bPaginate": true,
    "serverSide": true,
    "bProcessing": true,
    "iDisplayLength": 10,
    "bServerSide": true,
    "sAjaxSource": window.location.origin+'/api/holiday',
    'bPaginate': true,
    "fnServerParams": function (aoData) {

        var acolumns = this.fnSettings().aoColumns,
            columns = [];

        $.each(acolumns, function (i, item) {
            columns.push(item.data);
        })
        aoData.push({name: 'columns', value: columns});
              
        if(user_id !="") {
            aoData.push({name: 'user_id', value:user_id});
        }

        if(selectedYear!='') {
                aoData.push({name: 'selectedYear', value: selectedYear});
        }
          
        },

    "columns": [  
        {"data":"user_name"},
        {"data":"from_date"},
        {"data": "to_date"}, 
        {"data": "time_off"},
        {"data": "notes"},
        {"data":"is_approved"},
        {"data": "id"}
    ],
    responsive: {
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.childRowImmediate,
                type: ''
            }
        }
    },
    "order": [[0, "desc"]],
    "lengthMenu": [
        [5,10, 25, 50, 100],
        [5,10, 25, 50, 100]
    ],
    "oLanguage": {
        "sLengthMenu": "_MENU_",
        "oPaginate": {
            "sNext": '<span aria-hidden="true">»</span>',
            "sPrevious": '<span aria-hidden="true">«</span>'
        },
       // sProcessing: "<img width='33px' src='"+BASE_URL+"assets/layouts/layout/img/ajax-loading.gif'>"

    },
    "fnInitComplete": function () {
//oTable.fnAdjustColumnSizing();
    },
    'fnServerData': function (sSource, aoData, fnCallback) {

        $.ajax
        ({
            'dataType': 'json',
            'type': 'GET',
            'url': sSource,
            'data': aoData,
            'headers': { Authorization: `Bearer `+auth_token },
            'success': fnCallback
        });
    },
    "fnDrawCallback": function () {
        $('body').css('min-height', ($('#data-table-responsive tr').length * 50) + 200);
        $(window).trigger('resize');
      
    },
    "columnDefs": [
        {
            "render": function (data, type, row) {
              
                var str_buttons = '<button type="button" class="edit btn btn-info btn-sm" data-id="'+row.id+'" ><i style="margin:0px !important;" class="feather icon-edit"></i></button><button type="button" class="deletefile btn btn-danger btn-sm" data-id="'+row.id+'" ><i style="margin:0px !important;" class="feather icon-x"></i></button>';
                if(row.is_withdraw==1){
                  var  is_withdraw = '<button type="button" class="is_withdraw btn btn-warning btn-sm" data-id="'+row.id+'" ><i style="margin:0px !important;" class="feather icon-edit"></i> Withdraw</button>';
                }else if(row.is_withdraw==2){
                   var is_withdraw = '<span class="mr-1 badge badge-success" style="padding: 10px;">Withdraw approved</span>';
                }else{
                    var is_withdraw = '';
                }
                return [
                    str_buttons,is_withdraw
                ].join('');
               
            },
            "targets": $('#data-table-responsive th#action').index(),
            "orderable": false,
            "searchable": false
        },
        
        {
            "render": function (data, type, row) {
              
                var str_buttons = 'pending';
                if(row.is_approved==null){
                    str_buttons ='<span class="mr-1 badge badge-warning">Pending</span>'
                }else if(row.is_approved=='yes'){
                    str_buttons ='<span class="mr-1 badge badge-success">Yes</span>'
                }else if(row.is_approved=='no'){
                    str_buttons ='<span class="mr-1 badge badge-danger">No</span>'
                }
                
                return [
                    str_buttons,
                ].join('');
               
            },
            "targets": $('#data-table-responsive th#is_approved').index(),
            "orderable": false,
            "searchable": false
        },
        
        {
            "targets": 0,
            "orderable": false
        }
    ]
});
   
}
class Holiday extends React.Component {
    state = {
        apiload:false,
        employee_details:[],
        holidayYearOptions:[],
        holiday_year:'',
        selected_year:{},
        outstanding_entitlement:[],
        search:'',
        iDisplayStart:0,
        iDisplayLength:1,
        aaData:[],
        cuttentPage:'',
        iTotalDisplayRecords:'',
        iTotalRecords:'',
        totalPage:0,
        full_name:' ',
        user_id:'',
        role_id:'',
        role_list:[],
        location_id:'',
        previous_link:0,
        next_link:0
        };
        employeeList =(page_no) =>{
   
        
            this.setState({apiload:true});
            
            const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
            
            axios.get(
                baseurl+'/api/employee_details',{params: {iDisplayStart: this.state.iDisplayStart,iDisplayLength:this.state.iDisplayLength,page:page_no,sSearch:this.state.search},headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
            ).then(res =>{
              
        
                              if(res.data.success){
                                this.setState({apiload:false});  
                                this.setState(res.data,()=>{
                                    if(this.state.aaData.length >0){
                                        this.setState({full_name:this.state.aaData[0].full_name,user_id:this.state.aaData[0].user_id},
                                            ()=>{
                                                this.Outstanding_entitlement(this.state.user_id);
                                            }
                                            );  
                                        
                                    }
                                });    
                                            
                                 
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
        holidayYearchange = (e) =>{
        
            let Engineers = this.state.holidayYearOptions.filter((vl,index)=> vl.value==e.value);
            if(Engineers){
                
                        
                const {id,name,email} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
                if(id){
                         this.setState({selected_year:{ label:Engineers[0].label,value:Engineers[0].value }},
                                       ()=>{
                                           this.Outstanding_entitlement(this.state.user_id);  
                                        }
                                      )
                        
                       }
                }
        }
        getYears =() =>{
            var oneYearFromNow = new Date();
            var current_year = oneYearFromNow.getFullYear();
            var next_year = parseInt(current_year)+1;
            var current_year_text = current_year; //current_year+'_'+next_year;
            var next_year = parseInt(current_year)+1;
            var next_two_years = next_year+1;
            var next_year_text = next_year+'_'+next_two_years;
            var last_year = parseInt(current_year)-1;    
            var last_year_text = last_year+'_'+current_year;
            var last_two_year = parseInt(last_year)-1;
            var last_two_year_text = last_two_year+'_'+last_year;
            
           let yearsList = [
                { value: next_year_text, label: 'Next holiday year', color: '#00B8D9' },
                { value: current_year_text, label: 'This holiday year', color: '#00B8D9' },
                { value: last_year_text, label: 'Last holiday year', color: '#00B8D9' },
                { value: last_two_year_text, label: 'Apr 01 '+last_two_year+' - Mar 31 '+last_year, color: '#00B8D9' },
                ]
               this.setState({holidayYearOptions:yearsList,selected_year:yearsList[1]}); 
          }

          
          sweetConfirmHandler = (id) => {
              
            const MySwal = withReactContent(Swal);
            MySwal.fire({
                title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Approved!',
  cancelButtonText: 'not Approved!',
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
            }).then((willDelete) => {
                
                if (willDelete.value) {
                    const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
                    const baseurl= window.location.origin;
                    axios.post(
                        baseurl+'/api/holiday_withdraw_request/'+id,{is_withdraw:2},
                        {
                            headers:{'Authorization':'Bearer '+auth_token}
                        } 
                    ).then(res =>{
                                      if(res.data.success){
                    
                    this.Outstanding_entitlement(this.state.user_id);
                    return MySwal.fire('', 'Holiday withdraw request has been approved!', 'success');
                                      }
                                    })
                } else {
                    const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
                    const baseurl= window.location.origin;
                    axios.post(
                        baseurl+'/api/holiday_withdraw_request/'+id,{is_withdraw:3},
                        {
                            headers:{'Authorization':'Bearer '+auth_token}
                        } 
                    ).then(res =>{
                                      if(res.data.success){
                                        this.Outstanding_entitlement(this.state.user_id);
                    return MySwal.fire('', 'Holiday withdraw request has been not approved!', 'error');
                                      }
                                    })
                    
                }
            });
        };
      

          Outstanding_entitlement=(userid)=>{
            
            const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
            
            var oneYearFromNow = new Date();
                var current_year = oneYearFromNow.getFullYear();
                var next_year = parseInt(current_year)+1;
                let selected_year = current_year;
                
            if(Object.keys(this.state.selected_year).length >0){
                 selected_year = this.state.selected_year['value'] 
                 
                }
                
                selectedYear= selected_year;
                
                user_id = userid;
                if(oTable==''){
                     atable();
                    
                    }else{
                        oTable.draw();
                    }
                const { match, location, history } = this.props;
                const self= this;
                //is_withdraw
            
            $('#data-table-responsive tbody').on('click', '.is_withdraw', function () {
                    var id =  $(this).attr('data-id');
                    self.sweetConfirmHandler(id);
            })     
            //Edit
                
                $('#data-table-responsive tbody').on('click', '.edit', function () {
                var id =  $(this).attr('data-id');

                history.push('/Holiday/edit/'+id);

                }) 
            //Delete
                    $('#data-table-responsive tbody').on('click', '.deletefile', function () {
                        var id =  $(this).attr('data-id');
                        const MySwal = withReactContent(Swal);
                                const Permission =0; //CheckPermission('File','Delete Uploaded Data',history,false);
                                if(Permission==1){
                                return false;
                                }
                    
                        MySwal.fire({
                            title: 'Are you sure?',
                        // text: 'Once deleted, you will not be able to recover this data!',
                            type: 'warning',
                            showCloseButton: true,
                            showCancelButton: true
                        }).then((willDelete) => {

                            if (willDelete.value) {
                                const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
                                const baseurl= window.location.origin;
                                axios.post(
                                    baseurl+'/api/holiday/'+id,{_method: 'delete'},
                                    {
                                        headers:{'Authorization':'Bearer '+auth_token}
                                    } 
                                ).then(res =>{
                                                if(res.data.success){
                                oTable.draw();
                                return MySwal.fire('', 'Holiday has been deleted!', 'success');
                                                }
                                                })
                            } else {
                            // return MySwal.fire('', 'Your imaginary file is safe!', 'error');
                            }
                        });
                        
                        
                    } ); 
                    
                   axios.post(
                baseurl+'/api/outstanding_entitlement',{user_id:user_id,selected_year:selected_year},{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
            ).then(res =>{
                              if(res.data.success){
                                  
                                 this.setState({outstanding_entitlement:res.data.result});
                                
                              }else{
                                this.setState({outstanding_entitlement:[]});
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
      RoleList = (e) =>{
        
          
          
          const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
          
            axios.get(
              baseurl+'/api/roledropdown',{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
          ).then(res =>{
                          if(res.data.success){
                              
                           
                             this.setState({role_list:res.data.data})
                          
                            // document.getElementById("requestLoder").innerHTML = '';
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
    componentDidMount() {
        if(oTable!=''){ oTable=''; }
        this.RoleList();
        this.employeeList(1);
        
        this.getYears();
        const {name,email} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
        let self= this;
        $('.next_link').on('click',function(){
            self.employeeList(self.state.next_link);
        })
        $('.previous_link').on('click',function(){
            self.employeeList(self.state.previous_link);
        })
        // $('#data-table-responsive tbody').on('click', '.edit', function () {
        //     var id =  $(this).attr('data-id');
        //     history.push('/user/edit/'+id);
        
        // })
        
         
    }

    render() {
        
        const title = <i className='feather icon-more-vertical' />;
        return (
            <Aux>
                  <Row>
                        <Col>
                            <Card>
                                    <Card.Header style={{padding:'5px 25px'}}>
                                        <Card.Title as="h5" style={{marginTop:'15px'}}>Holiday Overview</Card.Title>
                                        <Button style={{'float':'right'}}  as={Link} to="/Holiday/Calendar" ><i class="feather icon-calendar"></i> Calendar</Button>
                                    </Card.Header>
                                    <Card.Body>
                                    <Form.Row  style={style.rowline}>     
                                    <Form.Group as={Col} md="2">
                                                <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                name="location_id"
                                                value={this.state.location_id}
                                                options={this.state.holidayYearOptions}
                                                placeholder="Select Location"
                                                onChange={this.holidayYearchange}
                                                />        
                                        </Form.Group>
                                        <Form.Group as={Col} md="2">
                                                <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                name="role_id"
                                                value={this.state.role_id}
                                                options={this.state.role_list}
                                                placeholder="Select Department"
                                                onChange={this.holidayYearchange}
                                                />        
                                        </Form.Group>
                                        <Form.Group as={Col} md="2">
                                                <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                name="user_id"
                                                value={this.state.user_id}
                                                options={this.state.holidayYearOptions}
                                                placeholder="Select Engineer"
                                                onChange={this.holidayYearchange}
                                                />        
                                        </Form.Group>
                                        
                                        <Form.Group as={Col} md="2">
                                                <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                name="holiday_year"
                                                value={this.state.selected_year}
                                                options={this.state.holidayYearOptions}
                                                placeholder="Select year"
                                                onChange={this.holidayYearchange}
                                                />        
                                        </Form.Group>
                                        <Form.Group as={Col} md="4" style={{margin:'-5px'}}> 
                                            <div style={{float:'right'}}>
                                                {
                                                (this.state.previous_link >0?<a href="javascript:;" class="previous_link btn btn-link" >&laquo; Previous</a>:'')
                                                }
                                                <label>{this.state.full_name}</label>

                                                {
                                                (this.state.next_link >0?<a href="javascript:;" class="next_link btn btn-link" >Next &raquo;</a>:<a href="#" class="btn btn-link" >&nbsp;</a>)
                                                }
                                                
                                            </div>    
                                        </Form.Group>
                                    </Form.Row> 
                                    
                                        <Outstanding_entitlement user_id={this.state.user_id} entitlement={this.state.outstanding_entitlement} />  
                                    
                                    <Form.Row>     
                                        <Table ref="tbl" striped hover responsive className="table table-condensed" id="data-table-responsive">
                                            <thead>
                                            <tr>
                                            
                                                <th id="user_name">Name</th>
                                                <th id="from_date">From</th>
                                                <th id="to_date">To</th>
                                                <th id="time_off">Time Off</th>
                                                <th id="notes">Notes</th>
                                                <th id="is_approved">Approved</th>
                                                <th id="action">Action</th>
                                            </tr>
                                            </thead>
                                            <tfoot>
                                            <tr> 
                                                <th id="user_name">Name</th>
                                                <th id="from_date">From</th>
                                                <th id="to_date">To</th>
                                                <th id="time_off">Time Off</th>
                                                <th id="notes">Notes</th>
                                                <th id="is_approved">Approved</th>
                                                <th id="action">Action</th>
                                            </tr>
                                            </tfoot>
                                        </Table>
                                        </Form.Row>  
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
             margin:'-30px -25px 10px',paddingTop:'15px',borderBottom:'solid 2px #f8f9fa'
            },
    nextprebutton:{backgroundColor: '#f1f1f1',color: 'black',padding:'7px',margin:'10px'}        
}
export default Holiday;