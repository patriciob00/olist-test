export const switchColorOfBar = (value) => {
  return dispatch => {
    switch(value) {
      case 1:
        dispatch({ type: 'CHANGE_BAR', payload: { barOne: 'danger', barTwo: '', barThree: '', color: 'danger'} })
        return
      
      case 2:
        dispatch({ type: 'CHANGE_BAR', payload: { barOne: 'warning', barTwo: 'warning', barThree: '', color: 'warning'} })
        return
      
      case 3: 
        dispatch({ type: 'CHANGE_BAR', payload: { barOne: 'success', barTwo: 'success', barThree: 'success', color: 'success'} })
        return
      
      default:
        dispatch({ type: 'CHANGE_BAR', payload: { barOne: '', barTwo: '', barThree: '', color: ''} })
        return
    }
  }
}


export const checkPassValue = (value) => {
 return (dispatch, getState) => {
    var total = 0
    if ( value.length === 0 ){
      dispatch( switchColorOfBar(total))
      let color = getState().input.color
      dispatch({ type: 'CHANGE_SIGN_ALL', payload: { signOne: color, signTwo: color, signThree: color }})
    } else {
      if ( value.length > 5 ) {
        total += 1
        dispatch( switchColorOfBar(total))
        dispatch({ type: 'CHANGE_SIGN_ONE', payload: getState().input.color})
      } else {
        dispatch({ type: 'CHANGE_SIGN_ONE', payload: '' })
      }
      if ( (/[A-Z]/.test(value)) ) {
        total += 1
        dispatch( switchColorOfBar(total))
        if ( total == 2 ) {
          dispatch({ type: 'CHANGE_SIGN_TWO', payload: getState().input.color })
          dispatch({ type: 'CHANGE_SIGN_ONE', payload: getState().input.color})
        } else if ( total == 1 ) dispatch({ type: 'CHANGE_SIGN_TWO', payload: getState().input.color })
      
      } else dispatch({ type: 'CHANGE_SIGN_TWO', payload: '' })
      if ( (/\d/.test(value)) ) {
        total += 1
        dispatch( switchColorOfBar(total))
        if (total == 3) {
          dispatch({ type: 'CHANGE_SIGN_TWO', payload: getState().input.color })
          dispatch({ type: 'CHANGE_SIGN_ONE', payload: getState().input.color})
          dispatch({ type: 'CHANGE_SIGN_THREE', payload: getState().input.color })
        } else if (total == 1) dispatch({ type: 'CHANGE_SIGN_THREE', payload: getState().input.color })
        else if (total == 2 ) {
          if(value.length > 5) {
            dispatch({ type: 'CHANGE_SIGN_ONE', payload: getState().input.color })
            dispatch({ type: 'CHANGE_SIGN_THREE', payload: getState().input.color })
          } else {
            dispatch({ type: 'CHANGE_SIGN_TWO', payload: getState().input.color })
            dispatch({ type: 'CHANGE_SIGN_THREE', payload: getState().input.color })
          }
        }
      } else dispatch({ type: 'CHANGE_SIGN_THREE', payload: '' })
    }
    if (total === 0) {
      dispatch(switchColorOfBar(0))
      let color = getState().input.color
      dispatch({ type: 'CHANGE_SIGN_ALL', payload: { signOne: color, signTwo: color, signThree: color }})
    }
 }
}

export const resetBarsAndSigns = () => {
  return { type: 'RESET_BARS_AND_SIGNS' }
}