import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

/**
 * Header is a statless function component 
 * and it displays the top menu bar for the application
 * and it includes a ternary authUser condition. The menu bar changes depending on the boolean value of authUser 
 * @param{object} context - give access to all props
 */
export default ({context}) => {
    const authUser = context.authenticatedUser;
    return(
        <div className="header">
            <div className="bounds">
                <h1 className="header--logo">Masar</h1>
                <nav>
                    {authUser ? 
                        <Fragment>
                            <span>Welcome, {authUser.firstName} {authUser.lastName}</span>
                            <Link className="signout" to='/signout'>Sign Out</Link>
                        </Fragment>
                    : 
                        <Fragment>
                            <Link className="signup" to='/signup'>Sign Up</Link>
                            <Link className="signin" to='/signin'>Sign In</Link>
                        </Fragment>
                    }
                </nav>
            </div>
        </div>
    ); 

}
