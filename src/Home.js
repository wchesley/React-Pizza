import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <UserInfo UserInfo='email' />
                    <UserInfo UserInfo='zip' />
                    <PizzaType pizza='cheese' provider='Pizza Planet' />
                    <PizzaType pizza='pepperoni' provider="Domino's" />
                    <PizzaType pizza='superme' provider="Giovani's" />
                </form>
            </div>
        );
    }
}
class PizzaType extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={"./img" + this.props.pizza} alt={this.props.pizza} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.pizza}</h5>
                    <p className="card-text">"We've found a delicous " + {this.props.pizza} + " pizza near you from" + {this.props.provider}</p>
                    <Link to='/order' className="button btn btn-primary">Order Now!</Link>
                </div>
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

export default Home; 