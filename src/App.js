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
import Header from './components/header'
import NavBar from './components/navBar'
import { FirebaseContext, firebaseWrapper } from './firebase/context';
import  locationProvider from './Pizza/location'
import withAuthentication from './session/authenticated';

const App = () =>
  <div>
    <NavBar />
    <Header />
    <div className="row justify-content-center">
      <div className="col-6 main_div">
        <Main />
      </div>
    </div>
  </div >



export default withAuthentication(locationProvider(App));

/*
feature list:
Logged in
  -track state of logged in logged out
  --Actually log in/log out
  -Can't order, can't look at history if not logged in.
  -loading places from here.com
  -
*/