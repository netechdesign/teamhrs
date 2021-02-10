import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;


const DashboardDefault = React.lazy(() => import('./Back-office/Pages/Dashboard'));
const RoleList = React.lazy(() => import("./Back-Office/Role"));
const RoleAdd = React.lazy(() => import("./Back-Office/Role/add"));
const RoleEdit = React.lazy(() => import("./Back-Office/Role/edit"));

const UserList = React.lazy(() => import("./Back-Office/User"));
const UserAdd = React.lazy(() => import("./Back-Office/User/add"));
const UserEdit = React.lazy(() => import("./Back-Office/User/edit"));
const Services_starter_one = React.lazy(() => import("./employee/Services_starter_form/Services_starter_one"));
const ApplicationForm = React.lazy(() => import("./employee/ApplicationForm"));
const List = React.lazy(()=>import("./employee/ApplicationForm/List") )

//For demo Examples
const FormsSelect = React.lazy(() => import('./Demo/Forms/FormsSelect'));
const DashboardEcommerce = React.lazy(() => import('./Demo/Dashboard/Ecommerce'));
const DashboardCrm = React.lazy(() => import('./Demo/Dashboard/Crm'));
const DashboardAnalytics = React.lazy(() => import('./Demo/Dashboard/Analytics'));
const DashboardCrypto = React.lazy(() => import('./Demo/Dashboard/Crypto'));
const DashboardProject = React.lazy(() => import('./Demo/Dashboard/Project'));

const routes = [
    
    { path:'/role', exact:true, name:'role',component:RoleList},
    { path:'/role/add', exact:true, name:'roleadd',component:RoleAdd},
    { path:'/role/edit/:id', exact:true, name:'roleedit',component:RoleEdit},
    { path:'/user', exact:true, name:'user',component:UserList},
    { path:'/user/add', exact:true, name:'useradd',component:UserAdd},
    { path:'/user/edit/:id', exact:true, name:'useredit',component:UserEdit},
    { path:'/services-starter',exact:true,name:'Services_starter_one',component:Services_starter_one},
    { path:'/services-starter/Employee-Details',exact:true,name:'Services_starter_one',component:Services_starter_one},
    { path:'/services-starter/Bank-Details',exact:true,name:'Services_starter_one',component:Services_starter_one},
    { path:'/services-starter/Uniform-Order',exact:true,name:'Services_starter_one',component:Services_starter_one},
    { path:'/services-starter/Consent-Statement',exact:true,name:'Services_starter_one',component:Services_starter_one},
  
    { path:'/application-form',exact:true,name:'ApplicationForm',component:ApplicationForm},
    {path:'/applications',exact:true,name:'Employee',component:List},
    // for demo Examples.
    { path: '/forms/form-select', exact: true, name: 'Forms Select', component: FormsSelect },
    { path: '/dashboard', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/dashboard/e-commerce', exact: true, name: 'Ecommerce', component: DashboardEcommerce },
    { path: '/dashboard/crm', exact: true, name: 'CRM', component: DashboardCrm },
    { path: '/dashboard/analytics', exact: true, name: 'Analytics', component: DashboardAnalytics },
    { path: '/dashboard/crypto', exact: true, name: 'Crypto', component: DashboardCrypto },
    { path: '/dashboard/project', exact: true, name: 'Project', component: DashboardProject },
   
  ];

export default routes;