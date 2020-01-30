// *** This file contains the SPA routing for the React app *** //

// *** MODULES *** //
// ** npm Modules ** //
import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';

// ** Component Modules ** //
import DashboardPage from '../components/DashboardPage';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// *** HISTORY API CONFIG *** //
export const history = createHistory(); // <-- allows you to use the history used in your router in other files (app.js login logic)

// *** ROUTING *** //
const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} /> {/* <-- exact="true" to prevent the root from being displayed with other routes */}
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <PrivateRoute component={NotFoundPage} /> {/* <-- catch all for pages not present in the React-Router */}
            </Switch>
        </div>
    </Router>
);

// *** EXPORTS *** //
export default AppRouter;