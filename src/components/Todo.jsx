import { useState } from "react";
import TodoForm from "./TodoForm";
import { BsTrash } from "react-icons/bs";
import { TiEdit } from "react-icons/ti";

const Todo = ({ todos, toggleComplete, deleteTask, updateTask }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTask(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo) => (
    <div
      className={todo.completed ? "todo__row complete" : "todo__row"}
      key={todo.id}
    >
      <div key={todo.id} onClick={() => toggleComplete(todo.id, todo.completed)}>
        {todo.text}
      </div>
      <div className="icons">
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit__icon"
        />
        <BsTrash onClick={() => deleteTask(todo.id)} className="delete__icon" />
      </div>
    </div>
  ));
};

export default Todo;
