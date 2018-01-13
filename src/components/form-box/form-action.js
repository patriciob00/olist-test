import { formDone, PassNotEquals } from '../inner-container/inner-action'

export const newForm = () => {
  return dispatch => {
    dispatch({ type: 'NEW_FORM'})
    
  }
}

export const changeFormValue = event => {
  return (dispatch, getState) => {
    dispatch({
      type: 'CHANGE_FORM_VALUE',
      payload: {
        input: event.target.id,
        value: event.target.value
      }
    })
    const {form} = getState() 
    if (showObj(form)) {
      dispatch({
        type: 'DISABLE_BUTTON',
        payload: false
      })
    } else dispatch({
      type: 'DISABLE_BUTTON',
      payload: true
    })
  }
}

const showObj = (obj) => {
  for (let cur in obj ) {
    if ( cur != 'disableButton' && cur != 'formIsDone') {
      if (obj[cur] === '' || obj[cur] === null ) return false
      else {
        if (cur == 'email' && !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(obj[cur]))) {
          return false
        }
        if ( cur == 'pass' && !testPassInput(obj[cur]) ) return false
      }
    }
  } 
  return true
}

const getCurrentState = getState => {
  return getState => {
    const { form } = getState()
    return form
  }
}

export const buttonClick = (dispatch) => {
  return (dispatch, getState) => {
    const { pass, passConfirm} = getState().form
    if ( passConfirm == pass ) {
      console.log('FD')
      dispatch(formDone())
    } else {
      console.log('PNE')
      dispatch( PassNotEquals() )
    }
  }
}

const testPassInput = (value) => {
    if ( value < 6 || !(/[A-Z]/.test(value)) || !(/\d/.test(value)) ) return false
    return true
}

export const checkFormValues = (form) => {
  return () => {
    console.log('form', form)
    let pass = false
    return pass 
  };
}