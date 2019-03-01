import React from 'react.js';

const FirebaseContext = React.createContext(null);

//wrap firebase for later reuse:
//firebase only supposed to initialized once
export const firebaseWrapper = Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase}/>}
    </FirebaseContext.Consumer>
);

export { FirebaseContext }; 