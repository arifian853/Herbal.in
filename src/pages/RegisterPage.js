import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/api_auth";

function RegisterPage(){
    const navigate = useNavigate();

    async function onRegisterHandler(user){
        const { error } = await register(user);

        if(!error){
            navigate('/');
        }
    }

    return (
        <section className="register-page">
            <div className="logo-background">
                <p>Welcome back!</p>
            </div>

            <div className="register-content">
                <h1 className="register-text">Register Page</h1>    
                <RegisterInput register={onRegisterHandler} />
                <p className="register-alt">Have already an account ? <Link to="/" className="login-here">Login here</Link></p>
            </div>
        </section>
    )
}

export default RegisterPage;