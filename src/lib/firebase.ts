// src/lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  "projectId": "studio-2257244842-d3a86",
  "appId": "1:995647607914:web:23bb8d9fb33285b14ae613",
  "storageBucket": "studio-2257244842-d3a86.firebasestorage.app",
  "apiKey": "AIzaSyBUyn6hsyiuXMhld59EB7LEIIV1XptVJ_U",
  "authDomain": "studio-2257244842-d3a86.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "995647607914"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
