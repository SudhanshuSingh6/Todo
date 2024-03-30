import { createSlice } from '@reduxjs/toolkit';

const localStorageTodos = JSON.parse(localStorage.getItem('todoList'));

if (!localStorageTodos) {
  const initalTodos = {
    todos: [],
  };

  localStorage.setItem('todoList', JSON.stringify(initalTodos));
}

const initialState =
  JSON.parse(localStorage.getItem('todoList')) !== null
    ? JSON.parse(localStorage.getItem('todoList'))
    : { todos: [] };

const listSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    addTodo(state, action) {
      const newTodo = action.payload;
      state.todos.push(newTodo);
      localStorage.setItem('todoList', JSON.stringify(state));
    },
    deleteTodo(state, action) {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
      localStorage.setItem('todoList', JSON.stringify(state));
    },
    toggleCheck(state, action) {
      const id = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem('todoList', JSON.stringify(state));
    },
  },
});

export const listActions = listSlice.actions;

export default listSlice;
