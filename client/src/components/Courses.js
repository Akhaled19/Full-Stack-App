import React, {Component, Fragment} from 'react';
import {NavLink, Link} from 'react-router-dom'
// import config from '../config';
// import axios from 'axios';

class Courses extends Component {
    state = {
      courses: []
    };

      /**
       * At componentDidMount the getCourses() method is called from context.
       * State properties 'courses' are set using the data returned from getCourses().
       * Errors are caught and logged using catch() and the user is routed to the '/error' endpoint 
       */
    
      componentDidMount = () => {
        const { context } = this.props;
        context.data.getCourses()
            .then(response => {
                console.log(response.courses);
                this.setState({courses: response.courses})
            })
            .catch( err => {
                console.error(err);
                this.props.history.push('/error');
            })
      }
     
    render() {
        const { courses} = this.state;
        return (
            <Fragment>
                <div className="bounds">
                    {courses.map(course =>
                        <div className="grid-33" key={course.id}>
                            <Link className="course--module course--link" to={`/courses/${course.id}`}>
                                <h4 className="course--label">Course</h4>
                                <h3 className="course--title">{course.title}</h3>
                            </Link>
                        </div>
                    )}
                </div>
                <div className="grid-33">
                    <NavLink to="/courses/create" className="course--module course--add--module" exact activeStyle={{color: 'blue'}}>
                        <h3 className="course--add--title">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 13 13" className="add">
                                <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 " />
                            </svg>
                            New Course    
                        </h3>
                    </NavLink>
                      
                </div>
            </Fragment>
        );
    }
} 
export default Courses;