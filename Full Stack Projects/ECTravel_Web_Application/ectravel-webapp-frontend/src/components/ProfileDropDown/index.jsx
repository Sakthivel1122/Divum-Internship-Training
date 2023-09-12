import React from "react";
import "./ProfileDropDown.css";
import { useNavigate } from "react-router-dom";
const ProfileDropDown = ({ setLogInStatus }) => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    setLogInStatus(false);
    navigate("/", { replace: true });
  };
  return (
    <div className="ProfileDropDown">
      <ul>
        <li>Profile details</li>
        <li onClick={handleLogOut}>Log out</li>
      </ul>
    </div>
  );
};

export default ProfileDropDown;
