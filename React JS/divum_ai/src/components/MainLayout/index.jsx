import React from "react";
import SideBar from "../SideBar";
import "./MainLayout.css"
const MainLayout = ({ children }) => {
  return (
    <div className="MainLayout">
      <SideBar />
      {children}
    </div>
  );
};

export default MainLayout;
