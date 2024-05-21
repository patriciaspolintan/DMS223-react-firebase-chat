// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "dms223finalproj.firebaseapp.com",
    projectId: "dms223finalproj",
    storageBucket: "dms223finalproj.appspot.com",
    messagingSenderId: "17184429018",
    appId: "1:17184429018:web:dd942c6c1a0c8cc6c526e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()