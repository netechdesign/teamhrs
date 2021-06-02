import React, { Component, Suspense } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Fullscreen from "react-full-screen";
import windowSize from 'react-window-size';

import Navigation from './Navigation';
import NavBar from './NavBar';
import Breadcrumb from './Breadcrumb';
import Loader from "../Loader";
import routes from "../../../routes";
import Aux from "../../../hoc/_Aux";
import * as actionTypes from "../../../store/actions";
import './app.scss';
import axios from 'axios'
const baseurl= window.location.origin;

class AdminLayout extends Component {
    state = {
        defaultPath:this.props.defaultPath,
        }
    fullScreenExitHandler = () => {
        if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
            this.props.onFullScreenExit();
        }
    };
    checkedMandatoryDocument= () =>{
        const {id,auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
        
        if(id){
                axios.get(
                    baseurl+'/api/checked_mandatory_document/'+id,
                    {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
                ).then(res =>{
                                if(res.data.success){
                                    if(res.data.note_read>0){
                                          
                                        this.props.history.push('/Employee/Mandatory-Document-List');
                                    }
                                 }else{}
                            }
                ).catch(err =>{})
                
                }
    }
    addMandatoryDocumenttoUser  = () =>{
        const {id,auth_token,roles} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
        if(this.props.history.location.pathname!='/Employee/Mandatory-Document-List'){
        if(roles!=1){
                axios.get(
                    baseurl+'/api/add_mandatory_document_to_user/'+id,
                    {headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}} 
                ).then(res =>{
                                if(res.data.success){
                                    this.checkedMandatoryDocument();
                                 }else{}
                            }
                ).catch(err =>{})
                
                }
            }
    }
    componentWillReceiveProps = () => {
        this.addMandatoryDocumenttoUser();
        
        
    };

    componentWillMount() {
        const {roles} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
        const application_forms_id = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).application_forms_id : 'Null';
        
        let lyout = 'vertical';
           if(roles!=1){
            lyout ='horizontal';
           }
           
           if(application_forms_id==0){
           //   this.props.setDefaultPath();
           if(roles!=1){
                 this.setState({defaultPath:'/application-form'});
                 }
           }else
           {
            if(roles!=1){
                
                this.setState({defaultPath:'/services-starter'});
                }
           }
           
            this.props.saveUserdata(lyout);
        if (this.props.windowWidth > 992 && this.props.windowWidth <= 1024 && this.props.layout !== 'horizontal') {
            this.props.onComponentWillMount();
        }
    }

    mobileOutClickHandler() {
        if (this.props.windowWidth < 992 && this.props.collapseMenu) {
            this.props.onComponentWillMount();
        }
    }

    render() {

        /* full screen exit call */
        document.addEventListener('fullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('webkitfullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('mozfullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('MSFullscreenChange', this.fullScreenExitHandler);

        const menu = routes.map((route, index) => {
            return (route.component) ? (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                        <route.component {...props} />
                    )} />
            ) : (null);
        });

        return (
            <Aux>
                <Fullscreen enabled={this.props.isFullScreen}>
                    <Navigation />
                    <NavBar />
                    <div className="pcoded-main-container" onClick={() => this.mobileOutClickHandler}>
                        <div className="pcoded-wrapper">
                            <div className="pcoded-content">
                                <div className="pcoded-inner-content">
                                    <Breadcrumb />
                                    <div className="main-body">
                                        <div className="page-wrapper">
                                            <Suspense fallback={<Loader/>}>
                                                <Switch>
                                                    {menu}
                                                    <Redirect from="/" to={this.state.defaultPath} />
                                                </Switch>
                                            </Suspense>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fullscreen>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        defaultPath: state.defaultPath,
        isFullScreen: state.isFullScreen,
        collapseMenu: state.collapseMenu,
        configBlock: state.configBlock,
        layout: state.layout
    }
};

const mapDispatchToProps = dispatch => {
    return {
        saveUserdata:(userlayout) => dispatch({type: 'USER_LOGIN',layout:userlayout}),
        onFullScreenExit: () => dispatch({type: actionTypes.FULL_SCREEN_EXIT}),
        onComponentWillMount: () => dispatch({type: actionTypes.COLLAPSE_MENU}),
        setDefaultPath:() => dispatch({type: actionTypes.SET_DEFAULT}),
        
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (windowSize(AdminLayout));