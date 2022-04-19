import 'materialize-css/dist/css/materialize.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import {createBrowserHistory} from 'history'


// Components
import App from './components/App'

// Redux 
import { Provider } from 'react-redux'
import { store } from './store'

export const history = createBrowserHistory()

// Render
ReactDOM.createRoot(document.querySelector('#root')).render(
    <Router history ={history}>
        <Provider store= {store}>
            <App />
        </Provider>
    </Router>
);