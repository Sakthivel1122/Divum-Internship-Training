import React from "react";
import "./SignUp.css";
import side_pic from "../../assets/images/signup/side-pic-3.jpg";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  }
  return (
    <div className="SignUp">
      <div className="signup-container">
        <div className="left-side-div">
          <img className="left-side-pic" src={side_pic} alt="" />
        </div>
        <form action="">
            <h1>Create Account</h1>
          <div className="input-flex">
            <label>First Name</label>
            <input className="input-box" type="text" placeholder="First Name" />
          </div>
          <div className="input-flex">
            <label>Last Name</label>
            <input className="input-box" type="text" placeholder="Last Name" />
          </div>
          <div className="input-flex">
            <label>Email ID</label>
            <input className="input-box" type="text" placeholder="Email ID" />
          </div>
          <div className="input-flex">
            <label>Mobile No</label>
            <input className="input-box" type="text" placeholder="Mobile No" />
          </div>
          <div className="input-flex">
            <label>DOB</label>
            <input className="input-box" type="date" />
          </div>
          <div className="input-flex">
            <label>City</label>
            <input className="input-box" type="text" placeholder="City" />
          </div>
          <div className="input-flex">
            <label>State</label>
            <input className="input-box" type="text" placeholder="State" />
          </div>
          <div className="input-flex">
            <label>Password</label>
            <input className="input-box" type="text" placeholder="Password" />
          </div>
          <div className="input-flex">
            <label>Confirm Password</label>
            <input
              className="input-box"
              type="text"
              placeholder="Confirm Password"
            />
          </div>
          <input className="input-box submit-btn" type="submit" onClick={handleSubmit}/>
          <div className="form-bottom">
            <p>Already have an account?</p>
            <Link to="/login">Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
