import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Chat from "./components/Chat";
import Demo from "./Demo";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Chat} />
          <Route exact path="/demo" component={Demo} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
