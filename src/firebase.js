import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAq_fKyOBA7ANhwVmDJGWKFtGUC20XmZ1o",
    authDomain: "social-animals-88b4f.firebaseapp.com",
    databaseURL: "https://social-animals-88b4f.firebaseio.com",
    projectId: "social-animals-88b4f",
    storageBucket: "social-animals-88b4f.appspot.com",
    messagingSenderId: "631846232229"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
