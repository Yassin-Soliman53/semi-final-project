import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAI-MoNiKAk8I-wnXEUzPTFwujxVpRC5FI",
  authDomain: "semifinal-3b372.firebaseapp.com",
  projectId: "semifinal-3b372",
  storageBucket: "semifinal-3b372.firebasestorage.app",
  messagingSenderId: "705718818557",
  appId: "1:705718818557:web:b2ccd0d860ea0cf6485094",
  measurementId: "G-TZ7EJ1FX1V"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);