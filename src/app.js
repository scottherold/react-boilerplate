// *** Displays the components from the main page and manages application state *** //

// *** MODULES *** //
// ** npm Modules ** //
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css'; // <-- You must import the CSS when using react-dates

// ** App Modules ** //
import AppRouter, { history } from './routers/AppRouter'; // <-- history from the AppRouter file to maintain app history
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import './styles/styles.scss';
import {firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

// *** REDUX STORE *** //
const store = configureStore();

// *** COMPONENTS *** //
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

// *** RENDERING *** //
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.querySelector('#app'));
        hasRendered = true;
    }
};

// On startup, render while awaiting data from DB
ReactDOM.render(<LoadingPage />, document.querySelector('#app'));

// *** AUTHENTICATION *** //
// This funtion not only logs in the user, but renders and redirects the user based on login status
firebase.auth().onAuthStateChanged((user) => {
    // When authenticated in, get user's expenses, else user is returned to root route
    if (user) {
        store.dispatch(login(user.uid));
        renderApp();
        if (history.location.pathname === '/') {
                history.push('/dashboard');
        }
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});