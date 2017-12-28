import React, { Component } from 'react';

import  './inner-container.css';

import Logotype from "../logotype/logotype";
import FormBox from '../form-box/form-box'

class innerContainer extends Component {
  render() {
    return (
      <div className='inner'>
        <Logotype />
        <FormBox />
      </div>
    );
  }
}

export default innerContainer;