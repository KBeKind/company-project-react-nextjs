"use client";

import React, { useState } from "react";
import axios from "axios";

const CreateEmployee = () => {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      department: formData.department,
      city: formData.city,
    };

    try {
      const response = await axios.post(
        `https://localhost:5001/api/Employee`,
        payload,
        {
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status === 201) {
        console.log("Employee created successfully");
        window.location.href = "/employees";
      } else {
        console.error("Failed to create employee");
      }
    } catch (error) {
      console.error("Error creating employee:", error);
    }
  };

  return (
    <div className="p-4 border-solid border-2 border-slate-600 rounded-md bg-slate-800 w-full flex flex-col items-center">
      <p className="text-center text-lg mb-2">Create Employee</p>
      <form onSubmit={handleSubmit} className=" w-full max-w-md items-center">
        <div className="mb-4">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            className="w-full p-1 border rounded text-slate-500"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            placeholder="department"
            className="w-full p-1 border rounded text-slate-500"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="city"
            className="w-full p-1 border rounded text-slate-500"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-3/4"
            type="submit"
          >
            Save Employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEmployee;
