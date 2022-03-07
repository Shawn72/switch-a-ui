import React, { Component } from 'react' 
export class SidebarMenu extends Component{
 render(){
    return(
        <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                        <li class="active"><a  href="/home"  ><i className="glyphicon glyphicon-home"></i> <span>Dashboard</span></a></li>
                        <li class="submenu">
                            <a href="javascript:void(0);"><i className="fa fa-folder fa-fw"></i> <span> Accounts Set up</span> <span className="menu-arrow"></span></a>
                            <ul >
                                <li> <a href="/home"><span> Add Bank Account </span> </a> </li> 
                                <li> <a href="/home" ><span> Account Balances </span> </a> </li>                                
                            </ul>
                        </li>   
                        <li class="submenu">
                            <a href="#"><i class="fa fa-folder fa-fw"></i> <span> Funds Management</span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li> <a href="/home" ><span> Send Funds</span> </a> </li>
                                <li> <a href="/home"><span> Atm Withdraw</span> </a> </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>  
        )
    }
}
export default SidebarMenu