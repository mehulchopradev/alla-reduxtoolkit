import { capitalize } from '../../utils/strings';

function TodoItem({ todo: { title, createdDate }, handleChange }) {
  return (
    <div className='todo-item'>
      <input type="checkbox" onClick={handleChange}/>
      <span>{capitalize(title)}</span>
      <span>({createdDate})</span>
    </div>
  )
}

export default TodoItem;