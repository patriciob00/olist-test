import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './login-done.css'

import Button from '../button/button'

import { resetForm } from '../inner-container/inner-action'


class LoginDone extends Component {
  render() {
    return (
      <div className='loginContainer'>
        <h1>Parabéns</h1>
        <h3>Formulário preenchido com sucesso.</h3>
        <p>Se por acaso quiser refazer o teste, é so clicar no botão voltar que tá tudo certo ;)</p>
        <Button text='Voltar' disabled={false} click={ this.props.resetForm } />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ resetForm }, dispatch)

export default connect(null,mapDispatchToProps)(LoginDone);