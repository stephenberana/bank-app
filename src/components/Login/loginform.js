import React, { useState } from "react";
import "./login.css";
import SubmitButton from "./submit-button";
import { useDispatch } from "react-redux";
import { login } from "../stores/UserSlice";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        name: name,
        password: password,
        loggedIn: true,
      })
    );
  };

  return (
    <div className="container">
      <form className="loginForm" onSubmit={(e) => handleSubmit(e)}>
        <h1 className="header">Bank of Wall Street</h1>
        <h2 className="header">Where money never sleeps.</h2>
        <h3 style={{ fontWeight: "normal" }}>Log In</h3>

        <input
          className="inputField"
          type="name"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="inputField"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="submitButton">
          <SubmitButton className="submitbtn" type="button" value="Login" />
        </div>
        <div className="registerLink">
          <span className="form-input-signup">
            Not a member? <br />
            <a style={{ color: "white" }} href="/register-link">
              Register here.
            </a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
