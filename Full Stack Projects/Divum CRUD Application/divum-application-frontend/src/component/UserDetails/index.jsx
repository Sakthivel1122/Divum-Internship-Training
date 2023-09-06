import React, { useEffect, useState } from "react";
import "./UserDetails.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import DeletePopUp from "../DeletePopUp";
import API_LINKS from "../../constants/ApiConstants";

const UserDetails = ({
  allUsers,
  setShowAlert,
  setMyAlert,
  Load,
}) => {
  const [deletePopUp, setDeletePopUp] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState();
  useEffect(() => {
    Load();
  }, []);
  const deleteUser = async (userId) => {
    await axios.delete(API_LINKS.DELETE_API_LINK + userId);
    setMyAlert({
      type: "error",
      message: "Deleted",
      closeButton: false,
    });
    setShowAlert(true);
    Load();
  };
  const deleteBtnHandler = (userId) => {
    setDeleteUserId(userId);
    setDeletePopUp(true);
  };
  return (
    <div className="UserDetails">
      <div className="navbar">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <Link
          to="/form"
          className="add-btn"
          state={{
            userId: "",
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
          {allUsers.map((user) => {
            return (
              <tr>
                <td data-testid={user.id}>{user.emailId}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.mobileNumber}</td>
                <td>{user.dob}</td>
                <td>
                  <div className="action-btns">
                    <Link
                      to="/form"
                      className="edit-btn"
                      state={{
                        userId: user.userId,
                        emailId: user.emailId,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        dob: user.dob,
                        mobileNo: user.mobileNumber,
                        address: user.address,
                      }}
                    >
                      Edit
                    </Link>
                    <button
                      className="delete-btn"
                      onClick={() => deleteBtnHandler(user.userId)}
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
          deleteUser={deleteUser}
          deleteUserId={deleteUserId}
        />
      )}
    </div>
  );
};

export default UserDetails;