// *** This file is the login page component *** //

// *** MODULES *** //
// ** npm Modules ** //
import React from 'react';
import { connect } from 'react-redux';

// ** App Modules ** //
import { startLogin } from '../actions/auth';

// *** FUNCTIONAL COMPONENT *** //
export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Boilerplate</h1>
            <p>Tagline for app.</p>
            <button className="button" onClick={startLogin}>Login with Google</button> {/* Calls Google OAuth on click */}
        </div>
    </div>
);

// *** REDUX STORE CONNECTION *** //
/*
/ This allows you to abstract out dispatches to the Store, by calling the function as the second argument in the connect function
/ The reason for this abstraction is that the component is much easier to test
*/
const mapDispatchToProps = (dispatch) => ({ startLogin: () => dispatch(startLogin()) });

// *** EXPORTS *** //
/*
/ Connect used here without mapping the state to props for access to the dispatch prop
/ AddExpensePage exported as default component;
*/
export default connect(undefined, mapDispatchToProps)(LoginPage);