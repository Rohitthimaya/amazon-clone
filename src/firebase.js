import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwpjV8Lm_YdzMqTypum-K0PhTN9ovUgqk",
  authDomain: "clone-b0f4c.firebaseapp.com",
  databaseURL: "https://clone-b0f4c.firebaseio.com",
  projectId: "clone-b0f4c",
  storageBucket: "clone-b0f4c.appspot.com",
  messagingSenderId: "345163093757",
  appId: "1:345163093757:web:1daa47d0578261a68b1094",
  measurementId: "G-PGH6F71S5K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };