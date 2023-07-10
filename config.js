import firebase from "firebase";
import { initializeApp } from "firebase/app";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyBa8F6GScOxx53f5wj2qzb3VidtgEdKI-w",
  authDomain: "e-ride-project-5b710.firebaseapp.com",
  projectId: "e-ride-project-5b710",
  storageBucket: "e-ride-project-5b710.appspot.com",
  messagingSenderId: "766874073741",
  appId: "1:766874073741:web:860e3d627f4352eaf000c4"
};

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
