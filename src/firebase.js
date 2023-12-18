// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOe83ic5pE8POtAD0gH8h-hqMISuCD6Wc",
  authDomain: "aesthetic-stuff-c2ba9.firebaseapp.com",
  projectId: "aesthetic-stuff-c2ba9",
  storageBucket: "aesthetic-stuff-c2ba9.appspot.com",
  messagingSenderId: "725548948101",
  appId: "1:725548948101:web:b32798f108662d89d7a7ec",
  measurementId: "G-3QEDS17F30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
