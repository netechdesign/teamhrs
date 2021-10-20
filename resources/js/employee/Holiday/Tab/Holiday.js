import React from 'react';
import {Row, Col, Card, Form, Button,Dropdown,DropdownButton,Table} from 'react-bootstrap';
import {Route, Switch, Redirect,NavLink,Link} from 'react-router-dom';
import Datetime from 'react-datetime';
import Select from 'react-select';
import MaskedInput from 'react-text-mask';
import validator from 'validator';
import axios from 'axios'
import PNotify from "pnotify/dist/es/PNotify";
import "pnotify/dist/es/PNotifyButtons";
import "pnotify/dist/es/PNotifyConfirm";
import "pnotify/dist/es/PNotifyCallbacks";
import Aux from "../../../hoc/_Aux";
import Outstanding_entitlement from '../Outstanding_entitlement'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../employee.css';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
window.jQuery = $;
window.$ = $;
global.jQuery = $;




$.DataTable = require( 'datatables.net-bs' );
require( 'jszip' );
//require('pdfmake/build/pdfmake.js');
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

let ajaxabort;

var oTable="";
var selectedYear='';
var user_id='0';
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
    'bFilter': false,
    "fnServerParams": function (aoData) {

        var acolumns = this.fnSettings().aoColumns,
            columns = [];

        $.each(acolumns, function (i, item) {
            columns.push(item.data);
        })
        aoData.push({name: 'columns', value: columns});
        aoData.push({name: 'user_id', value: user_id});
        
        if(selectedYear!='') {
            aoData.push({name: 'selectedYear', value: selectedYear});
        }
        aoData.push({name: 'is_approved', value:'Yes'});
          /*  if($('#status').val()!='') {
                aoData.push({name: 'is_active', value: $('#status').val()});
            }
          */  
        },

    "columns": [  
        {"data":"from_date"},
        {"data": "to_date"}, 
        {"data": "time_off"},
        {"data": "notes"},
        {"data": "id"},
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
              
                var str_buttons = '<button type="button" class="edit btn btn-info btn-sm" data-id="'+row.id+'" ><i style="margin:0px !important;" class="feather icon-edit"></i></button>';
                
                return [
                    str_buttons,
                ].join('');
               
            },
            "targets": $('#data-table-responsive th#action').index(),
            "orderable": false,
            "searchable": false
        },
        {
            "render": function (data, type, row) {
              
                var is_withdraw = '<button type="button" class="send_withdraw text-capitalize btn-sm btn btn-outline-secondary" data-id="'+row.id+'" ><i style="margin:0px !important;" class="feather icon-send"></i>Send</button>';
                if(row.is_withdraw==1){
                    is_withdraw = '<span class="mr-1 badge badge-warning" style="padding: 10px;">Pending Request</span>';
                }else if(row.is_withdraw==2){
                    is_withdraw = '<span class="mr-1 badge badge-success" style="padding: 10px;">Approved</span>';
                }else if(row.is_withdraw==3){
                    is_withdraw = '<span class="mr-1 badge badge-danger" style="padding: 10px;">Not Approved</span>';
                }
                if(row.total_days >28){
                    is_withdraw ='-';
                }
                return [
                    is_withdraw,
                ].join('');
               
            },
            "targets": $('#data-table-responsive th#is_withdraw').index(),
            "orderable": false,
            "searchable": false
        },
        {
            "targets": 0,
            "orderable": false
        }
    ]
});
   $('.tdBefore').css({'margin':'-5px  0px','line-height':'1'});
   $('.dataTables_length,.dataTables_info').css({'display':'none'})
   

}
class Holiday extends React.Component {
    state = {
        apiload:false,
        employee_details:[],
        userId:'',
        outstanding_entitlement:[],
        holidayYearOptions:[],
        holiday_year:'',
        selected_year:{},
        
    };
    
    Outstanding_entitlement=(user_id)=>{
            
        const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
        
        var oneYearFromNow = new Date();
            var current_year = oneYearFromNow.getFullYear();
            var next_year = parseInt(current_year)+1;
            let selected_year = current_year;
        if(Object.keys(this.state.selected_year).length >0){
             selected_year = this.state.selected_year['value'] 
            }
            selectedYear= selected_year;
            user_id=user_id;
            if(oTable==''){ atable() }else{oTable.draw();}
            
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
    componentDidMount() {
        this.getYears();
        const {id,name,email} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
        if(id){
            if(oTable!=''){ oTable=''; }
            this.Outstanding_entitlement(id);
            this.setState({userId:id});
        }
        const { match, location, history } = this.props;
        const self= this;
        $('#data-table-responsive tbody').on('click', '.edit', function () {
            var id =  $(this).attr('data-id');
            
            history.push('/Employee/Holiday-edit/'+id);
          
        }) 
        //Delete
        $('#data-table-responsive tbody').on('click', '.send_withdraw', function () {
            var id =  $(this).attr('data-id');
            const MySwal = withReactContent(Swal);
                    const Permission =0; //CheckPermission('File','Delete Uploaded Data',history,false);
                    if(Permission==1){
                    return false;
                    }
        
            MySwal.fire({
                title: 'Are you sure?',
               text: 'Do you want to holiday withdraw?',
                type: 'warning',
                showCloseButton: true,
                showCancelButton: true
            }).then((willDelete) => {

                if (willDelete.value) {
                    const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
                    const baseurl= window.location.origin;
                    axios.post(
                        baseurl+'/api/holiday_withdraw_request/'+id,{is_withdraw:1},
                        {
                            headers:{'Authorization':'Bearer '+auth_token}
                        } 
                    ).then(res =>{
                                      if(res.data.success){
                    oTable.draw();
                    return MySwal.fire('', 'Holiday withdraw request has been sent!', 'success');
                                      }
                                    })
                } else {
                   // return MySwal.fire('', 'Your imaginary file is safe!', 'error');
                }
            });
            
              
          } ); 
          
    }
    
    holidayYearchange = (e) =>{
        
        let Engineers = this.state.holidayYearOptions.filter((vl,index)=> vl.value==e.value);
        if(Engineers){
            
                    
            const {id,name,email} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
            if(id){
                     this.setState({selected_year:{ label:Engineers[0].label,value:Engineers[0].value }},
                                   ()=>{this.Outstanding_entitlement(id);}
                                  )
                    
                   }
            }
    }
    render() {
        
        const title = <i className='feather icon-more-vertical' />;
        return (
            <Aux>
                <Row>
                     <Col>
                     <Card>
                        <Card.Body>
                        <Form.Row  style={style.rowline}>     
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
                                </Form.Row>    
                            <Outstanding_entitlement user_id={this.state.user_id} entitlement={this.state.outstanding_entitlement} />            
                        </Card.Body>
                    </Card>
                           <Card>
                                 <Card.Body>
                                            <Table ref="tbl" striped hover responsive className="table table-condensed" id="data-table-responsive">
                                            <thead>
                                            <tr>
                                            <th id="from_date">From</th>
                                            <th id="to_date">To</th>
                                            <th id="time_off">Time off</th>
                                            <th id="notes">Notes</th>
                                            <th id="is_withdraw">Withdraw</th>
                                            <th id="action">Action</th>
                                            </tr>
                                            </thead>
                                            <tfoot>
                                            <tr> 
                                            <th id="from_date">From</th>
                                            <th id="to_date">To</th>
                                            <th id="time_off">Time Off</th>
                                            <th id="notes">Notes</th>
                                            <th id="is_withdraw">Withdraw</th>
                                            <th id="action">Action</th>
                                            </tr>
                                            </tfoot>
                                            </Table>
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
export default Holiday;