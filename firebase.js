// ======================================
// TRUSTED DC SELLER V7
// FIREBASE CONFIG
// ======================================

// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
sendPasswordResetEmail,
signOut,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";


// ======================================
// PASTE YOUR FIREBASE CONFIG HERE
// ======================================

const firebaseConfig = {

apiKey: "YOUR_API_KEY",

authDomain: "YOUR_PROJECT.firebaseapp.com",

projectId: "YOUR_PROJECT_ID",

storageBucket: "YOUR_PROJECT.appspot.com",

messagingSenderId: "XXXXXXXX",

appId: "XXXXXXXX"

};


// ======================================

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
auth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
sendPasswordResetEmail,
signOut,
onAuthStateChanged
};
