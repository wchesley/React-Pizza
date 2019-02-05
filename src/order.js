import React, { Component } from 'react'

class OrderPizza extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return(
        <div className="col-6 mx-auto main_div">
        <h3>Company {this.props.provider} has received your order!</h3>
        <h5>Thank you for using Pizza Time!</h5>
     </div>
      );
    }
  }

  export default OrderPizza