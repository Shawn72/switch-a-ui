import React, { Component } from 'react'  
  
export class HeaderLogin extends Component {  
    render() {  
        return ( 
            <div className="header">
                <div className="header-left">
                    <a href="/home" className="logo"> <img src="images/logo.jpg" width="85" height="40" alt=""/></a>
                </div>
                <a id="toggle_btn" href="javascript:void(0);"><i className="la la-bars"></i></a>
                <div className="page-title-box pull-left"><h3>Switch Africa UI - Login/Register</h3></div>                
            </div>
            )
        }   
}
export default HeaderLogin 