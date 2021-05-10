import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import windowSize from 'react-window-size';

import Aux from "../../../../../hoc/_Aux";
import NavGroup from './NavGroup';
import DEMO from "../../../../../store/constant";
import * as actionTypes from "../../../../../store/actions";
import axios from 'axios'
const baseurl= window.location.origin;
class NavContent extends Component {
    state = {
        scrollWidth: 0,
        prevDisable: true,
        nextDisable: false,
        navigation:[],
        newapplication:''
    };

    scrollPrevHandler = () => {
        const wrapperWidth = document.getElementById('sidenav-wrapper').clientWidth;

        let scrollWidth = this.state.scrollWidth - wrapperWidth;
        if(scrollWidth < 0) {
            this.setState({scrollWidth: 0, prevDisable: true, nextDisable: false});
        } else {
            this.setState({scrollWidth: scrollWidth, prevDisable: false});
        }
    };

    scrollNextHandler = () => {
        const wrapperWidth = document.getElementById('sidenav-wrapper').clientWidth;
        const contentWidth = document.getElementById('sidenav-horizontal').clientWidth;

        let scrollWidth = this.state.scrollWidth + (wrapperWidth - 80);
        if (scrollWidth > (contentWidth - wrapperWidth)) {
            scrollWidth = contentWidth - wrapperWidth + 80;
            this.setState({scrollWidth: scrollWidth, prevDisable: false, nextDisable: true});
        } else {
            this.setState({scrollWidth: scrollWidth, prevDisable: false});
        }
    };
    
    componentDidMount(){
        
    }
    render() {
        
        setTimeout(() => {
            const {auth_token} = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')).user : 'Null';
             axios.get(baseurl+'/api/newapplicationcount',{headers:{'Accept':'application/json','Authorization':'Bearer '+auth_token}}
                       ).then(res =>{
             if(res.data.success){
                
                let applicatiTotal= res.data.total;
                if(applicatiTotal>0){
                this.setState({newapplication:{title: 'NEW '+applicatiTotal,type: 'label-danger'}});
                }else{
                    this.setState({newapplication:''});
                }
              }
                      }).catch(err =>{
                          console.log(err);
                        }
          )    
        }, 10000);
          
        let RoleUser='';
let employeeForm='';
let employeeList='';
let checklist="";
let employeeDetails='';
let permissions = this.props.permissions;
if(permissions){
    
    permissions.map((vl,idx)=>{
    let page = Object.keys(vl);
    vl[page].map((pg,i)=>{
        if(pg.name=='user.show'){
            if(pg.Ischeck){
                RoleUser ={
                    id: 'RoleUser',
                    title: 'Role & User',
                    type: 'collapse',
                    icon: 'feather icon-menu',
                    children: [
                        {
                            id: 'Role',
                            title: 'Role',
                            type: 'item',
                            url: '/role',
                           
                        },
                        {
                            id: 'v-fixed',
                            title: 'User',
                            type: 'item',
                            url: '/user',
                           
                        }
                    ]
                };
            }
        }
        
        if(pg.name=='employee_details.create'){
            if(pg.Ischeck){
                employeeDetails ={
                    id: 'employee_details',
                            title: 'New Employee Form',
                            type: 'item',
                            url: '/services-starter/Employee-Details',
                  

                        }
                
            }
            
        }
        if(pg.name=='application_form.show'){
            if(pg.Ischeck){
                
                employeeForm ={
                            id: 'applications',
                            title: 'Application',
                            type: 'item',
                            url: '/applications',
                            icon: 'feather icon-file-text',
                            badge: this.state.newapplication

                        }
                    
                
                
            }
            
        }

        if(pg.name=='application_form.show'){
            if(pg.Ischeck){
                checklist ={
                    id: 'check-list',
                    title: 'Check list',
                    type: 'item',
                    url: '/check-list',
                    icon: 'feather icon-file-text'
                }
            }
        }
        
        if(pg.name=='application_form.show'){
            if(pg.Ischeck){
                employeeList ={
                    id: 'employee-list',
                    title: 'Employee',
                    type: 'item',
                    url: '/employee',
                    icon: 'feather icon-users'
                }
            }
        }
    })
    
})

}

       let navigation = 
           [ {
                id: 'app',
                title: '',
                type: 'group',
                icon: 'icon-app',
                children: [
                    {
                        id: 'dashboard',
                        title: 'Dashboard',
                        type: 'item',
                        classes: 'nav-item',
                        url: '/dashboard',
                        icon: 'feather icon-home'
                    },
                    RoleUser,employeeForm,employeeList,checklist,employeeDetails 
                    ]
            }]
            
        const navItems = navigation.map(item => {
            
                switch (item.type) {
                    case 'group':
                        return <NavGroup layout={this.props.layout} key={item.id} group={item}/>;
                    default:
                        return false;
                }
            }
        );

        let mainContent = '';
        if (this.props.layout === 'horizontal') {
            let prevClass = ['sidenav-horizontal-prev'];
            if (this.state.prevDisable) {
                prevClass = [...prevClass, 'disabled'];
            }
            let nextClass = ['sidenav-horizontal-next'];
            if (this.state.nextDisable) {
                nextClass = [...nextClass, 'disabled'];
            }

            mainContent = (
                <div className="navbar-content sidenav-horizontal" id="layout-sidenav">
                    <a href={DEMO.BLANK_LINK} className={prevClass.join(' ')} onClick={this.scrollPrevHandler}><span/></a>
                    <div id="sidenav-wrapper" className="sidenav-horizontal-wrapper">
                        <ul id="sidenav-horizontal" className="nav pcoded-inner-navbar sidenav-inner" onMouseLeave={this.props.onNavContentLeave} style={{marginLeft: '-'+this.state.scrollWidth+'px'}}>
                            {navItems}
                            
                        </ul>
                        
                    </div>
                    <a href={DEMO.BLANK_LINK} className={nextClass.join(' ')} onClick={this.scrollNextHandler}><span/></a>
                </div>
            );
        } else {
            mainContent = (
                <div className="navbar-content datta-scroll">
                    <PerfectScrollbar>
                        <ul className="nav pcoded-inner-navbar">
                            {navItems}
                        </ul>
                    </PerfectScrollbar>
                </div>
            );
        }

        return (
            <Aux>
                {mainContent}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        layout: state.layout,
        collapseMenu: state.collapseMenu,
        permissions:state.permissions
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onNavContentLeave: () => dispatch({type: actionTypes.NAV_CONTENT_LEAVE}),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (windowSize(NavContent)));
