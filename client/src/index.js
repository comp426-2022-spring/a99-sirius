import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

// components
import App from './components/App'

const store = createStore( () => [], {}, applyMiddleware())


ReactDOM.render( // ROOT COMPONENT (APP Component as argument
    <Provider store={ store }><App /></Provider>, 
    document.querySelector('#root')
); 

