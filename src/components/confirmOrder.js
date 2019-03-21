import React, { Component } from 'react'
//import { Link } from 'react-router-dom'

const OrderPizza = ({...props}) =>
        <div className="col-6 mx-auto">
        <h3>Company {props.provider} has received your order!</h3>
        <h5>Thank you for using Pizza Time!</h5>
     </div>


  export default OrderPizza