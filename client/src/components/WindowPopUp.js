import React, { Component } from 'react';

/**
 * The file WindowPopUp export a class that renders an alert box pop up, the user will have to click "Ok" to proceed
 * Uses the togglePop function defined in the CourseDetails component to set the state over and over using a click event
 */

 export default class PopUp extends Component {
    handleClick = () => {
        this.props.toggle(); 
    }

    delete = (event) => {
        event.preventDefault();
        const {onDelete} = this.props;
        onDelete();
    }

    render(){
        return (
            <div className="modal">
                <div className="modal_content">
                    <span className="close" onClick={this.handleClick}>&times;</span>
                    <form>
                        <h3>Are you sure you want to delete this course?</h3>
                        <h2>All information associated with this course will be permanently deleted.</h2>
                        <button className="button" type="submit" onClick={this.delete}>Delete Course</button>
                    </form>
                </div>
            </div>
        );
    }
 }
