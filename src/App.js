import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import uuidv4 from "uuid/v4";
import "normalize.css"

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    const id = uuidv4();
    if (name === "") return;
    setTodos(prevTodo => {
      return [...prevTodo, { id: id, name: name, completed: false }];
    });
    todoNameRef.current.value = "";
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos);
  }

  function handleToggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={handleToggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Todos</button>
      <div>{todos.filter(todo => !todo.completed).length} left to do</div>
    </>
  );
}

export default App;
