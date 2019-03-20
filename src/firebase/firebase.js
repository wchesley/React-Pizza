import app from 'firebase/app';
import 'firebase/auth';
const config = {
    apiKey: process.env.REACT_APP_FIREBASE_apiKey,
    authDomain: process.env.REACT_APP_FIREBASE_authDomain,
    databaseURL: process.env.REACT_APP_FIREBASE_databaseURL,
    projectId: process.env.REACT_APP_FIREBASE_projectId,
    storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
    messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }


createUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

signIn = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

signOut = () => this.auth.signOut();

passwordReset = email => this.auth.sendPasswordRestEmail(email);

passwordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}
export default Firebase; 