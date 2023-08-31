import React, { useEffect, useState } from "react";
import "./EmployeeDetails.css";
import logo from "./images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeletePopUp from "./DeletePopUp";

const API_LINK = "http://localhost:8088/api/v1/employee/";
const EmployeeDetails = ({
  value,
  setValue,
  employee,
  setEmployee,
  showAlert,
  setShowAlert,
  myAlert,
  setMyAlert,
}) => {
  const [deletePopUp, setDeletePopUp] = useState(false);
  const [deleteEmployeeId, setDeleteEmployeeId] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    Load();
  }, []);
  const Load = async () => {
    const result = await axios.get(
      API_LINK + "getEmployeeWithPaginationAndSorting/0/10"
    );
    setEmployee(result.data.content);
  };
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
  const editEmployee = (employee) => {
    setValue({
      employeeId: employee.employeeId,
      emailId: employee.emailId,
      firstName: employee.firstName,
      lastName: employee.lastName,
      dob: employee.dob,
      mobileNo: employee.mobileNumber,
      address: employee.address,
    });
    navigate("/form");
  };
  const deleteBtnHandler = (employeeId) => {
    setDeleteEmployeeId(employeeId);
    setDeletePopUp(true);
  };
  return (
    <div className="EmployeeDetails">
      <div className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <Link to="/form" className="add-btn">
          Add
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
                <td>{employee.emailId}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.mobileNumber}</td>
                <td>{employee.dob}</td>
                <td>
                  <div className="action-btns">
                    <button
                      className="edit-btn"
                      onClick={() => editEmployee(employee)}
                    >
                      Edit
                    </button>
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
