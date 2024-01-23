import React from "react";
import { useState } from "react";
import axios from "axios";

const EditEmployee = ({ employee }) => {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    city: "",
  });

  React.useEffect(() => {
    setFormData({
      name: employee.name,
      department: employee.department,
      city: employee.city,
    });
  }, [employee]);

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
      id: employee.id,
      name: formData.name,
      department: formData.department,
      city: formData.city,
    };

    try {
      const response = await axios.put(
        `https://localhost:5001/api/Employee/update/${employee.id}`,
        payload,
        {
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        console.log("Employee updated successfully");
        window.location.reload();
      } else {
        console.error("Failed to update employee");
      }
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <p className="text-center text-lg mb-4">Edit Employee Form</p>
      {/* <form onSubmit={handleSubmit} className="flex flex-col items-center"> */}
      <form onSubmit={handleSubmit} className=" w-full max-w-md items-center">
        <div className="mb-4">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={employee.name}
            className="w-full p-1 border rounded text-slate-500"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 ">
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            placeholder={employee.department}
            className="w-full p-1 border rounded text-slate-500"
            value={formData.department}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder={employee.city}
            className="w-full p-1 border rounded text-slate-500"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-3/4"
            type="submit"
          >
            Save Edited Employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
