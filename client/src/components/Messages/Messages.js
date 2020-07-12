import React from "react";

export default function Message({ todos, removeTodo, id }) {
  return (
    <div className="div3-2">
      {todos.map((todo, i) => (
        <div className="message">
          <div className="profile-picture">
            <i className="fas fa-id-badge"></i>
          </div>
          <div className="profile-status">
            Alex Malko 4:48 PM
            <i className="fas fa-trash" onClick={() => removeTodo(todo.id)}></i>
          </div>
          <div className="profile-message">{todo.task}</div>
        </div>
      ))}
    </div>
  );
}
