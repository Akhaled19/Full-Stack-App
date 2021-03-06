import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import Form from '../Form';


/**
 * Render the sign in page
 */
class UserSignIn extends Component {
    state = {
        emailAddress: '',
        password: '',
        errors: []
    };

    render() {
        const {
            emailAddress,
            password,
            errors,
        } = this.state;

        return(
            <Fragment>
                <div className="bounds">
                    <div className="grid-33 centered signin">
                        <h1>Sign In</h1>
                        <Form
                            cancel={this.cancel}
                            errors={errors}
                            submit={this.submit}
                            submitButtonText="Sign In"
                            elements={() => (
                                <Fragment>
                                    <input 
                                        id="emailAddress" 
                                        name="emailAddress" 
                                        type="text" 
                                        className="" 
                                        placeholder="Email Address" 
                                        value={emailAddress}
                                        onChange={this.change}
                                    />
                                    <input 
                                        id="password" 
                                        name="password" 
                                        type="password" 
                                        className="" 
                                        placeholder="Password" 
                                        value={password} 
                                        onChange={this.change}
                                    />
                                </Fragment>  
                            )}      
                        />
                        <p>&nbsp;</p>
                        <p>Don't have a user account? 
                            <NavLink to="/signup">Click here</NavLink> to sign up!
                        </p>
                    </div>
                </div>
            </Fragment>
        )
    }

    //update the input fields
    change = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        //update the value
        this.setState(() => {
            return {
                [name]: value
            }
        });
    } 

    //create a user
    submit = () => {
        const { context } = this.props;
        //holds the last accesed route 
        const {from} = this.props.location.state || {from: { pathname: '/'} };
        //destructure the states
        const {
            emailAddress,
            password,
        } = this.state

    
        context.actions.signIn(emailAddress, password)
            .then(user => {
                console.log('User:', user);
                if(user === null ) {
                    this.setState({errors:[ {message: 'Sign-in was unsuccessful.'} ]});
                }
                else {
                    this.props.history.push(from);
                    console.log(`success: ${emailAddress} is now signed in!`)
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
export default UserSignIn;