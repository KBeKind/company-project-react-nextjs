"use client";
import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting login for:", username); // Log username
    try {
      const response = await axios.post(
        "https://localhost:5001/api/Identity/ReactLogin",
        {
          UserName: username,
          Password: password,
        },
        {
          withCredentials: true,
        }
      );

      console.log("Axios response:", response);
      // Check if response has data and is in JSON format
      // if (response.data && typeof response.data === "object") {
      //   console.log("Login response:", response.data);
      // }

      console.log("Login successful");
      // Redirect or update state here, e.g., redirect to home page
      // window.location.href = "/products"; // Redirect to home page
    } catch (error) {
      console.error("Login error occurred:", error);
      //console.error("Login error", error.response);
      if (error.response && error.response.data) {
        //console.error("Backend error details:", error.response.data);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div className="mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full p-1 border rounded text-slate-700"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-1 border rounded text-slate-700"
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-3/4"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
