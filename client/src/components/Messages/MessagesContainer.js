import React from "react";
import Message from "./Messages";
import Status from "./Status";
import Notes from "./Notes";
import "./messagesContainer.css";

export default function Messages() {
  return (
    <div class="div3">
      <Status />
      <Message />
      <Notes />
    </div>
  );
}
