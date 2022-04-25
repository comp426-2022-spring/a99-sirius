import {combineReducers} from 'redux'
import authReducer from './auth.reducer'
import taskReducer from './task.reducer'

export default combineReducers ({
    auth: authReducer,
    tasks: taskReducer,
})