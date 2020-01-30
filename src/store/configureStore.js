// *** This file generates the Redux Store (application state) by combing the reducers *** //

// *** MODULES *** //
// ** npm Modules ** //
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// ** app Modules ** //
import authReducer from '../reducers/auth';

// *** VARIABLE *** //
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // <-- sets variable for dev tools if present

// *** STORE *** //
// function to create store exported as default function
export default () => {
    /*
    / Using combine reducers makes the store into an object with key/value pairs
    / The values will be the state that is mutated by the reducers, which can be accessed through the parent store object
    */
    const store = createStore(
        // reducers manage state
        combineReducers({
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};
