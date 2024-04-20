import React, { useState } from "react";
import "./Signup.scss";
import { Link } from "react-router-dom";

const Signup = () => {
  const [login, setLogin] = useState({
    username: "",
    email: "",
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
        <h1>SIGN UP</h1>
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
            <label htmlFor="email">Email</label>
            <input
              required
              autoComplete="off"
              type="email"
              id="email"
              placeholder="email"
              value={login.email}
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
          <button type="submit">SignUp</button>
          <br />
          <p>
            Already Registered ?{" "}
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              <p className="link">Login</p>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
