import React from 'react';
import {Row, Col, Card, Form, Button,Dropdown,DropdownButton,Table} from 'react-bootstrap';
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
    "sAjaxSource": window.location.origin+'/api/application_form',
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
        {"data":"created_at_date"},
        {"data": "position_applied_for"}, 
        {"data": "information_provided_name"},
         {"data": "email"},
         {"data": "telephone_number"},
         {"data":"postcode"},
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
                if(row.is_viewed==1){
                      str_buttons+='<span class="label label-danger is_viewed'+row.id+'" style="font-size: 8px;">NEW</span>';
                }
                if(row.is_ts_done==1){
                  str_buttons+='<span class="label label-danger is_ts_done'+row.id+'" style="font-size: 8px;">TS PENDING</span>';
            }
                
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
class Leave extends React.Component {
    state = {
        apiload:false,
        employee_details:[]
        
    };
    
    
    componentDidMount() {
        
        const {name,email} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
        if(this.props.location.state){
            atable()
        }
        
    }

    render() {
        
        const title = <i className='feather icon-more-vertical' />;
        return (
            <Aux>
                    
                        <Row style={{padding: '0px 10px',borderLeft: 'solid 2px #04a9f5'}}>

                    <Col md={10} xl={10} style={{paddingTop:'15px'}}>
                        <h5>Leave</h5>
                    </Col>
                    <Col md={2} xl={2} style={{padding:'0px'}}>
                    <DropdownButton alignRight={true}  style={{float: 'right',border: 'none'}}
                        title={title}
                        variant={'outline-secondary'}
                        id={`dropdown-variants-secondary`}
                        key={'secondary'}
                        className='drp-icon'
                    >
                        <Dropdown.Item eventKey="1">Add</Dropdown.Item>
                        
                         </DropdownButton>
                    
                    </Col>
                    </Row>
                    
                    <div class="details-tab" style={{borderTop: 'solid 1px #ebeff1',padding:'10px 20px'}}>
                    
                    <div style={{position:'absolute',zIndex:'99999',background:'rgba(255, 255, 255, 0.57)',top:'15%',left:'50%',display:(this.state.apiload?'block':'none')}}>
                        <div id="loader">{/* --- */}</div>
                    </div>  
	
											<div class="row view-basic-card ">
                                            <Table ref="tbl" striped hover responsive className="table table-condensed" id="data-table-responsive">
                                    <thead>
                                    <tr>
                                    
                                        <th id="created_at_date">Created at</th>
                                        <th id="position_applied_for">Position applied for</th>
                                        <th id="information_provided_name">Name</th>
                                        <th id="email">Email</th>
                                        <th id="telephone_number">Telephone Number</th>
                                        <th id="postcode">Postcode</th>
                                        
                                        <th id="action">Action</th>
                                        
                                      </tr>
                                    </thead>
                                    <tfoot>
                                    <tr> 
                                    <th id="created_at_date">Created at</th>
                                    <th id="position_applied_for">Position applied for</th>
                                        <th id="information_provided_name">Name</th>
                                        <th id="email">Email</th>
                                        <th id="telephone_number">Telephone Number</th>
                                        <th id="postcode">Postcode</th>
                                        <th id="action">Action</th>
                                    </tr>
                                    </tfoot>
                                </Table>
                            
											</div>
										</div>
                </Aux>
        );
    }
}
const style = {
    rowline:{
             borderBottom:'solid 1px #f8f9fa',marginBottom:'15px'
            }
}
export default Leave;