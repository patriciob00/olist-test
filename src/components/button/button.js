import React from 'react';

import "./button.css";

const Button = (props) => (
  <button
    onClick={ props.click } 
    disabled={ props.disabled } 
    className={`btn btn-block btn-success ${props.disabled ? 'disabled btn-disable' : 'btn-custom'}`} >
    { props.text }
  </button>
)

export default Button;