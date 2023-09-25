import React, { useEffect, useImperativeHandle, useState } from "react";
import "./NavBar.css";
import {
  Link,
  NavLink,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import ServicesDropDown from "../ServicesDropDown";
import ProfileDropDown from "../ProfileDropDown";
import profile_pic from "../../assets/images/profile-pic.webp";
import { useMain } from "../../Contexts/MainContext";

const NavBar = () => {
  const [servicesDropDown, setServicesDropDown] = useState(false);
  const [profileDropDown, setProfileDropDown] = useState(false);

  const [currentPath, setCurrentPath] = useState("");
  const mainContext = useMain();
  useEffect(() => {
    setCurrentPath(window.location.pathname);
    mainContext.setLogInStatus(JSON.parse(localStorage.getItem("logInStatus")));
    mainContext.handleLoggedUser(localStorage.getItem("loggedUser"));
  }, []);

  const navigate = useNavigate();
  const handleSignUpBtn = () => {
    mainContext.setNavBarVisiblity(false);
    navigate("/signup");
  };
  const click = () => {
    console.log("HI");
  }
  return (
    <div className="NavBar">
      <div className="nav-content container">
        <span className="logo">ECTravel</span>
        <ul className="nav-links">
          <CustomLink to="/" text="Home" path={currentPath} />
          <NavLink to="/services"
          onClick={click}
            className="nav-link"
            onMouseEnter={() => setServicesDropDown(true)}
            onMouseLeave={() => setServicesDropDown(false)}
          >
            Services
            {servicesDropDown && <ServicesDropDown />}
          </NavLink>
          <CustomLink to="/about" text="About" path={currentPath} />
          {!mainContext.isLoggedIn && (
            <button className="nav-link sign-in-btn" onClick={handleSignUpBtn}>
              Sign Up
            </button>
          )}
          {mainContext.isLoggedIn && (
            <li
              className="profile-nav-link-wrapper"
              onMouseEnter={() => setProfileDropDown(true)}
              onMouseLeave={() => setProfileDropDown(false)}
            >
              <img className="profile-pic" src={profile_pic} alt="profile" />
              {profileDropDown && (
                <ProfileDropDown/>
              )}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

const CustomLink = ({ to, text, path }) => {
  return (
    <NavLink
      className={"nav-link " + (path.endsWith(to) ? "active-link" : "")}
      to={to}
    >
      {text}
    </NavLink>
  );
};
export default NavBar;
