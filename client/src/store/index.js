import { createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'

import reducer from './reducers'

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxThunk)))