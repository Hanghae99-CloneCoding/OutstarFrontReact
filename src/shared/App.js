import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import { history } from "../redux/configureStore";

// pages
import Login from "../pages/Login";
import Main from "../pages/Main";
import Signup from "../pages/Signup";
import MenuX from "../components/MenuX";
import Detail from "../components/Detail";
import Addpost from "../pages/Addpost";

//components
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <>
          <Route path="/menu" exact component={MenuX} />
          <Route path="/detail" exact component={Detail} />

          <div>
            <Header />
            <Sidebar />
            <Route path="/main" exact component={Main} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/" exact component={Login} />
            <Route path="/addpost" exact component={Addpost} />
          </div>
        </>
      </ConnectedRouter>
    </div>
  );
}

export default App;
