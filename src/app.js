import React from "react";
import "./app.css";
import Canvas from "./canvas";
import Sidebar from "./sidebar";
import { Route, Switch, HashRouter } from "react-router-dom";
import Window2 from "./window2";
import Window3 from "./window3";
import Window4 from "./window4";

function App() {
  return (
    <div className="whole-page">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="canvas">
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Canvas} />
            <Route path="/window2" component={Window2} />
            <Route path="/window3" exact component={Window3} />
            <Route path="/window4" component={Window4} />
          </Switch>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
