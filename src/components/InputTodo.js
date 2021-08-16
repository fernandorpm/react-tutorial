import React, { useState } from 'react'

const InputTodo = ({ addTodoProps }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim()) {
      addTodoProps(title);
      setTitle('');
    } else {
      alert('Please write an item!');
    }

  }

  const onChange = e => {
    setTitle(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input 
        type="text"
        placeholder="Add todo..."
        className="input-text"
        value={title}
        onChange={onChange} 
      />
      <button className="input-submit">Submit</button>
    </form>
  )
}

export default InputTodo;