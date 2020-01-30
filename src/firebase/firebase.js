// *** This file contains the setup for Google Firebase realtime database *** //

// *** MODULES *** //
/*
/ The follow import syntax takes all the named exports and dumps them onto a single variable
/ This is done for imports that do not have a default export
*/
import * as firebase from'firebase';

// *** FIREBASE CONFIG *** //
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

// *** FIREBASE CONNECTION *** //
firebase.initializeApp(firebaseConfig);

// *** FIREBASE VARIRABLES *** //
const db = firebase.database();

// *** AUTH *** //
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// *** EXPORTS *** //
export { firebase, googleAuthProvider, db as default };
