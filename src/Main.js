import React from 'react'
import './index.css'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import sign_up from './sign_up'
import order from './order'
import checkout from './checkout'

class Main extends React.Component {
    render() {
    return(
        <main>
            <Switch>
                <Route path='/' component={Home}/>
                <Route path='/sign_up' component={sign_up} />
                <Route path='/order' component={order} />
                <Route path='/checkout' Component={checkout} />
            </Switch>
        </main>
    );
    }
}

export default Main; 