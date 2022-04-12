import 'firebase/firestore';
import 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyD6fjjxIQUkD88g_FNL2ezUutP2qc1xEQE",
  authDomain: "journal-app-1caa3.firebaseapp.com",
  projectId: "journal-app-1caa3",
  storageBucket: "journal-app-1caa3.appspot.com",
  messagingSenderId: "930794164993",
  appId: "1:930794164993:web:e79d602d9ca34cd0d84100"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
 
const googleAuthProvider = new GoogleAuthProvider();
 
export{
    db,
    googleAuthProvider
}