import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux-toolkit/features/user/userSlice";

const ToolKitUsersList = () => {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div className="ToolKitUsersList">
      <p>List of Users</p>
      {!userState.loading ? (
        userState.error === "" ? 
        userState.users.map((user) => {
          return <p key={user.id}>{user.username}</p>;
        }) : 
        <p>Error: {userState.error}</p>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default ToolKitUsersList;
