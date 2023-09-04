import React, { useEffect, useState } from "react";
import "./EmployeeDetails.css";
import logo from "./images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import DeletePopUp from "./DeletePopUp";

const API_LINK = "http://localhost:8088/api/v1/employee/";
const EmployeeDetails = ({
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
  const [deletePopUp, setDeletePopUp] = useState(false);
  const [deleteEmployeeId, setDeleteEmployeeId] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    Load();
  }, []);
  const deleteEmployee = async (employeeId) => {
    await axios.delete(API_LINK + "deleteEmployee/" + employeeId);
    setMyAlert({
      type: "error",
      message: "Deleted",
      closeButton: false,
    });
    setShowAlert(true);
    Load();
  };
  const deleteBtnHandler = (employeeId) => {
    setDeleteEmployeeId(employeeId);
    setDeletePopUp(true);
  };
  return (
    <div className="EmployeeDetails">
      <div className="navbar">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <Link
          to="/form"
          className="add-btn"
          state={{
            employeeId: "",
            emailId: "",
            firstName: "",
            lastName: "",
            dob: "",
            mobileNo: "",
            address: "",
          }}
          data-testid="add-btn"
        >
          Add
          <span className="material-symbols-outlined">add_circle</span>
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>
              <span>Email id</span>
            </th>
            <th>
              <span>First Name</span>
            </th>
            <th>
              <span>Last Name</span>
            </th>
            <th>
              <span>Mobile Number</span>
            </th>
            <th>
              <span>DOB</span>
            </th>
            <th>
              <span>Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {employee.map((employee) => {
            return (
              <tr>
                <td data-testid={employee.id}>{employee.emailId}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.mobileNumber}</td>
                <td>{employee.dob}</td>
                <td>
                  <div className="action-btns">
                    <Link
                      to="/form"
                      className="edit-btn"
                      state={{
                        employeeId: employee.employeeId,
                        emailId: employee.emailId,
                        firstName: employee.firstName,
                        lastName: employee.lastName,
                        dob: employee.dob,
                        mobileNo: employee.mobileNumber,
                        address: employee.address,
                      }}
                    >
                      Edit
                    </Link>
                    <button
                      className="delete-btn"
                      onClick={() => deleteBtnHandler(employee.employeeId)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {deletePopUp && (
        <DeletePopUp
          setDeletePopUp={setDeletePopUp}
          deleteEmployee={deleteEmployee}
          deleteEmployeeId={deleteEmployeeId}
        />
      )}
    </div>
  );
};

export default EmployeeDetails;
