import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from '../../app/todoSlice';

const AddTodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addNewTask = () => {
    dispatch(addTodo({
      title: text,
      id: Date.now(),
      completed: false,
    }))
    setText("");
  }

  return (
    <header className="App-header">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => addNewTask()}>Add</button>
      </div>
  </header>
  );
};

export default AddTodoForm;
