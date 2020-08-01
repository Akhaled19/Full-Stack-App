import React,{Fragment} from 'react';
import {Link, Fragment} from 'react-router-dom';

function Header({context}) {
    const authUser = context.authenticatedUser;
    return(
        <div className="header">
            <div className="bounds">
                <h1 className="header--logo">Courses</h1>
                <nav>
                    {authUser ? (
                        <Fragment>
                            <span>Welcome, {authUser.firstName} {authUser.lastName}</span>
                            <Link className="signout" to='/signout'>Sign Out</Link>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Link className="signup" to='/signup'>Sign Up</Link>
                            <Link className="signin" to='/signin'>Sign In</Link>
                        </Fragment>
                    )}
                </nav>
            </div>
        </div>
    ); 

}
export default Header;
