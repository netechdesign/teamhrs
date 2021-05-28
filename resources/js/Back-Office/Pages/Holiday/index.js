import React from 'react';
import {Row, Col, Card, Form, Button,Dropdown,DropdownButton,Table} from 'react-bootstrap';
import {Route, Switch, Redirect,NavLink,Link} from 'react-router-dom';
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
       
        
        if($('input[name="role_name"]').val()!='') {
            aoData.push({name: 'role_name', value: $('input[name="role_name"]').val()});
        }

          /*  if($('#status').val()!='') {
                aoData.push({name: 'is_active', value: $('#status').val()});
            }
          */  
        },

    "columns": [  
        {"data":"user_name"},
        {"data":"from_date"},
        {"data": "to_date"}, 
        {"data": "time_off"},
        {"data": "notes"},
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
              
                var str_buttons = '<button type="button" class="edit btn btn-info btn-sm" data-id="'+row.id+'" ><i style="margin:0px !important;" class="feather icon-edit"></i></button><button type="button" class="deletefile btn btn-danger btn-sm" data-id="'+row.id+'" ><i style="margin:0px !important;" class="feather icon-x"></button>';
                
                return [
                    str_buttons,
                ].join('');
               
            },
            "targets": $('#data-table-responsive th#action').index(),
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
        };
    
    
    componentDidMount() {
        atable()
        const {name,email} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
        
        const { match, location, history } = this.props;
        const self= this;
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
          
    }

    render() {
        
        const title = <i className='feather icon-more-vertical' />;
        return (
            <Aux>
                  <Row>
                        <Col>
                            <Card>
                                    <Card.Header>
                                        <Card.Title as="h5">Holiday</Card.Title>
                                        <Button style={{'float':'right'}}  as={Link} to="/Holiday/Calendar" ><i class="feather icon-calendar"></i> Calendar</Button>
                                    </Card.Header>
                                    <Card.Body>
                                        <Table ref="tbl" striped hover responsive className="table table-condensed" id="data-table-responsive">
                                            <thead>
                                            <tr>
                                            
                                                <th id="user_name">Name</th>
                                                <th id="from_date">From</th>
                                                <th id="to_date">To</th>
                                                <th id="time_off">time_off</th>
                                                <th id="notes">notes</th>
                                                <th id="action">Action</th>
                                            </tr>
                                            </thead>
                                            <tfoot>
                                            <tr> 
                                                <th id="user_name">Name</th>
                                                <th id="from_date">From</th>
                                                <th id="to_date">To</th>
                                                <th id="time_off">Time Off</th>
                                                <th id="notes">notes</th>
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