import React from "react";
import "./DeletePopUp.css";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
const DeletePopUp = ({ setDeletePopUp, deleteEmployee, deleteEmployeeId }) => {
  const cancelHandler = () => {
    setDeletePopUp(false);
  };
  const deleteHandler = () => {
    deleteEmployee(deleteEmployeeId);
    setDeletePopUp(false);
  };
  return (
    <div className="DeletePopUp" onClick={() => setDeletePopUp(false)}>
      <div className="DeletePopUp-content">
        <p>
          <span>Are you sure to delete!</span>
        </p>
        <div className="popup-btn-flex">
          <button onClick={cancelHandler} className="cancel-btn">
            Cancel
          </button>
          <button onClick={deleteHandler} className="delete-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopUp;
