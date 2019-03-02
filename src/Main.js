import React from 'react'
import './index.css'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import SignUp from './sign_up'
import OrderPizza from './order'
import CheckOut from './checkout'

class Main extends React.Component {
    render() {
    return(
        <main>
            <Switch>
                <Route exact path='/' component={SignUp}/>
                <Route path='/sign_up' component={SignUp} />
                <Route path='/checkout' Component={CheckOut} />
                <Route path='/order' component={OrderPizza} />
            </Switch>
        </main>
    );
    }
}

export default Main; 