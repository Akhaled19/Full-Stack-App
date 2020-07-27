import React, {Component, Fragment} from 'react';


class CreateCourse extends Component {
    render() {
        return(
            <Fragment>
                <h1>Create Course</h1>
                //loop through erros if there are any
                <div>
                    <h2 className="validation--errors--label">Validation errors</h2>
                    <div className="validation-errors">
                        <ul>
                        <li></li>
                        </ul>
                    </div>
                </div>
                //otherwise
                <form>
                    <div className="grid-66">
                        <div className="course--header">
                            <h4 className="course--label">Course</h4>
                        </div>
                        <div>
                            <input 
                                id=""
                                name=""
                                type=""
                                className="input-title course--title--input"
                                placeholder="Course title..."
                                value=""
                            required/>
                            <p>By ${}</p> //user's name
                        </div> 
                        <div className="course--description">
                            <div>
                                <textarea 
                                    id=""
                                    name=""
                                    type=""
                                    className="Course description..."
                                    value=""
                                required/>
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
                                            id=""
                                            name=""
                                            type=""
                                            className="course--time--input"
                                            placeholder="Hours" 
                                            value=""
                                        required/>
                                    </div>
                                </li>
                                <li className="course--stats--list--item">
                                    <h4>Materials Needed</h4>
                                    <div>
                                        <textarea 
                                            id=""
                                            name=""
                                            className="" 
                                            placeholder="List materials..."
                                        required/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="grid-100 pad-bottom">
                        <button className="button" type="submit" to="">Create Course</button>
                        <button className="button button-secondary" to="">Cancel</button>
                    </div>       
                </form> 
            </Fragment>
        )
    }

} 
export default CreateCourse;