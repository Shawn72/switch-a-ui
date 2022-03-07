
    import React, { Component } from 'react';  
    import HeaderLogin from './AccountLayout/HeaderLogin'  
    import Footer from './Footer'  
    // import Home from '../Home'  
    // import {  
    //     Route, Switch, Redirect  
    // } from 'react-router-dom';  
    export class AccountLayout extends Component {        
        render() {  
            return (  
                <div>  
                    <div id="wrapper">   
                        <HeaderLogin />  
                        <Footer />  
                    </div>  
                </div>  
            )  
        }  
    }  
      
    export default AccountLayout  
