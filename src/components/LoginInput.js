import React from "react";
import PropTypes from "prop-types";

class LoginInput extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onEmailChange(event){
        this.setState(() => {
            return {
                email: event.target.value
            }
        })
    }

    onPasswordChange(event){
        this.setState(() => {
            return {
                password: event.target.value
            }
        })
    }

    onSubmitHandler(event){
        event.preventDefault();

        this.props.login({
            email: this.state.email,
            password: this.state.password
        })
    }

    render(){
        return (
            <form className="login-input" onSubmit={this.onSubmitHandler}>
                <label htmlFor="email">Email :</label>
                <input type="email" htmlFor="email" value={this.state.email} onChange={this.onEmailChange} />
                <label htmlFor="password">Password :</label>
                <input type="password" htmlFor="password" value={this.state.password} onChange={this.onPasswordChange} />
                <button type="submit">LOGIN</button>
            </form>
        )
    }
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
}

export default LoginInput;