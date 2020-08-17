import React from 'react';
import {Redirect} from 'react-router-dom';

/**
 * On signout the user is signed out and redirected to the home page 
 */
export default ({context}) => {
    context.actions.signOut();
    return (
        <Redirect to='/' />
    );
}