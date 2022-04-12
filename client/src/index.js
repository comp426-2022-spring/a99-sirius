import 'materialize-css/dist/css/materialize.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

// Components
import App from './components/App'

// Reducers
import reducers from './reducers'

// Action Creators
const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.createRoot(document.querySelector('#root')).render(
    <Provider store={ store }><App /></Provider>
);