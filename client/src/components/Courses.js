import React, {Component, Fragment} from 'react';
import {NavLink, Link} from 'react-router-dom'
import config from '../config';
import axios from 'axios';

class Courses extends Component {
    constructor() {
        super();
        this.state={
            courses: []
        }
      }
    
      componentDidMount = () => {
        this.courses();
      }
        courses = () => {
            const apiBaseUrl = config.apiBaseUrl;
            axios.get(apiBaseUrl)
                .then(response => {
                    console.log(response.data);
                    this.setState({courses: response.data})
                })
        }        
    render() {
        return (
            <Fragment>
                <div className="bounds">
                    {this.state.courses.map(course =>
                        <div className="grid-33">
                            <Link className="course--module course--link" to="">
                                <h4 className="course--label">Course</h4>
                                <h3 className="course--title" key={course.id}>{course.title}</h3>
                            </Link>
                        </div>
                    )}
                </div>
                <div className="grid-33">
                    <NavLink to="/courses/create" exact activeStyle={{color: 'blue'}}>New Course</NavLink>
                </div>
            </Fragment>
        );
    }
} 
export default Courses;