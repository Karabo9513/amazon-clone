import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBys5WLqAgdFr9ppNSqCUJERn6Ef8WSlAI",
    authDomain: "amzn-react-p.firebaseapp.com",
    projectId: "amzn-react-p",
    storageBucket: "amzn-react-p.appspot.com",
    messagingSenderId: "749001651405",
    appId: "1:749001651405:web:65f9eb0e179eeee2a4a584",
    measurementId: "G-NMDNP5R1B3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };