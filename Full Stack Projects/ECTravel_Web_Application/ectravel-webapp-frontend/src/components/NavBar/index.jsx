import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Link, NavLink, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import ServicesDropDown from "../ServicesDropDown";
import ProfileDropDown from "../ProfileDropDown";
import profile_pic from "../../assets/images/profile-pic.webp";

const NavBar = ({ setNavBarVisiblity, isLoggedIn, setLogInStatus }) => {
  const [servicesDropDown, setServicesDropDown] = useState(false);
  const [profileDropDown, setProfileDropDown] = useState(false);

  const [currentPath, setCurrentPath] = useState("");
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);
  const navigate = useNavigate();
  const handleSignUpBtn = () => {
    setNavBarVisiblity(false);
    navigate("/signup");
  };
  return (
    <div className="NavBar">
      <div className="nav-content container">
        <span className="logo">ECTravel</span>
        <ul className="nav-links">
          <CustomLink to="/" text="Home" path={currentPath} />
          <li
            className="nav-link"
            onMouseEnter={() => setServicesDropDown(true)}
            onMouseLeave={() => setServicesDropDown(false)}
          >
            Services
            {servicesDropDown && <ServicesDropDown />}
          </li>
          <CustomLink to="/about" text="About" path={currentPath} />
          {!isLoggedIn && (
            <button className="nav-link sign-in-btn" onClick={handleSignUpBtn}>
              Sign Up
            </button>
          )}
          {
            isLoggedIn && (
              <li className="profile-nav-link-wrapper" 
              onMouseEnter={() => setProfileDropDown(true)}
            onMouseLeave={() => setProfileDropDown(false)}>
              <img className="profile-pic" src={profile_pic} alt="profile" />
              { profileDropDown && <ProfileDropDown setLogInStatus={setLogInStatus}/>}
              </li>
            )
          }
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
