import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, toggleTodo }) {
  return todos.map(todo => {
    return <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo}/>;
  });
}
