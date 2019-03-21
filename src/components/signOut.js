import React from 'react';

import { firebaseWrapper } from '../firebase/context';

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    Sign Out
  </button>
);

export default firebaseWrapper(SignOutButton);