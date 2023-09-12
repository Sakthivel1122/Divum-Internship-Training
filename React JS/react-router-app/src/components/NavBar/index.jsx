import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="NavBar container">
      <span>Logo</span>
      <ul>
        <NavLink to="/">Home</NavLink>
        <br />
        <NavLink to="/books" replace>
          BookList
        </NavLink>
        <br />
        {/* <NavLink to="*">Book</NavLink> */}
      </ul>
    </div>
  );
};

export default NavBar;
