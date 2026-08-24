import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { db } from "./firebase.js";

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
            firstName,
            lastName,
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