"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const FetchEmployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(
          "https://localhost:5001/api/Employee",
          {
            withCredentials: true,
          }
        );
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        // Handle errors (e.g., show an error message)
      }
    };
    fetchEmployees();
  }, []);
  return (
    <div>
      <h2>List of Employees</h2>
      <table className="table-fixed border-separate border-spacing-x-3 border-spacing-y-1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <Link href={`/employee?id=${employee.id}`}>
                  <p className="text-2xl font-bold underline">{employee.id}</p>
                </Link>
              </td>
              <td>{employee.name}</td>
              <td>{employee.price}</td>
              <td>{employee.department}</td>
              <td>{employee.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchEmployees;
