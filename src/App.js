import React, { Component } from 'react';
import './App.css';

import innerContainer from './components/inner-container/inner-container';

class Login extends Component {
  render() {
    return (
      <div className="container"> 
        <innerContainer />
      </div>
    );
  }
}

export default Login;
