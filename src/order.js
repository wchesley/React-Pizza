import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class OrderPizza extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return(
        <div className="col-6 mx-auto">
        <h3>Company {this.props.provider} has received your order!</h3>
        <h5>Thank you for using Pizza Time!</h5>
     </div>
      );
    }
  }

  export default OrderPizza