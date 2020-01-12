import React from "react";
import styled from "styled-components";

export default function Todo({ todo, toggleTodo }) {
  const TodoLabel = styled.label`
    margin: 0;
    padding: 0;
    display: flex;
    margin-top: 1rem;
    margin-bottom: 1rem;
  `;

  const TodoCheckbox = styled.input`
    margin: 0;
    padding: 0;
    display: flex;
    height: 1rem;
    width: 1rem;
    align-self: center;
    background-color: #eee;
    margin-left: 1rem;
    margin-right: 1rem;
  `;

  const TodoWrapper = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const TodoName = styled.h1`
    display: flex;
    margin: 0;
    padding: 0;
    border-radius: 50px;
    border-radius: 50px;
    background: linear-gradient(145deg, #5bc6ff, #4da7db);
    box-shadow: 14px 14px 27px #489dcf, -14px -14px 27px #62d5ff;
    padding-left: 1rem;
    padding-right: 1rem;
  `;

  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  return (
    <TodoWrapper>
      <TodoLabel>
        <TodoCheckbox
          type="checkbox"
          checked={todo.completed}
          onChange={handleTodoClick}
        />
        <TodoName>{todo.name}</TodoName>
      </TodoLabel>
    </TodoWrapper>
  );
}
