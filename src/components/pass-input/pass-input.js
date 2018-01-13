import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './pass-input.css'

import { checkPassValue } from './pass-action'

import CommonInput from '../common-input/common-input'
import PassIndicator from '../pass-indicator/pass-indicator'
import { changeFormValue } from '../form-box/form-action';

class PassInput extends Component {
  constructor(props) {
    super(props); 
    this.onchangeCustom = this.onchangeCustom.bind(this)
  }

  onchangeCustom( e ) {
    const { value } = e.target
    this.props.checkPassValue(value)
    this.props.onchange( e )
  }
  
  render() {
    return (
    <div className='pass-container'>
      <CommonInput 
        id={ this.props.id } label={ this.props.label } 
        type={ this.props.type } classname={ this.props.color }
        value={ this.props.value }
        onchange={ this.onchangeCustom } 
      />

      <PassIndicator 
        signOne={ this.props.signOne } signTwo={ this.props.signTwo } signThree={ this.props.signThree }
        barOne={ this.props.barOne } barTwo={ this.props.barTwo } barThree={ this.props.barThree }
      />

    </div>
    );
  }
}

const mapStateToProps = state => ({
  signOne: state.input.signOne,
  signTwo: state.input.signTwo,
  signThree: state.input.signThree,
  barOne: state.input.barOne,
  barTwo: state.input.barTwo,
  barThree: state.input.barThree,
  color: state.input.color
})

const mapDispatchToProps = dispatch => bindActionCreators({ checkPassValue }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PassInput)