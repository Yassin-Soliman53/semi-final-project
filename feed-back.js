// Import Firebase SDK modules directly via CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Your web app's Firebase configuration
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
const db = getFirestore(app);
const form = document.getElementById("feedbackForm");
const submitBtn = document.getElementById("submitBtn");
form.addEventListener("submit", async (e) => {
    e.preventDefault(); 
    submitBtn.disabled = true;
    submitBtn.innerText = "Submitting...";
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const feedbackText = document.getElementById("feedback").value;

    try {
        const docRef = await addDoc(collection(db, "feedbacks"), {
            firstName: firstName,
            lastName: lastName,
            feedback: feedbackText,
            createdAt: serverTimestamp()
        });
        console.log("Data successfully written to Firestore with ID: ", docRef.id);
        alert("Feedback submitted successfully!");
        form.reset();
    } catch (error) {
        console.error("Error submitting feedback to Firestore: ", error);
        alert("Failed to send feedback: " + error.message);
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = "Submit Rating";
    }
});
