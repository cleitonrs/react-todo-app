import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { BsTrash } from 'react-icons/bs'
import { TiEdit } from 'react-icons/ti'

const Todo = ({todos, completeTodo, removeTodo, updateTodo }) => {

  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  const submitUpdate = (value) => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: ''
    })
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo__row complete' : 'todo__row'} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text } )} className="edit__icon" />
        <BsTrash
        onClick={() => removeTodo(todo.id)}
        className="delete__icon" />
      </div>
    </div>
  ))
}

export default Todo
