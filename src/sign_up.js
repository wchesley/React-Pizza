import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserInfo from './Home'
import './index.css'

class SignUp extends Component {
    render() {
        return (
            <div>
                <form>
                    <UserInfo UserInfo='Username' />
                    <UserInfo UserInfo='email' />
                    <PasswordBox password='password' doublePass='enter' />
                    <PasswordBox password='password' doublePass='re-enter' />
                </form>
            </div>
        );
    }
}

class PasswordBox extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return(
            <div className="container">
                <label for={this.props.password}>Please {this.props.doublePass}} your {this.props.password}:</label>
                <input className="zip_box" id={this.props.password} type="password" />
            </div>
        );
    }
}

export default SignUp