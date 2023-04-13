// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { initializeFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "mdwsa-ad24a.firebaseapp.com",
  projectId: "mdwsa-ad24a",
  storageBucket: "mdwsa-ad24a.appspot.com",
  messagingSenderId: "1069498439120",
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = initializeFirestore(app, { experimentalForceLongPolling: true })

export { auth, db }