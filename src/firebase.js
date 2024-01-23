// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjxyfHpa5lqp9lccI_9uPvSiRhzeY38-0",
  authDomain: "finance-app-9ddce.firebaseapp.com",
  projectId: "finance-app-9ddce",
  storageBucket: "finance-app-9ddce.appspot.com",
  messagingSenderId: "459310481281",
  appId: "1:459310481281:web:0c4f23ca0a906224f3b280",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
