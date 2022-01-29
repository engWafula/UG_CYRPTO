// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbDxDiP5N9nWU-uSQlNHOgrXW17rswx1k",
  authDomain: "ug-crypto.firebaseapp.com",
  projectId: "ug-crypto",
  storageBucket: "ug-crypto.appspot.com",
  messagingSenderId: "245068975727",
  appId: "1:245068975727:web:4465b77d08fb8f62ec879a",
  measurementId: "G-XBKE8WFDQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);