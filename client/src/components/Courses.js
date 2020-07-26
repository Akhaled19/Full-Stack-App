import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom'

class Courses extends Component {
    render() {
        return (
            <Fragment>
                <div className="bounds">
                //map the array of courses and print each in a div 
                    <h4 className="course--label"></h4> // labe (courses)
                    <h3 className="course--title"></h3> // course title
                </div>
                <div className="grid-33">
                    //button styling goes here
                    <NavLink to="">New Course</NavLink>
                </div>
            </Fragment>
        );
    }

} 
export default Courses;