"use client";
import React, { useState, useEffect } from "react";

// http://localhost:5013/api/Product/1

const FetchProduct = ({ productId }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (productId) {
      fetch(`http://localhost:5013/api/Product/${productId}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
        })
        .catch((error) => console.log(error.message));
    }
  }, []);

  return (
    <div>
      {product.id ? (
        // Conditionally render product details if 'id' exists
        <div>
          <h2>Product Details</h2>
          <p>ID: {product.id}</p>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
        </div>
      ) : (
        // Render a message if 'id' doesn't exist (product data not available)
        <p>Product information not available.</p>
      )}
    </div>
  );
};

export default FetchProduct;
