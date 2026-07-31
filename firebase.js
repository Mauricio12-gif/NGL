// Firebase configuration

import { initializeApp } from 
"https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";


import { getFirestore } from 
"https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";



import { getAuth } from 
"https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";




// Replace these details with your Firebase project details

const firebaseConfig = {

    apiKey: "YOUR_API_KEY",

    authDomain: "YOUR_PROJECT.firebaseapp.com",

    projectId: "YOUR_PROJECT_ID",

    storageBucket: "YOUR_PROJECT.appspot.com",

    messagingSenderId: "YOUR_SENDER_ID",

    appId: "YOUR_APP_ID"

};




// Initialize Firebase

const app = initializeApp(firebaseConfig);



// Database

const db = getFirestore(app);



// Authentication

const auth = getAuth(app);



// Export for script.js

export {
    db,
    auth
};
