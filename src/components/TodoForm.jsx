import React, { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  // Prevent refresh page on submit
  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000), // Generate a randomic id number of 0 - 10000
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            className="todo__input edit"
            type="text"
            placeholder="Atualizar tarefa"
            value={input}
            name="text"
            onChange={handleChange}
          />
          <button className="todo__button edit">Atualizar</button>
        </>
      ) : (
        <>
          <input
            className="todo__input"
            type="text"
            placeholder="Adicionar tarefa"
            value={input}
            name="text"
            onChange={handleChange}
          />
          <button className="todo__button">Adicionar</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
