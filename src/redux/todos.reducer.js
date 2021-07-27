import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  todoList: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (currentState, action) => {
      currentState.todoList.push({
        id: currentState.todoList.length + 1,
        title: action.payload,
        createdDate: moment(new Date()).format('DD-MM-YYYY')
      });
    },

    deleteTodos: (currentState, action) => {
      const todosToDelete = action.payload;
      const ids = todosToDelete.map(({ id }) => id);

      currentState.todoList = currentState.todoList.filter(todo => {
        return !ids.includes(todo.id);
      });
    }
  }
});

export const { addTodo, deleteTodos } = todosSlice.actions;

export default todosSlice.reducer;