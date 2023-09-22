import React, { useState } from "react";
import "./LogIn.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import API_LINKS from "../../constants/ApiConstant";
import { useMain } from "../../Contexts/MainContext";
const LogIn = () => {
  const [formData, setFormData] = useState({
    emailId: "",
    password: "",
  });
  const mainContext = useMain();
  mainContext.setNavBarVisiblity(false);
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const result = await axios.post(
        API_LINKS.USER_AUTHENTICATION,
        {
          emailId: formData.emailId,
          password: formData.password,
        }
      );
      if (result.data) {
        localStorage.setItem("logInStatus", true);
        localStorage.setItem("loggedUser",formData.emailId);
        navigate("/");
      } else {
        alert("Incurrect emailid or password");
      }
    } catch (error) {
      alert(error);
    }
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="LogIn">
      <div className="login-container">
        <h1>Login</h1>
        <div className="input-box-wrapper">
          <input
            name="emailId"
            className="login-input-box"
            type="text"
            value={formData.emailId}
            onChange={handleOnChange}
            required
          />
          <span></span>
          <label>Email ID</label>
        </div>
        <div className="input-box-wrapper">
          <input
            name="password"
            className="login-input-box"
            type="text"
            value={formData.password}
            onChange={handleOnChange}
            required
          />
          <span></span>
          <label>Password</label>
        </div>
        <Link>Forget password?</Link>
        <input
          className="login-input-box login-submit-btn"
          type="submit"
          onClick={handleSubmit}
        />
        <div className="login-bottom">
          <p>Not have an account?</p>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
