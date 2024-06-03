import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { getUserDetails } from "../services/userService";
import { UserContext } from "../services/userService";
import "../App.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials({
      ...credentials,
      [id]: value,
    });
  };

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = getUserDetails(credentials.email, credentials.password);
    if (user) {
      alert("Login successful");
      setUser(user);
      window.location.href = "/List";
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="addUser">
      <h3>Sign In</h3>
      <form className="addUserForm" onSubmit={handleSubmit}>
        <div className="inputGroup">
          <input
            type="email"
            id="email"
            autoComplete="off"
            placeholder="Enter your Email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            id="password"
            autoComplete="off"
            placeholder="Enter Password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
      <div className="login">
        <p>Don't have an account?</p>
        <Link to="/Signup" className="btn btn-success">
          Sign Up
        </Link>
      </div>
    </div>
  );
};
export default Login;
