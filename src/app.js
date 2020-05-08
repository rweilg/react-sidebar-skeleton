import React from "react";
import "./app.css";
import Canvas from "./canvas";
import Sidebar from "./sidebar";

function App() {
  return (
    <div className="whole-page">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="frame">
        <Canvas />
      </div>
    </div>
  );
}

export default App;
