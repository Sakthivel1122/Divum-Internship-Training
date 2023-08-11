import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";
function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    dob: "",
    password: "",
    confirmpassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errormessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errormessage: "It should be a valid email",
      required: true,
    },
    {
      id: 3,
      name: "dob",
      type: "date",
      placeholder: "DOB",
      label: "DOB",
      errormessage: "",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errormessage:
        "Password should be 8-20 character and include at least 1 upper and 1 lower case letter, 1 number, 1 special character ",
      pattern:
        "(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,20}).*$",
      required: true,
    },
    {
      id: 5,
      name: "confirmpassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errormessage: "Password should match",
      pattern: values.password,
      required: true,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = new FormData(e.target);
    // console.log(Object.fromEntries(data.entries()));
    console.log(values);
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
