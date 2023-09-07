import React from "react";
import "./NavBar.css";
import { Link } from "react-scroll";
const NavBar = () => {
  return (
    <div className="NavBar">
      <h2 className="logo">Logo</h2>
      <div className="nav-links">
        <Link
          to="home"
          activeClass="active-navbar"
          spy={true}
          offset={0}
          smooth={true}
          duration={500}
          className="nav-link"
        >
          Home
        </Link>
        <Link
          to="service"
          activeClass="active-navbar"
          spy={true}
          offset={0}
          smooth={true}
          duration={500}
          className="nav-link"
        >
          Service
        </Link>
        <Link
          to="about"
          activeClass="active-navbar"
          spy={true}
          offset={0}
          smooth={true}
          duration={500}
          className="nav-link"
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
