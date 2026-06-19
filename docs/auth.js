import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { 
  getAuth, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDPqF6iiONiN6WEGsv6GtyPDaPK8b_1ROc",
  authDomain: "collegequest-101dc.firebaseapp.com",
  projectId: "collegequest-101dc",
  storageBucket: "collegequest-101dc.appspot.com",
  messagingSenderId: "900326719034",
  appId: "1:900326719034:web:4a4b48ecfb2d927bfd7f03"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { 
  app, 
  db, 
  auth, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut 
};
