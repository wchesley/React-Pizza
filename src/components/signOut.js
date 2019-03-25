import React from 'react';

import { firebaseWrapper } from '../firebase/context';

const SignOutButton = ({ firebase }) => (
  <button className="btn-lg btn-outline-light" onClick={firebase.signOut}>
    Sign Out
  </button>
);

export default firebaseWrapper(SignOutButton);