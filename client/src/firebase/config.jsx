// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKYh2UNsXMd-0bcBWylCn5fNUABrTzFzU",
  authDomain: "notepad-3f6a6.firebaseapp.com",
  projectId: "notepad-3f6a6",
  storageBucket: "notepad-3f6a6.appspot.com",
  messagingSenderId: "811745479876",
  appId: "1:811745479876:web:6b5a57e579202fb4878d91",
  measurementId: "G-8RG689M0MW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);