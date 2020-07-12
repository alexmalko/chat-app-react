import React from "react";
import useInputState from "./useInputState";

export default function Notes({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <div className="div3-3">
      <div className="message-input">
        <form
          className="message-form"
          onSubmit={(e) => {
            e.preventDefault();
            addTodo(value);
            reset();
          }}
        >
          <input
            className="message-text"
            type="text"
            placeholder="Jot something down"
            value={value}
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="commands-left">
        <i className="x fas fa-bolt"></i>
        <i className="x fas fa-bold"></i>
        <i className="x fas fa-italic"></i>
        <i className="x fas fa-strikethrough"></i>
        <i className="x fas fa-code"></i>
        <i className="x fas fa-link"></i>
        <i className="x fas fa-list-ul"></i>
      </div>
      <div className="commands-right">
        <i className="x fas fa-at"></i>
        <i className="x far fa-smile-wink"></i>
        <i className="x fas fa-paperclip"></i>
        <i className="x fas fa-paper-plane"></i>
      </div>
    </div>
  );
}
