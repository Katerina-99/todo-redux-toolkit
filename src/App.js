import React from "react";
import AddTodoForm from "./features/components/AddTodoForm";
import TodoList from "./features/components/TodoList";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
