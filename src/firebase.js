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
