import axios from 'axios'
import * as types from '../types'

// -------- FETCH USER --------
const fetchUserRequest = () => {
    return { type : types.FETCH_USER_REQUEST}
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

// -------- LOG IN --------

const loginRequest = () => {
    return { type: types.LOGIN_USER_REQUEST}
}

const loginSuccess = (user) => {
    return { 
        type: types.LOGIN_USER_SUCCESS,
        data: user
    }
}

const loginError = () => {
    return { type: types.LOGIN_USER_ERROR}
}

// -------- SING UP --------

const signUpRequest = () => {
    return {
        type: types.REGISTER_USER_REQUEST
    }
}

const signUpSuccess = (user) => {
    return {
        type: types.REGISTER_USER_SUCCESS,
        data: user
    }
}

const signUpError = () => {
    return {
        type: types.REGISTER_USER_ERROR
    }
}

// -------- LOGOUT --------
const logoutRequest = () => {
    return {
        type : types.LOGOUT_USER_REQUEST
    }
}

const logoutSuccess = () => {
    return {
        type: types.LOGOUT_USER_SUCCESS
    }
}

const changePasswordRequest = () => {
    return {type: types.CHANGE_PASSWORD_REQUEST}
}

const changePasswordSuccess = (user) => {
    return {type: types.CHANGE_PASSWORD_SUCCESS, data: user}
}

function makeUserRequest(method, data, endpoint){
    return axios({
        method: method,
        url: endpoint,
        data: data,
    })
}


// Async Action Creators 
export const fetchUser = () => async dispatch => {
    await dispatch(fetchUserRequest())

    makeUserRequest("GET", {}, "/user")
    .then(response => {
        if(response.data){
            dispatch(fetchUserSuccess(response.data))
        }
        else{
            dispatch(fetchUserFailure())
        }
    })
    
    
}

export const login = (data) => {
    return async dispatch => {
        await dispatch(loginRequest())
        
        var endpoint = ""
        if( process.env.NODE_ENV === "production"){
            endpoint = "/login/auth"
        }else{
            endpoint = "http://localhost:5555/login/auth"
        }

        return makeUserRequest("POST", data, endpoint)
                .then(response => {
                    if(response.data.success) {
                        dispatch(loginSuccess(response.data))
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

export const signUp = (data) => {
    return async dispatch => {
        await dispatch(signUpRequest())

        var endpoint = ""
        if( process.env.NODE_ENV === "production"){
            endpoint = "/signUp/auth"
        }else{
            endpoint = "http://localhost:5555/signUp/auth"
        }
        
        return makeUserRequest( "POST", data, endpoint)
            .then(response => {
                if(response.data.success){
                    dispatch(signUpSuccess(response.data.user))
                }
                else{
                    dispatch(signUpError())
                    let signUpStatus = {
                        message: response.data.message,
                        emailError: response.data.emailError,
                        usernameError: response.data.usernameError
                    } 
                    return signUpStatus
                }
            })
            .catch(function (response) {
                if (response instanceof Error) {
                    console.log("Error", response.message)
                }
            })
    }
}

export const changePassword = (data) => {
    return async dispatch => {
        await dispatch(changePasswordRequest())

        var endpoint = ""
        if( process.env.NODE_ENV === "production"){
            endpoint = "/changePassword"
        }else{
            endpoint = "http://localhost:5555/changePassword"
        }

        return makeUserRequest("POST", data, endpoint)
            .then(response => {
                if(response.data.success){
                    dispatch(changePasswordSuccess(response.data.user))
                }
            })
            .catch(function (response) {
                if (response instanceof Error) {
                    console.log("Error", response.message)
                }
            })
    }
}

export const logout = () => {
    return async dispatch => {
        await dispatch(logoutRequest())

        await dispatch(logoutSuccess())
    }
}


