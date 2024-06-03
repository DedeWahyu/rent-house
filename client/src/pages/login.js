import React from "react";
import "../App.css";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="login-container">
            <form action="login">
                <h2>Silahkan login</h2>
                <div className="input-form">
                    <label>Email*</label>
                    <input name="email" required></input>                    
                </div>
                <div className="input-form">
                <label>Password*</label>
                <input name="password" required></input>
                </div>
                <button type="submit">Login</button>
                <p>belum punya akun?<Link to="/register"><span> Register</span></Link></p>
            </form>
        </div>
    );
}

export default Login;