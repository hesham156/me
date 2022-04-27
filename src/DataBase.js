import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCt1Q63RK_MOZGx0k3cZFiLns1W1W2TsiU",
  authDomain: "clothes-da47d.firebaseapp.com",
  projectId: "clothes-da47d",
  storageBucket: "clothes-da47d.appspot.com",
  messagingSenderId: "103726673847",
  appId: "1:103726673847:web:3512e1229cec9f8bc08232",
  measurementId: "G-KYM6L0BP1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db