import React from 'react';
import {Link} from "react-router-dom";
import {Row, Col, Card, Table,Button,Modal,Tabs, Tab,Form} from 'react-bootstrap';
import Aux from "../../hoc/_Aux";
import {CheckPermission} from '../../HttpFunctions'; 
import $ from 'jquery';
import axios from 'axios'
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import MaskedInput from 'react-text-mask';
import validator from 'validator';

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
        {"data": "position_applied_for"}, 
        {"data": "information_provided_name"},
         {"data": "email"},
         {"data": "telephone_number"},
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
        [10, 25, 50, 100],
        [10, 25, 50, 100]
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
                     apiload:false,
                     application_Forms:[],
                     telephone_questions:[]
                    }
    }
   
  applicationShow= (application_id)=>{
    this.setState({isLarge:true,apiload:true,application_Forms:[]});
    const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
    axios.get(baseurl+'/api/application_form/'+application_id,{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}}
              ).then(res =>{
                if(res.data.success){
                  this.setState({application_Forms:res.data.application_data,apiload:false});
                  
                }else{
                  let errorMassage = '';
                if(res.data.errors){
                    errorMassage = res.data.errors.name;
                }else{
                    errorMassage = res.data.email;
                    
                }
              
                
              }
              }).catch(err =>{
                    console.log(err);
                          
                      }
          )
  }
    componentDidMount() {
        const { match, location, history } = this.props;
        CheckPermission('user','show',history);
        atable()
        const self= this;
        $('#data-table-responsive tbody').on('click', '.edit', function () {
            var id =  $(this).attr('data-id');
            self.applicationShow(id);
           // history.push('/application/edit/'+id);
          
        })
    }
    handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
      
  };
  tabSelect =(key) =>{
    
    if (key === 'telephone'){
           const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
           this.setState({apiload:true}); 
           axios.get(baseurl+'/api/telephone_questions',{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}}
           ).then(res =>{
             if(res.data.success){
              this.setState({telephone_questions:res.data.data,apiload:false}) 
              }
            
           }).catch(err =>{
                    console.log(err);
                          
                      }
          )
    }
  }
    render() {
      const telephone_questions =(this.state.telephone_questions.length>0?
        this.state.telephone_questions.map((vl,inx)=>{
                       return (<Form.Row style={style.rowline}> 
                                              <Form.Group as={Col} md="12">
                                                        <Form.Label style={style.title} htmlFor="first_name">{vl.question}</Form.Label>
                                                        <br/><Form.Label >Comments:</Form.Label>
                                                        <TextInput
                                                            name="unavailable_for_interview"
                                                            id="unavailable_for_interview"
                                                            placeholder=""
                                                            multiline
                                                            required
                                                            value={this.state.unavailable_for_interview}
                                                            onChange={this.handleChange}
                                                            rows="3"
                                                            autoComplete="off"
                                                        />
                                              </Form.Group>
                                    </Form.Row>)
        })
        :"");
        return (
            <Aux>
                <Row>
                    <Col>
                    <Modal size="xl" show={this.state.isLarge} onHide={() => this.setState({ isLarge: false })}>
                      
                                    <Modal.Header closeButton>
                                        <Modal.Title as="h5">{this.state.application_Forms.fore_name} {(this.state.application_Forms.surname!=''?this.state.application_Forms.surname:'')}</Modal.Title>
                                        
  
                                    </Modal.Header>
                                    <Modal.Body >
                                      
                                      <Tabs defaultActiveKey="home"  onSelect={this.tabSelect}>
                                       <Tab eventKey="home"   title="Application">
                                        <div class="text-center" style={{display:(this.state.apiload?'block':'none')}}>
                                          <div class="spinner-border" role="status">
                                              <span class="sr-only">Loading...</span>
                                          </div>
                                        </div>
                                        <div style={{display:(this.state.apiload?'none':''),color:'black'}}>
                                            <dl style={{marginBottom: '0',paddingTop: '5px',background:'#f7f7f7'}} className="dl-horizontal row">
                                               <dt className="col-sm-2" style={style.title}>Position applied for:</dt>
                                               <dd className="col-sm-10">{this.state.application_Forms.position_applied_for}</dd> 
                                            </dl>
                                            <dl style={{marginBottom: '0',paddingTop: '5px'}} className="dl-horizontal row">
                                               <dt className="col-sm-2"  style={style.title}>Title:</dt>
                                               <dd className="col-sm-10">{this.state.application_Forms.title}</dd> 
                                            </dl>
                                            <dl style={{marginBottom: '0',paddingTop: '5px',background:'#f7f7f7'}} className="dl-horizontal row">
                                               <dt className="col-sm-2"  style={style.title}>Name:</dt>
                                               <dd className="col-sm-10">{this.state.application_Forms.fore_name} {(this.state.application_Forms.surname!=''?this.state.application_Forms.surname:'')}</dd>
                                            </dl>
                                            <dl style={{marginBottom: '0',paddingTop: '5px'}} className="dl-horizontal row">
                                               <dt className="col-sm-2"  style={style.title}>Email:</dt>
                                               <dd className="col-sm-10">{this.state.application_Forms.email}</dd> 
                                            </dl>
                                            <dl style={{marginBottom: '0',paddingTop: '5px',background:'#f7f7f7'}} className="dl-horizontal row">
                                               <dt className="col-sm-2"  style={style.title}>Telephone Number:</dt>
                                               <dd className="col-sm-10">{this.state.application_Forms.telephone_number}</dd> 
                                            </dl>
                                            <dl style={{marginBottom: '0',paddingTop: '5px'}} className="dl-horizontal row">
                                               
                                               <dt className="col-sm-2"  style={style.title}>Address:</dt>
                                               <dd className="col-sm-10">{this.state.application_Forms.address}</dd> 
                                            </dl>
                                            <dl style={{marginBottom: '0',paddingTop: '5px',background:'#f7f7f7'}} className="dl-horizontal row">
                                               
                                               <dt className="col-sm-10"  style={style.title}>If selected for interview, do you require any reasonable adjustments to be made on account of a disability?</dt>
                                               <dd className="col-sm-2">{this.state.application_Forms.selected_interview}</dd> 
                                            
                                               
                                                <dt style={{display:(this.state.application_Forms.selected_interview!='YES'?'none':'')}} className="col-sm-10">Please tell us if there are any ‘reasonable adjustments’ we can make to assist you in your application or with our recruitment process……</dt>
                                               <dd style={{display:(this.state.application_Forms.selected_interview!='YES'?'none':'')}} className="col-sm-10">{this.state.application_Forms.disability}</dd> 
                                            </dl>
                                            <dl style={{marginBottom: '0',paddingTop: '5px'}} className="dl-horizontal row">
                                                
                                                <dt className="col-sm-10"  style={style.title}>If selected for interview, do you require any reasonable adjustments to be made on account of a medical condition?</dt>
                                               <dd className="col-sm-2">{this.state.application_Forms.medical_condition}</dd> 
                                                
                                                <dt style={{display:(this.state.application_Forms.medical_condition!='YES'?'none':'')}} className="col-sm-10">Please tell us if there are any ‘reasonable adjustments’ we can make to assist you in your application or with our recruitment process……</dt>
                                               <dd style={{display:(this.state.application_Forms.medical_condition!='YES'?'none':'')}} className="col-sm-10">{this.state.application_Forms.medical_condition_reasonable}</dd> 
                                            </dl>
                                            <dl style={{marginBottom: '0',paddingTop: '5px',background:'#f7f7f7'}} className="dl-horizontal row">   
                                               <dt className="col-sm-10"  style={style.title}>Have you any convictions that are not spent under the rehabilitation of offenders act?</dt>
                                               <dd className="col-sm-2">{this.state.application_Forms.any_convictions}</dd>

                                               <dt style={{display:(this.state.application_Forms.any_convictions!='YES'?'none':'')}} className="col-sm-10">If Yes, please provide further details</dt>
                                               <dd style={{display:(this.state.application_Forms.any_convictions!='YES'?'none':'')}} className="col-sm-2">{this.state.application_Forms.any_convictions_yes}</dd>

                                            </dl>
                                            <dl style={{marginBottom: '0',paddingTop: '5px'}} className="dl-horizontal row">
                                               <dt className="col-sm-10"   style={style.title}>Do you need a work permit to be employed in the UK? </dt>
                                               <dd className="col-sm-2">{this.state.application_Forms.work_permit_uk}</dd>
                                            </dl>
                                            <dl style={{marginBottom: '0',paddingTop: '5px',background:'#f7f7f7'}} className="dl-horizontal row">
                                               <dt className="col-sm-12"  style={style.title}>I confirm that I have the minimum required qualifications for the role I am applying for, please specify below</dt>
                                               <dd className="col-sm-12">{this.state.application_Forms.qualifications}</dd>
                                               {(this.state.application_Forms.is_cv_attached? <dd className="col-sm-12"><a target='_blank' href={baseurl+'/uploaded/'+this.state.application_Forms.cv_path} ><i class="feather icon-file-text"></i> view cv</a></dd>:'') }
                                               
                                            </dl>
                                            <dl className="dl-horizontal row">
                                                <dt className="col-sm-12" style={{lineHeight:'2.5',paddingLeft:'10px',background:'#dcebf3'}}>Employment history</dt>
                                                <dd className="col-sm-12">
                                                  <EmploymentHistory employment_history={this.state.application_Forms.employment_historys}  />
                                               </dd>
                                            </dl>
                                            <dl className="dl-horizontal row">
                                                <dt className="col-sm-12" style={{lineHeight:'2.5',paddingLeft:'10px',background:'#dcebf3'}}>References</dt>
                                                <dd className="col-sm-12">
                                                  <EmploymentReferences employment_references={this.state.application_Forms.employment_references}  />
                                               </dd>
                                            </dl>
                                            <dl style={{marginBottom: '0',paddingTop: '5px'}} className="dl-horizontal row">
                                               <dt className="col-sm-12"  style={style.title}>Please tell us if there are any dates that you would be unavailable for interview……</dt>
                                               <dd className="col-sm-12">{this.state.application_Forms.unavailable_for_interview}</dd>
                                            </dl>
                                            
                                        </div>  

                                        
                                      
                                      
                                      
                            </Tab>
                            <Tab eventKey="telephone"  title="Telephone Pre-Screen Questions">
                            <div class="text-center" style={{display:(this.state.apiload?'block':'none')}}>
                                          <div class="spinner-border" role="status">
                                              <span class="sr-only">Loading...</span>
                                          </div>
                                        </div>
                            <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                                    
                                    {telephone_questions}
                                    <Form.Row>
                                        <Form.Group as={Col} sm={12} className="mt-3">
                                            <Button type="submit">Submit</Button>
                                        </Form.Group>
                                    </Form.Row>
                                </ValidationForm>
                                
                            </Tab>
                            <Tab eventKey="contact" title="CONTACT">
                                <p>progess.</p>
                            </Tab>
                        </Tabs>

                                    </Modal.Body>
                                </Modal>
                      <Card>
                            <Card.Header>
                                <Card.Title as="h5">Applications</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Table ref="tbl" striped hover responsive className="table table-condensed" id="data-table-responsive">
                                    <thead>
                                    <tr>
                                        <th id="position_applied_for">Position applied for</th>
                                        <th id="information_provided_name">Name</th>
                                        <th id="email">Email</th>
                                        <th id="telephone_number">Telephone Number</th>
                                        <th id="action">Action</th>
                                        
                                      </tr>
                                    </thead>
                                    <tfoot>
                                    <tr>
                                    <th id="position_applied_for">Position applied for</th>
                                        <th id="information_provided_name">Name</th>
                                        <th id="email">Email</th>
                                        <th id="telephone_number">Telephone Number</th>
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

class EmploymentHistory extends React.Component{

  render (){
    
    if(this.props.employment_history){
      if (this.props.employment_history.length >0){
      const employmenthistoryList =  this.props.employment_history.map((item, index) => {
            
      return(
           <Tr key={index} style={{borderBottom:'1px solid rgba(0, 0, 0, 0.125)',borderTop:'1px solid rgba(0, 0, 0, 0.125)'}}>
              <Td style={{padding:'5px'}}>
              {item.name}
              </Td>
              <Td style={{padding:'5px'}}>
              {item.position}
              </Td>
              <Td style={{padding:'5px'}}>
              {item.reason_for_leaving}
              </Td>
              
              </Tr>
      )
  });

  return(
    <Aux><Tbl>
    <Thead>
    <Tr style={{lineHeight:2.5}}>
        <Th width='20%'>Company Name</Th>
        <Th width='30%'>Position</Th>
        <Th width='40%'>Reason for leaving</Th>
        
    </Tr>
    </Thead>
    <Tbody>
    {employmenthistoryList}
    </Tbody>
    
</Tbl></Aux>
);
}else{
  return(<Aux><Tbl><Tbody><Tr><Th>Record not found.</Th></Tr></Tbody></Tbl></Aux>); 
}
}else{
  return(<Aux><b>Employment history</b></Aux>)
}
    
  }

}


class EmploymentReferences extends React.Component{

  render (){
    
    if(this.props.employment_references){
      if (this.props.employment_references.length >0){
      const employment_referencesList =  this.props.employment_references.map((item, index) => {
            if(item.company_name!=''){
      return(
           <Tr key={index} style={{borderBottom:'1px solid rgba(0, 0, 0, 0.125)',borderTop:'1px solid rgba(0, 0, 0, 0.125)'}}>
              <Td style={{padding:'5px'}}>
              {item.company_name}
              </Td>
              <Td style={{padding:'5px'}}>
              {item.name}
              </Td>
              <Td style={{padding:'5px'}}>
              {item.position}
              </Td>
              <Td style={{padding:'5px'}}>
              {item.telephone_no}
              </Td>
              <Td style={{padding:'5px'}}>
              {item.email}
              </Td>
              </Tr>
      )
            }
  });

  return(
    <Aux><Tbl>
    <Thead>
    <Tr style={{lineHeight:2.5}}>
      <Th width='20%'>Company Name</Th>
      <Th width='20%'>Name</Th>
      <Th width='20%'>Position</Th>
      <Th width='20%'>Telephone No.</Th>
      <Th width='20%'>Email</Th>
    </Tr>
    </Thead>
    <Tbody>
    {employment_referencesList}
    </Tbody>
    
</Tbl></Aux>
);
}else{
  return(<Aux><Tbl><Tbody><Tr><Th>Record not found.</Th></Tr></Tbody></Tbl></Aux>); 
}
}else{
  return(<Aux><b>Employment history</b></Aux>)
}
    
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

