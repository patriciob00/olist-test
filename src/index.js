import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import multi from 'redux-multi'
import thunk from 'redux-thunk'

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import App from './App';
import Reducers from './main-reducer'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware( multi,thunk  )(createStore)(Reducers, devTools)

ReactDOM.render(
<Provider store={ store }>
  <App />
</Provider>,
 document.getElementById('root'));
