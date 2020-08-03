import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

// import axios from 'axios';
// import config from './config';

import withContext from './Context';
import Header from './components/Header';
import Courses from './components/Courses';
//import CreatCourse from './components/CreateCourse';
import CourseDetail from './components/CourseDetail';
// import UpdateCourse from './components/UpdateCourse';
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
 
class App extends Component {
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
  render() {
    return (
      <BrowserRouter>
        <div>
          <HeaderWithContext />

          <Switch>
            <Route exact path='/' render={ () => <Redirect to='/courses'/>}/>
            <Route path='/courses' component={CoursesWithContext} />
            <Route path='courses/:id' component={CourseDetailWithContext} />
            <Route path='/signin' component={UserSignInwithContext} />
            <Route path='/signup' component={UserSignUpWithContext} />
            <Route path='/signout' component={UserSignOutWithContext}/>
            <Route component={NotFound}/>
            {/* <Route path='/courses/create' component={CreatCourse} />
            <Route path='/courses/:id/update' component={UpdateCourse} />
            */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}  
export default App;
