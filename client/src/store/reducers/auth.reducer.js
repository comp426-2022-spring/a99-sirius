import * as types from "../types"

const InitialState = {
    isWaiting: false,
    authenticated: false,
    user : {}
}

export default function(state = InitialState, action) {
    switch(action.type) {
        case types.FETCH_USER_REQUEST:
            return {
                ...state,
                isWaiting: true,
            }
        case types.FETCH_USER_SUCCESS:
            return{
                isWaiting: false,
                authenticated: true,
                user: action.data,
            }
        case types.FETCH_USER_FAILURE:
            return{
                ...state,
                isWaiting: false,
            }
        case types.LOGIN_USER_REQUEST:
                return {
                    ...state,
                    isWaiting: true,
                }
        case types.LOGIN_USER_SUCCESS:
                return {
                    isWaiting : false,
                    authenticated: true,
                    user: action.data
                }
        case types.LOGIN_USER_ERROR:
            return {
                ...state,
                isWaiting: false,
            }
        case types.REGISTER_USER_REQUEST:
            return {
                ...state,
                isWaiting: true,
            }
        case types.REGISTER_USER_SUCCESS:
            return{
                isWaiting: false,
                user : action.data,
                authenticated: true
            }
        case types.REGISTER_USER_ERROR:
            return{
                ...state,
                isWaiting: false,
            }
        case types.LOGOUT_USER_REQUEST:
            return {
                isWaiting: true
            }
        case types.LOGOUT_USER_SUCCESS:
            return {
                 authenticated: false,
                isWaiting: false,
                user: ""
            }
        case types.LOGOUT_USER_ERROR:
            return{
                ...state,
                authenticated: false,
                isWaiting: false,
            }
        default:
            return state
    }   
}


