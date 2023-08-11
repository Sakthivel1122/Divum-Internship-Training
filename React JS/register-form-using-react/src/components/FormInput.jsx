import { useState } from "react";
import "./css/FormInput.css";
const FormInput = (props) => {
  const [focus, setFocus] = useState(false);
  const { label, errormessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocus(true);
  };

  return (
    <div className="formInput">
      <label htmlFor="">{props.label}</label>
      <div className="inputDiv">
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmpassword" && setFocus(true)
          }
          focused={focus.toString()}
        />
        <span>{errormessage}</span>
      </div>
    </div>
  );
};

export default FormInput;
