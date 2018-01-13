const INITIAL_STATE = {
  barOne: '',
  barTwo: '',
  barThree: '',
  signOne: '',
  signTwo: '',
  signThree: '',
  color: ''
}

export default ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case 'CHANGE_BAR':
      return { 
        ...state, 
        barOne: action.payload.barOne, 
        barTwo: action.payload.barTwo, 
        barThree: action.payload.barThree,
        color: action.payload.color
      }
    
    case 'CHANGE_SIGN_ALL':
      return {
        ...state,
        signOne: action.payload.signOne,
        signTwo: action.payload.signTwo,
        signThree: action.payload.signThree
      }
    
    case 'CHANGE_SIGN_ONE':
      return { ...state,  signOne: action.payload }
    
    case 'CHANGE_SIGN_TWO':
      return { ...state,  signTwo: action.payload }
    
    case 'CHANGE_SIGN_THREE':
      return { ...state,  signThree: action.payload }

    case 'RESET_BARS_AND_SIGNS':
      return {...state, ...INITIAL_STATE }
      
    default:
      return state;
  }
}