import axios from 'axios'
import * as types from '../types'

export const fetchUserRequest = () => {
    return { type : types.FETCH_USER_FAILURE}
}

export const fetchUserSuccess = (user) => {
    return {
        type : types.FETCH_USER_SUCCESS,
        payload : user
    }
}

export const fetchUserFailure = () => {
    return {
        type : types.FETCH_USER_FAILURE
    }
}

export const fetchUser = () => async dispatch => {
    const response = await axios.get('/user')
    if(response.data){
        dispatch(fetchUserSuccess(response.data))
    }
    else{
        dispatch(fetchUserFailure)
    }
    
}