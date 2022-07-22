// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpP2ccYtuVZO8POtAnME9ijPci40kro1E",
    authDomain: "family-mart-a1caf.firebaseapp.com",
    projectId: "family-mart-a1caf",
    storageBucket: "family-mart-a1caf.appspot.com",
    messagingSenderId: "721457275455",
    appId: "1:721457275455:web:57aa2c2bffc19744e4ce8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;