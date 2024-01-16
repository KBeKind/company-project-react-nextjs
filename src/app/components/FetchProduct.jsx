"use client";
import React, { useState, useEffect } from "react";
import EditProduct from "./EditProduct";

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
        <>
          <div className="mx-8">
            <p>ID: {product.id}</p>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
          </div>
          <div className=" p-4 mt-8 border-solid border-2	border-slate-600 rounded-md bg-slate-800	">
            <EditProduct product={product} />
          </div>
        </>
      ) : (
        <p>Product information not available.</p>
      )}
    </div>
  );
};

export default FetchProduct;
