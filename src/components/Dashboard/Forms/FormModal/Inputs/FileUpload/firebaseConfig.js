// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQG0G-HVpKx6LMVXSXzOesCZX23DczfI4",
    authDomain: "dvmxcel-conquest-24.firebaseapp.com",
    projectId: "dvmxcel-conquest-24",
    storageBucket: "dvmxcel-conquest-24.appspot.com",
    messagingSenderId: "418218235825",
    appId: "1:418218235825:web:0123c6534939c19caf8f90",
    measurementId: "G-B1KF3PCSQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageDB = getStorage(app)