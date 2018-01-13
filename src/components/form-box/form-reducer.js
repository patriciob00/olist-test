const INITIAL_STATE = {
  name: '',
  email: '',
  pass: '',
  passConfirm: '',
  disableButton: true,
}

export default ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case 'CHANGE_FORM_VALUE':
      switch (action.payload.input) {
        case 'name':
          return { ...state , name: action.payload.value }
        case 'email':
          return { ...state , email: action.payload.value }
        case 'pass':
          return { ...state , pass: action.payload.value }
        case 'passConfirm':
          return { ...state , passConfirm: action.payload.value }
      
        default:
         return state
      }
      break

    case 'NEW_FORM':
      return { ...state, ...INITIAL_STATE}
    
    case 'DISABLE_BUTTON':
      return {...state, disableButton: action.payload}

    default:
      return state
  }
}