import React from "react";
import PropTypes from "prop-types";

class RegisterInput extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            password: ''
        }

        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);

    }

    onNameChange(event) {
        this.setState(() => {
            return {
                name: event.target.value
            }
        })
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

        this.props.register({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        });
    }

    render(){
        return (
            <form className="register-input" onSubmit={this.onSubmitHandler}>
                <label htmlFor="name">Name :</label>
                <input type="text" htmlFor="name" value={this.state.name} onChange={this.onNameChange} />
                <label htmlFor="email">Email :</label>
                <input type="email" htmlFor="email" value={this.state.email} onChange={this.onEmailChange} />
                <label htmlFor="password">Password : </label>
                <input type="password" htmlFor="password" value={this.state.password} onChange={this.onPasswordChange} />
                <button type="submit">REGISTER</button>
            </form>
        )
    }
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
}

export default RegisterInput;
