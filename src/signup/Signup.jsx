import React, { useState } from "react";
import { Link } from "react-router-dom";
import { saveUserDetails } from "../services/userService";
import "../App.css";
const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserDetails({
      ...userDetails,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveUserDetails(userDetails);
    alert("User registered successfully");
    window.location.href = "/";
  };

  return (
    <div className="addUser">
      <h3>Signup</h3>
      <form className="addUserForm" onSubmit={handleSubmit}>
        <div className="inputGroup">
          <input
            type="text"
            id="name"
            autoComplete="off"
            placeholder="Enter your name"
            value={userDetails.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            id="email"
            autoComplete="off"
            placeholder="Enter your Email"
            value={userDetails.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            id="password"
            autoComplete="off"
            placeholder="Enter Password"
            value={userDetails.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-success">
            Sign Up
          </button>
        </div>
      </form>
      <div className="login">
        <p>Already have an account?</p>
        <Link to="/" className="btn btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
