
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhaFdosUfBFHeTQgRxSAra5RFHR5iSkiA",
  authDomain: "jornada-full-stack.firebaseapp.com",
  projectId: "jornada-full-stack",
  storageBucket: "jornada-full-stack.appspot.com",
  messagingSenderId: "376545347081",
  appId: "1:376545347081:web:01263d5fdbd6acb44ddad8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;