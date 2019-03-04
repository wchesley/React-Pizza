/****************************************
  TODO:
    pizza's displayed as "cards"
      -Update image file with unique ones foreach pizza type
    Data Handling
    Checkout page
      -Cannot dispay atm, ref: ISSUE: #1 https://github.com/wchesley/React-Pizza/issues/1 

***************************************/

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import Main from './Main'
import { FirebaseContext, firebaseWrapper } from './firebase/context';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Header />
        <div className="row justify-content-center">
          <div className="col-6 main_div">
          <Main />
          </div>
        </div>
      </div >
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

//const wrappedApp = firebaseWrapper(App);

export default App;