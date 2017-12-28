import React, { Component } from 'react';

import './common-input.css'

class CommonInput extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <div className={`form-group ${this.props.class || ''}`}>
        <label for={ this.props.id }>{ this.props.label }</label>
        <input type={this.props.type || 'text' } class="form-control" id={ this.props.id } />
      </div>
    );
  }
}

export default CommonInput;