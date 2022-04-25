import React, {Component} from 'react'

import Task from './Task'


class Tasks extends Component{
    componentDidMount(){
        this.props.fetchTasks({ login : this.props.user.login})
    }

    render(){
        return(
            <div>
            {this.props.tasks.tasks.map((task, index) => (
                <Task key={index} taskInfo={task}></Task>
            ))}
        </div>
        )
    }
}


export default Tasks