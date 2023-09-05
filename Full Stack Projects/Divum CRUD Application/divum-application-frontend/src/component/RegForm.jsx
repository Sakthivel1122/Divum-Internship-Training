import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./RegForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "./images/logo.png";

const API_LINK = "http://localhost:8088/api/v1/user/";

const RegForm = ({
  allUsers,
  setAllUsers,
  showAlert,
  setShowAlert,
  myAlert,
  setMyAlert,
  Load,
}) => {
  let [everyData,setEveryData] = useState([]);
  const [value, setValue] = useState({
    userId: "",
    emailId: "",
    firstName: "",
    lastName: "",
    dob: "",
    mobileNo: "",
    address: "",
  });
  const editValues = useLocation();
  const [errors, setErrors] = useState({
    emailId: "",
    firstName: "",
    lastName: "",
    dob: "",
    mobileNo: "",
    address: "",
  });
  const navigate = useNavigate();
  const allData = [
    "emailId",
    "firstName",
    "lastName",
    "dob",
    "mobileNo",
    "address",
  ];
  const add = async (e) => {
    e.preventDefault();
    for (let i = 0; i < allData.length; i++) {
      if (!validate(allData[i])) {
        setMyAlert({
          type: "warning",
          message: "Invalid Form submission",
          closeButton: false,
        });
        setShowAlert(true);
        return;
      }
    }
    let arr = value.dob.split("-");
    let dob = arr[2] + "-" + arr[1] + "-" + arr[0];
    if (value.userId === "") {
      try {
        await axios.post(API_LINK + "addUser", {
          emailId: value.emailId,
          firstName: value.firstName,
          lastName: value.lastName,
          dob: dob,
          mobileNumber: value.mobileNo,
          address: value.address,
        });
        setMyAlert({
          type: "success",
          message: "Added",
          closeButton: false,
        });
        setShowAlert(true);
      } catch (error) {
        setMyAlert({
          type: "error",
          message: {error},
          closeButton: false,
        });
        setShowAlert(true);
      }
    } else {
      await axios.put(API_LINK + "updateUser", {
        userId: value.userId,
        emailId: value.emailId,
        firstName: value.firstName,
        lastName: value.lastName,
        dob: dob,
        mobileNumber: value.mobileNo,
        address: value.address,
      });
      setMyAlert({
        type: "success",
        message: "Updated",
        closeButton: false,
      });
      setShowAlert(true);
    }
    setValue({
      userId: "",
      emailId: "",
      firstName: "",
      lastName: "",
      dob: "",
      mobileNo: "",
      address: "",
    });
    navigate("/");
  };
  let today = new Date().toISOString().split("T")[0];
  const backBtnHandle = () => {
    setValue({
      userId: "",
      emailId: "",
      firstName: "",
      lastName: "",
      dob: "",
      mobileNo: "",
      address: "",
    });
    navigate("/");
  };
  // Form validation
  const validEmailregex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
  const validNameregex = /^[A-Za-z]+$/;
  const validMobileNo = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
  const emailIdAvail = () => {
    if(everyData === undefined){
      return false;
    }
    for (let i = 0; i < everyData.length; i++) {
      if (value.emailId == everyData[i].emailId) {
        return false;
      }
    }
    return true;
  };
  const onBlurHandler = (e) => {
    validate(e.target.name);
  };
  const validate = (name) => {
    switch (name) {
      case "emailId":
        if (value.userId !== "") return true;
        if (value.emailId === "") {
          setErrors({ ...errors, emailId: "Email id is required!" });
          return false;
        } else if (!validEmailregex.test(value.emailId)) {
          setErrors({ ...errors, emailId: "Invalid email id!" });
        } else if (!emailIdAvail(value.emailId)) {
          setErrors({ ...errors, emailId: "Email id already exist!" });
        } else {
          setErrors({ ...errors, emailId: "" });
          return true;
        }
        return false;
      case "firstName":
        if (value.firstName === "") {
          setErrors({ ...errors, firstName: "First Name is required!" });
        } else if (!validNameregex.test(value.firstName)) {
          setErrors({ ...errors, firstName: "Only alphabets to be entered!" });
        } else {
          setErrors({ ...errors, firstName: "" });
          return true;
        }
        return false;
      case "lastName":
        if (value.lastName === "") {
          setErrors({ ...errors, lastName: "Last Name is required!" });
        } else if (!validNameregex.test(value.lastName)) {
          setErrors({ ...errors, lastName: "Only alphabets to be entered!" });
        } else {
          setErrors({ ...errors, lastName: "" });

          return true;
        }
        return false;
      case "dob":
        if (value.dob === "") {
          setErrors({ ...errors, dob: "DOB is required!" });
        } else {
          setErrors({ ...errors, dob: "" });
          return true;
        }
        return false;
      case "mobileNo":
        if (value.mobileNo === "") {
          setErrors({ ...errors, mobileNo: "Mobile number is required!" });
        } else if (!validMobileNo.test(value.mobileNo)) {
          setErrors({ ...errors, mobileNo: "Invalid mobile number!" });
        } else {
          setErrors({ ...errors, mobileNo: "" });
          return true;
        }
        return false;
      case "address":
        if (value.address === "") {
          setErrors({ ...errors, address: "Address is required!" });
        } else if (value.address.length > 50) {
          setErrors({ ...errors, address: "Address is too long!" });
        } else {
          setErrors({ ...errors, address: "" });
          return true;
        }
        return false;
      default:
        break;
    }
  };
  const onChangeHandle = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    if (e.target.name !== "") {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };
  const getAllData = async() => {
    everyData = await axios.get(API_LINK + "getAllUser");
    if(everyData !== undefined)
    setEveryData(everyData.data);
  }
  useEffect(() => {
    // Load();
    getAllData();
    if (editValues.state.userId !== "") {
      let arr = editValues.state.dob.split("-");
      let dob = arr[2] + "-" + arr[1] + "-" + arr[0];
      setValue({
        userId: editValues.state.userId,
        emailId: editValues.state.emailId,
        firstName: editValues.state.firstName,
        lastName: editValues.state.lastName,
        dob: dob,
        mobileNo: editValues.state.mobileNo,
        address: editValues.state.address,
      });
    }
  }, []);
  const change = ()=>{}
  return (
    <>
      <div className="RegForm">
        <button className="back-btn" onClick={backBtnHandle}>
          Back
        </button>
        <div className="form-content">
          <form>
            <div className="navbar">
              <Link to="/">
                <img src={logo} alt="Logo" className="logo" />
              </Link>
              <h1>Register</h1>
            </div>
            <input
              type="text"
              name="userId"
              value={value.userId}
              onChange={change}
              hidden
            />
            <div className="input">
              <label htmlFor="">Email ID</label>
              <div className="input-flex">
                <input
                  type="email"
                  className="input-box"
                  name="emailId"
                  value={value.emailId}
                  onChange={onChangeHandle}
                  onBlur={onBlurHandler}
                  disabled={value.userId !== ""}
                  data-testid="emailId"
                  placeholder="Please enter your email id"
                  required
                />
                <p data-testid="emailid-error-msg">{errors.emailId}</p>
              </div>
            </div>
            <div className="input">
              <label htmlFor="">First Name</label>
              <div className="input-flex">
                <input
                  type="text"
                  className="input-box"
                  name="firstName"
                  value={value.firstName}
                  onChange={onChangeHandle}
                  onBlur={onBlurHandler}
                  placeholder="Please enter your first name"
                  data-testid="firstname"
                  required
                />
                <p data-testid="firstname-error-msg">{errors.firstName}</p>
              </div>
            </div>
            <div className="input">
              <label htmlFor="">Last Name</label>
              <div className="input-flex">
                <input
                  type="text"
                  className="input-box"
                  name="lastName"
                  value={value.lastName}
                  onChange={onChangeHandle}
                  onBlur={onBlurHandler}
                  placeholder="Please enter your last name"
                  data-testid="lastname"
                  required
                />
                <p data-testid="lastname-error-msg">{errors.lastName}</p>
              </div>
            </div>
            <div className="input">
              <label htmlFor="">DOB</label>
              <div className="input-flex">
                <input
                  type="date"
                  className="input-box"
                  name="dob"
                  value={value.dob}
                  onChange={onChangeHandle}
                  onBlur={onBlurHandler}
                  id="dob"
                  max={today}
                  data-testid="dob"
                  required
                />
                <p data-testid="dob-error-msg">{errors.dob}</p>
              </div>
            </div>
            <div className="input">
              <label htmlFor="">Mobile Number</label>
              <div className="input-flex">
                <input
                  type="text"
                  className="input-box"
                  name="mobileNo"
                  value={value.mobileNo}
                  onChange={onChangeHandle}
                  onBlur={onBlurHandler}
                  placeholder="Please enter your mobile number"
                  data-testid="mobileno"
                  required
                />
                <p data-testid="mobileno-error-msg">{errors.mobileNo}</p>
              </div>
            </div>
            <div className="input-address">
              <label htmlFor="">Address</label>
              <div className="input-flex">
                <textarea
                  name="address"
                  className="input-box-address"
                  value={value.address}
                  onChange={onChangeHandle}
                  onBlur={onBlurHandler}
                  placeholder="Max:50char"
                  data-testid="address"
                  required
                ></textarea>
                <p data-testid="address-error-msg" >{errors.address}</p>
              </div>
            </div>
            <Link className="submit-btn" onClick={add} data-testid = "submit">
              {value.userId === "" ? "Save" : "Update"}
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegForm;
