// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI7uaJef4MOeFKW5LS53AvGH2ISYLtm0s",
  authDomain: "netflixgpt-5899c.firebaseapp.com",
  projectId: "netflixgpt-5899c",
  storageBucket: "netflixgpt-5899c.firebasestorage.app",
  messagingSenderId: "48820846501",
  appId: "1:48820846501:web:f63e4efc6c5ec02dd4f24c",
  measurementId: "G-HJGZS6R3GV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();