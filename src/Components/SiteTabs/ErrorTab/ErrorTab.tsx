import React from 'react';
import {Link} from 'react-router-dom';

const ErrorTab = () => {
    return (
        <div>
            404 Not Found
            <Link to="/"> Back to Homepage </Link>
        </div>
    );
};

export default ErrorTab;