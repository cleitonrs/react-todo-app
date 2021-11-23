import React, {useState} from 'react'
import TodoForm from './TodoForm'

const TodoList = () => {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    if (todo) {
      const newTodos = [...todos, todo]
      setTodos(newTodos)
    }
  }

  return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
    </div>
  )
}

export default TodoList
