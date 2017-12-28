import React, { Component } from 'react';
import './App.css';

import InnerContainer from './components/inner-container/inner-container';

class Login extends Component {
  render() {
    console.log('inner', InnerContainer)
    return (
      <div className="container"> 
        <InnerContainer />
      </div>
    );
  }
}

export default Login;
