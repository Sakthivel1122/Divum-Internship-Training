import React, { useState } from "react";
import { useAuth } from "../../Context/Auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const auth = useAuth();
  const handleLogin = () => {
    auth.logIn(user);
    navigate("/");
  };
  return (
    <div className="container">
      <h2>Login</h2>
      <form action="">
        <label htmlFor="">UserName </label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button onClick={handleLogin}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
