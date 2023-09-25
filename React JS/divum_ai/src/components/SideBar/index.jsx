import React from "react";
import "./SideBar.css";
import Histories from "../../constants/History.json";
import Icons from "../../assets/icons/Icons";
import { sideBarStrings } from "../../constants/StringConstant";
import SideBarBtn from "../SideBarBtn";
const SideBar = () => {
  return (
    <div className="SideBar">
      <div className="top-wrapper">
        <img src={Icons.logo_icon} alt="" className="logo" />
        <div className="sidebar-buttons">
          <span>{sideBarStrings.container_1.heading}</span>
          <div className="sidebar-btn-wrapper">
            <SideBarBtn
              icon={Icons.pdf_icon}
              value={sideBarStrings.container_1.Item_1}
            />
            <SideBarBtn
              icon={Icons.text_icon}
              value={sideBarStrings.container_1.Item_2}
            />
            <SideBarBtn
              icon={Icons.image_icon}
              value={sideBarStrings.container_1.Item_3}
            />
          </div>
        </div>
      </div>
      <div className="bottom-wrapper">
        <div className="history-constainer">
          <span>{sideBarStrings.container_2.heading}</span>
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
              <p>{sideBarStrings.container_3.Item_1}</p>
            </li>
            <li>
              <img src={Icons.light_mode_icon} alt="" />
              <p>{sideBarStrings.container_3.Item_2}</p>
            </li>
            <li>
              <img src={Icons.account_icon} alt="" />
              <p>{sideBarStrings.container_3.Item_3}</p>
            </li>
            <li>
              <img src={Icons.updates_icon} alt="" />
              <p>{sideBarStrings.container_3.Item_4}</p>
            </li>
            <li>
              <img src={Icons.logout_icon} alt="" />
              <p>{sideBarStrings.container_3.Item_5}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
