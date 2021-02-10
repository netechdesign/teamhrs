import React from 'react';
import { connect } from "react-redux";
import DEMO  from './../../../../../store/constant';
import Aux from "../../../../../hoc/_Aux";

const navLogo = (props) => {
    let toggleClass = ['mobile-menu'];
    if (props.collapseMenu) {
        toggleClass = [...toggleClass, 'on'];
    }
let baseUrl = window.location.origin;
    return (
        <Aux>
            <div className="navbar-brand header-logo">
                 <a href={baseUrl} className="b-brand">
                    <img width="74%" src={DEMO.logo_url}/> 
                 </a>
                <a href={DEMO.BLANK_LINK} className={toggleClass.join(' ')} id="mobile-collapse" onClick={props.onToggleNavigation}><span /></a>
            </div>
        </Aux>
    );
};

const mapStateToProps = state =>({
    companyName: state.companyName,
    

})


export default connect(mapStateToProps)(navLogo);
