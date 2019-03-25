import React from 'react'
import './index.css'
import { Switch, Route } from 'react-router-dom'
import Order from './order'
import SignIn from './signIn'
import OrderPizza from './components/confirmOrder'
import CheckOut from './checkout'
import * as ROUTES from './constants/routes'
import { FirebaseContext, firebaseWrapper } from './firebase/context';
//import OrderHistory from './Order/OrderHistory'
import withAuthentication from './session/context'
import locationProvider from './Pizza/location'

class Main extends React.Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
                    <Route exact path={ROUTES.ORDER} component={Order} />
                    <Route exact path={ROUTES.CHECKOUT} Component={CheckOut} />
                    <Route exact path={ROUTES.CONFIRM_ORDER} component={OrderPizza} />
                    
                </Switch>
            </>
        );
    }
}

const wrappedMain = firebaseWrapper(Main);

export default locationProvider(wrappedMain); 