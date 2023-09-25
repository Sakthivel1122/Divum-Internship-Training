import React from "react";
import "./InputBox.css";

const InputBox = ({ name, value, type, placeHolder, onChange }) => {
  return (
    <input
      className="InputBox"
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
    />
  );
};

export default InputBox;
