import React from 'react'
import 'material-icons';

function Todo({ text, todo, todos, setTodos }) {
    // Events
    const deleteHandler = () => {
        setTodos(todos.filter((element) => element.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(todos.map(element => {
            if (element.id === todo.id) {
                return {
                    ...element, completed: !element.completed
                }
            }
            return element;
        }));
    };

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {text}
            </li>


            <label className="completed">
                <input onClick={completeHandler} id="indeterminate-checkbox" type="checkbox" />
                <span>Completed</span>
            </label>


            <button onClick={deleteHandler} className="trash-button">
                <i class="small material-icons">clear</i>
            </button>
        </div>
    )
}

export default Todo