"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

// http://localhost:5013/api/Employee

const FetchEmployees = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5013/api/Employee")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
      })
      .catch((error) => console.log(error.message));
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
