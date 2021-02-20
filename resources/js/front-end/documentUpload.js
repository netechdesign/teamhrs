import React, { Component, Suspense } from 'react';
import {Row, Col, Card, Form, Button,Table} from 'react-bootstrap';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;


import './assets/css/styles.scss';
import './assets/css/app.scss';
import Aux from "../hoc/_Aux";
import DEMO from "../store/constant";
import Breadcrumb from "../App/layout/AdminLayout/Breadcrumb";

import Datetime from 'react-datetime';
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import Loki from 'react-loki';
import Loadable from 'react-loadable';
import Fullscreen from "react-full-screen";
import windowSize from 'react-window-size';

import MaskedInput from 'react-text-mask';
import validator from 'validator';
import axios from 'axios'
import PNotify from "pnotify/dist/es/PNotify";
import "pnotify/dist/es/PNotifyButtons";
import "pnotify/dist/es/PNotifyConfirm";
import "pnotify/dist/es/PNotifyCallbacks";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import SignatureCanvas from 'react-signature-canvas';
const baseurl= window.location.origin;

class DocumentUpload extends React.Component {
    componentDidMount() {
        
    }
    
    render() {
        const capitalize = (s) => {
            if (typeof s !== 'string') return ''
            return s.charAt(0).toUpperCase() + s.slice(1)
          }
          
        return (
            <Aux>
                <Breadcrumb/>
                <div className="wrapper">
                    <div>
                    <nav className="navbar navbar-expand-lg navbar-light navbar-default navbar-fixed-top past-main" role="navigation">
                            <div className="container" style={{marginLeft:'0px'}} >
                                <a className="" href="#"><img style={{width:'70%'}} src={DEMO.logo_url} alt="Team Hr" /></a>
                              
                              {/*  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"/>
                                </button>
        */}
                                <div className=" navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto"/>
                                    <ul  style={{position: 'absolute',top: '5px',right: '30px'}} className="navbar-nav my-2 my-lg-0">
                                        
                                        <li className="nav-item">
                                            <a className="nav-link" href={DEMO.BLANK_LINK}>Login</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        
<div className="main" id="main">
                            <div className="hero-section app-hero">
                                <div className="container">
                                    <div className="hero-content app-hero-content text-center">
                                        <div className="row justify-content-md-center">
                                            <div className="col-md-10">
                                                <h1 className="wow fadeInUp" data-wow-delay="0s">Thank you {capitalize(this.props.location.state.user_name)}</h1>
                                                <p className="wow fadeInUp" data-wow-delay="0.2s">
                                                 Documents sent successfully
                                                 </p>
                                            
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default DocumentUpload;