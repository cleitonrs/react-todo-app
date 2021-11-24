import React from 'react'
import TodoForm from './TodoForm'
import { BsTrash } from 'react-icons/bs'

const Todo = ({todos, completeTodo, removeTodo}) => {

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo__row complete' : 'todo__row'} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <BsTrash
        onClick={() => removeTodo(todo.id)}
        className="delete__icon" />
      </div>
    </div>
  ))
}

export default Todo
