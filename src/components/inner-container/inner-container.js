import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { AlertList } from "react-bs-notifier";

import { dismissAlert } from './inner-action'


import  './inner-container.css';

import Logotype from "../logotype/logotype";
import FormBox from '../form-box/form-box';
import LoginDone from '../login-done/login-done'

class innerContainer extends Component {

  render() {
    return (
      <div className={ this.props.classname }>
        { !this.props.formIsDone && <Logotype /> }
        { !this.props.formIsDone && <FormBox  /> }
        { this.props.formIsDone && <LoginDone /> }
        <AlertList alerts={ this.props.array } timeout={3000} 
          dismissTitle="Fechar!" onDismiss={ this.props.dismissAlert }
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ 
  formIsDone: state.inner.formIsDone, 
  array: state.inner.alerts,
  classname: state.inner.classname
})

const mapDispatchToProps = dispatch => bindActionCreators({ dismissAlert }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(innerContainer)