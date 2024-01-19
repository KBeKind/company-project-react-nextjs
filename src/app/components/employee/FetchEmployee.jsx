"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchEmployee = ({ employeeId }) => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(
          `https://localhost:5001/api/Employee/${employeeId}`,
          {
            withCredentials: true,
          }
        );
        setEmployee(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        // Handle errors (e.g., show an error message)
      }
    };
    fetchEmployee();
  }, []);

  return (
    <div>
      {employee.id ? (
        // Conditionally render product details if 'id' exists
        <div>
          <h2>Employee Details</h2>
          <p>ID: {employee.id}</p>
          <p>Name: {employee.name}</p>
          <p>Department: {employee.department}</p>
          <p>City: {employee.city}</p>
        </div>
      ) : (
        <p>Product information not available.</p>
      )}
    </div>
  );
};

export default FetchEmployee;
