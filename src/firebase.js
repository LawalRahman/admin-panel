// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "admin-app-93814.firebaseapp.com",
  projectId: "admin-app-93814",
  storageBucket: "admin-app-93814.appspot.com",
  messagingSenderId: "364836635625",
  appId: "1:364836635625:web:5a2c50bc092ec3640a8178",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
