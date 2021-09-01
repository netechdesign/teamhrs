import React from 'react';
import {Link} from "react-router-dom";
import {Row, Col, Card, Table,Button,Modal,Tabs, Tab,Form} from 'react-bootstrap';
import Aux from "../../hoc/_Aux";
import {CheckPermission} from '../../HttpFunctions'; 
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

function statusChangeAlert(id) {
  let message = "Status has been changed successfully";
   
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
function offerletterapproveAlert(id) {
  let message = "offer letter has been approved successfully";
   
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


function sendOfferLetterAlert(id) {
  let message = "offer letter has been sent successfully";
   
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
         {"data":"postcode"},
         {"data":"status"},
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
              
                var str_buttons = '<button type="button" class="edit btn btn-info btn-sm" data-id="'+row.id+'" ><i style="margin:0px !important;" class="feather icon-eye"></i></button><a href="'+window.location.origin+'/applications/edit/'+row.id+'" class="btn btn-primary btn-sm" data-id="'+row.id+'" ><i style="margin:0px !important;" class="feather icon-edit"></i></a>';
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
          "render": function (data, type, row) {
            
              var str_buttons = '<a href="javascript:;" class="badge badge-secondary status_edit" data-id="'+row.id+'" style="font-size: 10px;padding:9px;">'+data.toUpperCase()+'</a>';
              
              
              return [
                  str_buttons,
              ].join('');
             
          },
          "targets": $('#data-table-responsive th#status').index(),
          "orderable": true,
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
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

const todaydate = dd + '/' + mm + '/' + yyyy;
const application_status_namelist =[{id:1,value:'To be reviewed'},{id:2,value:'On hold'},{id:3,value:'In talks'},{id:4,value:'Verbal offer made'},{id:5,value:'No – Their decision'},{id:6,value:'No – Our decision'},{id:7,value:'Yes – Verbal offer made'},{id:8,value:'Yes – Offer sent'}];
class List extends React.Component {

   
    constructor(props) {
        super(props);
        this.formRef = React.createRef();

        this.state={
                     isLarge: false,
                     status_view:false,
                     apiload:false,
                     application_Forms:[],
                     telephone_questions:[],
                     suitability_offered_for:'',
                     suitability_offered_comments:'',
                      formSubmitting: false,
                      buttonName:'Save',
                      key:'home',
                      certification:true,
                      certificationButton:false,
                      other_documents:[],
                      gas_safe_card:false,
                      gas_metering_certificates:false,
                      electrical_metering_certificates:false,
                      eusr_card:false,
                      driving_licence_code:false,
                      is_other_documents:false,
                      confirm_employee_signature:null,
                      confirm_employee_signature_show:null,
                      confirm_Date:todaydate,
                      job_title:"",
                      place_of_employment:"",
                      dbscheck:"",
                      remuneration_and_benefits:"",
                      basic:"",
                      bonus:"",
                      hours_of_work:"",
                      address_details:'',
                      offerletterslist:[],
                      immediate:true,
                      setFocusOnError:true,
                      clearInputOnReset:false,
                      application_status_name:'',
                      application_status:'',
                      application_status_comments:'',
                      applicationStatusList:[]
                    }
    }
    handleErrorSubmit = (e,formData, errorInputs) => {
      console.log(e,formData, errorInputs)
  }

    confirmChange = (e) => {
      let today = new Date(e);
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      let yyyy = today.getFullYear();
      
      const todaydate = dd + '/' + mm + '/' + yyyy;
      this.setState({confirm_Date:todaydate});
   };
//confirm
confirm_employee = {}
confirm_employee_trim = () => {
    this.setState({confirm_employee_signature: this.confirm_employee.getTrimmedCanvas()
      .toDataURL('image/png') })
      this.setState({confirm_employee_signature_show: this.state.confirm_employee_signature })
  }
  confirm_employee_clear = () => {
    this.confirm_employee.clear()
  }

       handleCheckboxChange = (e, value) => {
          this.setState({[e.target.name]: value})
        if(e.target.name=='is_other_documents')
        {
           if(value){
            let other_documents = {document_name:''}
            this.setState({other_documents: [other_documents]});
           }else{
            
            this.setState({other_documents: []});
           }
        }
          

    };
    addOtherdocuments = () =>{
      let other_documents = {document_name:''}
      this.setState(previousState => ({other_documents: [...previousState.other_documents, other_documents]}));
   }

other_documentDelete =(element) =>{
        let index = element.target.id;
        if (index !== -1) { let other_documents = this.state.other_documents;
          other_documents.splice(index, 1);
          this.setState({other_documents: other_documents});
                            

        }
     }
     document_nameChange =(element)=>{
          let index = element.target.id;
          if(element.target.name=='document_name'){
            this.state.other_documents[index].document_name = element.target.value;
          }
          this.setState({other_documents:this.state.other_documents});
        }

  applicationShow= (application_id)=>{
    this.setState({isLarge:true,apiload:true,application_Forms:[],key :'home',suitability_offered_for:'',suitability_offered_comments:'',other_documents:[],
    gas_safe_card:false,
    gas_metering_certificates:false,
    electrical_metering_certificates:false,
    eusr_card:false,
    driving_licence_code:false,
    is_other_documents:false,
    offerletterslist:[],
    job_title:"",
    place_of_employment:"",
    dbscheck:"",
    remuneration_and_benefits:"",
    basic:"",
    bonus:"",
    hours_of_work:"",
    address_details:''
  });
    
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

  
  statusShow =(application_id) =>{
    this.setState({status_view:true,application_Forms:[],key :'home',application_status:'',application_status_comments:'',applicationStatusList:[],certificationButton:false});
    const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
    axios.get(baseurl+'/api/application_form/'+application_id,{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}}
              ).then(res =>{
                            if(res.data.success){
                                  this.setState({application_Forms:res.data.application_data,certificationButton:false});
                                  this.resetForm();
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

  applicationStatusForm = (e, formData, inputs) => {
    
    e.preventDefault();
    this.setState({certificationButton:true,apiload:true});
        if(this.state.application_Forms){formData.application_forms_id =this.state.application_Forms.id;}
         if(this.state.application_status_name){formData.application_status_name = this.state.application_status_name;}
        const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
               axios.post(
               baseurl+'/api/application_status',formData,
               {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
               ).then(res =>{
               if(res.data.success){
               //this.setState({ key :'home'});
               this.resetForm();
               this.setState({status_view:false,application_Forms:[]});
               statusChangeAlert();
               oTable.ajax.reload();
               this.setState({certificationButton:false,apiload:false});
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
    componentDidMount() {  
      
      /* test */
        const { match, location, history } = this.props;
        CheckPermission('application_form','show',history);
        atable()
        
        const self= this;
        $('#data-table-responsive tbody').on('click', '.edit', function () {
            var id =  $(this).attr('data-id');
            self.applicationShow(id);
            $('.is_viewed'+id).hide();
           // history.push('/application/edit/'+id);
          
        })
        //status_edit
        $('#data-table-responsive tbody').on('click', '.status_edit', function () {
          var id =  $(this).attr('data-id');
          self.statusShow(id);
          
         // history.push('/application/edit/'+id);
        
      })

    }
    
    handleChange = (e) => {
      
      this.setState({
          [e.target.name]: e.target.value
      })
         if(e.target.name=='application_status'){
          var application_status =application_status_namelist.filter(function(vl,indx){
            return e.target.value==vl.id;
          });
          this.setState({application_status_name:application_status[0].value});
         }
  };
  emailChange = (e) =>{
    let application_Forms = this.state.application_Forms;
    application_Forms['email'] = e.target.value;
    this.setState({application_Forms:application_Forms});
  }
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
    if(key === 'offerletter'){
        if(this.state.application_Forms.getaddress_id){
            this.getAddress(this.state.application_Forms.getaddress_id);
           
          }else{
           let address = this.state.application_Forms.address;
           this.setState({address_details:address});
        }
        if(this.state.application_Forms.id){
          {
        axios.get(baseurl+'/api/getofferletter/'+this.state.application_Forms.id,{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}}
        ).then(res =>{
          if(res.data.success){
           this.setState({offerletterslist:res.data.offerletterslist,apiload:false}) 
           }
         
        }).catch(err =>{
                 console.log(err);
                       
                   }
       )
                  }
                  }
        
    }
  }
  tabStatusSelect =(key) =>{
    this.setState({ key : key })
    
    if(key === 'list'){
        
        if(this.state.application_Forms.id){
          {
            this.setState({apiload:true});
        axios.get(baseurl+'/api/application_status_list/'+this.state.application_Forms.id,{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}}
        ).then(res =>{
          if(res.data.success){
           this.setState({applicationStatusList:res.data.application_status_list,apiload:false}) 
           }
         
        }).catch(err =>{
                 console.log(err);
                       
                   }
       )
                  }
                  }
        
    }else{
      this.setState({certificationButton:false});
      
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
      

      submitOtherProofCertification =(e) =>{
        e.preventDefault();
        this.setState({certificationButton:true,apiload:true});
        const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
        
        //const data = new FormData()
        //data.append('name', this.state.name);
       
        axios.post(
            baseurl+'/api/request_other_certification',this.state,
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
  documentResend = () => {
    
    this.setState({ key :'resendrequest'});
  }
   
      // get address details
      getAddress =(id) => {
    
        let self= this;
      $.ajax({
          dataType: 'json',
          method: 'get',
          url:"https://api.getAddress.io/get/"+id+"?api-key=XrOjpdAkTEiMj4o5WV_uSQ26499",
          success:function(data){
            self.setState({address_details:data});
            
            // data.building_number+' '+data.building_name;
            
            let street_line='';
            if(data.line_1!=''){
              //street_line = data.line_1;
            }
            if(data.line_2!=''){
              //street_line +=' ,'+data.line_2;
            }
            
            if(data.line_3!=''){
              //street_line +=' ,'+data.line_3;
            }
            
            if(data.line_4!=''){
              //street_line +=' ,'+data.line_4;
            }
            //data.town_or_city
            //data.county
            //data.postcode
            
            
            
            
          
          }
      }); 
   }
  
   
   sendOfferLetter =(e) =>{
    e.preventDefault();
    this.setState({certificationButton:true,apiload:true});
    const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
    
    //const data = new FormData()
    //data.append('name', this.state.name);
    const person = {};
    const data = Object.create(person);
    data.job_title = this.state.job_title;
    data.confirm_Date = this.state.confirm_Date;
    data.job_title = this.state.job_title;
    data.place_of_employment = this.state.place_of_employment;
    data.dbscheck = this.state.dbscheck;
    //data.remuneration_and_benefits = this.state.remuneration_and_benefits;
    data.basic = this.state.basic;
    data.bonus = this.state.bonus;
    data.hours_of_work = this.state.hours_of_work;
    data.address_details = this.state.address_details;
    data.title = this.state.application_Forms.title;
    data.application_Forms_id = this.state.application_Forms.id;
    data.fore_name = this.state.application_Forms.fore_name;
    data.surname = this.state.application_Forms.surname;
    data.email = this.state.application_Forms.email;
    
    
     
    let results= btoa(JSON.stringify(data)); 
    
    axios.get(
        baseurl+"/api/sendOfferLetter?data="+results,
        {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
    ).then(res =>{
                      if(res.data.success){
                        sendOfferLetterAlert();
                        this.resetForm();
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
    
  offerletterPreview = (offerletters_id=0) =>{
    var left  = ($(window).width() / 2) - (900 / 2),
    top   = ($(window).height() / 2) - (500 / 2);
    var strWindowFeatures = "location=yes,height=970,width=720,scrollbars=yes,status=yes, top=" + top + ", left=" + left;
    
    const person = {};
    const data = Object.create(person);
    data.job_title = this.state.job_title;
    data.confirm_Date = this.state.confirm_Date;
    data.job_title = this.state.job_title;
    data.place_of_employment = this.state.place_of_employment;
    data.dbscheck = this.state.dbscheck;
    data.remuneration_and_benefits = this.state.remuneration_and_benefits;
    data.basic = this.state.basic;
    data.bonus = this.state.bonus;
    data.hours_of_work = this.state.hours_of_work;
    data.address_details = this.state.address_details;
    data.title = this.state.application_Forms.title;
    data.fore_name = this.state.application_Forms.fore_name;
    data.surname = this.state.application_Forms.surname;
    data.offerletters_id = offerletters_id;
     
    let results= btoa(JSON.stringify(data)); 
    
    var URL = baseurl+"/offer-letter/?data="+results;
    var win = window.open(URL, "_blank", strWindowFeatures);
  }

  resenOfferlettersTab = (id) =>{
    $('#offerletters_id').val(id);
    this.setState({ key :'resenOfferletters'});
  }

  resetForm = () => {
    let formRef = this.formRef.current;
    formRef.resetValidationState(this.state.clearInputOnReset);
}

resendOfferLetter = (e) =>{
  e.preventDefault();
         const data = new FormData();
         this.setState({certificationButton:true,apiload:true});
         data.append('offerletters_id', $('#offerletters_id').val());
         data.append('email', this.state.application_Forms.email);
         axios.post(baseurl+"/api/resendOfferLetter",data,{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}}).then(res =>{
                  if(res.data.success){
                    request_certificationAlert();
                    this.setState({ key :'home'});
                     // console.log(res.data.data);
                     this.setState({certificationButton:false,apiload:false});
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
OfferlettersApproved = (id) =>{
  
  
         const data = new FormData();
         this.setState({certificationButton:true,apiload:true});
         data.append('offerletters_id', id);
         data.append('application_forms_id', this.state.application_Forms.id);
         data.append('email', this.state.application_Forms.email);
         axios.post(baseurl+"/api/approvedOfferLetter",data,{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}}).then(res =>{
                  if(res.data.success){
                    offerletterapproveAlert();
                    this.setState({ key :'home'});
                     // console.log(res.data.data);
                     this.setState({certificationButton:false,apiload:false});
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
                    this.setState({certificationButton:false,apiload:false});
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
        const other_documents = (this.state.other_documents.length>0?this.state.other_documents.map((item, index) => {
          return (
              <Form.Row key={index}  >
                  <Form.Group as={Col} md="6">
                      <TextInput
                          name="document_name"
                          value={item.document_name}
                          id={index}
                          onChange={(e) => this.document_nameChange(e) }
                          placeholder="Document Name"
                          required
                          autoComplete="off"
                          />
                  </Form.Group>
                  
                  <Form.Group as={Col} md="2">
                    <Button variant='outline-danger' style={{display:index==0?'none':''}}  id={index} onClick={(e) => this.other_documentDelete(e)} size='sm'>X</Button>
                     { (index==0?<Button variant='secondary' onClick={this.addOtherdocuments}  size='sm'>+Add</Button>:'') }
                  </Form.Group>
              </Form.Row>
              
                  );
                }):''); 
                
        
            
            
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
                                          
                                        {(this.state.application_Forms.is_ts_done>0?<Button disabled={this.state.formSubmitting}  type="submit"> {this.state.buttonName}</Button>:'')}
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
                                        
                                        {
                                        (this.state.application_Forms.documents?
                                        (this.state.application_Forms.documents.length==0?
                                            <ValidationForm onSubmit={this.submitProofCertification} onErrorSubmit={this.handleErrorSubmit}>
                                                    <Form.Row>
                                                        <Form.Group as={Col} sm={12} className="mt-3">
                                                        <Form.Label >Request to submit proof of certification to candidate &nbsp;</Form.Label>
                                                        <Button disabled={this.state.certificationButton}  type="submit"> {(this.state.application_Forms.is_document_request==1?'Send':'Re-Send')}</Button>
                                                        </Form.Group>
                                                    </Form.Row>
                                            </ValidationForm>
                                            :<DocumentsList  driving_licence_number={this.state.application_Forms.driving_licence_number} driving_licence_code_text={this.state.application_Forms.driving_licence_code_text} resendClick={this.documentResend} documents_list={this.state.application_Forms.documents}  />
                                        ):'')
                                        }
                      </Tab>
                            <Tab eventKey="offerletter"  disabled={(this.state.application_Forms.documents?(this.state.application_Forms.documents.length>0?false:true):true)} title="Offer Letter">
                                     
                                  {(this.state.offerletterslist.length>0?<Offerletterslist approvedClick={this.OfferlettersApproved} resendClick={this.resenOfferlettersTab} list={this.state.offerletterslist} />:'')}        
                                  
                              <Card>
                                    <Card.Header><Card.Title as="h5">Add Offer Letter</Card.Title></Card.Header>
                                    <Card.Body>
                                        <div class="text-center" style={{display:(this.state.apiload?'block':'none')}}>
                                          <div class="spinner-border" role="status">
                                              <span class="sr-only">Loading...</span>
                                          </div>
                                        </div>
                                        <ValidationForm onSubmit={this.sendOfferLetter} onErrorSubmit={this.handleErrorSubmit} ref={this.formRef}
                        immediate={this.state.immediate}
                        setFocusOnError={this.state.setFocusOnError}
                        defaultErrorMessage={{ required: "Please enter something."}}>
                                     <Form.Group as={Row} controlId="formHorizontalEmail">
                                                <Form.Label column sm={3}>
                                                  Date of Commencement:
                                                </Form.Label>
                                                <Col sm={4}>
                                                    
                                                    <Datetime closeOnSelect={true} onChange={this.confirmChange} value={this.state.confirm_Date}  dateFormat="D/M/Y" timeFormat={false}  maxDate={new Date()} inputProps={{required:'required',name:"confirm_Date",placeholder: 'Select Date',autoComplete:'off'}} />
                                                    
                                                </Col>
                                     </Form.Group>
                                     
                                     <Form.Group as={Row} controlId="formHorizontalEmail">
                                                <Form.Label column sm={3}>
                                                   Job Title:
                                                </Form.Label>
                                                <Col sm={4}>
                                                <SelectGroup
                                                name="job_title"
                                                id="job_title"
                                                value={this.state.job_title}
                                                required="required"
                                                errorMessage="Please select Job Title"
                                                onChange={this.handleChange}>
                                                <option value="">Please select Job Title</option>
                                                <JobPositionList />
                                                
                                              </SelectGroup>
                                              
                                                </Col>
                                     </Form.Group>
                                     
                                     <Form.Group as={Row} controlId="formHorizontalEmail">
                                                <Form.Label column sm={3}>
                                                Place of Employment:
                                                </Form.Label>
                                                <Col sm={4}>
                                                <SelectGroup
                                                name="place_of_employment"
                                                id="place_of_employment"
                                                value={this.state.place_of_employment}
                                                required="required"
                                                errorMessage="Please select Place of Employment"
                                                onChange={this.handleChange}>
                                                <option value="">Please select Place of Employment</option>
                                                <option value="1">Your place of employment shall not be fixed. Your region will be allocated in line with the Employer’s assessment of business conditions.</option>
                                                <option value="2">Your line manager will allocate your region of management responsibility with your agreed assessment of business conditionsThe Employer reserves the right, subject to prior discussion with you, to alter the size or nature of this region or to reassign the region, in line with the Company’s assessment of business conditions.</option>
                                                <option value="3">Bespoke Metering Solutions, Unit 6, Glover Network Centre, Spire Road, Washington, NE37 3HB</option>
                                                <option value="4">Bespoke Metering Solutions, Gateway House, Gateway West, Newburn Riverside, Newcastle upon Tyne NE15 8NX</option>
                                                <option value="5">Bespoke Metering Solutions, Unit 7, Grovewood Business Centre, Strathclyde Business Park, Bellhill, ML4 3NQ</option>


                                                
                                              </SelectGroup>
                                              
                                                </Col>
                                     </Form.Group>
                                     
                                     <Form.Group as={Row} controlId="formHorizontalEmail">
                                                <Form.Label column sm={3}>
                                                    DBS Check:
                                                </Form.Label>
                                                <Col sm={4}>
                                                <SelectGroup
                                                name="dbscheck"
                                                id="dbscheck"
                                                value={this.state.dbscheck}
                                                required="required"
                                                errorMessage="Please select DBS Check"
                                                onChange={this.handleChange}>
                                                <option value="">Please select DBS Check</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                                </SelectGroup>
                                                </Col>
                                     </Form.Group>
                                     
                                     <Form.Group as={Row} controlId="formHorizontalEmail">
                                                <Form.Label column sm={3}>
                                                 Remuneration and Benefits:
                                                </Form.Label>
                                              {/*  <Col sm={4}>
                                                    <Form.Control type="text" name="remuneration_and_benefits" onChange={this.handleChange} 
                                                    value={this.state.remuneration_and_benefits}
                                                    required placeholder="Remuneration and Benefits" />
                                                </Col>
                                      */}
                                     </Form.Group>
                                     <Form.Group as={Row} controlId="formHorizontalEmail">
                                                <Form.Label column sm={3}>
                                                   Basic:
                                                </Form.Label>
                                                <Col sm={4}>
                                                    <Form.Control type="text" name="basic"  onChange={this.handleChange}
                                                    value={this.state.basic}
                                                    required placeholder="Basic" />
                                                </Col>
                                                </Form.Group>
                                     <Form.Group as={Row} controlId="formHorizontalEmail">
                                                <Form.Label column sm={3}>
                                                   Bonus:
                                                </Form.Label>
                                                <Col sm={4}>
                                                <SelectGroup
                                                name="bonus"
                                                id="bonus"
                                                value={this.state.bonus}
                                                required="required"
                                                errorMessage="Please select bonus"
                                                onChange={this.handleChange}>
                                                <option value="">Please select Bonus</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                                </SelectGroup>
                                                </Col>
                                     </Form.Group>
                                     
                                     <Form.Group as={Row} controlId="formHorizontalEmail">
                                                <Form.Label column sm={3}>
                                                Hours of Work:
                                                </Form.Label>
                                                <Col sm={4}>
                                                <SelectGroup
                                                name="hours_of_work"
                                                id="hours_of_work"
                                                value={this.state.hours_of_work}
                                                required="required"
                                                errorMessage="Please select hours_of_work"
                                                onChange={this.handleChange}>
                                                <option value="">Please select Hours of Work</option>
                                                <option value="1">45 hours per week, between Monday to Sunday to be worked between the hours of 8am and 10pm. You may be required as part of your role to attend out of hours and emergency callouts as requested by the Employer</option>
                                                <option value="4">40 hours per week, between Monday to Sunday to be worked between the hours of 8am and 10pm. You may be required as part of your role to attend out of hours and emergency callouts as requested by the Employer</option>
                                                <option value="2">Your normal working hours will be 40 hours per week between 08.00 and 18.00 Monday to Friday. You are, however, expected to work without additional pay for additional hours according to the requirements of the Company</option>
                                                <option value="3">Manually</option>

                                                
                                                </SelectGroup>
                                                </Col>
                                     </Form.Group>
                                     {/*
                                     <Form.Group as={Col} md="4">
                                                          <SignatureCanvas penColor='black' dotSize={() => (this.minWidth + this.maxWidth) / 5}  
                                                                        canvasProps={{width: 300, height: 100, className: 'sigCanvas'}} ref={(ref) => { this.confirm_employee = ref }} onEnd={this.confirm_employee_trim}  />
                                                                        <button type="button" style={{position:'absolute',bottom:'6px'}} onClick={this.confirm_employee_clear}>
                                                                            Clear
                                                                            </button>
                                     </Form.Group>
                                     */}
                                     <Form.Row>   
                                        <Form.Group as={Col} sm={12} className="mt-3">
                                        <Button disabled={this.state.certificationButton} type="submit">Send</Button>
                                        <Button onClick={() =>{this.offerletterPreview()}}  type="button">Preview</Button>
                                        
                    
                                        </Form.Group>
                                     </Form.Row>
                              </ValidationForm>
                                    </Card.Body>
                              </Card>
                            
                             {/* <Button onClick={() =>{this.offerletterPreview()}}  type="button">View</Button> */} 
                      </Tab>
                        
                            <Tab eventKey="resendrequest" tabClassName='d-none' disabled={this.state.certification} title="resendrequest">
                       <div class="text-center" style={{display:(this.state.apiload?'block':'none')}}>
                                          <div class="spinner-border" role="status">
                                              <span class="sr-only">Loading...</span>
                                          </div>
                                        </div>
                                        
                               <ValidationForm onSubmit={this.submitOtherProofCertification} onErrorSubmit={this.handleErrorSubmit}>
                                    <Form.Row>
                                        <Form.Group as={Row} style={{width:'100%',marginBottom:'0rem'}} as={Col} sm={12} className="mt-3">
                                              <Form.Label column sm={2}>Certificates:</Form.Label>
                                                    <Col sm={10}>
                                
                                                        <div className="checkbox">
                                  <Checkbox name="gas_safe_card" label="Gas Safe Card" id="gas_safe_card" value={this.state.gas_safe_card} onChange={this.handleCheckboxChange} />
                                  <Checkbox name="gas_metering_certificates" label="Gas Metering Certificates/Qualifications" id="gas_metering_certificates" value={this.state.gas_metering_certificates} onChange={this.handleCheckboxChange} />
                                  <Checkbox name="electrical_metering_certificates" label="Electrical Metering Certificates/Qualifications" id="electrical_metering_certificates" value={this.state.electrical_metering_certificates} onChange={this.handleCheckboxChange} />

                                  <Checkbox name="eusr_card" label="EUSR Card" id="eusr_card" value={this.state.eusr_card}  onChange={this.handleCheckboxChange} />
                                  <Checkbox name="driving_licence_code" label="Driving licence code" id="driving_licence_code" value={this.state.driving_licence_code} onChange={this.handleCheckboxChange} />
                                  <Checkbox name="is_other_documents" label="Other" id="Other_documents" value={this.state.is_other_documents} onChange={this.handleCheckboxChange} />
                                </div>
                                

                                                     </Col>
                                          </Form.Group>
                                     </Form.Row>
                                         {other_documents}
                                     
                                     <Form.Row>   
                                        <Form.Group as={Col} sm={12} className="mt-3">
                                        <Button disabled={this.state.certificationButton} type="submit">Send</Button>
                                        </Form.Group>
                                     </Form.Row>
                              </ValidationForm>
                      </Tab>
                      <Tab eventKey="resenOfferletters" tabClassName='d-none' disabled={this.state.certification} title="resenOfferletters">
                       <div class="text-center" style={{display:(this.state.apiload?'block':'none')}}>
                                          <div class="spinner-border" role="status">
                                              <span class="sr-only">Loading...</span>
                                          </div>
                                        </div>
                                        
                               <ValidationForm onSubmit={this.resendOfferLetter} onErrorSubmit={this.handleErrorSubmit}>
                                    <Form.Row>
                                      <input name="offerletters_id" style={{display:'none'}} id="offerletters_id" />
                                        <Form.Group as={Row} style={{width:'100%',marginBottom:'0rem'}} as={Col} sm={12} className="mt-3">
                                              <Form.Label column sm={2}>Email:</Form.Label>
                                                    <Col sm={4}>
                                                    <TextInput
                                                                    name="email"
                                                                    id="email"
                                                                    placeholder="Email"
                                                                    required value={this.state.application_Forms.email}
                                                                    onChange={this.emailChange}
                                                                    autoComplete="off"
                                                                />
                                                     </Col>
                                          </Form.Group>
                                       
                                        <Form.Group as={Col} sm={12} className="mt-3">
                                        <Button disabled={this.state.certificationButton} type="submit">Resend</Button>
                                        </Form.Group>
                                     </Form.Row>
                              </ValidationForm>
                      </Tab>
                      
                        </Tabs>

                                    </Modal.Body>
                                </Modal>
                    
                    <Modal size="xl" show={this.state.status_view} onHide={() => this.setState({ status_view: false })}>
                      <Modal.Header closeButton>
                          <Modal.Title as="h5">{this.state.application_Forms.fore_name} {(this.state.application_Forms.surname!=''?this.state.application_Forms.surname:'')}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body >
                      <div class="text-center" style={{display:(this.state.apiload?'block':'none')}}>
                                          <div class="spinner-border" role="status">
                                              <span class="sr-only">Loading...</span>
                                          </div>
                                        </div>
                                       
                      <Tabs defaultActiveKey="home" activeKey={this.state.key} onSelect={this.tabStatusSelect}>
                                      <Tab eventKey="home" title="Add">
                                      
                                      <ValidationForm onSubmit={this.applicationStatusForm} id="application_status_form" onErrorSubmit={this.handleErrorSubmit} ref={this.formRef}
                                      immediate={this.state.immediate}
                                      setFocusOnError={this.state.setFocusOnError}
                                      defaultErrorMessage={{ required: "Please enter something."}}>

                                      <Form.Group as={Row} controlId="formHorizontalEmail">
                                      <Form.Label column sm={3}>
                                        Status:
                                      </Form.Label>
                                      <Col sm={4}>
                                      <SelectGroup
                                      name="application_status"
                                      id="application_status"
                                      value={this.state.application_status}
                                      required="required"
                                      errorMessage="Please select status"
                                      onChange={this.handleChange}>
                                      <option value="">Please select status</option>
                                      <option value='1'>To be reviewed</option>
                                      <option value='2'>On hold</option>
                                      <option value='3'>In talks</option>
                                      <option value='4'>Verbal offer made</option>           
                                      <option value='5'>No – Their decision</option>
                                      <option value='6'>No – Our decision</option>
                                      <option value='7'>Yes – Verbal offer made</option>
                                      <option value='8'>Yes – Offer sent</option>
                                      
                                      </SelectGroup>

                                      </Col>
                                      </Form.Group>
                                      <Form.Group as={Row}>
                                                        <Form.Label column sm={3} >Comments:</Form.Label>
                                                        <Col sm={4}>
                                                          <TextInput
                                                              name="application_status_comments"
                                                              id="application_status_comments"
                                                              placeholder="Comments"
                                                              value={this.state.application_status_comments}
                                                              multiline
                                                              required
                                                              onChange={this.handleChange}
                                                              rows="3"
                                                              autoComplete="off"
                                                          />
                                                        </Col>
                                              </Form.Group>
                                        <Form.Row>   
                                            <Form.Group as={Col} sm={12} className="mt-3">
                                              <Button disabled={this.state.certificationButton} type="submit">Send</Button>
                                            </Form.Group>
                                        </Form.Row>
                                      </ValidationForm>

                                      </Tab>
                                      <Tab eventKey="list" title="List">
                       {(this.state.applicationStatusList.length>0?<ApplicationStatuslist list={this.state.applicationStatusList} />:'Data not found')}   
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
                                        <th id="postcode">Postcode</th>
                                        <th id="status">Status</th>
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
                                        <th id="status">Status</th>
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

class Basic extends React.Component{
  render(){
       
      const basicdata= (this.props.dbscheck=='Yes'?<Form.Group as={Row} controlId="formHorizontalEmail">
                                                <Form.Label column sm={3}>
                                                   Basic:
                                                </Form.Label>
                                                <Col sm={4}>
                                                    <Form.Control type="text" name="basic"  onChange={this.props.basicChange} required placeholder="Basic" />
                                                </Col>
                                     </Form.Group>:'');
           return(
                  <>
                  {basicdata}
                  </>
                 )
  }
}

class DocumentsList extends React.Component{
dateFormate = (e) => {
       var today = new Date(e);
       var dd = today.getDate(); 
       var mm = today.getMonth() + 1; 
       var hrs = today.getHours();
       var mint = today.getMinutes();
       var yyyy = today.getFullYear(); 
       if (dd < 10) { 
           dd = '0' + dd; 
       } 
       if (mm < 10) { 
           mm = '0' + mm; 
       }
       if (mint < 10) { 
         mint = '0' + mint; 
       }
       return dd + '/' + mm + '/' + yyyy +' '+hrs+':'+mint; 

      
  };
  componentDidMount() {
    
  }
  render(){
        if(this.props.documents_list){
          if(this.props.documents_list.length > 0){
            const documents_List = this.props.documents_list.map((item,index) =>{
              return(
                <Tr key={index} style={{borderBottom:'1px solid rgba(0, 0, 0, 0.125)',borderTop:'1px solid rgba(0, 0, 0, 0.125)'}}>
                   <Td style={{padding:'5px'}}>
                   {item.document_name}
                   </Td>
                  <Td style={{ padding: '5px' }}>
                     { this.dateFormate(item.created_at) }
                  </Td> 
                  <Td style={{ padding: '5px' }}>
                  
                   <a target='_blank' href={baseurl+'/uploaded/'+item.document_path} ><i class="feather icon-file-text"></i> view</a>
                   </Td>
                   
                   </Tr>
           )
            })
           const driving_licence_number=  (this.props.driving_licence_number!=''?<Tr style={{borderBottom:'1px solid rgba(0, 0, 0, 0.125)',borderTop:'1px solid rgba(0, 0, 0, 0.125)'}}>
             <Td style={{padding:'5px'}}>
             Driving Licence Number
                   </Td><Td style={{padding:'5px'}}></Td>
                   <Td style={{padding:'5px'}}>
                   {this.props.driving_licence_number}
                   </Td>      
           </Tr>:'');
           // this.props.driving_licence_code_text
           const driving_licence_code_text=  (this.props.driving_licence_code_text!=''?<Tr style={{borderBottom:'1px solid rgba(0, 0, 0, 0.125)',borderTop:'1px solid rgba(0, 0, 0, 0.125)'}}>
             <Td style={{padding:'5px'}}>
             Driving Licence Code
                   </Td><Td style={{padding:'5px'}}></Td>
                   <Td style={{padding:'5px'}}>
                   {this.props.driving_licence_code_text}
                   </Td>      
           </Tr>:'');
            return(
              <Aux>
             <Button onClick={this.props.resendClick}  type="button">Re-Send</Button>
                <Tbl><Tbody>{documents_List}
                {driving_licence_number}
                {driving_licence_code_text}
                </Tbody></Tbl>
              </Aux>
          );

          }
        }else{
          return(<Aux><b>documents_list</b></Aux>)
        }
  }
}
class JobPositionList extends React.Component{
  state={
    positionlist:[]
  }
  componentDidMount(){
    
      
      
      const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
      
        axios.get(
          baseurl+'/api/job_positions/list',{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
      ).then(res =>{
                      if(res.data.success){
                        
                           if(res.data.list){
                               this.setState({positionlist:res.data.list}) 
                          }
                             
                      }else{
                         
                      }
                 }
      )
      .catch(err =>{
                      console.log(err);
                  }
      )
     
  }
  render(){
    const list = this.state.positionlist.map((item,index) =>{
      return(<option value={item.id}>{item.name}</option>);
    })
    return(<Aux>{list}</Aux>)
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
class Offerletterslist extends React.Component{
  offerletterPreview = (offerletters_id) =>{

    var left  = ($(window).width() / 2) - (900 / 2),
    top   = ($(window).height() / 2) - (500 / 2);
    var strWindowFeatures = "location=yes,height=970,width=720,scrollbars=yes,status=yes, top=" + top + ", left=" + left;
    
    const person = {};
    const data = Object.create(person);
    data.offerletters_id = offerletters_id;
    
    
     
    let results= btoa(JSON.stringify(data)); 
    
    var URL = baseurl+"/offer-letter/?data="+results;
    var win = window.open(URL, "_blank", strWindowFeatures);
  }
  render(){
   const offer_letters_list = this.props.list.map((item,index) =>{
                return(
                      <Tr key={index} style={{borderBottom:'1px solid rgba(0, 0, 0, 0.125)',borderTop:'1px solid rgba(0, 0, 0, 0.125)'}}>
                            <Td style={{padding:'5px'}}>
                                  {item.job_name}
                            </Td>
                            <Td style={{padding:'5px'}}>
                                  {item.confirm_Date}
                            </Td>
                            <Td style={{padding:'5px'}}>
                                {item.created_by_name}
                            </Td>
                            <Td style={{padding:'5px'}}>
                                {item.created_at_date}
                                
                            </Td>
                            <Td style={{padding:'5px'}}>
                              {(item.offerletters_id?<Button className="btn-sm btn-info" onClick={()=>{this.offerletterPreview(item.offerletters_id)}}  type="button">View</Button>:'')}
                              
                              {(item.confirm_employee_date==null?<Button className="btn-sm btn-light" onClick={()=>this.props.resendClick(item.offerletters_id)}  type="button">Resend</Button>:(item.is_approved==0?<Button className="btn-sm btn-secondary" onClick={()=>this.props.approvedClick(item.offerletters_id)}  type="button">Approve</Button>:<span class="label label-success" style={{fontSize: '8px'}}>Approved</span>))}
                            
                            </Td>
                            
                        </Tr>
                      )
    });
    return(
      <Aux>
      <Tbl style={{marginBottom:'10px'}}>
        <Thead>
          <Tr style={{lineHeight:2.5}}>
          <Th width='20%'>Job Title</Th>
          <Th width='30%'>Date of Commencement</Th>
          <Th width='20%'>Created by</Th>
          <Th width='20%'>Created at</Th>
          <Th width='10%'></Th>
          </Tr>
        </Thead>
        <Tbody>{offer_letters_list}</Tbody>
      </Tbl>
      
      </Aux>
    )
  }
}

class ApplicationStatuslist extends React.Component{
  

  render(){
   const status_list = this.props.list.map((item,index) =>{
                return(
                      <Tr key={index} style={{borderBottom:'1px solid rgba(0, 0, 0, 0.125)',borderTop:'1px solid rgba(0, 0, 0, 0.125)'}}>
                            <Td style={{padding:'5px'}}>
                                  {item.status_name}
                            </Td>
                            <Td style={{padding:'5px'}}>
                                  {item.status_comments}
                            </Td>
                            <Td style={{padding:'5px'}}>
                                {item.created_by_name}
                            </Td>
                            <Td style={{padding:'5px'}}>
                                {item.created_at_date}
                                
                            </Td>
                            
                        </Tr>
                      )
    });
    return(
      <Aux>
      <Tbl style={{marginBottom:'10px'}}>
        <Thead>
          <Tr style={{lineHeight:2.5}}>
          <Th width='20%'>Status</Th>
          <Th width='30%'>Comments</Th>
          <Th width='20%'>Created by</Th>
          <Th width='20%'>Created at</Th>
          
          </Tr>
        </Thead>
        <Tbody>{status_list}</Tbody>
      </Tbl>
      
      </Aux>
    )
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

