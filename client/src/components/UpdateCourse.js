import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Form from '../Form';

class UpdateCourse extends Component {

    state={
        course:{},
        user:{},
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

        context.data.getCourse(id)
        .then(response => {
            if(response) {
                console.log('user owner info', response);
                this.setState({
                    course: response.course,
                    title: response.course.title,
                    description: response.course.description,
                    estimatedTime: response.course.estimatedTime,
                    materialsNeeded: response.course.materialsNeeded,
                    user: response.course.userInfo,
                });
            }else {
                throw new Error();
            }
        })
        .catch(err => {
            console.error(err);
            this.props.history.push('/error');
        });
     }

    render() {
        const {
            course,
            user,
            title,
            description,
            estimatedTime,
            materialsNeeded,
            errors 
        } = this.state;
        const {context} = this.props;
        const authUser = context.authenticatedUser;
        console.log(authUser.id === course.userId);
        console.log('the course owner id',user.id);
        console.log('the current authorized user id',authUser.id);

        return(
            
            // { authUser.id === user.id ?
            //<Fragment>
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
            //</Fragment>
            // :
            //     <Fragment>
                    
            //     </Fragment>
            // }  
        );
    }

    //update the input fileds 
    change = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        //update the value
        this.setState(() => {
            return{
                [name]: value 
            }
        });
    }

    //update the course
    submit = () => {

    }

    //Handle course update cancelation 
    cancel = () => {
        const {course} = this.state;
        //push curent course details route to history stack
        this.props.history.push(`/courses/${course.id}`); 
    }
} 
export default UpdateCourse;