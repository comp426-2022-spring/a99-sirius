import React from 'react'

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
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {text}
            </li>

            <button onClick={completeHandler} className="complete-button">
                <i className='fas fa-check'></i>
            </button>

            <button onClick={deleteHandler} className="trash-button">
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default Todo