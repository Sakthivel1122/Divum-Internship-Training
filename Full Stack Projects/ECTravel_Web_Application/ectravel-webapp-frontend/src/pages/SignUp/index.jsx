import React, { useEffect, useState } from "react";
import "./SignUp.css";
import side_pic from "../../assets/images/signup/side-pic-3.jpg";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import API_LINKS from "../../constants/ApiConstant";
import { useMain } from "../../contexts/MainContext";

const SignUp = () => {
  const [formData, setFormData] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    emailId: "",
    mobileNo: "",
    dob: "",
    city: "",
    state: "",
    password: "",
    confirmPassword: "",
  });
  const mainContext = useMain();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.emailId === "" ||
      formData.mobileNo === "" ||
      formData.dob === "" ||
      formData.city === "" ||
      formData.state === "" ||
      formData.password === "" ||
      formData.confirmPassword === ""
    ) {
      alert("Enter all required fields");
      return;
    }
    await axios.post(API_LINKS.ADD_USER, {
      firstName: formData.firstName,
      lastName: formData.lastName,
      emailId: formData.emailId,
      mobileNo: formData.mobileNo,
      dob: formData.dob,
      city: formData.city,
      state: formData.state,
      password: formData.password,
    });
    mainContext.setNavBarVisiblity(true);
    navigate("/login");
  };
  mainContext.setNavBarVisiblity(false);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    mainContext
  }, []);
  
  return (
    <div className="SignUp">
      <div className="signup-container">
        <div className="left-side-div">
          <img className="left-side-pic" src={side_pic} alt="" />
        </div>
        <form action="">
          <h1>Create Account</h1>
          <input name="userId" type="number" hidden />
          <div className="input-flex">
            <label>First Name</label>
            <input
              name="firstName"
              className="input-box"
              type="text"
              placeholder="First Name"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="input-flex">
            <label>Last Name</label>
            <input
              name="lastName"
              className="input-box"
              type="text"
              placeholder="Last Name"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="input-flex">
            <label>Email ID</label>
            <input
              name="emailId"
              className="input-box"
              type="text"
              placeholder="Email ID"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="input-flex">
            <label>Mobile No</label>
            <input
              name="mobileNo"
              className="input-box"
              type="text"
              placeholder="Mobile No"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="input-flex">
            <label>DOB</label>
            <input
              name="dob"
              className="input-box"
              type="date"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="input-flex">
            <label>City</label>
            <input
              name="city"
              className="input-box"
              type="text"
              placeholder="City"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="input-flex">
            <label>State</label>
            <input
              name="state"
              className="input-box"
              type="text"
              placeholder="State"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="input-flex">
            <label>Password</label>
            <input
              name="password"
              className="input-box"
              type="text"
              placeholder="Password"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="input-flex">
            <label>Confirm Password</label>
            <input
              name="confirmPassword"
              className="input-box"
              type="text"
              placeholder="Confirm Password"
              onChange={handleOnChange}
              required
            />
          </div>
          <input
            className="input-box submit-btn"
            type="submit"
            onClick={handleSubmit}
          />
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