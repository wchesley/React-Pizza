import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

class SignUp extends Component {
    render() {
        return (
            <div>
                <form>
                    <br></br>
                    <UserInfo UserInfo='Username' />
                    <br></br>
                    <UserInfo UserInfo='Email' />
                    <br></br>
                    <PasswordBox password='password' doublePass='enter' />
                    <PasswordBox password='password' doublePass='re-enter' />
                    <div className='row justify-content-center'>
                        <Submit />
                    </div>
                    
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
                <label for={this.props.password}>Please {this.props.doublePass} your {this.props.password}:</label>
                <input className="zip_box" id={this.props.password} type="password" />
            </div>
        );
    }
}

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <div className="container">
                <label for={this.props.UserInfo}>{this.props.UserInfo}:</label>
                <input className="zip_box" id={this.props.UserInfo} type="text" />
            </div>
        );
    }
}

class Submit extends Component {
    render() {
        return(
            <Link to='/' className="btn btn-primary">Register</Link>
        );
    }
}

export default SignUp