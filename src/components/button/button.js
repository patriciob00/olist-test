import React, { Component } from 'react';

import "./button.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classEnable: "btn btn-block btn-success btn-custom",
      classDisable: "btn btn-block disabled btn-success btn-disable"
    }
    this.clickButton = this.clickButton.bind(this)
  }

  clickButton () {
    if (this.props.disabled) console.log("desabilitado")
  }
  

  render() {
    return (
      <button
        onClick={()=> this.clickButton()} 
        disabled={ this.props.disabled } 
        class={ this.props.disabled ? this.state.classDisable : this.state.classEnable } >
        { this.props.text }
      </button>
    );
  }
}

export default Button;