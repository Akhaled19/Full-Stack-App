import React, {Component, Fragment} from 'react';
import Form from '../Form';


class CreateCourse extends Component {

    state = {
        title: '',
        description: '',
        estimatedTime: '',
        materialsNeeded: '',
        errors: []
    }
    render() {
        const { 
            title,
            description,
            estimatedTime,
            materialsNeeded,
            errors,
        } = this.state;

        const {context} = this.props;
        const authUser = context.authenticatedUser;
        console.log('this the current user', authUser);

        return(
            <div className="bounds course--detail">
                <h1>Create Course</h1>
                <div>
                    <Form 
                        cancel={this.cancel}
                        errors={errors}   
                        submit={this.submit}
                        submitButtonText="Create Course"
                        elements={() => (
                            <Fragment>
                                <div className="grid-66">
                                    <div className="course--header">
                                        <h4 className="course--label">Course</h4>
                                        <div>
                                            <input 
                                                id="title" 
                                                name="title" 
                                                type="text" 
                                                className="input-title course--title--input" 
                                                placeholder="Course title..."
                                                value={title}
                                                onChange={this.change}
                                            />
                                        </div>
                                        <p>By {authUser.firstName} {authUser.lastName}</p>
                                    </div>
                                    <div className="course--description">
                                        <div>
                                            <textarea 
                                                id="description" 
                                                name="description" 
                                                placeholder="Course description..."
                                                value={description}
                                                onChange={this.change}
                                            />
                                        </div>
                                    </div>
                                </div>    
                                <div className="grid-25 grid-right">
                                    <div className="course--stats">
                                        <ul className="course--stats--list">
                                            <li className="course--stats--list--item">
                                                <h4>Estimated Time</h4>
                                                <div>
                                                    <input 
                                                        id="estimatedTime" 
                                                        name="estimatedTime" 
                                                        type="text" 
                                                        className="course--time--input"
                                                        placeholder="Hours" 
                                                        value={estimatedTime}
                                                        onChange={this.change}
                                                    />
                                                </div>
                                            </li>
                                            <li className="course--stats--list--item">
                                                <h4>Materials Needed</h4>
                                                <div>
                                                    <textarea 
                                                        id="materialsNeeded" 
                                                        name="materialsNeeded" 
                                                        placeholder="List materials..."
                                                        value={materialsNeeded}
                                                        onChange={this.change}
                                                    />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Fragment>
                        )}
                    />
                </div>>
            </div>    
        )
    }

    //update the input fileds 
    change = (event) => {
        const name = event.target.name;
        const value = event.target.value

        this.setState(() => {
            return {
                [name]: value
            }
        });
    }

    //create a course
    submit = () => {
       const {context} = this.props;
       //authenticated user info to be used for the new course entry  
       const {emailAddress} = context.authenticatedUser;
       const password = atob(context.authenticatedUser.password); //decoded password
       const userId = context.authenticatedUser.id;

       const {
           title,
           description,
           estimatedTime,
           materialsNeeded,
       } = this.state;

       
       //new payload will be sent to the API
        const course = {
            title,
            description,
            estimatedTime,
            materialsNeeded,
            userId,
        }

        /**
         * createCourse method sends request to the API using input course data and userAuth
         * @param{object} course - contains all course information to be submitted to API
         * @param{string} emailAddress - user email
         * @param{string} password - user decoded password
         */
        context.data.createCourse(course, emailAddress, password)
            .then(errors => {
                //check if there are any errors returned from the API
                if(errors.length){
                    console.log('errors list of creat course', errors);
                    this.setState({errors});

                //else pass the payload to the API    
                } else {
                    console.log(`SUCESS: ${course} is now passed in!`);
                    this.props.history.push('/');
                }
            })
            .catch(err => {
                console.error('Something went wrong', err);
                this.props.history.push('/error'); //push to history stack
            });

    }

    //Handle course submit cancelation
    cancel = () => {
        this.props.history.push('/') //push root to history stack
    }
} 
export default CreateCourse;