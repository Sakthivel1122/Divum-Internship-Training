import React from "react";
import "./Dropdown.css";

const Dropdown = ({name, values,onChange}) => {
  return (
    <select name={name} className="dropdown" onChange={onChange}>
        {
            values.map(value => {
                return <option value={value.value}>{value.option}</option>
            })
        }
    </select>
  );
};

export default Dropdown;
