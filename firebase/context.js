import React from 'react.js';
import { ReactComponent } from '*.svg';

const FirebaseContext = React.createContext(null);

//wrapp firebase for later reuse:
export const firebaseWrapper = Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase}/>}
    </FirebaseContext.Consumer>
);

export { FirebaseContext }; 