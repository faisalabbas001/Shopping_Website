
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCZX2rP8HJvysfbfvnAH-lqIJoV6uUblcI",
  authDomain: "website-a6c35.firebaseapp.com",
  projectId: "website-a6c35",
  storageBucket: "website-a6c35.appspot.com",
  messagingSenderId: "693885810377",
  appId: "1:693885810377:web:bc03f64e1a4cb4b32d3f18"
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;