import { newForm } from '../form-box/form-action'
import { resetBarsAndSigns } from '../pass-input/pass-action'

export const formDone = () => {
  return (dispatch, getState) =>  {
    const { name, email} = getState().form
    dispatch({
      type: 'FORM_DONE',
      payload: {
        id: (new Date()).getTime(),
        type: 'success',
        headline: 'Login Efetuado',
        message: `Parabéns ${name}, login efetuado com o email ${email}`
      }
    })
  }
}

export const PassNotEquals = () => {
  return (dispatch, getState) =>  {
    dispatch({
      type: 'PASS_NOT_EQUALS',
      payload: {
        id: (new Date()).getTime(),
        type: 'warning',
        headline: 'Verificar senhas',
        message: 'Por gentileza verifique se confirmar senha e senha são iguais.'
      }
    })
  }
}

export const resetForm = () => {
  return dispatch => {
    dispatch( newForm())
    dispatch( resetBarsAndSigns())
    dispatch({type: 'RESET_FORM'})
  }
}

export const dismissAlert = (el) => {
  return dispatch => dispatch({
    type: 'DISMISS_ALERT',
    payload: el.id
  })
}