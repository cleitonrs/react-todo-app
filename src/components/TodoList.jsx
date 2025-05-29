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
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";
import { db, auth } from "../firebase";
import { useAuth } from "./login/AuthContext";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const { currentUser } = useAuth();

  const navigate = useNavigate();

  const todosCollection = collection(db, "todos");

  useEffect(() => {
    if (!currentUser) return;

    const q = query(todosCollection, where("userId", "==", currentUser.uid));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const tasks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // const sortedTasks = tasks.sort((a, b) => {
      //   if (!a.createAt) return 1
      //   if (!b.createAt) return -1
      //   return a.createAt.seconds - b.createAt.seconds
      // })

      const sortedTasks = tasks.sort((a, b) => {
        if (a.completed === b.completed) {
          if (!a.createAt) return 1;
          if (!b.createAt) return -1;
          return a.createAt.seconds - b.createAt.seconds;
        }
        return a.completed ? 1 : -1;
      });

      setTodos(sortedTasks);
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const addTask = async (text) => {
    const trimmed = text.trim();
    if (!currentUser || !trimmed) return;

    await addDoc(todosCollection, {
      text: trimmed,
      completed: false,
      createAt: serverTimestamp(),
      userId: currentUser.uid,
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

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  };

  return (
    <>
      <button className="exit-button" onClick={handleLogout}>
        {" "}
        <FiLogOut /> Sair
      </button>
      <h1>Quais são as tarefas de hoje?</h1>
      <TodoForm onSubmit={addTask} />
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
