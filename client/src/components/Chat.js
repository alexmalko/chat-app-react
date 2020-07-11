import React from "react";
import Navbar from "./Navbar/Navbar";
import Channels from "./Channels/Channels";
import Workspaces from "./Workspaces/Workspaces";
import Messages from "./Messages/MessagesContainer";
import "./chat.css";

export default function Chat() {
  return (
    <div className="chat">
      <Navbar />
      <Channels />
      <Workspaces />
      <Messages />
    </div>
  );
}
