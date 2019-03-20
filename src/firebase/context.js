import React from 'react';

const FirebaseContext = React.createContext(null);

//wrap firebase for later reuse:
//firebase only supposed to initialized once
export const firebaseWrapper = Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase}/>}
    </FirebaseContext.Consumer>
);

export default FirebaseContext; 