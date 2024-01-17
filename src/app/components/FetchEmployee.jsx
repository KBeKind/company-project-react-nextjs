"use client";
import React, { useState, useEffect } from "react";

// http://localhost:5013/api/Employee/1

const FetchEmployee = ({ employeeId }) => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    if (employeeId) {
      fetch(`http://localhost:5013/api/Employee/${employeeId}`)
        .then((response) => response.json())
        .then((data) => {
          setEmployee(data);
          console.log(data);
        })
        .catch((error) => console.log(error.message));
    }
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
