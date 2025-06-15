// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo2qnWh1oDiO2754B27GMcO8fnTsuXXqg",
  authDomain: "ra-residantial.firebaseapp.com",
  projectId: "ra-residantial",
  storageBucket: "ra-residantial.firebasestorage.app",
  messagingSenderId: "983558636169",
  appId: "1:983558636169:web:28af9841ebf7be802e3c58",
  measurementId: "G-DQZGDJR9MY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;