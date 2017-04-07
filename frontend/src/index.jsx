import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'


ReactDOM.render(<App />, document.getElementById('app'))