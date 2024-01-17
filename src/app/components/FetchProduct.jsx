"use client";
import React, { useState, useEffect } from "react";
import EditProduct from "./EditProduct";
import Link from "next/link";
import DeleteProduct from "./DeleteProduct";
import AllProductsButton from "./buttons/AllProductsButton";

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
          <div className="p-4 border-solid border-2 border-slate-600 rounded-md bg-slate-800 w-full flex flex-col items-center">
            <p className="text-2xl text-center mb-2">ProductDetails</p>
            <div className="mb-4 mx-5 text-xl">
              <p>ID: {product.id}</p>
              <p>Name: {product.name}</p>
              <p>Price: {product.price}</p>
            </div>
            <div className="w-3/4">
              <AllProductsButton />
            </div>
          </div>
          <div className="p-4 mt-8 border-solid border-2 border-slate-600 rounded-md bg-slate-800">
            <EditProduct product={product} />
          </div>
          <div className="p-4 mt-8 border-solid border-2 border-slate-600 rounded-md bg-slate-800 w-full flex flex-col items-center">
            <DeleteProduct product={product} />
          </div>
        </>
      ) : (
        <p>Product information not available.</p>
      )}
    </div>
  );
};

export default FetchProduct;
