import React from "react";

export default function Notes() {
  return (
    <div class="div3-3">
      <div class="message-input">
        <input
          class="message-text"
          type="text"
          placeholder="Jot something down"
        />
      </div>
      <div class="commands-left">
        <i class="x fas fa-bolt"></i>
        <i class="x fas fa-bold"></i>
        <i class="x fas fa-italic"></i>
        <i class="x fas fa-strikethrough"></i>
        <i class="x fas fa-code"></i>
        <i class="x fas fa-link"></i>
        <i class="x fas fa-list-ul"></i>
      </div>
      <div class="commands-right">
        <i class="x fas fa-at"></i>
        <i class="x far fa-smile-wink"></i>
        <i class="x fas fa-paperclip"></i>
        <i class="x fas fa-paper-plane"></i>
      </div>
    </div>
  );
}
