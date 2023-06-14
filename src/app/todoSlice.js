import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  // initialState: JSON.parse(localStorage.getItem("todos")),
  // initialState: [{}],
  initialState: [],

  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },

    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },

    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },

    editTodo: (state, action) => {
      // const index = state.findIndex((todo) => todo.id === action.payload.id);
      // const updatedTodos = state.todos.map((todo) => {
      //   if(todo.id === action.payload.id) {
      //     return {...todo, title: action.payload.updatedTask}
      //   }
      //   return todo;
      // });
      // return {
      //   ...state,
      //   todos: updatedTodos,
      // };

      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index] = { ...state[index], title: action.payload.editTask }

      // state.todos.map((todo) => {
      //   if(todo.id === action.payload.id) {
      //     return {...todo, task: action.payload.updatedTask}
      //   }
      //   return todo;
      // });
    }
  },
});

export const selectTodos = (state) => state.todos;

export const { addTodo, removeTodo, toggleComplete, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
