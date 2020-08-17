import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom'
import ReactMarkdown from 'react-markdown';
import WindowPopUp from './WindowPopUp';

class CourseDetail extends Component {
    state={
        course: {},
        id: '',
        user: {},  
        materials: [],
        seen: false,
    }

    /**
     * At componentDidMount the getCourse() method is called from context.
     * @param {string} id - is the ui params 
     * State properties 'course', 'materials', 'id', and 'user' are set using the data returned from getCourse().
     * Errors are caught and logged using catch() and the user is routed to the '/error' endpoint 
    */
    componentDidMount() {
        const {context} = this.props;
        const {id} = this.props.match.params;

        context.data.getCourse(id)
        .then(response => {
            if(response) {
                let  materials = response.course.materialsNeeded;
                this.setState({
                    course: response.course,
                    materials: materials,
                    id: response.course.id,
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
        const {context} = this.props;
        const {authenticatedUser} = context;
        return(
            <div>
                <Fragment>
                    {this.state.seen ? (
                        <WindowPopUp toggle={this.togglePop} onDelete={this.onDelete}/>
                    ): null    
                    }
                    <div className="actions--bar">
                        <div className="bounds">
                            <div className="grid-100">
                                {authenticatedUser && authenticatedUser.id === user.id? (
                                    <span>
                                        <Link className="button" to={`/courses/${course.id}/update`}>Update Course</Link>
                                        <button className="button" type="submit" onClick={this.togglePop}>Delete Course</button>
                                        <Link className="button button-secondary" to="/">Return to the List</Link> 
                                    </span>
                                ): (
                                    <span>
                                        <Link className="button button-secondary" to="/">Return to the List</Link> 
                                    </span>
                                )}
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
                                    <p>
                                        <ReactMarkdown source={course.description} />
                                    </p>
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
                                                <ReactMarkdown source={materials} />
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

    //handle course deletation 
    onDelete = () => {
        const {context} = this.props;
        const {id} = this.state;

        //user credentials 
        const {emailAddress} = context.authenticatedUser;
        const password = atob(context.authenticatedUser.password);

        /**
         * deleteCourse method sends DELETE request to the API using the course id and userAuth
         * @param{string} id - contains course id to be submitted to API
         * @param{string} emailAddress - user email
         * @param{string} password - user decoded password
         */

        context.data.deleteCourse(id, emailAddress, password)
        .then( () => {
          this.props.history.push('/');
        })
        .catch(err => {
            console.error(err);
            this.props.history.push('/error');
        });
    }

    //set the seen state to true 
    togglePop = () => {
        this.setState( prevState => ({
            seen: !prevState.seen
        }))
    }
} 
export default CourseDetail;