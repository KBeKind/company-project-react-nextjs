"use client";
import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5013/api/Identity/login",
        {
          UserName: username,
          Password: password,
        }
      );

      // Assuming the token is in response.data.token
      // Store the token in localStorage
      localStorage.setItem("authToken", response.data.token);

      // Redirect user to another page or update the state to reflect the user is logged in
      console.log("Login successful");
    } catch (error) {
      console.error("Login error", error.response);
      // Handle login error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
