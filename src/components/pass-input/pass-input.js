import React, { Component } from 'react';

import './pass-input.css'

import CommonInput from '../common-input/common-input'

class PassInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "enable"
    }
  }
  
  render() {
    return (
    <div className='pass-container'>
      <CommonInput 
        id={ this.props.id } label={ this.props.label } 
        type={ this.props.type } class={this.state.status} 
      />
      <div className="sign-container">
        <div className="sign"></div>
        <div className="sign"></div>
        <div className="sign"></div>
      </div>
      <div className='labels-container'>
        <div className='label-custom'>
          <div className='indicator'></div>
          <span>Pelo menos 6 caracteres</span>
        </div>
        <div className='label-custom'>
          <div className='indicator'></div>
          <span>Pelo menos 1 letra maiúscula</span>
        </div>
        <div className='label-custom'>
          <div className='indicator'></div>
          <span>Pelo menos 1 número</span>
        </div>
      </div>
    </div>
    );
  }
}

export default PassInput;