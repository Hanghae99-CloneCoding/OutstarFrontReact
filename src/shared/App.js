import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import { history } from "../redux/configureStore";

// pages
import Login from "../pages/Login";
import Main from "../pages/Main";
import Signup from "../pages/Signup";
import MenuO from "../components/MenuO";
import Detail from "../components/Detail";
import Addpost from "../pages/Addpost";

//components
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <switch>
          <>
            <Route path="/menuO/:postId" exact component={MenuO} />
            <Route path="/detail" exact component={Detail} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/" exact component={Login} />

            <div>
              <Header />
              <Sidebar />
              <Route path="/main" exact component={Main} />
              <Route path="/addpost" exact component={Addpost} />
            </div>
          </>
        </switch>
      </ConnectedRouter>
    </div>
  );
}

export default App;