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
const baseurl= window.location.origin;

let ajaxabort;

class Documents extends React.Component {
    state = {
        apiload:true,
        Documents:[],
        proof_of_identifications:''
        
    };
    
    alreadyAdded =(id) =>{
        
        this.setState({buttonName:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading</span>});
        const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
       
        
        axios.get(
            baseurl+'/api/documents',
            { params: {user_id: id},headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
        ).then(res =>{
                          if(res.data.success){
                           // this.getAddress(res.data.Employee_details.getaddress_id);
                             
                             let Documents = res.data.Documents;
                            // let proof_of_identifications = res.data.Proof_of_identifications;
                             
                            this.setState({Documents:Documents});
                            //this.setState({proof_of_identifications:proof_of_identifications});
                              this.setState({apiload:false});
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
        
        const {name,email} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
        if(this.props.location.state){
            this.alreadyAdded(this.props.location.state.userId);
        }
        
    }
    
    render() {
        
        const title = <i className='feather icon-more-vertical' />;
        let re = /(?:\.([^.]+))?$/;
        const document= (this.state.Documents.length >0?
               this.state.Documents.map((item,index) => {
                
                let ext = re.exec(item.document_path)[1];
                if(ext=='pdf'){ ext=<i class="fa fa-file-pdf-o"></i>}
                else if(ext=='jpeg'){ ext=<i class="fa fa-file-photo-o"></i>}
                else if(ext=='xlsx'){ ext=<i class="fa fa-file-excel-o"></i>}
                else if(ext=='docx'){ ext=<i class="fa fa-file-word-o"></i>}
                else{
                    ext=<i class="fa fa-file-text-o"></i>
                } 
                
                    return (<tr key={index}>
                                <th>{ext}</th>
                                <th>{item.document_name}</th>
                                <th><Button className="btn-sm" style={{width: '20%',padding: '5px 0px'}} variant='secondary'><i style={{marginRight:'0px'}} class="fa fa-eye"></i></Button></th>
                            </tr>
                            )      
               }):<tr><td>Document not found</td></tr>);
              
               
               
        return (
            <Aux>
                    
                        <Row style={{padding: '0px 10px',borderLeft: 'solid 2px #04a9f5'}}>

                    <Col md={10} xl={10} style={{paddingTop:'15px'}}>
                        <h5>Documents</h5>
                    </Col>
                    <Col md={2} xl={2} style={{padding:'0px'}}>
                        <DropdownButton alignRight={true} style={{float: 'right',border: 'none'}}
                        title={title}
                        variant={'outline-secondary'}
                        id={`dropdown-variants-secondary`}
                        key={'secondary'}
                        className='drp-icon'
                    >
                        <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                        
                         </DropdownButton>
                    </Col>
                    </Row>
                    
                    <div class="details-tab" style={{borderTop: 'solid 1px #ebeff1',padding:'10px 20px'}}>
                    <div style={{position:'absolute',zIndex:'99999',background:'rgba(255, 255, 255, 0.57)',top:'15%',left:'50%',display:(this.state.apiload?'block':'none')}}><div id="loader"></div></div>  
	
											<div class="row view-basic-card">
													<div class="col-12 col-md-12 col-lg-12">
                                                    <Table ref="tbl" striped hover responsive className="table table-condensed" id="data-table-responsive">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th></th>
                                        
                                    </tr>
                                    </thead>
                                    <tbody>
                                     {document}
                                     
                                    {/* <Proofofidentification data={this.state.proof_of_identifications} />
                                    */}
                                    </tbody>
                                </Table>
													</div>
													   
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

class Proofofidentification extends React.Component {
    getExt = (document_path) =>{
        let re = /(?:\.([^.]+))?$/;
    let ext = re.exec(document_path)[1];
                if(ext=='pdf'){ ext=<i class="fa fa-file-pdf-o"></i>}
                else if(ext=='jpeg'){ ext=<i class="fa fa-file-photo-o"></i>}
                else if(ext=='xlsx'){ ext=<i class="fa fa-file-excel-o"></i>}
                else if(ext=='docx'){ ext=<i class="fa fa-file-word-o"></i>}
                else{
                    ext=<i class="fa fa-file-text-o"></i>
                }
                return ext;
    }
    
    render() {
        return(<Aux>
            {(this.props.data.birth_certificate?<tr><th>{this.getExt(this.props.data.birth_certificate)}</th><th>Birth Certificate</th><th><Button className="btn-sm" style={{width: '20%',padding: '5px 0px'}} variant='secondary'><i style={{marginRight:'0px'}} class="fa fa-eye"></i></Button></th></tr>:'')}
            {(this.props.data.driving_licence_front?<tr><th>{this.getExt(this.props.data.driving_licence_front)}</th><th>Driving Licence</th><th><Button className="btn-sm" style={{width: '20%',padding: '5px 0px'}} variant='secondary'><i style={{marginRight:'0px'}} class="fa fa-eye"></i></Button></th></tr>:'')}
            
            {(this.props.data.national_insurance_number?<tr><th>{this.getExt(this.props.data.national_insurance_number)}</th><th>National Insurance Number</th><th><Button className="btn-sm" style={{width: '20%',padding: '5px 0px'}} variant='secondary'><i style={{marginRight:'0px'}} class="fa fa-eye"></i></Button></th></tr>:'')}
            
            {(this.props.data.p45form?<tr><th>{this.getExt(this.props.data.p45form)}</th><th>p45 Form</th><th><Button className="btn-sm" style={{width: '20%',padding: '5px 0px'}} variant='secondary'><i style={{marginRight:'0px'}} class="fa fa-eye"></i></Button></th></tr>:'')}
            
            {(this.props.data.passport_style_photograph?<tr><th>{this.getExt(this.props.data.passport_style_photograph)}</th><th>Passport style Photograph</th><th><Button className="btn-sm" style={{width: '20%',padding: '5px 0px'}} variant='secondary'><i style={{marginRight:'0px'}} class="fa fa-eye"></i></Button></th></tr>:'')}
            
            {(this.props.data.passport_inside?<tr><th>{this.getExt(this.props.data.passport_inside)}</th><th>Passport</th><th><Button className="btn-sm" style={{width: '20%',padding: '5px 0px'}} variant='secondary'><i style={{marginRight:'0px'}} class="fa fa-eye"></i></Button></th></tr>:'')}
            
            {(this.props.data.proof_of_address?<tr><th>{this.getExt(this.props.data.proof_of_address)}</th><th>Proof of Address</th><th><Button className="btn-sm" style={{width: '20%',padding: '5px 0px'}} variant='secondary'><i style={{marginRight:'0px'}} class="fa fa-eye"></i></Button></th></tr>:'')}
            
            {(this.props.data.right_to_work?<tr><th>{this.getExt(this.props.data.right_to_work)}</th><th>Right to work</th><th><Button className="btn-sm" style={{width: '20%',padding: '5px 0px'}} variant='secondary'><i style={{marginRight:'0px'}} class="fa fa-eye"></i></Button></th></tr>:'')}
            </Aux>);
    }
}
export default Documents;