import axios from 'axios'
import * as types from '../types'

const fetchTasksRequest = () => {
    console.log("Now here")
    return { type: types.FETCH_TASKS_REQUEST}
}

const fetchTasksSuccess = (tasks) => {
    return { type: types.FETCH_TASKS_SUCCESS, data: tasks}
}

const fetchTasksError = () => {
    return { type: types.FETCH_TASKS_ERROR}
}

const deleteTaskRequest = () => {
    return {type: types.DELETE_TASK_REQUEST}
}

const deleteTaskSuccess = () => {
    return {type: types.DELETE_TASK_SUCCESS}
}

const deleteTaskError = () => {
    return {type: types.DELETE_TASKS_ERROR}
}

function makeUserRequest(method, data, endpoint){
    return axios({
        method: method,
        url: endpoint,
        data: data,
    })
}

export const fetchTasks = (data) => {
    return async dispatch => {
        await dispatch(fetchTasksRequest())

        var endpoint = ""
            if( process.env.NODE_ENV === "production"){
                endpoint = "/fetchTasks"
            }else{
                endpoint = "http://localhost:5555/fetchTasks"
            }

        return makeUserRequest("POST", data, endpoint)
            .then(response => {
                if(response.data.success){
                    dispatch(fetchTasksSuccess(response.data.tasks))
                }else{
                    dispatch(fetchTasksError())
                    return response.data.message
                }
            })
            .catch(function (response) {
                if (response instanceof Error) {
                    console.log("Error", response.message)
            }
        })
    }
}


    

export const deleteTask = (data) => async dispatch => {
    await dispatch(deleteTaskRequest())

    var endpoint = ""
        if( process.env.NODE_ENV === "production"){
            endpoint = "/deleteTask"
        }else{
            endpoint = "http://localhost:5555/deleteTask"
        }

    return makeUserRequest("POST", data, endpoint)
        .then(response => {
            if(response.data.success){
                dispatch(deleteTaskSuccess())
            }else{
                dispatch(deleteTaskError())
                return response.data.message
            }
        })
        .catch(function (response) {
            if (response instanceof Error) {
                console.log("Error", response.message)
            }
        })
}

