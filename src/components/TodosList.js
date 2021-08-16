import React from 'react'
import TodoItem from './TodoItem';

const TodosList = ({ todos, handleChangeProps, deleteTodoProps, setUpdateProps }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          setUpdateProps={setUpdateProps}
        />
      ))}
    </ul> 
  )
}

export default TodosList;