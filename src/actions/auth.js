// *** This file contains logic for login/authentication *** //

// *** MODULES *** //
// ** App Modules ** //
import { firebase, googleAuthProvider } from '../firebase/firebase';

// *** ACTION GENERATORS *** //
export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const logout = () => ({
    type: 'LOGOUT'
});

// *** ASYNC ACTIONS FIREBASE *** //
export const startLogin = () => {
    return () => {
        // firebase promise -- return as thunk
        return firebase.auth().signInWithPopup(googleAuthProvider); // <-- uses OAuth with the google popup to authenticate user when 'Login' button clicked
    };
};

export const startLogout = () => {
    return () => {
        // firebase promise -- return as thunk
        return firebase.auth().signOut(); // <-- no arguments necessary for logout
    }
}