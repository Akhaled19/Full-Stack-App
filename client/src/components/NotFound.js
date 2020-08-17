import React from 'react';
import {Link} from 'react-router-dom';

/**
 * NotFound is a statless function component 
 * The route redirects to the /notfound path when there is 404 error HTTP status request 
 * and it displays a message letting user know that the request page cannot be found
 * and a button to return to the main page
 */
function NotFound() {
    return(
        <div className="bounds">
            <h1>Not Found</h1>
            <p>Sorry! We couldn't find the page you're looking for.</p>
            <Link className="button button-secondary" to="/">Return to the List</Link>  
      </div>
    )
}
export default NotFound;