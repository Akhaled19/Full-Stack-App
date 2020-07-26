import React, {Component, Fragment} from 'react';

class UserSignUp extends Component {
    render() {
        return(
            <Fragment>
                <div class="bounds">
                    <div className="grid-33 centered signin">
                        <h1>Sign Up</h1>
                        <div>
                            <form>
                                <div>
                                    <input 
                                        id="firstName" 
                                        name="firstName" 
                                        type="text"    
                                        className="" 
                                        placeholder="First Name" 
                                        value=""
                                    required/>
                                </div>
                                <div>
                                    <input 
                                        id="lastName" 
                                        name="lastName" 
                                        type="text" 
                                        className="" 
                                        placeholder="Last Name" 
                                        value="" 
                                    required/>
                                </div>
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
                                <div>
                                    <input 
                                        id="confirmPassword" 
                                        name="confirmPassword" 
                                        type="password" 
                                        className="" 
                                        placeholder="Confirm Password"
                                        value="" 
                                    required/>
                                </div>
                                <div className="grid-100 pad-bottom">
                                    <button className="button" type="submit">Sign Up</button>
                                    <button className="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button>
                                </div>
                            </form>
                        </div>
                        <p>&nbsp;</p>
                        <p>Already have a user account? <a href="sign-in.html">Click here</a> to sign in!</p>
                    </div>
                </div>
          </Fragment>
        )
    }

} 
export default UserSignUp;