import 'materialize-css/dist/css/materialize.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'


// Components
import App from './components/App'

// Redux 
import { Provider } from 'react-redux'
import { store } from './store'

// Render
ReactDOM.createRoot(document.querySelector('#root')).render(
    <BrowserRouter>
        <Provider store= {store}>
            <App />
        </Provider>
    </BrowserRouter>
);