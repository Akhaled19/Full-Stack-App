import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

class UserSignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        confirmPassword: '',
        errors: [],     
    }

    render() {
        const {
            firstName,
            lastName,
            emailAddress,
            password,
            confirmPassword,
            errors, 
        } = this.state;
        
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
                        <p>Already have a user account? <Link to="/signin">Click here</Link> to sign in!</p>
                    </div>
                </div>
          </Fragment>
        )
    }

    //create a user
    submit = () => {
        const { context } = this.props;

        //new payload
        const user = {
            firstName,
            lastName,
            emailAddress,
            password,
            confirmPassword
        };
        context.data.createUser(user)
            .then(errors => {
                if(errors.length) {
                    this.setState({errors});
                }
                else {
                    console.log('success');
                }
            })
            .catch( err => { //handle rejected promise
                console.log(err);
                this.props.history.push('/error'); //push error path to history stack
            })
    };

    //when a user cancel registration
    cancel = () => {
        this.props.history.push('/') //push root path to history stack
    };

} 
export default UserSignUp;