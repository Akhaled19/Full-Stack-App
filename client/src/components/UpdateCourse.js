import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Form from '../Form';

class UpdateCourse extends Component {

    state={
        // course:{},
        user:{},
        id:'',
        title: '',
        description: '',
        estimatedTime: '',
        materialsNeeded: '',
        errors:[] 
    }
    

    /**
     * At componentDidMount the createCourse() method is called from context.
     * State property 'course' is set using the data returned from updateCourse().
     * Errors are caught and logged using catch() and the user is returned to the '/error' endpoint
     */

     componentDidMount() {
        const {context} = this.props;
        const {id} = this.props.match.params;
        const {authenticatedUser} = context

        context.data.getCourse(id)
                    .then(response => {
                        const user = response.course.userInfo;
                        if(response) {
                            if(authenticatedUser.id === user.id) {
                                this.setState({
                                    // course: response.course,
                                    id: response.course.id,
                                    title: response.course.title,
                                    description: response.course.description,
                                    estimatedTime: response.course.estimatedTime,
                                    materialsNeeded: response.course.materialsNeeded,
                                    user: response.course.userInfo,
                                });
                            }else {
                                console.log('the course owner id',user.id);
                                console.log('the current authorized user id',authenticatedUser.id);
                                this.props.history.push('/forbident'); //change to forbidden 
                            }
                        }else {
                            this.props.history.push('/notfound');
                        }
                    })
                    .catch(err => {
                        console.error(err);
                        this.props.history.push('/error');
                    });
    }                
    render() {
        const {
            user,
            title,
            description,
            estimatedTime,
            materialsNeeded,
            errors 
        } = this.state;

        return(    
            <div className="bounds course--detail">
                <h1>Update Course</h1>
                <div>
                    <Form
                        cancel={this.cancel}
                        errors={errors}
                        submit={this.submit}
                        submitButtonText="Update Course"
                        elements={()=> (
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
                                        <p>By {user.firstName} {user.lastName}</p>
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
                                                        placeholder="Hours..."
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
                                                        placeholder="List materials"
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
                </div>
            </div> 
        );
    }

    //update the input fileds 
    change = (event) => {
        const {name} = event.target;
        const {value} = event.target;

        //update the value
        this.setState(() => {
            return{
                [name]: value 
            }
        });
    }

    //update the course
    submit = () => {
        const {context} = this.props;
        //const userId = context.authenticatedUser.id; 

        //destructure 
        const {
            id,
            title,
            description,
            estimatedTime,
            materialsNeeded,
            user
        } = this.state;
        
        //updated playload will be sent to the API
        const course = {
            id,
            title,
            description,
            estimatedTime,
            materialsNeeded,
            user
        }

        //user credentials 
        const {emailAddress} = context.authenticatedUser;
        const password = atob(context.authenticatedUser.password); //decoded password

        /**
         * updateCourse methods sends PUT request to the API using input course data and userAuth
         * @param{object} course - contains all course information to be submitted to API
         * @param{string} emailAddress - user email
         * @param{string} password - user decoded password
         */
        context.data.updateCourse(course, emailAddress, password)
            .then( errors => {
                //check if there are any errors returned from the API 
                if(errors.length){
                    console.log('errors list of update course', errors);
                    this.setState({errors});
                
                //else pass the payload to the API    
                } else {
                    console.log(`SUCCESS: ${course} is now updated!`);
                    this.props.history.push(`/courses/${course.id}`);
                }
            })
            .catch( err => {
                console.log(err);
                this.props.history.push('/error');
            });
    }

    //Handle course update cancelation 
    cancel = () => {
        const {id} = this.state;
        //push curent course details route to history stack
        this.props.history.push(`/courses/${id}`); 
    }
} 
export default UpdateCourse;