import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom'

class CourseDetails extends Component {
    state={
        course: {},
    }

    /**
     * At componentDidMount the getCourse() method is called from context.
     * State property 'course' is set using the data returned from getCourse().
     * Errors are caught and logged using catch() and the user is routed to the '/error' endpoint 
    */
    componentDidMount() {
        const {context} = this.props;
        context.data.getCourse()
        .then(response => {
            console.log(response.course);
        })
        .catch(err => {
            console.error(err);
            this.props.history.push('/error');
        })
    }

    render() {
        const {course} = this.state;
        return(
            <Fragment>
                <div className="actions--bar">
                    <div className="bounds">
                        <div className="grid-100">
                            <span>
                                <button className="button" to="">Update Course</button>
                                <button className="button" to="">Delete Course</button>
                            </span>
                            <NavLink className="button button-secondary" to="/">Return to the List</NavLink>
                        </div>
                    </div>
                    <div className="bounds course--detail">
                        <div className="grid-66">
                            <div className="course--header">
                                <h4 className="course--label">Course</h4>
                                <h3 className="course--title">{course.title}</h3>
                                <p>{}</p>
                            </div>
                        </div>
                        <div class="course--description">
                            <p>Loop through pargraphs</p>
                        </div>
                        <div class="grid-25 grid-right">
                            <div class="course--stats">
                                <ul className="course--stats--list">
                                    <li className="course--stats--list--item">
                                        <h4>Estimated Time</h4>
                                        <h3>Hourse</h3>
                                    </li>
                                    <li className="course--stats--list--item">
                                        <h4>Materials Needed</h4>
                                        <ul>
                                            <li></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                    </div>
                    </div>
                </div>
            </Fragment>
        );
    }

} 
export default CourseDetails;