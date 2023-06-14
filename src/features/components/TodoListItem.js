import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleComplete } from "../../app/todoSlice";
import TodoListItemEdit from "./TodoListItemEdit";
import deleteIcon from "../../img/delete.svg";
import editIcon from "../../img/edit.svg";

const TodoListItem = ({ id, title, completed, index, }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  // const [editTask, setEditTask] = useState(title);

  const handleDeleteTask = () => {
    dispatch(removeTodo({ id: id }));
  };

  const handleCompleteCheckbox = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  return (
    <div className="Task-container" key={`task-${index}`}>
      {isEditing ? (
        <TodoListItemEdit id={id} title={title} setIsEditing={setIsEditing} />
      ) : (
        <div className="Task-wrapper">
          <div>
            <input
              type="checkbox"
              checked={completed}
              onChange={handleCompleteCheckbox}
            />
            <span>{title}</span>
          </div>
          <div>
            {!completed && (
              <img
                className="Task-image"
                src={editIcon}
                alt="EditIcon"
                onClick={() => setIsEditing(true)}
              />
            )}
            <img
              className="Task-image"
              src={deleteIcon}
              alt="DeleteIcon"
              onClick={handleDeleteTask}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoListItem;
