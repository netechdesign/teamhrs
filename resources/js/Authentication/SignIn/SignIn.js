import React from 'react';
import { connect } from "react-redux";
import {NavLink} from 'react-router-dom';
import {Row, Col, Form, Button, Alert} from 'react-bootstrap';
import { ValidationForm, TextInput, BaseFormControl } from 'react-bootstrap4-form-validation';

import validator from 'validator';
import './../../assets/scss/style.scss';
import Aux from "../../hoc/_Aux";
import Breadcrumb from "../../App/layout/AdminLayout/Breadcrumb";

import back4 from '../../assets/images/bg-images/login.jpeg';

import {Login} from '../../HttpFunctions';
class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            email: "",
            password:'',
            remember:false,
            error:'',
            visible : true,
            formSubmitting: false,
            loading:'Login',
            redirect: props.location,
        }
        
      }
           
      handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    
    handleSubmit = (e)=> {
                            e.preventDefault();
                           
                            this.setState({disabled:true});
                            this.setState({loading:<span><span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading</span>});
                            Login({'email':this.state.email,'password':this.state.password,'remember':this.state.remember})
                            .then(res =>{
                                            if(res.data.success){
                                                let appState = {
                                                    isLoggedIn: true,
                                                    user: res.data.data,
                                                    application_forms_id:res.data.data.application_forms_id
                                                  };
                                                localStorage.setItem('userData',JSON.stringify(appState));
                                                let lyout = 'vertical';
                                               if(res.data.data.roles!=1){
                                                lyout ='horizontal';
                                               }
                                                this.props.saveUserdata(lyout);
                                                this.props.history.push('/');
                                            }else{
                                                const errorshow =<Alert  variant='danger'>{res.data.data.message}</Alert>;
                                                this.setState({error:errorshow})
                                               
                                                this.setState({disabled:false});
                                                this.setState({loading:'Login'});

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
    componentDidMount() {    
    const { state = {} } = this.state.redirect;
   const { error } = (state ? state:'');
    if(error){
        const errorshow =<Alert  variant='danger'>{error}</Alert>;
                                                this.setState({error:errorshow})
                                                setTimeout(
                                                    function() {
                                                        this.setState({error:''});
                                                    }.bind(this),
                                                    2000
                                                );
    }
    let appState = localStorage["userData"];
    let isLoggedIn= false;
    if (appState) {
      let AppState = JSON.parse(appState);
      isLoggedIn = AppState.isLoggedIn;
    }
    console.log(this.state.redirect.state);
    const { prevLocation } = this.state.redirect.state || { prevLocation: { pathname: '/dashboard' } };
    if (prevLocation && isLoggedIn) {
      return this.props.history.push(prevLocation);
    }
}
    render () {
       
   
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper aut-bg-img-side cotainer-fiuid align-items-stretch">
                    <div className="row align-items-center w-100 align-items-stretch bg-white">
                        <div className="d-none d-lg-flex col-lg-8 aut-bg-img align-items-center d-flex justify-content-center" style={{backgroundImage: `url(${back4})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center'}}>
                <div className="col-md-8"><h1 className="text-white mb-5">Login in {this.props.companyName}</h1>
                                <p className="text-white">Delivering safe customer and consumer outcomes – doing what it takes.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 align-items-stret h-100 align-items-center d-flex justify-content-center">
                            <div className=" auth-content text-center">
                            <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                                    <div className="mb-12">
                                            {this.state.error}
                                    </div>
                                    <div className="mb-4">
                                        <i className="feather icon-unlock auth-icon"/>
                                    </div>
                                    <h3 className="mb-4">Login</h3>
                                    <div className="input-group mb-3">
                                    <TextInput
                                                name="email"
                                                id="email"
                                                type="email"
                                                placeholder="Email Address"
                                                validator={validator.isEmail}
                                                errorMessage={{validator:"Please enter a valid email"}}
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                       
                                    </div>
                                    <div className="input-group mb-4">
                                        
                                        <TextInput
                                                name="password"
                                                id="password"
                                                type="password"
                                                placeholder="Password"
                                                required
                                                errorMessage={{required:"Password is required"}}
                                                value={this.state.password}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                    </div>
                                    <div className="form-group text-left">
                                        <div className="checkbox checkbox-fill d-inline">
                                            <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1"/>
                                                <label htmlFor="checkbox-fill-a1" className="cr"> Save credentials</label>
                                        </div>
                                    </div>
                                    <button disabled={this.state.formSubmitting} className="btn btn-primary">
                                        {this.state.loading}
                                      
                                    </button>
                                   
                                    <p className="mb-2 text-muted">Forgot password? <NavLink to="/auth/reset-password-2">Reset</NavLink></p>
                                    <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/auth/signup-2">Signup</NavLink></p>
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
    layout:'horizontal'

})
const mapDispatchToProps= dispatch =>({
              saveUserdata(userlayout){
                 dispatch({type: 'USER_LOGIN',layout:userlayout});
              }
          
       
    
})

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);