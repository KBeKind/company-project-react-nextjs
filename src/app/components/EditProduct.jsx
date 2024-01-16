import React, { useState } from "react";

const EditProduct = ({ product }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
  });

  // Set the initial form data to the existing product values
  React.useEffect(() => {
    setFormData({
      name: product.name,
      price: product.price,
    });
  }, [product]);

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
      id: product.id,
      name: formData.name,
      price: formData.price,
    };

    // Send the PUT request to the API
    try {
      const response = await fetch(
        `http://localhost:5013/api/Product/update/${product.id}`,
        {
          method: "PUT",
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
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
    <div className="flex flex-col">
      <p className="text-center text-lg mb-4">Edit Product Form</p>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="mb-4">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={product.name}
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
            placeholder={product.price}
            className="w-full p-1 border rounded text-slate-500"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Save Edited Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
