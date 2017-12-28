import React, { Component } from 'react';

import './form-box.css'

import CommonInput from '../common-input/common-input'
import PassInput from '../pass-input/pass-input'
import Button from '../button/button'

class FormBox extends Component {
  render() {
    return (
      <form>

        <CommonInput id="name" label="Nome Completo"  />

        <CommonInput id="email" label="Email" type="email"  />

        <PassInput id="pass" label="Senha" type="pass" />

        <CommonInput id="passConfirm" label="Confirme sua senha" type="password"  />

        <Button text="Criar conta" disabled={true} />

      </form>
    );
  }
}

export default FormBox;