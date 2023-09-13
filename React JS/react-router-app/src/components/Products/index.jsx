import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div className="container">
      Products
      <br />
      <br />
      <input type="search" placeholder="Search Products" />
      <br />
      <br />
      <NavLink to="features">Features</NavLink> <NavLink to="new">New</NavLink>
      <br />
      <br />
      <Outlet />
    </div>
  );
};

export default Products;
