
    import React, { Component } from 'react';  
    import SidebarMenu from './SidebarMenu';  
    import Header from './Header'  
    import Footer from './Footer'  
    // import Home from '../Home'  
    // import {  
    //     Route, Switch, Redirect  
    // } from 'react-router-dom';  
    export class Layout extends Component {        
        render() {  
            return (  
                <div>  
                    <div id="wrapper">   
                        <Header />                    
                        <SidebarMenu/>                    
                        <Footer />  
                    </div>  
                </div>  
            )  
        }  
    }  
      
    export default Layout  
