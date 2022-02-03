import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Svelt Hacker News</h1>
      <nav className="gnb">
        <NavLink to="/" className="menu_list">
          Home
        </NavLink>
        <NavLink to="/top" className="menu_list">
          Top
        </NavLink>
        <NavLink to="/new" className="menu_list">
          New
        </NavLink>
        <NavLink to="/show" className="menu_list">
          Show
        </NavLink>
        <NavLink to="/ask" className="menu_list">
          Ask
        </NavLink>
        <NavLink to="/job" className="menu_list">
          Job
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
