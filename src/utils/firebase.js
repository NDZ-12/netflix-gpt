// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFeYq7b5yX9yAyvrf9T3BmY_J0tBIyzOU",
  authDomain: "netflixgpt-39be5.firebaseapp.com",
  projectId: "netflixgpt-39be5",
  storageBucket: "netflixgpt-39be5.appspot.com",
  messagingSenderId: "318900008192",
  appId: "1:318900008192:web:dfa69ea1dab0f2e2d92fe5",
  measurementId: "G-DS5PRXTYZL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
