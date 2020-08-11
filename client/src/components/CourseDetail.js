import React, {Component, Fragment} from 'react';
import {Link, Redirect} from 'react-router-dom'

class CourseDetails extends Component {
    state={
        course: {},
        user: {},  
        materials: [],
    }

    /**
     * At componentDidMount the getCourse() method is called from context.
     * State property 'course' is set using the data returned from getCourse().
     * Errors are caught and logged using catch() and the user is routed to the '/error' endpoint 
    */
    componentDidMount() {
        const {context} = this.props;
        const {id} = this.props.match.params;

        context.data.getCourse(id)
        .then(response => {
            if(response) {
                let  materials = response.course.materialsNeeded;
                // if(materials !== null )
                console.log(response.course);
                this.setState({
                    course: response.course,
                    materials: materials,
                    user: response.course.userInfo,
                })
            } else {
                throw new Error();
            }    
        })
        .catch(err => {
            console.error(err);
            this.props.history.push('/error');
        });
    }

    render() {
        const {course, materials, user} = this.state;

        return(
            <div>
                <Fragment>
                    <div className="actions--bar">
                        <div className="bounds">
                            <div className="grid-100">
                                <span>
                                    <Link className="button" to={`/courses/${course.id}/update`}>Update Course</Link>
                                    <Link className="button" to={`/courses/${course.id}/delete`}>Delete Course</Link>
                                </span>
                                <Link className="button button-secondary" to="/">Return to the List</Link>
                            </div>
                        </div>
                        <div className="bounds course--detail">
                            <div className="grid-66">
                                <div className="course--header">
                                    <h4 className="course--label">Course</h4>
                                    <h3 className="course--title">{course.title}</h3>
                                    <p>By {user.firstName} {user.lastName}</p>
                                </div>
                                <div className="course--description">
                                    <p>{course.description}</p>
                                    {/* {course.description.split("\n").map((i,key) => {
                                        return <p key={key}>{i}</p>
                                    })} */}
                                </div>
                            </div>    
                            <div className="grid-25 grid-right">
                                <div className="course--stats">
                                    <ul className="course--stats--list">
                                        <li className="course--stats--list--item">
                                            <h4>Estimated Time</h4>
                                            <h3>{course.estimatedTime}</h3>
                                        </li>
                                        <li className="course--stats--list--item">
                                            <h4>Materials Needed</h4>
                                            <ul>
                                                <li>{materials}</li>
                                                {/* {materials.split('\n').map((material, key) => {
                                                    return <li key={key}>{material}</li>
                                                })} */}
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            </div>
        );
    }

} 
export default CourseDetails;