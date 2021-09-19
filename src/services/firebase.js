import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA3MxAcP6AIAUhNEkl2HBfUbfionHeoKFQ",
    authDomain: "firechat-b9959.firebaseapp.com",
    projectId: "firechat-b9959",
    storageBucket: "firechat-b9959.appspot.com",
    messagingSenderId: "1077878626441",
    appId: "1:1077878626441:web:2269a33a0575799c56ce58",
    measurementId: "G-BR16LTETFW"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const db = firebase.firestore();


  export default firebase;