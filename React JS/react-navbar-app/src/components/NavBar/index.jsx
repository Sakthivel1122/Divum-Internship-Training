import React from "react";
import "./NavBar.css";
import { Link } from "react-scroll";
const NavBar = () => {
  return (
    <div className="NavBar">
      <h2 className="logo">Logo</h2>
      <div className="nav-links">
        <Link to="home" className="nav-link active-navbar">
          Home
        </Link>
        <Link to="service" className="nav-link">
          Service
        </Link>
        <Link to="about" className="nav-link">
          About
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
