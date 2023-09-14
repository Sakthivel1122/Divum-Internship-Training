import React, { useEffect, useState } from "react";
import "./ProfileDropDown.css";
import { useNavigate } from "react-router-dom";
const ProfileDropDown = ({ setLogInStatus, loggedUser }) => {
  const navigate = useNavigate();
  const [currentPath,setCurrentPath] = useState(window.location.href);
  const handleLogOut = () => {
    localStorage.setItem("logInStatus", false);
    localStorage.setItem("loggedUser", "");
    setLogInStatus(JSON.parse(localStorage.getItem("logInStatus")));
    navigate("/");
  }; 
  const handleProfileDetails = () => {
    navigate(`/profile`, { state: loggedUser });
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
