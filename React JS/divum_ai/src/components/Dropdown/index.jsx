import React, { useState } from "react";
import "./Dropdown.css";
import Icons from "../../assets/icons/Icons";
const Dropdown = ({
  selected = "Choose One",
  handleSetSelected,
  options = [],
}) => {
  const [isActive, setIsActive] = useState(false);
  const handleOnClick = (e) => {
    setIsActive(!isActive);
  };
  const handleItemOnClick = (selected) => {
    handleSetSelected(selected);
    setIsActive(false);
  };
  return (
    <div className="Dropdown">
      <div
        className={`dropdown-btn ${isActive ? `border` : ``}`}
        onClick={handleOnClick}
      >
        {selected}
        {isActive ? (
          <img src={Icons.uparrow_icon} alt="" />
        ) : (
          <img src={Icons.downarrow_icon} alt="" />
        )}
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => {
            return (
              <div
                className="dropdown-item"
                onClick={() => handleItemOnClick(option.option)}
              >
                {option.option}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
