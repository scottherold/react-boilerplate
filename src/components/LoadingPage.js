// *** This file is the component that displays the gif when the page awaits the firebase connection *** //

// *** MODULES *** //
// ** npm Modules ** //
import React from 'react';

// *** FUNCTIONAL COMPONENT *** //
const LoadingPage = () => (
    <div className="loader">
        <img className="loader__image" src="/images/loader.gif" />
    </div>
);

// *** EXPORTS *** //
export default LoadingPage;