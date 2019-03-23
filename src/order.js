import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import Map from './components/map'

//have to manually import images?
import cheese from './img/cheese.png'
import pepperoni from './img/pepperoni.png'
import supreme from './img/supreme.png'

class Order extends Component {
    render() {
        return (
            <div>
                <h4>Enter your information, select your pizza and we'll have the closest, cheapest pizza delivered straight to your door!</h4>
                <form>
                    <div className='Container'>
                    <UserInfo UserInfo='email' />
                    <UserInfo UserInfo='zip' />
                    </div>
                    <div className='card-group'>
                    <PizzaType pizza='cheese' provider='Pizza Planet' img={cheese} />
                    <PizzaType pizza='pepperoni' provider="Domino's" img={pepperoni}/>
                    <PizzaType pizza='supreme' provider="Giovani's" img={supreme}/>
                    </div>
                </form>
                <Map />
            </div>
        );
    }
}
class PizzaType extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.img} alt={this.props.pizza} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.pizza}</h5>
                    <p className="card-text">We've found a delicous {this.props.pizza} pizza near you from {this.props.provider}</p>
                    <Link to='/checkout' className="btn btn-primary">Order Now!</Link>
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
            <div className="mb-3">
                <label for={this.props.UserInfo}>{this.props.UserInfo}:</label>
                <input className="zip_box" id={this.props.UserInfo} type="text" />
            </div>
        );
    }
}

export default Order; 