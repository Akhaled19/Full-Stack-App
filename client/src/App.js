import React, {Component} from 'react';
import axios from 'axios';
import config from './config';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor() {
    super();
  }

  componentDidMount = () => {
    this.courses();
  }
  courses = () => {
    const apiBaseUrl = config.apiBaseUrl;
    axios.get(apiBaseUrl)
      .then(response => {
        console.log(response.data);
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}  
export default App;
