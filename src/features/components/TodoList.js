import React from "react";
import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";
import { selectTodos } from '../../app/todoSlice';

const TodoList = () => {
  const todos = useSelector(selectTodos);
  localStorage.setItem("todos", JSON.stringify(todos));
  console.log(todos);


  return (
    <div className="Tasks-container">
      {todos.map((todo, index) => (
        <TodoListItem
          key={`task-${index}`}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          index={index}
        />
      ))}
    </div>
  );
};

export default TodoList;