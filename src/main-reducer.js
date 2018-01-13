import { combineReducers } from 'redux'

import formReducer from './components/form-box/form-reducer'
import innerReducer from './components/inner-container/inner-reducer'
import passReducer from './components/pass-input/pass-reducer'

const mainReducer = combineReducers({
  form: formReducer,
  inner: innerReducer,
  input: passReducer
})

export default mainReducer