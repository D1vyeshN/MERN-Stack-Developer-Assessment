import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    setLogin({ ...login, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);
  };

  return (
    <>
      <div className="main">
        <h1>LOGIN</h1>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="container login-container"
        >
          <div className="input-container">
            <label htmlFor="username">Username</label>
            <input
              required
              autoComplete="off"
              type="text"
              id="username"
              placeholder="Username"
              value={login.username}
              onChange={handleInput}
            />
          </div>

          <br />
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              required
              autoComplete="off"
              type="password"
              id="password"
              placeholder="Password"
              value={login.password}
              onChange={handleInput}
            />
          </div>
          <br />
          <button type="submit">Login</button>
          <br />
          <p >
            Register New User ?{" "}
            <Link to={"/signup"} style={{ textDecoration: "none" }}>
              <p className="link">SignUp</p>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
