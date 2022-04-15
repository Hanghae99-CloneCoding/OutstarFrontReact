import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";

// pages
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Signup from "../pages/Signup";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/main" exact component={Main} />
      <Route path="/detail" component={Detail} />
    </div>
  );
}

export default App;
