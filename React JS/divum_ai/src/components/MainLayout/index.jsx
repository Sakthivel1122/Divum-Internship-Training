import React from "react";
import SideBar from "../SideBar";
import "./MainLayout.css"
const MainLayout = ({ children }) => {
  return (
    <div className="MainLayout">
      <SideBar />
      <div className="child-container">
      {children}
      </div>
    </div>
  );
};

export default MainLayout;
