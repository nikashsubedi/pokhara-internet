// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdVisNUaw1CQ9eeiOHPBwMUtOQl-t7X8M",
  authDomain: "pokhara-internet-123b7.firebaseapp.com",
  projectId: "pokhara-internet-123b7",
  storageBucket: "pokhara-internet-123b7.firebasestorage.app",
  messagingSenderId: "176081673359",
  appId: "1:176081673359:web:18d22964bbacf5ce5ea4fa",
  measurementId: "G-SVWWG1P1GW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics};