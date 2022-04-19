import axios from 'axios'
import * as types from '../types'
import {history} from '../../index'

const fetchUserRequest = () => {
    return { type : types.FETCH_USER_FAILURE}
}

const fetchUserSuccess = (user) => {
    return {
        type : types.FETCH_USER_SUCCESS,
        data : user
    }
}

const fetchUserFailure = () => {
    return {
        type : types.FETCH_USER_FAILURE
    }
}

const loginRequest = () => {
    return { type: types.LOGIN_USER_REQUEST}
}

const loginSuccess = (user) => {
    return { 
        type: types.LOGIN_USER_SUCCESS,
        data : user
    }
}

const loginError = () => {
    return { type: types.LOGIN_USER_ERROR}
}


function makeUserRequest(method, data, endpoint){
    return axios({
        method: method,
        url: endpoint,
        data: data,
        withCredentials: true
    })
}

// Async Action Creators 

export const fetchUser = () => async dispatch => {
    dispatch(fetchUserRequest)

    const response = await axios.get('/user')
    if(response.data){
        dispatch(fetchUserSuccess(response.data))
    }
    else{
        dispatch(fetchUserFailure)
    }
    
}

export const login = (data, successPath) => {
    return dispatch => {
        dispatch(loginRequest)
        
        var endpoint = ""
        if( process.env.NODE_ENV === "production"){
            endpoint = "/login/auth"
        }else{
            endpoint = "http://localhost:5555/login/auth"
        }

        return makeUserRequest("POST", data, endpoint)
                .then(response => {
                    if(response.data.success) {
                        dispatch(loginSuccess(response.data.user))
                        history.push(successPath)
                    } else{
                        dispatch(loginError())
                        let loginMessage = response.data.message
                        return loginMessage
                    }
                })
                .catch(function (response) {
                    if (response instanceof Error) {
                        console.log("Error", response.message)
                    }
                })
    }
}