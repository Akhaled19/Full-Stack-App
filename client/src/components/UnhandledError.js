import React from 'react';
import {Link} from 'react-router-dom';

/**
 * Error is a statless function component 
 * The route redirects to the /error path when there is 500 internal server HTTP status request 
 * and it displays a message letting user know that an unexpected error has occurred
 */
const Error = () => {
    return (
        <div>
            <h1>ERROR</h1>
            <p>Sorry! Looks like there was an error</p>
            <Link className="button button-secondary" to="/">Return to the List</Link>  
        </div>
    );
}
export default Error;