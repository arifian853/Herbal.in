import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCd1TqBRlO3Fdd5j1jqayrybZhoYEBa8SQ",
  authDomain: "herbal-in.firebaseapp.com",
  projectId: "herbal-in",
  storageBucket: "herbal-in.appspot.com",
  messagingSenderId: "326198423800",
  appId: "1:326198423800:web:b7cb82a2da6888adde8b0d",
  measurementId: "G-ZY80BELZ5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export default app;