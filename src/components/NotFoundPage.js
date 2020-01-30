// *** This file is the 404 page component *** //

// *** MODULES *** //
// ** npm Modules ** //
import React from 'react';
import { Link } from 'react-router-dom'

// *** FUNCTIONAL COMPONENT *** //
const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Go Home</Link>
    </div>
);

// *** EXPORTS *** //
export default NotFoundPage;