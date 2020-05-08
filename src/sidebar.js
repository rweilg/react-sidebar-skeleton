import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <h2 className="logo">logo</h2>
      <div className="menu">
        <h1 className="menu-element">title 1</h1>
        <h2 className="menu-element">title 2</h2>
      </div>
      <div className="bottom-element">
        <h1>log out</h1>
      </div>
    </div>
  );
}

export default Sidebar;
