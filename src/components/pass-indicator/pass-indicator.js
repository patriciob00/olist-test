import React, { Component } from 'react';

import './pass-indicator.css'

class PassIndicator extends Component {
  
  render() {
    return (
      <div>
        <div className="sign-container">
          <div className={`sign ${ this.props.barOne }`}></div>
          <div className={`sign ${ this.props.barTwo }`}></div>
          <div className={`sign ${ this.props.barThree }`}></div>
        </div>
        <div className='labels-container'>
          <div className='label-custom'>
            <div className={`indicator ${ this.props.signOne }`}></div>
            <span>Pelo menos 6 caracteres</span>
          </div>
          <div className='label-custom'>
          <div className={`indicator ${ this.props.signTwo }`}></div>
            <span>Pelo menos 1 letra maiúscula</span>
          </div>
          <div className='label-custom'>
          <div className={`indicator ${ this.props.signThree }`}></div>
            <span>Pelo menos 1 número</span>
          </div>
        </div> 
      </div>
    );
  }
}
export default PassIndicator;