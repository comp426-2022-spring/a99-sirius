import React, { useEffect } from 'react';
import 'material-icons';

function Form({ setInputText, todos, setTodos, inputText, setStatus }) {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }


    const submitTodoHandler = (e) => {
        e.preventDefault(); // Prevents default behavior (from refreshing)

        // Creates an object.
        setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);

        // Resets the Input Text back to empty.
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form className="Form">
            <form class="col s12">
                <div class="input-field col s12 insert">
                    <i class="material-icons prefix">create</i>
                    <input id="icon_prefix"
                        class="validate"
                        value={inputText}
                        placeholder="Insert To-do"
                        onChange={inputTextHandler}
                        type="text"
                    />
                    <label for="icon_prefix"></label>
                </div>



                <button onClick={submitTodoHandler} className="todo-button" type="submit" >
                    <i class="material-icons addbox">add_box</i>
                </button>

                <div className="input-field col s12 options">
                    <select
                        class="browser-default"
                        onChange={statusHandler}
                        name="todos"
                        className="filter-todo"

                    >
                        <option value="" disabled selected>Filter</option>
                        <option value="1">All</option>
                        <option value="2">Completed</option>
                        <option value="3">Not Completed</option>
                    </select>

                </div>
            </form>
        </form>
    )
}

export default Form