# OAuth Authentication

Authentication > WEB SETUP

```js
// firebase.js
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD7gX2lL0aQ3-xqKzmHt6DAOPsa_Devymc",
  authDomain: "lunch-rush-c4626.firebaseapp.com",
  databaseURL: "https://lunch-rush-c4626.firebaseio.com",
  projectId: "lunch-rush-c4626",
  storageBucket: "lunch-rush-c4626.appspot.com",
  messagingSenderId: "1079065472770"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
```

```js
// signin
import React, { Component } from 'react';
import { auth, googleAuthProvider } from './firebase';

class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">
          <button onClick={ function () { return auth.signInWithPopup(googleAuthProvider)} }>
            Sign In
          </button>
      </div>
    );
  }
}

export default SignIn;
```