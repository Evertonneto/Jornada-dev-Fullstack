
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb-Zbsicf3Mqp-WrgEvcWb06hhhl9xvW0",
  authDomain: "tiktok---jornada-fullsta-57aee.firebaseapp.com",
  projectId: "tiktok---jornada-fullsta-57aee",
  storageBucket: "tiktok---jornada-fullsta-57aee.appspot.com",
  messagingSenderId: "443108691575",
  appId: "1:443108691575:web:aec0b2c8f798fcc1ea8072"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;