// *** This file is the Header component *** //

// *** MODULES *** //
// ** npm Modules ** //
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// ** App Modules ** //
import { startLogout } from '../actions/auth';

// *** FUNCTIONAL COMPONENT *** //
export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1>Boilerplate</h1>
                </Link>{/* <-- exact="true" to prevent the root from being displayed with other routes */}
                <button className="button button--link" onClick={startLogout}>Logout</button>
            </div>
        </div>
    </header>
);

// *** REDUX STORE CONNECTION *** //
/*
/ This allows you to abstract out dispatches to the Store, by calling the function as the second argument in the connect function
/ The reason for this abstraction is that the component is much easier to test
*/
const mapDispatchToProps = (dispatch) => ({ startLogout: () => dispatch(startLogout()) });

// *** EXPORTS *** //
/*
/ Connect used here without mapping the state to props for access to the dispatch prop
/ AddExpensePage exported as default component;
*/
export default connect(undefined, mapDispatchToProps)(Header);