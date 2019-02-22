import React, { Component } from 'react'
import { Errors } from './error';
import { Link } from 'react-router-dom'
import './index.css'

/************************************
 * TODO: 
 * save data to firebase
 * link page to order after registering
 * css styling
************************************/

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            verifyPass: '',
            formErrors: { email: '', password: '' },
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let verifyPass = this.state.verifyPass;

        switch (fieldName) {
            case 'email':
                //Validate email via RegEx: 
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 8;
                passwordValid = value.match(/^(?=.*[A-Z])/i);//verify if a capital letter present
                passwordValid = value.match(/^(?=.*[0-9])/i);//verify if a number is present
                passwordValid === verifyPass;
                fieldValidationErrors.password = passwordValid ? '' : ' is invalid, must contain 8 letters, 1 capital letter and 1 number. Both password must match exactly.';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    //if email and password check out then enable submit btn
    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    register(){
        if(this.state.formValid === true)
        {
            //save data to firebase, send user to order pizza page
        }
    }

    render() {
        return (
            <form onSubmit={}>
                <h2>Sign up - It's Piza Time!</h2>
                <div className="container">
                    <Errors formErrors={this.state.formErrors} />
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="userEmail"
                        required className="form-control"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleUserInput} />
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="userPass"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleUserInput} />
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                    <label htmlFor="password">Re-enter Password</label>
                    <input
                        type="password"
                        id="verifyPass"
                        className="form-control"
                        name="verifyPassword"
                        placeholder="Re-enter Password"
                        value={this.state.verifyPass}
                        onChange={this.handleUserInput} />
                </div>
                <button type="submit" className="btn btn-primary" disabled={!this.state.formValid} onClick={}>Sign up</button>                
            </form>
        )
    }
}

export default SignUp