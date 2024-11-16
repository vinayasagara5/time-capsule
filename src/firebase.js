import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCKHdRPEaub1s_rVgq0ivZ0f8lxTJN41gA",
    authDomain: "time-capusle.firebaseapp.com",
    projectId: "time-capusle",
    storageBucket: "time-capusle.firebasestorage.app",
    messagingSenderId: "551974973074",
    appId: "1:551974973074:web:33e8c2dfff4b768a56004b",
    measurementId: "G-G9SF7F0MV0"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
