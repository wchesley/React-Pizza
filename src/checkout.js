import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

class CheckOut extends Component {
    render() {
        return (
            <div>
                <form>
                    <Input type='name' />
                </form>
            </div>
        );
    }
}

class Input extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <div className="mb-3">
                <label for={this.props.type}>{this.props.type}</label>
                <input type={Text} className="form-control" id={this.props.type}></input>
            </div>
        );
    }
}

class Order extends Component {
    render() {
        return (
            <div>
                <hr className='mb-4' />
                <Link to='/order' className='btn btn-primary'>Checkout</Link>
            </div>
        );
    }
}

export default CheckOut; 