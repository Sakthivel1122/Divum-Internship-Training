import React, { useEffect, useState } from "react";
import "./UserDetails.css";
import logo from "../../assets/images/logo.png";
import add_btn from "../../assets/images/add-btn.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import DeletePopUp from "../DeletePopUp";
import API_LINKS from "../../constants/ApiConstants";

const UserDetails = ({ setShowAlert, setMyAlert }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [deletePopUp, setDeletePopUp] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [numberOfRecord, setNumberOfRecord] = useState(10);
  const [isLastPage, setIsLastPage] = useState(false);
  const [pageNo, setPageNo] = useState([]);
  const Load = async () => {
    const result = await axios.get(
      API_LINKS.GET_API_LINK_WITH_PAGINATION +
        currentPage +
        "/" +
        numberOfRecord
    );
    if (result !== undefined) {
      setAllUsers(result.data.content);
      setIsLastPage(result.data.last);
      setPageNo([...Array(result.data.totalPages).keys()].map((i) => i + 1));
    }
  };
  useEffect(() => {
    Load();
  }, [currentPage]);

  const prevPage = () => {
    if (currentPage != 0) setCurrentPage(currentPage - 1);
  };
  const nextPage = () => {
    if (!isLastPage) setCurrentPage(currentPage + 1);
  };
  const changePage = (pageNo) => {
    setCurrentPage(pageNo - 1);
  };
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
          <img src={add_btn} alt="" className="add-btn-img" />
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
        <tbody className="table-body">
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
      <div className="table-bottom">
        <div className="table-bottom-content">
          <button onClick={prevPage} className="prev-btn">
            <span className="material-symbols-outlined">
              keyboard_arrow_left
            </span>
          </button>
          <div className="page-numbers">
            {pageNo.map((page) => {
              return (
                <button
                  className={`page-btn-${page} 
                  ${currentPage + 1 === page ? "active-page" : ""}`}
                  onClick={() => changePage(page)}
                >
                  {page}
                </button>
              );
            })}
          </div>
          <button onClick={nextPage} className="next-btn">
            <span className="material-symbols-outlined">
              keyboard_arrow_right
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
