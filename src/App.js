import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import uuidv4 from "uuid/v4";
import "normalize.css";
import styled from "styled-components";
import axios from 'axios'

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const todoTitleRef = useRef();

   useEffect(() => {
    async function getTodos() {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      const dataTodos = res.data
      if(dataTodos) setTodos(dataTodos)
    }
    getTodos()
  }, [])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo(e) {
    const Title = todoTitleRef.current.value;
    const id = uuidv4();
    if (Title === "") return;
    setTodos(prevTodo => {
      return [...prevTodo, { id: id, title: Title, completed: false }];
    });
    todoTitleRef.current.value = "";
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

  const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    background: #55b9f3;
  `;

  return (
    <Wrapper>
      <TodoList todos={todos} toggleTodo={handleToggleTodo} />
      <input ref={todoTitleRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Todos</button>
      <div style={{ textAlign: "center" }}>
        {todos.filter(todo => !todo.completed).length} left to do
      </div>
    </Wrapper>
  );
}

export default App;
