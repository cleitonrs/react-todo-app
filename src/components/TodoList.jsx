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
import { db } from "../firebase";
import { query, orderBy } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const todosCollection = collection(db, "todos");

  useEffect(() => {
    const q = query(todosCollection, orderBy("createAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const tasks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTodos(tasks);
    });

    return () => unsubscribe();
  }, [todosCollection]);

  const addTask = async (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    await addDoc(todosCollection, {
      text: trimmed,
      completed: false,
      createAt: serverTimestamp(),
    });
  };

  const deleteTask = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  const toggleComplete = async (id, currentState) => {
    await updateDoc(doc(db, "todos", id), {
      completed: !currentState,
    });
  };

  const updateTask = async (id, newText) => {
    if (!newText.trim()) return;
    await updateDoc(doc(db, "todos", id), {
      text: newText.trim(),
    });
  };

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
        updateTask={updateTask}
      />
    </>
  );
};

export default TodoList;
