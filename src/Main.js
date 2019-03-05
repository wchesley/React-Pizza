import React from 'react'
import './index.css'
import { Switch, Route } from 'react-router-dom'
import Order from './order'
import SignUp from './sign_up'
import OrderPizza from './confirmOrder'
import CheckOut from './checkout'
import { FirebaseContext, firebaseWrapper } from './firebase/context';


class Main extends React.Component {
    render() {
    return(
        <main>
            <Switch>
                <Route exact path='/' component={Order}/>
                <Route path='/order' component={SignUp} />
                <Route path='/checkout' Component={CheckOut} />
                <Route path='/confirm_order' component={OrderPizza} />
            </Switch>
        </main>
    );
    }
}

//const wrappedMain = firebaseWrapper(Main);

export default Main; 