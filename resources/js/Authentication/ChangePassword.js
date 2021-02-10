import React from 'react';
import { connect } from "react-redux";
import {NavLink} from 'react-router-dom';
import PNotify from "pnotify/dist/es/PNotify";
import "pnotify/dist/es/PNotifyButtons";
import "pnotify/dist/es/PNotifyConfirm";
import "pnotify/dist/es/PNotifyCallbacks";


import '../assets/scss/style.scss';
import Aux from "../hoc/_Aux";
import Breadcrumb from "../App/layout/AdminLayout/Breadcrumb";
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import validator from 'validator';
import {ChangePasswordurl} from '../HttpFunctions';
import back4 from '../assets/images/bg-images/login.jpeg';
import {Row, Col, Form, Button, Alert} from 'react-bootstrap';
class ChangePassword extends React.Component {
  
    constructor(props) {
        super(props);
        this.state={
            current_password:'',
            new_password:'',
            confirm_password:'',
            error:'',
            visible : true,
            formSubmitting: false,
            loading:'Change Password',
            redirect: props.location,
        }
        
      }
      matchPassword = (value) => {
        return value && value === this.state.new_password;
    };
    
      handleChange = (e) => {
        
        this.setState({
            [e.target.name]: e.target.value
        })
        
        var str = e.target.value;
        str = str.replace(/\s/g, '-');
        this.setState({
           slug:str
        })
    }
    handleSubmit = (e)=> {
        e.preventDefault();
       
        this.setState({formSubmitting:true});
        this.setState({loading:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Please Wait</span>});
        ChangePasswordurl({'new_password':this.state.new_password,'confirm_password':this.state.confirm_password,'current_password':this.state.current_password})
        .then(res =>{
            
                        if(res.data.success){
                            let appState = {
                                isLoggedIn: false,
                                user: {}
                              };
                            localStorage.setItem('userData',JSON.stringify(appState));
                            this.props.saveUserdata();
                            this.props.history.push('/');
                            
                            PNotify.success({
                                title: 'Changes Password',
                                text: "Password change successfully",
                                modules: {
                                    Desktop: {
                                        desktop: true
                                    }
                                }
                            });
                        }else{
                            
                           
                            const errorshow =<Alert  variant='danger'>{res.data.message}</Alert>;
                            this.setState({error:errorshow})
                           
                            this.setState({formSubmitting:false});
                            this.setState({loading:'Change Password'});
                            this.setState({new_password:''});
                            this.setState({confirm_password:''});
                            this.setState({current_password:''});
                            setTimeout(
                                function() {
                                    this.setState({error:''});
                                }.bind(this),
                                2000
                            );
                            
                        }
                   }
        )
        .catch(err =>{
                        console.log(err);
                    }
        )
                          
}
    render () {
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper aut-bg-img-side cotainer-fiuid align-items-stretch">
                    <div className="row align-items-center w-100 align-items-stretch bg-white">
                        <div className="d-none d-lg-flex col-lg-8 aut-bg-img align-items-center d-flex justify-content-center" style={{backgroundImage: `url(${back4})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center'}}>
                <div className="col-md-8"><h1 className="text-white mb-5">Change Default Password</h1>
                                <p className="text-white">For security purpose you should change the default password.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 align-items-stret h-100 align-items-center d-flex justify-content-center">
                            <div className=" auth-content text-center">
                        <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                            <div className="card-body text-center">
                                <h5 className="mb-4">Change Password</h5>
                                <div className="mb-12">
                                            {this.state.error}
                                    </div>
                                <div className="input-group mb-3">
                                    
                                    <TextInput
                                                name="current_password"
                                                id="current_password"
                                                type="password"
                                                required
                                                placeholder="current password"
                                                errorMessage={{validator:"Please enter a valid password"}}
                                                value={this.state.current_password}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                       
                                </div>
                                <div className="input-group mb-3">
                                   
                                    <TextInput
                                                name="new_password"
                                                id="new_password"
                                                type="password"
                                                placeholder="New Password"
                                                required
                                                pattern="(?=.*[A-Z]).{6,}"
                                                errorMessage={{required:"Password is required", pattern: "Password should be at least 6 characters and contains at least one upper case letter"}}
                                                value={this.state.new_password}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                </div>
                                <div className="input-group mb-4">
                                    
                                    <TextInput
                                                name="confirm_password"
                                                id="confirm_password"
                                                type="password"
                                                placeholder="Re-Type New Password"
                                                required
                                                validator={this.matchPassword}
                                                pattern="(?=.*[A-Z]).{6,}"
                                                errorMessage={{required:"Password is required", pattern: "Password should be at least 6 characters and contains at least one upper case letter"}}
                                                value={this.state.confirm_password}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                </div>
                                
                                <button disabled={this.state.formSubmitting} className="btn btn-primary shadow-2 mb-4">
                                        {this.state.loading}
                                      
                                    </button>
                            </div>
                        </ValidationForm>
                        </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}


const mapStateToProps = state =>({
    companyName: state.companyName,
    

})
const mapDispatchToProps= dispatch =>({
              saveUserdata(){
                 dispatch({type: 'USER_LOGIN'});
              }
          
       
    
})

export default connect(mapStateToProps,mapDispatchToProps)(ChangePassword);