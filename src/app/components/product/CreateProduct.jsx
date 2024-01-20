"use client";

import React, { useState } from "react";
import axios from "axios";

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
  });

  // Set the initial form data to the existing product values
  // React.useEffect(() => {
  //   setFormData({
  //     name: product.name,
  //     price: product.price,
  //   });
  // }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the PUT request payload
    const payload = {
      name: formData.name,
      price: formData.price,
    };

    // Send the PUT request to the API using Axios
    try {
      const response = await axios.put(
        `https://localhost:5001/api/Product/update/${product.id}`,
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
        console.log("Product updated successfully");
        window.location.reload();
      } else {
        console.error("Failed to update product");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="p-4 border-solid border-2 border-slate-600 rounded-md bg-slate-800 w-full flex flex-col items-center">
      <p className="text-center text-lg mb-2">Create Product</p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
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
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="price"
            className="w-full p-1 border rounded text-slate-500"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-3/4"
          type="submit"
        >
          Save Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
