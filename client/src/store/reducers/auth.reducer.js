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
                ...state,
                isWaiting: false,
                authenticated: true,
                user: action.data,
            }
        case types.FETCH_USER_FAILURE:
            return{
                ...state,
                isWaiting: true,
                authenticated: false,
                user: "",
            }
        case types.LOGIN_USER_REQUEST:
                return {
                    ...state,
                    isWaiting: true
                }
        case types.LOGIN_USER_SUCCESS:
                return {
                    ...state,
                    isWaiting : false,
                    authenticated: true,
                    user: action.data
                }
        case types.LOGIN_USER_ERROR:
            return {
                ...state,
                isWaiting: false,
                authenticated: false
            }
        case types.REGISTER_USER_REQUEST:
            return {
                isWaiting: true,
            }
        case types.REGISTER_USER_SUCCESS:
            return{
                isWaiting: false,
                authenticated: true
            }
        case types.REGISTER_USER_ERROR:
            return{
                isWaiting: false,
                authenticated: false
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
                authenticated: false,
                isWaiting: false
            }
        default:
            return state
    }   
}


