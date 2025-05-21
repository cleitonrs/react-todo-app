import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { BsTrash } from 'react-icons/bs'
import { TiEdit } from 'react-icons/ti'

const Todo = ({todos, toggleComplete, deleteTask, handleEditToggle }) => {

  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  const submitUpdate = (value) => {
    handleEditToggle(edit.id, value)
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
      <div key={todo.id} onClick={() => toggleComplete(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text } )} className="edit__icon" />
        <BsTrash
        onClick={() => deleteTask(todo.id)}
        className="delete__icon" />
      </div>
    </div>
  ))
}

export default Todo
