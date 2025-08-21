// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8XonOh_-ndqHTt-b2h6FNRYbbO5BW_ZA",
  authDomain: "netflixgpt-56639.firebaseapp.com",
  projectId: "netflixgpt-56639",
  storageBucket: "netflixgpt-56639.firebasestorage.app",
  messagingSenderId: "1060468428109",
  appId: "1:1060468428109:web:2091a5bcac3c69a145fb04",
  measurementId: "G-L1394CBK41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()