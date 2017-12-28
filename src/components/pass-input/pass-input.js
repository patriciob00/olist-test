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
      <CommonInput id={ this.props.id } label={ this.props.label } type={ this.props.type } class={this.state.status} />


    );
  }
}

export default PassInput;