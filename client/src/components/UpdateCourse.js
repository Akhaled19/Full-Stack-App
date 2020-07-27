import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';


class UpdateCourse extends Component {

    render() {
        return(
            <Fragment>
                <h1>Update Course</h1>
                <div>
                    <form>
                        <div className="grid-66">
                            <div className="course--header">
                                <h4 className="course--label">Course</h4>
                                <div>
                                    <input 
                                        id=""
                                        name=""
                                        type=""
                                        className=""
                                        placeholder="Course title..."
                                        value=""
                                    required/>
                                    <p>Author Name</p>
                                </div>
                                <div className="course--description">
                                    <div>
                                        <textarea 
                                            id=""
                                            name=""
                                            className=""
                                            placeholder="Course description..."
                                            value=""
                                        required/>
                                    </div>
                                </div>
                                <div class="grid-25 grid-right">
                                    <div class="course--stats">
                                        <ul class="course--stats--list">
                                        //loop through the course details 
                                        <li class="course--stats--list--item">
                                        <h4>Estimated Time</h4>
                                        </li>
                                        </ul>   
                                    </div>
                                </div>         
                            </div>
                        </div>
                        <div className="grid-100 pad-bottom">
                            <NavLink></NavLink>
                        </div>
                    </form>
                </div>
            </Fragment>
        );
    }

} 
export default UpdateCourse;