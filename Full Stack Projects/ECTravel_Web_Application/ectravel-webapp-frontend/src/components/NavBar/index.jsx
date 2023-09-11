import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import ServicesDropDown from "../ServicesDropDown";

const NavBar = () => {
  const [servicesDropDown, setServicesDropDown] = useState(false);
  return (
    <div className="NavBar">
      <div className="nav-content container">
        <span className="logo">ECTravel</span>
        <ul className="nav-links">
          <CustomLink to="/" text="Home" />
          <li
            className={"nav-link"}
            onMouseEnter={() => setServicesDropDown(true)}
            onMouseLeave={() => setServicesDropDown(false)}
          >
            Services
            {servicesDropDown && <ServicesDropDown />}
          </li>
          <CustomLink to="/about" text="About" />
          <CustomLink to="/profile" text="Profile" />
        </ul>
      </div>
    </div>
  );
};

const CustomLink = ({ to, text }) => {
  let isActive;
  isActive = window.location.pathname.endsWith(to);
  return (
    <Link className={"nav-link " + (isActive ? "active-link" : "")} to={to}>
      {text}
    </Link>
  );
};
export default NavBar;
