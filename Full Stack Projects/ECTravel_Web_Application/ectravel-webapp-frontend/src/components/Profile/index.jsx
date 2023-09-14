import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import "./Profile.css";
import axios from "axios";
import API_LINKS from "../../constants/ApiConstant";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import profile_pic from "../../assets/images/profile-pic.webp";
const Profile = ({ loggedUser, setLogInStatus }) => {
  const location = useLocation();
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    mobileNo: "",
    dob: "",
    city: "",
    state: "",
  });
  const [profileDetails, setProfileDetails] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });

  useEffect(() => {
    setLogInStatus(localStorage.getItem("logInStatus"));
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const result = await axios.get(
      API_LINKS.GET_USER_DETAILS + localStorage.getItem("loggedUser")
    );
    setUserDetails(result.data);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  return (
    <>
      <div className="Profile">
        <div className="profile-container">
          <div className="profile-pic-wrapper">
            <div className="profile-pic-flex-1">
              <img className="profile-pic" src={profile_pic} alt="" />
              <div className="profile-pic-details">
                <span>{userDetails.firstName + " " + userDetails.lastName}</span>
                <p>{userDetails.emailId}</p>
              </div>
            </div>
            <button className="profile-pic-upload-btn">Upload</button>
          </div>
          <div className="profile-details-wrapper">
            <h1>Update Details</h1>
            <form className="profile-details-update-form" action="">
              <input
                type="text"
                name="userId"
                value={userDetails.userId}
                hidden
              />
              <div className="profile-input-box-wrapper">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={userDetails.firstName}
                  onChange={handleOnChange}
                />
              </div>
              <div className="profile-input-box-wrapper">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={userDetails.lastName}
                  onChange={handleOnChange}
                />
              </div>
              <div className="profile-input-box-wrapper">
                <label htmlFor="">Email ID</label>
                <input
                  type="text"
                  name="emailId"
                  value={userDetails.emailId}
                  onChange={handleOnChange}
                />
              </div>
              <div className="profile-input-box-wrapper">
                <label htmlFor="">DOB</label>
                <input
                  type="date"
                  name="dob"
                  value={userDetails.dob}
                  onChange={handleOnChange}
                />
              </div>
              <div className="profile-input-box-wrapper">
                <label htmlFor="">Mobile Number</label>
                <input
                  type="text"
                  name="mobileNo"
                  value={userDetails.mobileNo}
                  onChange={handleOnChange}
                />
              </div>
              <div className="profile-input-box-wrapper">
                <label htmlFor="">City</label>
                <input
                  type="text"
                  name="city"
                  value={userDetails.city}
                  onChange={handleOnChange}
                />
              </div>
              <div className="profile-input-box-wrapper">
                <label htmlFor="">State</label>
                <input
                  type="text"
                  name="state"
                  value={userDetails.state}
                  onChange={handleOnChange}
                />
              </div>
            </form>
            <button className="update-btn">Update</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
