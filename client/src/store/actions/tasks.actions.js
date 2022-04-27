import axios from 'axios'
import * as types from '../types'

const fetchTasksRequest = () => {
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

const deleteTaskSuccess = (taskId) => {
    return {type: types.DELETE_TASK_SUCCESS, data: taskId}
}

const deleteTaskError = () => {
    return {type: types.DELETE_TASKS_ERROR}
}
const addTaskRequest = () => {
    return {type: types.ADD_TASK_REQUEST}
}
const addTaskSuccess = () => {
    return {type: types.ADD_TASK_SUCCESS}
}

const addTaskError = () => {
    return {type: types.ADD_TASK_ERROR}
}

const updateTaskRequest = () => {
    return {type: types.UPDATE_TASK_REQUEST}
}

const updateTaskSuccess = () => {
    return {type: types.UPDATE_TASK_SUCCESS}
}

const updateTaskError = () => {
    return {type: types.UPDATE_TASK_ERROR}
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

    console.log(data.taskId)

    var endpoint = ""
    if( process.env.NODE_ENV === "production"){
        endpoint = "/deleteTask"
    }else{
        endpoint = "http://localhost:5555/deleteTask"
    }

    return makeUserRequest("POST", data, endpoint)
        .then(response => {
            if(response.data.success){
                console.log(response.data.taskId)
                dispatch(deleteTaskSuccess(response.data.taskId))
            }else{
                dispatch(deleteTaskError())
                return response.data.message
            }
        })
        .catch(function (response) {
            if (response instanceof Error) {
                dispatch(deleteTaskError())
                console.log("Error", response.message)
            }
        })
}

export const addTask = (data) => async dispatch => {
    await dispatch(addTaskRequest())

    var endpoint = ""
    if( process.env.NODE_ENV === "production"){
        endpoint = "/addTask"
    }else{
        endpoint = "http://localhost:5555/addTask"
    }
    
    return makeUserRequest("POST", data, endpoint)
    .then( response => {
        if(response.data.success){
            dispatch(addTaskSuccess())
        }else{
            dispatch(addTaskError())
        }
    })
    .catch(function (response) {
        if (response instanceof Error) {
            console.log("Error", response.message)
        }
    })
}

export const updateTask = (data) => async dispatch => {

    console.log(data)
    await dispatch(updateTaskRequest())

    var endpoint = ""
    if( process.env.NODE_ENV === "production"){
        endpoint = "/updateTask"
    }else{
        endpoint = "http://localhost:5555/updateTask"
    }

    return makeUserRequest("POST", data, endpoint)
    .then( response => {
        if(response.data.success){
            dispatch(updateTaskSuccess())
        }else{
            dispatch(updateTaskError())
        }
    })
    .catch(function (response) {
        if (response instanceof Error) {
            console.log("Error", response.message)
        }
    })
}
