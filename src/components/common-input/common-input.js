import React from 'react';

import './common-input.css'

const CommonInput = (props) => (
  <div className='form-group'>
    <label htmlFor={ props.id || '' }>{ props.label }</label>
    <input 
      type={ props.type || 'text' } 
      className={`form-control ${ props.classname }`} 
      id={ props.id || '' } 
      value={ props.value }
      onChange={ props.onchange } />
  </div>
)

export default CommonInput;