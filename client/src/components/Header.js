import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return(
        <div class="header">
            <div className="bounds">
                <h1 className="header--logo">Courses</h1>
                <nav>
                    <Link className="signup" to='/signup'>Sign Up</Link>
                    <Link className="signin" to='/signin'>Sign In</Link>
                </nav>
            </div>
        </div>
    ); 

}
export default Header;
