import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtipTm53hUhf-Ho8H8pUXK2145yO_LFuA",
  authDomain: "elbay-a3a34.firebaseapp.com",
  projectId: "elbay-a3a34",
  storageBucket: "elbay-a3a34.appspot.com",
  messagingSenderId: "946982975561",
  appId: "1:946982975561:web:0965f9b9ecf899549aa798",
  measurementId: "G-5N1658MRWK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
