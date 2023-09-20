import React from "react";
import "./SideBar.css";
import Histories from "../../constants/History.json";
import Icons from "../../assets/icons/Icons";

const SideBar = () => {
  return (
    <div className="SideBar">
      <div className="top-wrapper">
        <img src={Icons.logo_icon} alt="" className="logo" />
        <div className="sidebar-buttons">
          <span>Demos</span>
          <ul>
            <li>
              <img src={Icons.pdf_icon} />
              <p>PDFChatBot</p>
            </li>
            <li>
              <img src={Icons.text_icon} alt="" />
              <p>Text ProductDescriber</p>
            </li>
            <li>
              <img src={Icons.image_icon} alt="" />
              <p>Image ProductDescriber</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-wrapper">
        <div className="history-constainer">
          <span>History</span>
          <ul>
            {Histories.map((history) => (
              <li className="history-record">
                <img src={Icons.history_icon} alt="" />
                <p>{history.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="feature-btn-container">
          <ul>
            <li>
              <img src={Icons.delete_icon} alt="" />
              <p>Clear Conversations</p>
            </li>
            <li>
              <img src={Icons.light_mode_icon} alt="" />
              <p>Light Mode</p>
            </li>
            <li>
              <img src={Icons.account_icon} alt="" />
              <p>My Account</p>
            </li>
            <li>
              <img src={Icons.updates_icon} alt="" />
              <p>Updates & FAQ</p>
            </li>
            <li>
              <img src={Icons.logout_icon} alt="" />
              <p>Log out</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
