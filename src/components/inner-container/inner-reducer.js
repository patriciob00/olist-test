const INITIAL_STATE = {
  classname: 'inner',
  alerts: [],
  formIsDone: false
}

export default ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case 'FORM_DONE':
      return { ...state, formIsDone: true, alerts: [action.payload] }

    case 'PASS_NOT_EQUALS':
      return { ...state, alerts: [action.payload]}

    case 'RESET_FORM':
      return { ...state, ...INITIAL_STATE }

    case 'DISMISS_ALERT':
      let newArray = state.alerts
      newArray = newArray.filter( e => e.id !== action.payload )
      return { ...state, alerts: newArray}
      
    default:
      return state;
  }
}