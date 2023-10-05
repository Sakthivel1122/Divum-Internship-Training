import React, { useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";
import API_LINKS from "../../constants/ApiConstant";
import profile_pic from "../../assets/images/profile-pic.webp";
import { useMain } from "../../contexts/MainContext";
const Profile = () => {
  const [userDetails, setUserDetails] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    mobileNo: "",
    dob: "",
    city: "",
    state: "",
  });
  const mainContext = useMain();

  useEffect(() => {
    console.log("HI");
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    console.log(localStorage.getItem("loggedUser"));
    const result = await axios.get(
      API_LINKS.GET_USER_DETAILS + localStorage.getItem("loggedUser")
    );
    setUserDetails(result.data);
    setFormData(result.data);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      let res = await axios.put(API_LINKS.UPDATE_USER, {
        userId: formData.userId,
        firstName: formData.firstName,
        lastName: formData.lastName,
        emailId: formData.emailId,
        mobileNo: formData.mobileNo,
        dob: formData.dob,
        city: formData.city,
        state: formData.state
      });
      console.log(res);
      loadUserDetails();
      alert("Updated")
  
    } catch (error) {
      alert(error);
    }
    // loadUserDetails();
  };
  return (
    <>
      <div className="Profile">
        <div className="profile-container">
          <div className="profile-pic-wrapper">
            <div className="profile-pic-flex-1">
              <img className="profile-pic" src={profile_pic} alt="" />
              <div className="profile-pic-details">
                <span>
                  {userDetails.firstName + " " + userDetails.lastName}
                </span>
                <p>{userDetails.emailId}</p>
              </div>
            </div>
            <button className="profile-pic-upload-btn">Upload</button>
          </div>
          <div className="profile-details-wrapper">
            <h1>Update Details</h1>
            <form className="profile-details-update-form" action="">
              <input type="text" name="userId" value={formData.userId} hidden />
              <div className="profile-input-box-wrapper">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={handleOnChange}
                />
              </div>
              <div className="profile-input-box-wrapper">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={handleOnChange}
                />
              </div>
              <div className="profile-input-box-wrapper">
                <label htmlFor="">DOB</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleOnChange}
                />
              </div>
              <div className="profile-input-box-wrapper">
                <label htmlFor="">Mobile Number</label>
                <input
                  type="text"
                  name="mobileNo"
                  placeholder="Enter Mobile Number"
                  value={formData.mobileNo}
                  onChange={handleOnChange}
                />
              </div>
              <div className="profile-input-box-wrapper">
                <label htmlFor="">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter City"
                  value={formData.city}
                  onChange={handleOnChange}
                />
              </div>
              <div className="profile-input-box-wrapper">
                <label htmlFor="">State</label>
                <input
                  type="text"
                  name="state"
                  placeholder="Enter State"
                  value={formData.state}
                  onChange={handleOnChange}
                />
              </div>
            </form>
            <button className="update-btn" onClick={handleSubmit}>
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
