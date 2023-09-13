import React from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParems, setSearchParems] = useSearchParams();
  let showActiveUsers = searchParems.get("filter") === "active";
  return (
    <div className="container">
      <h1 style={{ marginTop: "20px" }}>Users</h1>
      <ul style={{ marginLeft: "50px", marginTop: "20px" }}>
        <li>
          <NavLink to="1">User 1</NavLink>
        </li>
        <li>
          <NavLink to="2">User 2</NavLink>
        </li>
        <li>
          <NavLink to="3">User 3</NavLink>
        </li>
        <li>
          <NavLink to="4">User 4</NavLink>
        </li>
        <li>
          <NavLink to="5">User 5</NavLink>
        </li>
        <li>
          <NavLink to="admin">Admin</NavLink>
        </li>
      </ul>
      <div>
        <button onClick={() => setSearchParems({ filter: "active",message:"HelloWorld" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParems({})}>Reset filter</button>
      </div>
      {showActiveUsers ? (
        <h2>Showing Active Users</h2>
      ) : (
        <h2>Showing all users</h2>
      )}
      <Outlet />
    </div>
  );
};

export default Users;
