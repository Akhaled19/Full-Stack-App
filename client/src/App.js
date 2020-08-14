import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//import components
import withContext from './Context';
import PrivateRoute from './PrivateRoute';
import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import CreatCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UserSignOut from './components/UserSignOut';
import NotFound from './components/NotFound';
import Forbidden from './components/Forbidden';
import UnhandledError from './components/UnhandledError'

//Subscribe components to context changes
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInwithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);
const HeaderWithContext = withContext(Header);
const CoursesWithContext = withContext(Courses);
const CourseDetailWithContext = withContext(CourseDetail);
const CreateCourseWithContext = withContext(CreatCourse);
const UpdateCourseWithContext = withContext(UpdateCourse);
 
function App(){
    return (
      <BrowserRouter>
        <div>
          <HeaderWithContext />

          <Switch>
            <Route exact path='/' component={CoursesWithContext} />
            <Route path='/error' component={UnhandledError} />
            <PrivateRoute path='/courses/create' component={CreateCourseWithContext}/>
            <PrivateRoute path='/courses/:id/update' component={UpdateCourseWithContext}/>
            <Route path='/courses/:id' component={CourseDetailWithContext} />
            <Route path='/signin' component={UserSignInwithContext} />
            <Route path='/signup' component={UserSignUpWithContext} />
            <Route path='/signout' component={UserSignOutWithContext}/>
            <Route path='/forbidden' component={Forbidden}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
}  
export default App;
