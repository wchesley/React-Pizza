/****************************************
  TODO:
    pizza's displayed as "cards"
      -Update image file with unique ones foreach pizza type
    Data Handling
    React Router
    Order page
    Checkout page
    Sign up page

***************************************/

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Header />
        <div class="main_div">
          <Main />
        </div>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="banner jumbotron text-center">
        <h1>It's Pizzza Time!</h1>
        <p className="sub_banner">Find the lowest price pizza near you!</p>
      </div>
    );
  }
}

class NavBar extends React.Component {
  render() {
    return (
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/sign_up'>Login or Sign up</Link></li>
      </ul>
    );
  }
}
/**************************************************************
 * Dunno if I want to use this just yet... 
 
class FoundPizza extends React.Component {
  render() {
    return (
      <div className="col-9 mx-auto result" id="results_box">
        <div className="container result-group" id="links_div">
          <img src="img/Pizza-icon.jpg" className="pizza-icon" alt="Pizza!" />
          <p className="pizza-desc">Pizza was found in your area! <br />Provided by: Company X</p>
          <label className="price-lbl">Price: $$</label>
          <button className="order-btn" id="order" onclick={<OrderPizza />}>Order Now!</button>
        </div>
      </div>
    );
  }
}
***************************************************************/


export default App;