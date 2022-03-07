import React, { Component } from 'react'  
  
export class Login extends Component {  
    render() {  
        return ( 
            <div className="portlet light portlet-fit portlet-datatable bordered">
            <div className="portlet-body">
                <div className="form-body">  
                    <div className="table-container">                  
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <span className="caption-subject font-green sbold uppercase" style="font-weight:bold">LOGIN PAGE</span>
                                <br />
                                <form method="post">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input name="email" type="email" class="form-control" />
                                    </div>
        
                                    <div className="form-group">
                                        <label >Password</label>
                                        <input name="Password" type="password" class="form-control" />
                                    </div>
        
                                    <div class="form-group">
                                        <div class="custom-control custom-checkbox">
                                            <input asp-for="RememberMe" type="checkbox" class="custom-control-input" />                                          
                                        </div>
                                    </div>
        
                                    <div class="form-group">
                                        <a asp-action="ForgotPassword">Forgot Password</a>&nbsp;<br /> <button type="submit" className="btn-primary btn-block">Login</button>
                                    </div>       
                                </form>
                                <div class="col-md-2"></div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            )
        }   
}
export default Login 