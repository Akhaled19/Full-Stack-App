import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Form from '../Form';

class UpdateCourse extends Component {

    state={
        title: '',
        description: '',
        estimatedTime: '',
        materialsNeeded: '',
        errors:[] 
    }

    render() {
        const {
            title,
            description,
            estimatedTime,
            materialsNeeded,
            errors 
        } = this.state;

        const {context} = this.props;
        const authUser = context.authenticatedUser;
        Console.log('This the current user', authUser);
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
                                        <p>Author Name</p>
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
        //push curent course details route to history stack
        this.props.history.push(`/courses/${course.id}`); 
    }
} 
export default UpdateCourse;