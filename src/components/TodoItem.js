import React from 'react'

const TodoItem = ({ todo, handleChangeProps, deleteTodoProps }) => {
  return (
    <li>
    <input 
      type="checkbox" 
      checked={todo.completed}
      onChange={ () => handleChangeProps(todo.id) }
    />  
      {todo.title}
    <button onClick={ () => deleteTodoProps(todo.id) }>Delete</button>
    </li>
  )
}

export default TodoItem;