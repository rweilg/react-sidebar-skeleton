import React from "react";
import "./app.css";
import Canvas from "./canvas";
import Sidebar from "./sidebar";
import { Route, Switch, HashRouter } from "react-router-dom";
import Window2 from "./window2";
import Window3 from "./window3";
import Window4 from "./window4";
import Window5 from "./window5";

function App() {
  return (
    <div className="whole-page">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="canvas">
        <HashRouter>
          <Route exact path="/" component={Canvas} />
          <Route exact path="/window2" component={Window2} />
          <Route exact path="/window3" component={Window3} />
          <Route exact path="/window4" component={Window4} />
          <Route exact path="/window5" component={Window5} />
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
