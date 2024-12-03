// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";      // Authentication service
import { getFirestore } from "firebase/firestore"; // Firestore service
import { getStorage } from "firebase/storage";  // Storage service

// Your web app's Firebase configuration object from Firebase Console
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAgjGnxr81IVTfVDsydI5sEnOgVEueLUY",
  authDomain: "learningboxpro.firebaseapp.com",
  projectId: "learningboxpro",
  storageBucket: "learningboxpro.firebasestorage.app",
  messagingSenderId: "411057472007",
  appId: "1:411057472007:web:34ba8a0ee23fbb43f5e0a2",
  measurementId: "G-GTWT5L2D2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
