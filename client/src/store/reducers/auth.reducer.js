import * as types from "../types"

const InitialState = {
    isWaiting: false,
    authenticated: false,
    user : {
    }
}

export default function(state = InitialState, action) {
    switch(action.type) {
        // ---- FETCH HANDLING ----
        case types.FETCH_USER_REQUEST:
            return { ...state, isWaiting: true }
        case types.FETCH_USER_SUCCESS:
            return{
                ...state,
                isWaiting: false,
                authenticated: true,
                user: action.data,
            }
        case types.FETCH_USER_FAILURE:
            return{ ...state, isWaiting: false}
        // ---- LOGIN HANDLING ----
        case types.LOGIN_USER_REQUEST:
            return { ...state, isWaiting: true }
        case types.LOGIN_USER_SUCCESS:
            return {
                isWaiting : false,
                authenticated: true,
                user: action.data
            }
        case types.LOGIN_USER_ERROR:
            return { ...state, isWaiting: false }
        // ---- REGISTRATION HANDLING ----
        case types.REGISTER_USER_REQUEST:
            return { ...state, isWaiting: true }
        case types.REGISTER_USER_SUCCESS:
            return{
                ...state,
                isWaiting: false,
                user : action.data,
                authenticated: true
            }
        case types.REGISTER_USER_ERROR:
            return{ ...state, isWaiting: false }
        // ---- LOGOUT ----
        case types.LOGOUT_USER_REQUEST:
            return { ...state, isWaiting: true }
        case types.LOGOUT_USER_SUCCESS:
            return {
                ...state,
                authenticated: false,
                isWaiting: false,
                user: ""
            }
        // ---- CHANGE_PASSWORD ----
        case types.CHANGE_PASSWORD_REQUEST:
            return {...state, isWaiting: true}
        case types.CHANGE_PASSWORD_SUCCESS:
            return {...state, isWaiting: false, user: action.data}
        // ---- DEFAULT ----
        default:
            return state
    }   
}


