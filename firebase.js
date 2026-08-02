// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAdxVWfSb5it6nS9neFtJRDAHtuMWiovck",
  authDomain: "tiprasa-smm-panel.firebaseapp.com",
  projectId: "tiprasa-smm-panel",
  storageBucket: "tiprasa-smm-panel.firebasestorage.app",
  messagingSenderId: "667620321290",
  appId: "1:667620321290:web:41fedc1e1030524d3297f3",
  measurementId: "G-V6MGBYWDG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

console.log("✅ Firebase Connected Successfully");
