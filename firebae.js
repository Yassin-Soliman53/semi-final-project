// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI-MoNiKAk8I-wnXEUzPTFwujxVpRC5FI",
  authDomain: "semifinal-3b372.firebaseapp.com",
  projectId: "semifinal-3b372",
  storageBucket: "semifinal-3b372.firebasestorage.app",
  messagingSenderId: "705718818557",
  appId: "1:705718818557:web:b2ccd0d860ea0cf6485094",
  measurementId: "G-TZ7EJ1FX1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);