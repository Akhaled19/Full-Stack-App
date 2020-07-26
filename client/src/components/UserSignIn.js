import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';

class UserSignIn extends Component {
    render() {
        return(
            <Fragment>
                <div class="bounds">
                    <div class="grid-33 centered signin">
                        <h1>Sign In</h1>
                        <div>
                            <form>
                                <div>
                                    <input 
                                        id="emailAddress" 
                                        name="emailAddress" 
                                        type="text" 
                                        className="" 
                                        placeholder="Email Address" 
                                        value="" 
                                    required/>
                                </div>
                                <div>
                                    <input 
                                        id="password" 
                                        name="password" 
                                        type="password" 
                                        className="" 
                                        placeholder="Password" 
                                        value="" 
                                    required/>
                                </div>
                                <div className="grid-100 pad-bottom">
                                    <button className="button" type="submit">Sign In</button>
                                    <button className="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button>
                                </div>
                            </form>
                        </div>
                        <p>&nbsp;</p>
                        <p>Don't have a user account? 
                            <NavLink to="sign-up.html">Click here</NavLink> to sign up!
                        </p>
                    </div>
                </div>
            </Fragment>
        )
    }

} 
export default UserSignIn;