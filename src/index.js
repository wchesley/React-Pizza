import React from 'react';
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from '../firebase';

ReactDOM.render((
    <BrowserRouter>
        <FirebaseContext.Provicer value={new Firebase()}>
            <App />
        </FirebaseContext.Provicer>
    </BrowserRouter>),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
