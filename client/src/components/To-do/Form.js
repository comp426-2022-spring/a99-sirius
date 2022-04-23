import React from 'react'

function Form({ setInputText, todos, setTodos, inputText, setStatus }) {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault(); // Prevents default behavior (from refreshing).

        // Create object.
        setTodos([...todos, { text: inputText, completed: false, id: Math.raondom() * 1000 }]);

        // Resets the Input Text back to empty.
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form>
            <input
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                placeholder='Insert To-do'
                className="todo-input"
            />

            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className='fas fa-plus-square'></i>
            </button>

            <div className='select'>
                <select onChange={statusHandler} name="todos" className='filter-todo'>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Not Completed</option>
                </select>
            </div>

        </form>
    )
}

export default Form