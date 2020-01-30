// *** This file creates private routes to be used by the AppRouter *** //

// *** MODULES *** //
// ** npm Modules ** //
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// ** App Modules ** //
import Header from '../components/Header';

// *** FUNCTIONAL COMPONENT *** //
/*
/ The ...rest variable works with object destructuring
/ it allows for the 'rest' of the arguments to be passed into the the object where they are utilized
*/
export const PrivateRoute = ({ 
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    /*
    / Not only takes in the proper 'props' to generate the component, 
    / but also uses isAuthenticated and Component to render the proper component
    */
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props} />
            </div>
        ) : (
            <Redirect to ='/' />
        )
    )}/>
);

// *** REDUX STORE CONNECTION *** //
/*
/ connect allows you to connect the state, and apply it to your component (As chained function)
/ You can limit what access each component has to the state within the function
/ This applies the access to the chained component as props
*/
const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

// *** EXPORTS *** //
/*
/ Connection to props/Component chained to create connected component
/ ConnectedExpenseList exported as default component;
*/
export default connect(mapStateToProps)(PrivateRoute);