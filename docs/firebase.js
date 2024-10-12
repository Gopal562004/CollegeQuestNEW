// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, updateProfile } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPqF6iiONiN6WEGsv6GtyPDaPK8b_1ROc",
  authDomain: "collegequest-101dc.firebaseapp.com",
  databaseURL: "https://collegequest-101dc-default-rtdb.firebaseio.com",
  projectId: "collegequest-101dc",
  storageBucket: "collegequest-101dc.appspot.com",
  messagingSenderId: "900326719034",
  appId: "1:900326719034:web:4a4b48ecfb2d927bfd7f03",
  measurementId: "G-BY25JWXVWJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app); // For saving additional info in Realtime Database

export { auth, db };
