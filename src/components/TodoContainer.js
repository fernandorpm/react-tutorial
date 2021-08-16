import React, { useState } from "react"
import Navbar from "./Navbar";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import { Route, Switch } from "react-router-dom"
import About from "../pages/About"
import NotMatch from "../pages/NotMatch"

import { v4 as uuidv4 } from "uuid";

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: "Setup development environment",
      completed: true
    },
    {
      id: uuidv4(),
      title: "Develop website and add content",
      completed: false
    },
    {
      id: uuidv4(),
      title: "Deploy to live server",
      completed: false
    }
  ])

  const handleChange = id => {
    setTodos(todos.map(todo => {

      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;

    }));
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => {
      return todo.id !== id
    }));
  }

  const addTodo = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    setTodos([...todos, newTodo]);
  }

  const setUpdate = (updatedTitle, id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.title = updatedTitle
      }
      return todo
    }));
  }

  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path='/'>
        <div className="container">
          <div className="inner">
            <Header />
            <InputTodo addTodoProps={addTodo} />
            <TodosList 
              todos={todos}
              handleChangeProps={handleChange}
              deleteTodoProps={deleteTodo}
              setUpdateProps={setUpdate}
            />
          </div>
        </div>
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="*">
        <NotMatch />
      </Route>
    </Switch>
    </>
  )
}
export default TodoContainer