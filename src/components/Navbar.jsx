import React from "react";
import { NavLink, Link } from "react-router-dom";

import AvatarImage from "../assets/images/avatar-icon.png";

const Navbar = () => {
  return (
    <header>
      <NavLink className="site-logo" to="/">
        #VanLife
      </NavLink>
      <nav>
        <NavLink
          to="./host"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="./vans"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="./about"
          className={({ isActive }) => (isActive ? "active-link" : null)}
        >
          About
        </NavLink>
        <Link to="login" className="login-link">
          <img src={AvatarImage} className="login-icon" alt="" />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
