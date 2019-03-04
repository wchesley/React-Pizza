import React, { Component } from 'react'
import { Errors } from './error';
import { FirebaseContext, firebaseWrapper } from './firebase/context';
import { Link, withRouter } from 'react-router-dom'
import './index.css'
import Input from './components/input'

/************************************
 * TODO: 
 * save data to firebase
 * link page to order after registering
 * css styling
 * testing
************************************/

/*
const INITIAL_STATE = {
    email: '',
    password: '',
    verifyPass: '',
    formErrors: { formEmail: '', formPassword: '' },
    emailValid: false,
    passwordValid: false,
    formValid: false
}
*/

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //INITIAL_STATE
            email: '',
            password: '',
            verifyPass: '',
            formErrors: { formEmail: '', formPassword: '' },
            emailValid: false,
            passwordValid: false,
            formValid: false
        };
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
                passwordValid = value.length >= 8 && value.match(/^(?=.*[0-9])/i) && value.match(/^(?=.*[A-Z])/i);
                passwordValid = true ? passwordValid.value : verifyPass.value;
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
/*
    register(event) {
        if (this.state.formValid === true) {
            //save data to firebase, send user to order pizza page
            const { email, password } = this.state;
            this.props.firebase
                .doCreateUserWithEmailAndPassword(email, password)
                .then(authUser => {
                    this.setState({ ...INITIAL_STATE });
                    //TODO: Push to order page
                    //this.props.history.push(ROUTES.HOME);
                })
                .catch(error => {
                    this.setState({ error });
                });
        }
        event.preventDefault();
    }
    */

    /*
    STORE FOR LATER: 
     const {
            email,
            password,
            verifyPass,
            formValid,
            formErrors: { formEmail, formPassword },
            emailValid,
            passwordValid
        } = this.state;
        const btnParent = (props) => {
            const btnStyle = 'btn btn-primary';
            const disabled = !formValid;
        }
    */
    render() {
       
        //TODO: tie form to Register function
        return (
            <form>
                <div className="container">
                    <Errors formErrors={this.state.formErrors} />
                </div>
                <div className={`form-group m-2 ${this.errorClass(this.state.formErrors.formEmail)}`}>
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
                <div className={`form-group m-2 ${this.errorClass(this.state.formErrors.formPassword)}`}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="userPass"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleUserInput} >
                        </input>
                </div>
                <div className={`form-group m-2 ${this.errorClass(this.state.formErrors.formPassword)}`}>
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
                <button type="submit" className={'btn btn-primary'} disabled={!this.state.formValid} >Sign up</button>
            </form>
        )
    }
}

//const WrappedSignUp = withRouter(firebaseWrapper(SignUp));

export default SignUp;