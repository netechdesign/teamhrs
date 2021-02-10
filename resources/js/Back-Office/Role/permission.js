import React from 'react';

import {Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import ReactDOM from 'react-dom';
const checkPermission = ['add','edit','delete']

export const Add = permission => {
    console.log(permission._id);
     //return '<button type="button" class="btn btn-info btn-sm" ><i style="margin:0px !important;" class="feather icon-edit"></i></button>';
     ReactDOM.render(<Button><i  className="feather icon-edit" />xcc</Button>, document.getElementById(permission._id));

    
}

export const Edit = permission =>{

}

export const Delete = permission =>{

}