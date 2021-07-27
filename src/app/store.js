import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todosReducer from '../redux/todos.reducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
});
