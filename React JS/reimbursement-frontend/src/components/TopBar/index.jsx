import React from "react";
import "./TopBar.scss";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();
  const handleBackBtnOnClick = () => {
    navigate(-1);
  }
  return <div className="TopBar">
    <div className="wrapper-1">
      <ExitToAppIcon className="back-icon" onClick={handleBackBtnOnClick}/>
    </div>
    <div className="wrapper-2"></div>
  </div>;
};

export default TopBar;
