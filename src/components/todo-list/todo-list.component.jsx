import React from 'react';
import { useSelector } from 'react-redux';
import './todo-list.styles.scss';
import TodoItem from '../todo-item/todo-item.component'

function TodoList({ handleChange }) {
  const todos = useSelector(state => state.todos.todoList);

  return (
    <div className="todo-list">
      {
        todos.length ? todos.map(todo =>
          <TodoItem
            todo={todo}
            key={todo.id}
            handleChange={(({ target: { checked } }) =>
              handleChange(todo, checked)
            )} />
        ) :
          (<p>No todos added here</p>)
      }
    </div>
  )
}

export default React.memo(TodoList);