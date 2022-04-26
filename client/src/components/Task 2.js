import React from 'react'

const Task = ({taskInfo}) => {
    return (
        <div>
            <h1>{taskInfo.taskName}</h1>
            <h2>{taskInfo.taskDescription}</h2>
        </div>
    )
}

export default Task