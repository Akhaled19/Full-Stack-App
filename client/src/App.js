import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// import axios from 'axios';
// import config from './config';

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
  // constructor() {
  //   super();
  // }

  // componentDidMount = () => {
  //   this.courses();
  // }
  // courses = () => {
  //   const apiBaseUrl = config.apiBaseUrl;
  //   axios.get(apiBaseUrl)
  //     .then(response => {
  //       console.log(response.data);
  //     })
  // }
    return (
      <BrowserRouter>
        <div>
          <HeaderWithContext />

          <Switch>
            <Route exact path='/' component={CoursesWithContext} />
            <PrivateRoute path='/courses/create' component={CreateCourseWithContext}/>
            <PrivateRoute path='/courses/:id/update' component={UpdateCourseWithContext}/>
            <Route path='/courses/:id' component={CourseDetailWithContext} />
            <Route path='/signin' component={UserSignInwithContext} />
            <Route path='/signup' component={UserSignUpWithContext} />
            <Route path='/signout' component={UserSignOutWithContext}/>
            {/* <Route exact path='/' render={ () => <Redirect to='/courses'/>}/> */}
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
}  
export default App;
