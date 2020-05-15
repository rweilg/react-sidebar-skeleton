import React from "react";
import "./sidebar.css";
import "./index.css";
import { HashRouter, NavLink } from "react-router-dom";
import WalletIcon from "./icons/wallet";
import NewspaperIcon from "./icons/newspaper";
import MessagesIcon from "./icons/messages";
import ArchiveIcon from "./icons/archive";
import SettingsIcon from "./icons/settings";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <h2 className="logo"></h2>
      <div className="menu">
        <HashRouter>
          <h2>
            {" "}
            <NavLink exact to="/" className="menu-element">
              <NewspaperIcon />
              Home
            </NavLink>{" "}
          </h2>

          <h2>
            {" "}
            <NavLink to="/window2" className="menu-element">
              <WalletIcon />
              Wallet
            </NavLink>{" "}
          </h2>

          <h2>
            {" "}
            <NavLink to="/window3" className="menu-element">
              <MessagesIcon />
              Messages
            </NavLink>{" "}
          </h2>
          <h2>
            {" "}
            <NavLink to="/window4" className="menu-element">
              <ArchiveIcon />
              Archive
            </NavLink>{" "}
          </h2>

          <h2>
            {" "}
            <NavLink to="/window5" className="menu-element">
              <SettingsIcon />
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
