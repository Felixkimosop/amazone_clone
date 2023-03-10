// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA6vPer8r2MJdBnBBhfTl39bcY-dsRcBYU",
  authDomain: "clone-b9528.firebaseapp.com",
  projectId: "clone-b9528",
  storageBucket: "clone-b9528.appspot.com",
  messagingSenderId: "239795807618",
  appId: "1:239795807618:web:6d7a036c212e43a84f9b9b",
  measurementId: "G-LM4D7JWS0B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db,auth};
