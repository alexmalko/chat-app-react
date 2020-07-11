import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Channels from "./components/Channels/Channels";
import Workspaces from "./components/Workspaces/Workspaces";
import Messages from "./components/Messages/MessagesContainer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Channels />
      <Workspaces />
      <Messages />
    </div>
  );
}

export default App;
