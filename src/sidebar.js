import React from "react";
import "./sidebar.css";
import { HashRouter, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <h2 className="logo">logo</h2>
      <div className="menu">
        <HashRouter>
          <h2>
            {" "}
            <NavLink to="/" className="menu-element">
              window1
            </NavLink>{" "}
          </h2>
          <h2>
            {" "}
            <NavLink to="/window2" className="menu-element">
              window2
            </NavLink>{" "}
          </h2>
          <h2>
            {" "}
            <NavLink to="/window3" className="menu-element">
              window3
            </NavLink>{" "}
          </h2>
          <h2>
            {" "}
            <NavLink to="/window4" className="menu-element">
              window4
            </NavLink>{" "}
          </h2>
        </HashRouter>
      </div>
      <div className="bottom-element">
        <h2>log out</h2>
      </div>
    </div>
  );
}

export default Sidebar;
