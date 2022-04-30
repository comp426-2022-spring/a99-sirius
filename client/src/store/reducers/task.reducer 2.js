import * as types from "../types"

const InitialState = {
    tasks: [],
    isWaiting: false,
    statusMessage: "",
    fetched: false
}

export default function(state = InitialState, action) {
    switch(action.type){
        // ---- FETCH TASKS ----
        case types.FETCH_TASKS_REQUEST:
            return {...state, isWaiting: true}
        case types.FETCH_TASKS_SUCCESS:
            return {...state, isWaiting: false, fetched: true, tasks: action.data}
        case types.FETCH_TASKS_ERROR:
            return {...state, isWaiting: false, fetched: false, statusMessage: action.message}
        // ---- DELETE TASKS ----
        case types.DELETE_TASK_REQUEST:
            return {...state, isWaiting: true}
        case types.DELETE_TASK_SUCCESS:
<<<<<<< Updated upstream
            return {...state, isWaiting: false, statusMessage: action.message}
        case types.DELETE_TASKS_ERROR:
            return {...state, isWaiting: false, statusMessage: action.message}
=======
            const newTasks = state.tasks.filter(task => task.taskId !== action.data)
            return {...state, isWaiting: false, statusMessage: action.message, tasks : newTasks}
        case types.DELETE_TASKS_ERROR:
            return {...state, isWaiting: false, statusMessage: action.message}
        // ---- ADD TASKS ----
        case types.ADD_TASK_REQUEST:
            return {...state, isWaiting: true}
        case types.ADD_TASK_SUCCESS:
            const tasks = state.tasks
            tasks.unshift(action.data)
            return {...state, isWaiting: false, tasks: tasks}
        case types.ADD_TASK_ERROR:
            return {...state, isWaiting: false}
        // ---- UPDATE TASK ----
        case types.UPDATE_TASK_REQUEST:
            return {...state, isWaiting: true}
        case types.UPDATE_TASK_SUCCESS:
            return {...state, isWaiting: false}
        case types.UPDATE_TASK_ERROR:
            return {...state, isWaiting: false}
>>>>>>> Stashed changes
        default:
            return state
    }
}