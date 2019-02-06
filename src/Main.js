import React from 'react'
import './index.css'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import SignUp from './sign_up'
import OrderPizza from './order'
import Checkout from './checkout'

class Main extends React.Component {
    render() {
    return(
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/sign_up' component={SignUp} />
                <Route path='/order' component={OrderPizza} />
                <Route path='/checkout' Component={Checkout} />
            </Switch>
        </main>
    );
    }
}

export default Main; 