import React from "react";
import MessagesWindow from "./MessageWindow/MessagesWindow";
import Status from "./Status/Status";
import MessageBox from "./MessageBox/MessageBox";
import "./messagesContainer.css";

export default function Container() {
  return (
    <div className="div3">
      <Status />
      <MessagesWindow />
      <MessageBox />
    </div>
  );
}
