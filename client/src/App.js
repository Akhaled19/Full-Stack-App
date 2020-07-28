import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './styles/global.css';
// import axios from 'axios';
// import config from './config';

import Header from './components/Header';
import Courses from './components/Courses';
// import CreatCourse from './components/CreateCourse';
// import CourseDetail from './components/CourseDetail';
// import UpdateCourse from './components/UpdateCourse';
// import UserSignIn from './components/UserSignIn';
// import UserSignUp from './components/UserSignUp';
// import UserSignOut from './components/UserSignOut';

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
        <Header />
        <Switch>
          <Route path='/courses' component={Courses} />
          {/* <Route path='/courses/create' component={CreatCourse} />
          <Route path='/courses/:id/update' component={UpdateCourse} />
          <Route path='courses/:id' component={CourseDetail} />
          <NavLink path='/signin' component={UserSignIn} />
          <NavLink path='/signup' component={UserSignUp} />
          <NavLink path='/signout' component={UserSignOut} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}  
export default App;
