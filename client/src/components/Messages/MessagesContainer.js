import React, { useState, useEffect } from "react";
import Message from "./Messages";
import Status from "./Status";
import Notes from "./Notes";
import { v4 as uuidv4 } from "uuid";
import "./messagesContainer.css";

export default function Messages() {
  const initialTodo = JSON.parse(window.localStorage.getItem("todos") || "[]");

  const [todos, setTodos] = useState(initialTodo);
  // const [todos, setTodos] = useState([{ task: "hello" }]);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: uuidv4(), task: newTodoText }]);
  };

  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  return (
    <div className="div3">
      <Status />
      <Message todos={todos} removeTodo={removeTodo} />
      <Notes addTodo={addTodo} />
    </div>
  );
}
