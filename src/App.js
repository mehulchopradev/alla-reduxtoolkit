import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import TodoForm from './components/todo-form/todo-form.component';
import TodoList from './components/todo-list/todo-list.component';
import { deleteTodos } from './redux/todos.reducer';

function App() {
  const dispatch = useDispatch();
  const [checkedTodos, setCheckedTodos] = useState([]);

  const handleChange = (todo, checked) => {
    if (checked) {
      setCheckedTodos(checkedTodos.concat([todo]))
    } else {
      setCheckedTodos(checkedTodos.filter(existingTodo => existingTodo !== todo))
    }
  };

  const removeTodos = () => {
    dispatch(deleteTodos(checkedTodos));
    setCheckedTodos([]);
  };

  return (
    <div className="App">
      <TodoForm/>
      <TodoList handleChange={handleChange}/>
      <button disabled={!checkedTodos.length} onClick={removeTodos}>Clear completed todos</button>({checkedTodos.length})
    </div>
  );
}

export default App;
