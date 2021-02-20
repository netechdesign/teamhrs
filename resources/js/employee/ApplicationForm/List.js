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
const baseurl= window.location.origin;
class List extends React.Component {

   
    constructor(props) {
        super(props);
        this.state={
                     isLarge: false,
                     apiload:false,
                     application_Forms:[],
                     telephone_questions:[],
                     suitability_offered_for:'',
                     suitability_offered_comments:'',
                      formSubmitting: false,
                      buttonName:'Save',
                      key:'home',
                      certification:true,
                      certificationButton:false
                      
                    }
    }
   
  applicationShow= (application_id)=>{
    this.setState({isLarge:true,apiload:true,application_Forms:[],key :'home',suitability_offered_for:'',suitability_offered_comments:''});
    
    const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
    axios.get(baseurl+'/api/application_form/'+application_id,{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}}
              ).then(res =>{
                if(res.data.success){
                  this.setState({application_Forms:res.data.application_data,apiload:false});
                  if(res.data.application_data.telephone_pre_answers){
                    
                    this.setState({formSubmitting:(res.data.application_data.telephone_pre_answers.length>0)?true:false,certification:(res.data.application_data.telephone_pre_answers.length>0)?false:true,certificationButton:(res.data.application_data.telephone_pre_answers.length>0)?false:true});
                    res.data.application_data.telephone_pre_answers.filter((vl)=>{
                       if(vl.telephone_pre_questions=='suitability_offered_for'){
                         
                         this.setState({suitability_offered_for:vl.telephone_pre_answers}) 
                       }
                       if(vl.telephone_pre_questions=='suitability_offered_comments'){
                        
                        this.setState({suitability_offered_comments:vl.telephone_pre_answers}) 
                      }
                       
                       });
                       
                   }

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
      /* test */
        const { match, location, history } = this.props;
        CheckPermission('user','show',history);
        atable()
        const self= this;
        $('#data-table-responsive tbody').on('click', '.edit', function () {
            var id =  $(this).attr('data-id');
            self.applicationShow(id);
            $('.is_viewed'+id).hide();
           // history.push('/application/edit/'+id);
          
        })
    }
    handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })

  };
  tabSelect =(key) =>{
    this.setState({ key : key })
    if (key === 'telephone'){
      
                      
      this.setState({telephone_questions:[]});
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

  telephoneQuestionsSubmit = (e, formData, inputs) => {
    
                           e.preventDefault();
                           
                           this.setState({formSubmitting:true,apiload:true});
                           this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading</span>});
                           const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
                           
                           //const data = new FormData()
                           //data.append('name', this.state.name);
                          
                           axios.post(
                               baseurl+'/api/telephone_pre_answers',this.state,
                               {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
                           ).then(res =>{
                                             if(res.data.success){
                                              telephoneQuestionsAlert();
                                             
                                              this.setState({ key :'home'});
                                                // console.log(res.data.data);
                                                this.setState({formSubmitting:false,apiload:false,certification:false});
                                               if(this.state.application_Forms.id){
                                                $('.is_ts_done'+this.state.application_Forms.id).hide();
                                                     this.applicationShow(this.state.application_Forms.id);
                                                  }
                                                
                                                this.setState({buttonName:'Save'});
                                                
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

  telephoneQuestionsChange = (element) => {
                            let index = element.target.id;
                            this.state.telephone_questions[index].temperory_comment = element.target.value;
                            this.setState({telephone_questions:this.state.telephone_questions});
                          }
    checktelephoneAnswers =(row) =>{
      if(this.state.application_Forms.telephone_pre_answers){
       let chdata = this.state.application_Forms.telephone_pre_answers.filter((vl)=>{
          if(vl.telephone_pre_questions_id==row.id){
            row.temperory_comment=vl.telephone_pre_answers;
          }
          });
          
      }

    } 
    submitProofCertification =(e) =>{
      e.preventDefault();
      this.setState({certificationButton:true,apiload:true});
      const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
      
      //const data = new FormData()
      //data.append('name', this.state.name);
     
      axios.post(
          baseurl+'/api/request_certification',this.state,
          {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
      ).then(res =>{
                        if(res.data.success){
                          request_certificationAlert();
                        
                         this.setState({ key :'home'});
                           // console.log(res.data.data);
                           if(this.state.application_Forms.id){
                                 this.applicationShow(this.state.application_Forms.id);
                              }
                            
                           
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
    render() {
      const telephone_questions =(this.state.telephone_questions.length>0?
        this.state.telephone_questions.map((vl,inx)=>{
                       this.checktelephoneAnswers(vl);
                       return (<Form.Row style={style.rowline}> 
                                              <Form.Group as={Col} md="12">
                                                        <Form.Label style={style.title} htmlFor="first_name">{vl.question}</Form.Label>
                                                        <br/><Form.Label >Comments:</Form.Label>
                                                        <TextInput
                                                            name="temperory_comment"
                                                            id={inx}
                                                            placeholder=""
                                                            multiline
                                                            required
                                                            value={vl.temperory_comment}
                                                            onChange={(e) => this.telephoneQuestionsChange(e) }
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
                                      
                                      <Tabs defaultActiveKey="home" activeKey={this.state.key} onSelect={this.tabSelect}>
                                       <Tab eventKey="home"   title="Application">
                                        <div class="text-center" style={{display:(this.state.apiload?'block':'none')}}>
                                          <div class="spinner-border" role="status">
                                              <span class="sr-only">Loading...</span>
                                          </div>
                                        </div>
                                        <div style={{display:(this.state.apiload?'none':''),color:'black'}}>
                                        
                                        <dl style={{marginBottom: '0',paddingTop: '5px'}} className="dl-horizontal row">
                                               <dt className="col-sm-2"  style={style.title}>Created at:</dt>
                                               <dd className="col-sm-10">{this.state.application_Forms.created_at_date}</dd> 
                                            </dl>
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
                                        
        
                            <ValidationForm onSubmit={this.telephoneQuestionsSubmit} onErrorSubmit={this.handleErrorSubmit}>
                                    
                                    {telephone_questions}
                                    <Form.Row>
                                    <Form.Group as={Col} style={{display:(this.state.apiload?'none':'block')}} md="12">
                                        <Form.Label htmlFor="custom">Suitability to be offered employment:</Form.Label>
                                            <div style={style.title} className="custom-controls-stacked radio">
                                                <Radio.RadioGroup
                                                    name="suitability_offered_for"
                                                    required
                                                    
                                                    valueSelected={this.state.suitability_offered_for}
                                                    inline={false}
                                                    onChange={this.handleChange}>
                                                    <Radio.RadioItem  id="radio1" label="The applicant is not suited to this job. I would not recommend for employment." value="1" />
                                                    <Radio.RadioItem id="radio2" label="The applicant might do well in this job but I cannot recommend without reservations." value="2" />
                                                    <Radio.RadioItem id="radio3" label="The applicant should do well in this job and I would recommend for an interview." value="3" />
                                                    <Radio.RadioItem id="radio4" label="The applicant should be excellent in this job and I would recommend with confidence. Interview to be arranged." value="4" />
                                                </Radio.RadioGroup>
                                            </div>
                                        </Form.Group>

                                        <Form.Group style={{display:(this.state.apiload?'none':'block')}} as={Col} md="12">
                                                        <Form.Label >Comments:</Form.Label>
                                                      <TextInput
                                                            name="suitability_offered_comments"
                                                            id="suitability_offered_comments"
                                                            placeholder=""
                                                            multiline
                                                            required
                                                            value={this.state.suitability_offered_comments}
                                                            onChange={this.handleChange}
                                                            rows="3"
                                                            autoComplete="off"
                                                        />
                                              </Form.Group>
                                        </Form.Row>
                                    <Form.Row>
                                        <Form.Group style={{display:(this.state.apiload?'none':'block')}} as={Col} sm={12} className="mt-3">
                                        <Button disabled={this.state.formSubmitting}  type="submit"> {this.state.buttonName}</Button>
                                        </Form.Group>
                                    </Form.Row>
                                </ValidationForm>
                                
                            </Tab>
                            <Tab eventKey="certification" disabled={this.state.certification} title="Certification">
                            <div class="text-center" style={{display:(this.state.apiload?'block':'none')}}>
                                          <div class="spinner-border" role="status">
                                              <span class="sr-only">Loading...</span>
                                          </div>
                                        </div>
                                        
                                        {(this.state.application_Forms.is_document_get==1?
                                            <ValidationForm onSubmit={this.submitProofCertification} onErrorSubmit={this.handleErrorSubmit}>
                                                    <Form.Row>
                                                        <Form.Group as={Col} sm={12} className="mt-3">
                                                        <Form.Label >Request to submit proof of certification to candidate &nbsp;</Form.Label>
                                                        <Button disabled={this.state.certificationButton}  type="submit"> {(this.state.application_Forms.is_document_request==1?'Send':'Re-Send')}</Button>
                                                        </Form.Group>
                                                    </Form.Row>
                                            </ValidationForm>
                                            :<DocumentsList documents_list={this.state.application_Forms.documents}  />
                                        )
                                        }
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
                                    
                                        <th id="created_at_date">Created at</th>
                                        <th id="position_applied_for">Position applied for</th>
                                        <th id="information_provided_name">Name</th>
                                        <th id="email">Email</th>
                                        <th id="telephone_number">Telephone Number</th>
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

class DocumentsList extends React.Component{

  render(){
        if(this.props.documents_list){
          if(this.props.documents_list.length > 0){
            const documents_List = this.props.documents_list.map((item,index) =>{
              return(
                <Tr key={index} style={{borderBottom:'1px solid rgba(0, 0, 0, 0.125)',borderTop:'1px solid rgba(0, 0, 0, 0.125)'}}>
                   <Td style={{padding:'5px'}}>
                   {item.document_name}
                   </Td>
                   <Td style={{padding:'5px'}}>
                   
                   <a target='_blank' href={baseurl+'/uploaded/'+item.document_path} ><i class="feather icon-file-text"></i> view</a>
                   </Td>
                   
                   </Tr>
           )
            })

            return(
              <Aux><Tbl><Tbody>{documents_List}</Tbody></Tbl></Aux>
          );

          }
        }else{
          return(<Aux><b>documents_list</b></Aux>)
        }
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

