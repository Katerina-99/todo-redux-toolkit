import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../../app/todoSlice";
import cancelIcon from "../../img/cancel.svg";
import saveIcon from "../../img/done.svg";

const TodoListItemEdit = ({ title, id, setIsEditing, text }) => {
  const dispatch = useDispatch();
  const [editTask, setEditTask] = useState(title);
  console.log(editTask);

  const handleUpdate = () => {
    dispatch(editTodo({id, editTask}));
    setIsEditing(false);
  }

  const handleClose = () => {
    setEditTask('');
    setIsEditing(false);
  }

  return (
    <div className="Task-wrapper">
      <div>
        <input
          type="text"
          value={editTask}
          onChange={(e) => setEditTask(e.target.value)}
        />
      </div>
      <div>
        <img className="Task-image" src={saveIcon} alt="SaveIcon" onClick={() => handleUpdate()} />
        <img className="Task-image" src={cancelIcon} alt="CancelIcon" onClick={() => handleClose()}/>
      </div>
    </div>
  );
};

export default TodoListItemEdit;
