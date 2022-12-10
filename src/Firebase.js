// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import App from "./App";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPE73KQm_xqs5XW-x7Sb1JRMAn0MzHbiE",
  authDomain: "icarusp1.firebaseapp.com",
  projectId: "icarusp1",
  storageBucket: "icarusp1.appspot.com",
  messagingSenderId: "726790219632",
  appId: "1:726790219632:web:4948fcf5e5aadaa41511b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirebase(app)