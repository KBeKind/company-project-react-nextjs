"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AllEmployeesButton from "../button-links/AllEmployeesButton";
import EditEmployee from "./EditEmployee";
import DeleteEmployee from "./DeleteEmployee";

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
      }
    };
    fetchEmployee();
  }, []);

  return (
    <div>
      {employee.id ? (
        <>
          <div className="p-4 border-solid border-2 border-slate-600 rounded-md bg-slate-800 w-full flex flex-col items-center">
            <p className="text-2xl text-center mb-2">Employee Details</p>
            <div className="mb-4 mx-5 text-xl">
              <h2>Employee Details</h2>
              <p>ID: {employee.id}</p>
              <p>Name: {employee.name}</p>
              <p>Department: {employee.department}</p>
              <p>City: {employee.city}</p>
            </div>
            <div className="w-3/4">
              <AllEmployeesButton />
            </div>
          </div>
          <div className="p-4 mt-8 border-solid border-2 border-slate-600 rounded-md bg-slate-800">
            <EditEmployee employee={employee} />
          </div>
          <div className="p-4 mt-8 border-solid border-2 border-slate-600 rounded-md bg-slate-800 w-full flex flex-col items-center">
            <DeleteEmployee employee={employee} />
          </div>
        </>
      ) : (
        <p>Product information not available.</p>
      )}
    </div>
  );
};

export default FetchEmployee;
