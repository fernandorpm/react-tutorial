import React, { useState } from 'react'
import styles from "./TodoItem.module.css"

const TodoItem = ({ todo, handleChangeProps, deleteTodoProps, setUpdateProps }) => {
  const [editing, setEditing] = useState(false);

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const handleEditing = () => {
    setEditing(true);
  }

  const handleUpdatedDone = event => {
    if (event.key === "Enter") {
      setEditing(false);
    }
  }

  let viewMode = {}
  let editMode = {}

  if (editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input 
          type="checkbox"
          className={styles.checkbox}
          checked={todo.completed}
          onChange={ () => handleChangeProps(todo.id) }
        />  
        <span style={todo.completed ? completedStyle : null}>
          {todo.title}
        </span>
        <button onClick={ () => deleteTodoProps(todo.id) }>✖</button>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={todo.title}
        onChange={ e => setUpdateProps(e.target.value, todo.id) }
        onKeyDown={handleUpdatedDone}
      />
    
    </li>
  )
}

export default TodoItem;