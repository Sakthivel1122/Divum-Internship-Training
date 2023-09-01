import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./RegForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "./images/logo.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Alert from "./Alert";

const API_LINK = "http://localhost:8088/api/v1/employee/";

const RegForm = ({
  employee,
  setEmployee,
  showAlert,
  setShowAlert,
  myAlert,
  setMyAlert,
  Load,
}) => {
  const [value, setValue] = useState({
    employeeId: "",
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
    debugger;
    e.preventDefault();
    console.log("-- Start --");
    setErrors({});
    // return;
    console.log(errors);
    console.log("-- End --");
    // return;
    for (let i = 0; i < allData.length; i++) {
      if (!validate(allData[i])) {
        setMyAlert({
          type: "warning",
          message: "Invalid Form submission",
          closeButton: false,
        });
        setShowAlert(true);
        // i = allData.length;
        return;
      }
    }
    let arr = value.dob.split("-");
    let dob = arr[2] + "-" + arr[1] + "-" + arr[0];
    // console.log(dob);
    if (value.employeeId === "") {
      try {
        await axios.post(API_LINK + "addEmployee", {
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
        alert("Error: " + error);
      }
    } else {
      await axios.put(API_LINK + "updateEmployee", {
        employeeId: value.employeeId,
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
      employeeId: "",
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
  // console.log(new Date().toISOString().split("T")[0]);
  const backBtnHandle = () => {
    setValue({
      employeeId: "",
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
    for (let i = 0; i < employee.length; i++) {
      console.log(employee[i].emailId);
      if (value.emailId == employee[i].emailId) {
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
        if (value.employeeId !== "") return true;
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
        console.log("1");
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
        console.log("2");
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
        console.log("3");
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
  useEffect(() => {
    console.log(errors, "ErrorsUpdate");
  }, [errors]);
  useEffect(() => {
    Load();
    let arr = editValues.state.dob.split("-");
    let dob = arr[2] + "-" + arr[1] + "-" + arr[0];
    setValue({
      employeeId: editValues.state.employeeId,
      emailId: editValues.state.emailId,
      firstName: editValues.state.firstName,
      lastName: editValues.state.lastName,
      dob: dob,
      mobileNo: editValues.state.mobileNo,
      address: editValues.state.address,
    });
  }, []);
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
              name="employeeId"
              value={value.employeeId}
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
                  disabled={value.employeeId !== ""}
                  required
                />
                <p>{errors.emailId}</p>
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
                  required
                />
                <p>{errors.firstName}</p>
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
                  required
                />
                <p>{errors.lastName}</p>
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
                  required
                />
                <p>{errors.dob}</p>
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
                  required
                />
                <p>{errors.mobileNo}</p>
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
                  required
                ></textarea>
                <p>{errors.address}</p>
              </div>
            </div>
            <Link className="submit-btn" onClick={add}>
              {value.employeeId === "" ? "Save" : "Update"}
            </Link>
          </form>
        </div>
        {/* {showAlert && (
          <Alert
            type={myAlert.type}
            message={myAlert.message}
            closeButton={myAlert.closeButton}
            setShowAlert={setShowAlert}
          />
        )} */}
      </div>
    </>
  );
};

export default RegForm;
