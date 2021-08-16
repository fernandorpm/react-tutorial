import React from 'react'
import TodoItem from './TodoItem';

function TodosList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo}/>))}
    </ul> 
  )
}

export default TodosList;