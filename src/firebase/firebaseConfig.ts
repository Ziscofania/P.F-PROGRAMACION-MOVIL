// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe6GrqKmL9IuHlZ2pRCGnxOY7Yh6mgpUc",
  authDomain: "makepizza-5531b.firebaseapp.com",
  projectId: "makepizza-5531b",
  storageBucket: "makepizza-5531b.firebasestorage.app",
  messagingSenderId: "140488953841",
  appId: "1:140488953841:web:3f4feb71e23c98b156fe50",
  measurementId: "G-79CL7HNX71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);