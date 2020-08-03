import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Form from '../Form';

export default class UserSignUp extends Component {
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
            <div className="bounds">
                <div className="grid-33 centered signin">
                    <h1>Sign Up</h1>
                    <Form 
                        cancel={this.cancel}
                        errors={errors}
                        submit={this.submit}
                        submitButtonText="Sign Up"
                        elements={()=> (
                            <React.Fragment>
                                <input 
                                    id="firstName" 
                                    name="firstName" 
                                    type="text"    
                                    className="" 
                                    placeholder="First Name" 
                                    value={firstName}
                                    onChange={this.change}
                                />
                                <input 
                                    id="lastName" 
                                    name="lastName" 
                                    type="text" 
                                    className="" 
                                    placeholder="Last Name" 
                                    value={lastName}
                                    onChange={this.change}
                                />
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
                                <input 
                                    id="confirmPassword" 
                                    name="confirmPassword" 
                                    type="password" 
                                    className="" 
                                    placeholder="Confirm Password"
                                    value={confirmPassword} 
                                    onChange={this.change}
                                />
                            </React.Fragment> 
                        )}   
                    />
                    <p>&nbsp;</p>
                    <p>Already have a user account? <Link to="/signin">Click here</Link> to sign in!</p>
                </div>
            </div>
        )
    }

    //update the input fields
    change = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState(() => {
            return {
                [name]: value
            }
        });
    } 

    //create a user
    submit = () => {
        const { context } = this.props;

        const {
            firstName,
            lastName,
            emailAddress,
            password,
            confirmPassword,
        } = this.state

        //new payload
        const user = {
            firstName,
            lastName,
            emailAddress,
            password,
            confirmPassword,
        };
        context.data.createUser(user)
            .then(errors => {
                if(errors.length) {
                    this.setState({errors});
                }
                else {
                    console.log('success');
                    context.actions.signIn(emailAddress, password)
                    //redirect the user back to the page they were trying to access once they’re authenticated 
                    .then(this.props.history.push('/'))
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