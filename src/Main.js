import React from 'react'
import './index.css'
import { Switch, Route } from 'react-router-dom'
import Order from './order'
import SignIn from './signIn'
import OrderPizza from './components/confirmOrder'
import CheckOut from './checkout'
import { FirebaseContext, firebaseWrapper } from './firebase/context';
import withAuthentication from './session/context'

class Main extends React.Component {
    render() {
    return(
        <>
            <Switch>
                <Route exact path='/' component={SignIn}/>
                <Route path='/order' component={Order} />
                <Route path='/checkout' Component={CheckOut} />
                <Route path='/confirm_order' component={OrderPizza} />
            </Switch>
        </>
    );
    }
}

const wrappedMain = firebaseWrapper(Main);

export default wrappedMain; 