import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const SAVED_ITEMS = "saveItems"

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
    if (savedItems) {
      setTodos(savedItems)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo) => {
    if (todo.text) {
      const newTodos = [...todos, todo];
      setTodos(newTodos);
    }
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter(todo => todo.id !== id)
    setTodos(removeArr)
  }

  const completeTodo = (id)  => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
    </div>
  );
};

export default TodoList;
