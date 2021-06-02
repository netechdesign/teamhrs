import React from 'react';
import {Link} from "react-router-dom";
import {Row, Col, Card, Table,Button,Modal,Tabs, Tab,Form} from 'react-bootstrap';
import Aux from "../../../hoc/_Aux";
import {CheckPermission} from '../../../HttpFunctions'; 
import Datetime from 'react-datetime';
import $ from 'jquery';
import axios from 'axios'
import SignatureCanvas from 'react-signature-canvas';
import { ValidationForm, TextInput, BaseFormControl, SelectGroup,Select, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import MaskedInput from 'react-text-mask';
import validator from 'validator';
import PNotify from "pnotify/dist/es/PNotify";
import "pnotify/dist/es/PNotifyButtons";
import "pnotify/dist/es/PNotifyConfirm";
import "pnotify/dist/es/PNotifyCallbacks";
import { Table as Tbl, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
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

const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
function telephoneQuestionsAlert(id) {
  let message = "Telephone pre answers save successfully";
   
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

function request_certificationAlert(id) {
  let message = "Certificate request send successfully";
   
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
var oTable="";

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
    "sAjaxSource": window.location.origin+'/api/mandatory_documents',
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
        {"data":"createdat"},
        {"data": "document_name"}, 
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
              
                var str_buttons = '<a type="button" target="_blank" href="'+window.location.origin+'/uploaded/'+row.document_path+'" class="document_view btn btn-success btn-sm" data-id="'+row.id+'" ><i style="margin:0px !important;" class="feather icon-eye"></i></a>';
              //  str_buttons +='<button type="button" class="edit btn btn-info btn-sm" data-id="'+row.id+'" ><i style="margin:0px !important;" class="feather icon-edit"></i></button>';
             
                
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
const baseurl= window.location.origin;  
class List extends React.Component {

   
    constructor(props) {
        super(props);
        this.state={
                     isLarge: false,
                     apiload:false
                     }
    }

    componentDidMount() {  
      
      /* test */
        const { match, location, history } = this.props;
        CheckPermission('application_form','show',history);
        atable()
        
        const self= this;
        $('#data-table-responsive tbody').on('click', '.edit', function () {
            var id =  $(this).attr('data-id');
            
           // history.push('/application/edit/'+id);
          
        })
    }
   
    render() {
   
        return (
            <Aux>
                <Row>
                    <Col>
                    <Card>
                            <Card.Header>
                                <Card.Title as="h5">Mandatory Documents</Card.Title>
                                <Button style={{'float':'right'}}  as={Link} to="/Mandatory-Documents/add" >+ Add</Button>   
                            </Card.Header>
                            <Card.Body>
                                <Table ref="tbl" striped hover responsive className="table table-condensed" id="data-table-responsive">
                                    <thead>
                                    <tr>
                                    
                                        <th id="createdat">Date</th>
                                        <th id="document_name">Name</th>
                                        <th id="action">Action</th>
                                        
                                      </tr>
                                    </thead>
                                    <tfoot>
                                    <tr> 
                                    <th id="createdat">Date</th>
                                    <th id="document_name">Name</th>
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


const style= {
  title:{
    color:'#215f75'
  },
  rowline:{
    borderBottom:'1px dotted hsl(216deg 70% 86% / 60%)'
   }
}
export default List;

