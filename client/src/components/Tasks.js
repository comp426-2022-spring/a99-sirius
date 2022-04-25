import React, {Component} from 'react'

import Task from './Task'
import Form from './To-do/Form'


class Tasks extends Component{
    componentDidMount(){
        this.props.fetchTasks({ login : this.props.user.login})
    }

    render(){
        return(
            <div>
            <Form/>
            {this.props.tasks.tasks.map((task, index) => (
                <Task key={index} taskInfo={task}></Task>
            ))}
        </div>
        )
    }
}


export default Tasks