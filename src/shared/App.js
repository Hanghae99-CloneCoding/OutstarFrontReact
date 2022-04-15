import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

// pages
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Signup from "../pages/Signup";

//components
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <div>
          <Header />
          <Sidebar />
          <Route path="/main" exact component={Main} />
          <Route path="/detail" component={Detail} />
        </div>
      </Switch>
    </div>
  );
}

export default App;
