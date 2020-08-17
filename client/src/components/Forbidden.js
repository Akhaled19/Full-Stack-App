import React from 'react';

/**
 * Forbidden is a statless function component 
 * and it displays a message letting the user know that they cannot access the requested page
 */
const Forbidden = () => {
    return(
        <div className="forbiddenPage">
            <h1>FORBIDDEN</h1>
            <p>Sorry! You are not authorized to see this page!</p>
        </div>
    );
}

export default Forbidden;