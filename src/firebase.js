import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBCWhEhDuyv-rGxfBMlwCIKgMytsPSRTaQ",
    authDomain: "first-flight-with-friend-f18ab.firebaseapp.com",
    databaseURL: "https://first-flight-with-friend-f18ab.firebaseio.com",
    projectId: "first-flight-with-friend-f18ab",
    storageBucket: "first-flight-with-friend-f18ab.appspot.com",
    messagingSenderId: "657005515326"
  };
  firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();