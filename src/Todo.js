import React from "react";
import styled from "styled-components";

export default function Todo({ todo, toggleTodo }) {
  const Label = styled.label``;

  const TodoName = styled.h1`
    border-radius: 50px;
    background: linear-gradient(145deg, #5bc6ff, #4da7db);
    box-shadow: 30px 30px 60px #489dcf, -30px -30px 60px #62d5ff;
  `;

  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  return (
    <div>
      <Label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleTodoClick}
        />
        <TodoName>{todo.name}</TodoName>
      </Label>
    </div>
  );
}
