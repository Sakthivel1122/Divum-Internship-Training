import React from "react";
import {
  Link,
  NavLink,
  parsePath,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import "./NavBar.css";
import { useAuth } from "../../Context/Auth";
const NavBar = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleOnClickPageOne = () => {
    navigate("/pageOne");
  };
  return (
    <div className="NavBar container">
      <span>Logo</span>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about" replace>
          About
        </NavLink>
        <NavLink to="/products">Products</NavLink>
        <button onClick={handleOnClickPageOne}>Page 1</button>
        {
          !auth.user && 
          <NavLink to="/login">Login</NavLink>
        }
        {
          auth.user && 
          <NavLink to="/profile">Profile</NavLink>
        }
      </ul>
    </div>
  );
};

export default NavBar;
