// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6_oixUStElJs_zM_KFeIMPGVfDkERp4A",
    authDomain: "online-shoping-307ce.firebaseapp.com",
    projectId: "online-shoping-307ce",
    storageBucket: "online-shoping-307ce.firebasestorage.app",
    messagingSenderId: "324052131576",
    appId: "1:324052131576:web:66d3df5f0e3f85dd4b650d",
    measurementId: "G-PZBHGTF8FF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
