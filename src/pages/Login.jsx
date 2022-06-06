import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [loginCreds, setLoginCreds] = useState({});
  const { login } = useContext(AuthContext);

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };
  return (
    <div>
      Login
      <div>
        <label>email :</label>
      <input data-cy="login-email"
       name="email"
       type="email"
       placeholder="Enter Email"
       onChange={hanldeChange}
      />
      </div>
      <div>
        <label>password</label>
      <input data-cy="login-password"
        name="password"
        type="password"
        placeholder="Enter Password..."
        onChange={hanldeChange}
      />
      </div>
     
      <button data-cy="login-submit" onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
