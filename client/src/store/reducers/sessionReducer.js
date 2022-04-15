import * as types from "../types"

const InitialState = {
    loggedIn: false,
    loading: true,
    user: "",
    message: "DEFAULT"
}

export default function(state = InitialState, action) {
    switch(action.type) {
        case types.FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true,
                message : "FETCHING"
            }
        case types.FETCH_USER_SUCCESS:
            return{
                loading: false,
                loggedIn: true,
                user: action.payload,
                message: "USER LOGGED"
            }
        case types.FETCH_USER_FAILURE:
            return{
                loading: false,
                loggedIn: false,
                user: "",
                message: "NO USER LOGGED"
            }
            default:
                return state
    }   
}


