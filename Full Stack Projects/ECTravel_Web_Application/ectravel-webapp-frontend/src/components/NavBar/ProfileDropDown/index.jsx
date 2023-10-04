import React, { useEffect, useState } from "react";
import "./ProfileDropDown.css";
import { useNavigate } from "react-router-dom";
import { useMain } from "../../../contexts/MainContext";
const ProfileDropDown = () => {
  const navigate = useNavigate();
  const [currentPath,setCurrentPath] = useState(window.location.href);
  const mainContext = useMain();
  const handleLogOut = () => {
    localStorage.setItem("logInStatus", false);
    localStorage.setItem("loggedUser", "");
    mainContext.setLogInStatus(JSON.parse(localStorage.getItem("logInStatus")));
    navigate("/");
  }; 
  const handleProfileDetails = () => {
    navigate(`/profile`, { state: mainContext.loggedUser });
  };
  useEffect(()=>{
    setCurrentPath(window.location.href);
  },[])
  return (
    <div className="ProfileDropDown">
      <ul>
        {
          !currentPath.includes("profile") &&
        <li onClick={handleProfileDetails}>Profile details</li>
        }
        <li onClick={handleLogOut}>Log out</li>
      </ul>
    </div>
  );
};

export default ProfileDropDown;
