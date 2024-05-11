// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClDIzfDkACePX1Lxj4kBjUltRP5QKacJg",
  authDomain: "internproject-5488a.firebaseapp.com",
  projectId: "internproject-5488a",
  storageBucket: "internproject-5488a.appspot.com",
  messagingSenderId: "563007370338",
  appId: "1:563007370338:web:b89d8d6e9718722f184d3b",
  measurementId: "G-3DDM0G9V5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;