import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.native_bar}></div>
      <header className={styles.header}>
        <h1 className={`${styles.logo} ft_logo`}>
          <NavLink to="/"> Svelt Hacker News</NavLink>
        </h1>
        <div className={styles.util_gnb}>
          <a className={styles.btn_color_theme}></a>
          <a className={styles.btn_customer}></a>
        </div>
      </header>
      <nav>
        <ul className={`${styles.gnb} ft_gnb`}>
          <li>
            <NavLink to="/" className="menu_list" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/top" className="menu_list" activeClassName="active">
              Top
            </NavLink>
          </li>
          <li>
            <NavLink to="/new" className="menu_list" activeClassName="active">
              New
            </NavLink>
          </li>
          <li>
            <NavLink to="/show" className="menu_list" activeClassName="active">
              Show
            </NavLink>
          </li>
          <li>
            <NavLink to="/ask" className="menu_list" activeClassName="active">
              Ask
            </NavLink>
          </li>
          <li>
            <NavLink to="/job" className="menu_list" activeClassName="active">
              Job
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
