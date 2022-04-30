import axios from 'axios'
import * as types from '../types'

const fetchTasksRequest = () => {
<<<<<<< Updated upstream
    console.log("Now here")
=======
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
const deleteTaskSuccess = () => {
    return {type: types.DELETE_TASK_SUCCESS}
=======
const deleteTaskSuccess = (taskId) => {
    return {type: types.DELETE_TASK_SUCCESS, data: taskId}
>>>>>>> Stashed changes
}

const deleteTaskError = () => {
    return {type: types.DELETE_TASKS_ERROR}
}
<<<<<<< Updated upstream
=======
const addTaskRequest = () => {
    return {type: types.ADD_TASK_REQUEST}
}
const addTaskSuccess = (task) => {
    return {type: types.ADD_TASK_SUCCESS, data: task}
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
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
            if( process.env.NODE_ENV === "production"){
                endpoint = "/fetchTasks"
            }else{
                endpoint = "http://localhost:5555/fetchTasks"
            }
=======
        if( process.env.NODE_ENV === "production"){
            endpoint = "/fetchTasks"
        }else{
                endpoint = "http://localhost:5555/fetchTasks"
        }
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream

    

export const deleteTask = (data) => async dispatch => {
    await dispatch(deleteTaskRequest())

    var endpoint = ""
        if( process.env.NODE_ENV === "production"){
            endpoint = "/deleteTask"
        }else{
            endpoint = "http://localhost:5555/deleteTask"
        }
=======
export const deleteTask = (data) => async dispatch => {
    await dispatch(deleteTaskRequest())

    console.log(data.taskId)

    var endpoint = ""
    if( process.env.NODE_ENV === "production"){
        endpoint = "/deleteTask"
    }else{
        endpoint = "http://localhost:5555/deleteTask"
    }
>>>>>>> Stashed changes

    return makeUserRequest("POST", data, endpoint)
        .then(response => {
            if(response.data.success){
<<<<<<< Updated upstream
                dispatch(deleteTaskSuccess())
=======
                console.log(response.data.taskId)
                dispatch(deleteTaskSuccess(response.data.taskId))
>>>>>>> Stashed changes
            }else{
                dispatch(deleteTaskError())
                return response.data.message
            }
        })
        .catch(function (response) {
            if (response instanceof Error) {
<<<<<<< Updated upstream
=======
                dispatch(deleteTaskError())
>>>>>>> Stashed changes
                console.log("Error", response.message)
            }
        })
}

<<<<<<< Updated upstream
=======
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
            dispatch(addTaskSuccess(response.data.task))
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
>>>>>>> Stashed changes
