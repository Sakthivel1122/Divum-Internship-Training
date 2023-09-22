import React from "react";
import NavBar from "../NavBar";
import "./MainLayout.css";
import { Outlet } from "react-router-dom";
const MainLayout = ({children}) => {
  return <div className="MainLayout">
    <NavBar/>
    {children}
    <Outlet/>
  </div>;
};

export default MainLayout;
