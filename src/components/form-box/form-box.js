import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './form-box.css'

import CommonInput from '../common-input/common-input'
import PassInput from '../pass-input/pass-input'
import Button from '../button/button'

import { changeFormValue, buttonClick } from './form-action'


class FormBox extends Component {
  constructor(props) {
    super(props);
    this.buttonPressed = this.buttonPressed.bind(this)
  }

  buttonPressed(e) {
    e.preventDefault();
    this.props.buttonClick()
  } 
  

  render() {
    return (
      <form>

        <CommonInput id="name" label="Nome Completo" 
          value={ this.props.name } onchange={ this.props.changeFormValue }  />

        <CommonInput id="email" label="Email" 
          type="email" value={ this.props.email } onchange={ this.props.changeFormValue }  />

        <PassInput id="pass" label="Senha" 
          type="password" value={ this.props.pass } onchange={ this.props.changeFormValue } />

        <CommonInput id="passConfirm" label="Confirme sua senha" 
          type="password" value={ this.props.passConfirm } onchange={ this.props.changeFormValue } />

        <Button text="Criar conta" disabled={ this.props.disableButton } click={ this.buttonPressed } />

      </form>
    );
  }
}

const mapStateToProps = state => ({
  name: state.form.name,
  email: state.form.email,
  pass: state.form.pass,
  passConfirm: state.form.passConfirm,
  disableButton: state.form.disableButton
})

const mapDispatchToProps = dispatch => bindActionCreators({ changeFormValue, buttonClick }, dispatch)

export default connect( mapStateToProps, mapDispatchToProps)(FormBox);