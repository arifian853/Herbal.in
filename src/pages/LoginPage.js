import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/api_auth";

function LoginPage({ loginSuccess }){
    async function onLogin({ email, password }){
        const { error, data } = await login({ email, password});

        if(!error){
            loginSuccess(data);
        }
    }

    return (
        <section className="login-page">
             <div className="logo-background">
                <p>Welcome to</p>
                <p>Herbal.in</p>
             </div>

             <div className="login-content">
                <h1 className="login-text">Login Page</h1>    
                <LoginInput login={onLogin} />
                <p className="login-alt">Don't have an account ? <Link to="/register" className="register-here">Register here</Link></p>

             </div>
        </section>
    )
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
}

export default LoginPage;