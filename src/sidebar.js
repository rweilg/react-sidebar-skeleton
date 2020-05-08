import React from "react";
import "./sidebar.css";
import { HashRouter, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <h2 className="logo"></h2>
      <div className="menu">
        <HashRouter>
          <h2>
            {" "}
            <NavLink exact to="/" className="menu-element">
              Home
            </NavLink>{" "}
          </h2>
          <h2>
            {" "}
            <NavLink to="/window2" className="menu-element">
              Dashboard
            </NavLink>{" "}
          </h2>
          <h2>
            {" "}
            <NavLink to="/window3" className="menu-element">
              Users
            </NavLink>{" "}
          </h2>
          <h2>
            {" "}
            <NavLink to="/window4" className="menu-element">
              Settings
            </NavLink>{" "}
          </h2>
        </HashRouter>
      </div>
      <div className="bottom-element">
        <h2></h2>
      </div>
    </div>
  );
}

export default Sidebar;
