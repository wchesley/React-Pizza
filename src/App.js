import React, { Component } from 'react';
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
        <div className="banner jumbotron text-center">
          <h1>It's Pizzza Time!</h1>
          <p className="sub_banner">Find the lowest price pizza near you!</p>        
        </div>
        <SearchBox />
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

class SearchBox extends React.Component {
  render() {
      return(
      <div id="search_box" className="col-6 mx-auto main_div">
          <div className="custom-control custom-checkbox">
          <PizzaType />
          <ZipBox />
          </div> 
      </div> 
      );
  }
}

class PizzaType extends React.Component {
  render() {
      return(
          <div className="custom-control custom-checkbox">
            <ChzPizza />
            <PeppPizza />
            <SupremePizza />
          </div>
      );
  }
}

class ChzPizza extends React.Component {
  render() {
    return(
      <div>
      <input type="checkbox" className="custom-control-input" id="choice_chz" />
      <label class="custom-control-label" for="choice_chz">Cheese</label>
      </div>
    );
  }
}

class PeppPizza extends React.Component {
  render() {
    return(
      <div>
        <input type="checkbox" class="custom-control-input" id="choice_pepp" />
        <label class="custom-control-label" for="choice_pepp">Pepperoni</label>
      </div>
    );
  }
}

class SupremePizza extends React.Component {
  render() {
    return(
      <div>
        <input type="checkbox" class="custom-control-input" id="choice_super" />
        <label class="custom-control-label" for="choice_super">Supreme</label>
      </div>
    );
  }
}

class ZipBox extends React.Component {
  render() {
      return(
      <div className="container">
          <label for="search_zip">Please Enter Zip Code:</label>
          <input className="zip_box" id="search_zip" type="text" />
          <button className="search_btn"id="search_btn" onclick={<FoundPizza />}>Search</button>
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