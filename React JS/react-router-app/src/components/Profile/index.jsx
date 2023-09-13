import React from "react";
import { useAuth } from "../../Context/Auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogOut = () => {
    auth.logOut();
    navigate('/')
  }
  return (
    <div className="container">
      Profile Page
      <p>Welcome {auth.user}</p>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default Profile;
