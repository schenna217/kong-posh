// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4UoWX6VnnhPxPQgf4fgrzKhD00WaT8Gc",
  authDomain: "kong-posh.firebaseapp.com",
  projectId: "kong-posh",
  storageBucket: "kong-posh.appspot.com",
  messagingSenderId: "209742470577",
  appId: "1:209742470577:web:7358a50e239fabc700f190"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();