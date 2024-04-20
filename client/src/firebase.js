// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bughunt-blog.firebaseapp.com",
  projectId: "bughunt-blog",
  storageBucket: "bughunt-blog.appspot.com",
  messagingSenderId: "301135720229",
  appId: "1:301135720229:web:13bcde0e03f6c569ce34cc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
