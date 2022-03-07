import React, { Component } from 'react'  
  
export class Header extends Component {  
    render() {  
        return ( 
            <div className="header">
                <div className="header-left">
                    <a href="/home" className="logo"> <img src="images/logo.jpg" width="85" height="40" alt=""/></a>
                </div>
                <a id="toggle_btn" href="javascript:void(0);"><i className="la la-bars"></i></a>
                <div className="page-title-box pull-left"><h3>Switch Africa UI</h3></div>
                <a id="mobile_btn" className="mobile_btn pull-left" to="#sidebar"> <i className="fa fa-bars" aria-hidden="true"></i></a> 
                <ul class="nav navbar-nav navbar-right user-menu pull-right">  
                    <li class="dropdown">
                        <a href="/dashboard" class="dropdown-toggle user-link" data-toggle="dropdown" title="user">
                            <span class="user-img"><img class="img-circle"  width="40" alt="avatar" id="avatar" src="images/avatar6.png" />
                                <span class="status online"></span></span>
                            <span>Logged Username</span>
                            <i class="caret"></i>
                        </a>
                        <ul class="dropdown-menu">
                        <li> <a  href="/ResetPassword">Reset Password</a></li>                    
                        <li> <a href="/Logout">Logout</a> </li>
                        </ul>
                    </li>  
                </ul>  
            </div>
            )
        }   
}
export default Header 