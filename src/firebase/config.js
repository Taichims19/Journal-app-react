// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnviroments } from "../helpers/getEnviroments";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
  VITE_MEASUREMENTID,
} = getEnviroments();

// console.log(process.env);
// console.log(import.meta.env);

// Your web app's Firebase configuration
//Dev/Prod
// const firebaseConfig = {
// apiKey: "AIzaSyAoGrITL2pYnaFGm8jv74msosDxVHNEtcc",
// authDomain: "react-curso-fernando-235e4.firebaseapp.com",
// projectId: "react-curso-fernando-235e4",
// storageBucket: "react-curso-fernando-235e4.appspot.com",
// messagingSenderId: "415624488657",
// appId: "1:415624488657:web:b9cdf3df677196dade87f0"
// };

//testing
// const firebaseConfig = {
//   apiKey: "AIzaSyCFBl_d6qRz5EK-e-vDBRnT4GwqhL_D5yU",
//   authDomain: "basetest-journalfernando.firebaseapp.com",
//   projectId: "basetest-journalfernando",
//   storageBucket: "basetest-journalfernando.appspot.com",
//   messagingSenderId: "157865319426",
//   appId: "1:157865319426:web:f64304f8612e017b4c1b1b",
//   measurementId: "G-TT6G0RPY92",
// };

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
  measurementId: VITE_MEASUREMENTID,
};

console.log(firebaseConfig);

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
//autentication
export const FireBaseAuth = getAuth(FirebaseApp);
//Config base data
export const FirebaseDB = getFirestore(FirebaseApp);
