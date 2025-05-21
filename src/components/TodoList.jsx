import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from '../firebase'


// const SAVED_ITEMS = "saveItems";

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
//     if (savedItems) {
//       setTodos(savedItems)
//     }
//   }, [])

//   useEffect(() => {
//     localStorage.setItem(SAVED_ITEMS, JSON.stringify(todos))
//   }, [todos])

//   const addTodo = (todo) => {
//     // validation for no text or white space with regex
//     if (!todo.text || /^\s*$/.test(todo.text)) {
//       return
//     }
//     const newTodos = [...todos, todo];
//     setTodos(newTodos);
//   };

//   const updateTodo = (todoId, newValue) => {
//     if (!newValue.text || /^\s*$/.test(newValue.text)) {
//       return
//     }
//     setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
//   };


//   const removeTodo = (id) => {
//     const removeArr = [...todos].filter((todo) => todo.id !== id);
//     setTodos(removeArr);
//   };

//   const completeTodo = (id) => {
//     let updatedTodos = todos.map((todo) => {
//       if (todo.id === id) {
//         todo.isComplete = !todo.isComplete;
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   };

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [newTask, setNewTask] = useState('')
  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')

  const todosCollection = collection(db, 'todos')

  useEffect(() => {
    const unsubscribe = onSnapshot(todosCollection, (snapshot) => {
      const tasks = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
      setTodos(tasks)
    })
  
    return () => unsubscribe()
  }, [todosCollection])
  
  const addTask = async () => {
    const trimmed = newTask.trim()
    if (!trimmed) return
    await addDoc(todosCollection, {
      text: trimmed, 
      completed: false,
      createAt: new Date(),
    })
    setNewTask('')
  }
  
  const deleteTask = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }
  
  const toggleComplete = async (id, currentState) => {
    await updateDoc(doc(db, 'todos', id), {
      completed: !currentState,
    })
  }

  const handleEditToggle = async (todo) => {
    if (editId === todo.id) {
      if (!editText.trim()) return 
      await updateDoc(doc(db, 'todos', todo.id), {
        text: editText.trim(),
      })
      setEditId(null)
      setEditText('')
    } else {
      setEditId(todo.id)
      setEditText(todo.text)
    }
  }

    return (
      <>
        <h1>Quais são as tarefas de hoje?</h1>
        <TodoForm onSubmit={addTask} />
        {/* <Todo
          todos={todos}
          completeTodo={toggleComplete}
          removeTodo={deleteTask}
          updateTodo={handleEditToggle}
        /> */}
        <Todo 
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          handleEditToggle={handleEditToggle}
        />
      </>
    );
}


export default TodoList;
