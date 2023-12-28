// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-40cd8.firebaseapp.com",
  projectId: "blog-40cd8",
  storageBucket: "blog-40cd8.appspot.com",
  messagingSenderId: "854402135700",
  appId: "1:854402135700:web:d5085c95cb1e429abee681",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
