/****************************************
  TODO:
    pizza's displayed as "cards"
      -Update image file with unique ones foreach pizza type
    Data Handling
    
***************************************/

import React, { Component } from 'react';
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Header />
        <div id="search_box" className="col-6 mx-auto main_div">
          <form>
            <div className="card-group">
            <PizzaType pizza-type='cheese' pizza-provider='Pizza Planet' />
            <PizzaType pizza-type='pepperoni' pizza-provider="La Bella's" />
            <PizzaType pizza-type='supreme' pizza-provider="Giovani's" />
            </div>
            <UserInfo UserInfo="Email" />
            <UserInfo UserInfo="Zip" />
          </form>
        </div>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return(
      <div className="banner jumbotron text-center">
        <h1>It's Pizzza Time!</h1>
        <p className="sub_banner">Find the lowest price pizza near you!</p>        
      </div>
    );
  }
}

class NavBar extends React.Component {
  render() {
      return(
      <ul>
          <li><a href="#">Home</a></li>
          <li><a href="sign_up.html">Sign Up</a></li>
      </ul>
      );
  }
}

class PizzaType extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
      return(
           <div className="card">
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{this.props.pizza-type}</h5>
              <p className="card-text">We've found a delicous {this.props.pizza-type} pizza near you from {this.props.pizza-provider}</p>
              <a href="#" className="button btn btn-primary">Order Now!</a>
              <div className="card-footer">
                <p className="card-text"><small className="text-muted">Last updated 5 mins ago</small></p>
              </div>
            </div>
          </div>
        
      );
  }
}

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      return(
      <div className="container">
          <label for={this.props.UserInfo}>Please Enter your {this.props.UserInfo}:</label>
          <input className="zip_box" id={this.props.UserInfo} type="text" />
      </div>
      );
  }
}

class FoundPizza extends React.Component {
  render() {
      return(
      <div className="col-9 mx-auto result"  id="results_box">
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

class OrderPizza extends React.Component {
  render() {
    return(
      <div className="col-6 mx-auto main_div">
      <h3>Company Xyz has received your order!</h3>
      <h5>Thank you for using Pizza Time!</h5>
   </div>
    );
  }
}

export default App;