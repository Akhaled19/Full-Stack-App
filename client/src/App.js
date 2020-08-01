import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

// import axios from 'axios';
// import config from './config';

import withContext from './Context';
import Header from './components/Header';
import Courses from './components/Courses';
// import CreatCourse from './components/CreateCourse';
// import CourseDetail from './components/CourseDetail';
// import UpdateCourse from './components/UpdateCourse';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
// import UserSignOut from './components/UserSignOut';
import NotFound from './components/NotFound';

//Subscribe components to context changes
const userSignUpWithContext = withContext(UserSignUp);
const userSignInwithContext = withContext(UserSignIn);

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
          <Header />
          <Switch>
            <Route exact path='/' render={ () => <Redirect to='/courses'/>}/>
            <Route path='/courses' component={Courses} />
            <Route path='/signin' component={userSignInwithContext} />
            <Route path='/signup' component={userSignUpWithContext} />
            <Route component={NotFound}/>
            {/* <Route path='/courses/create' component={CreatCourse} />
            <Route path='/courses/:id/update' component={UpdateCourse} />
            <Route path='courses/:id' component={CourseDetail} />
            <NavLink path='/signout' component={UserSignOut} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}  
export default App;
