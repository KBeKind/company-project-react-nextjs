"use client";
import React, { useState, useEffect } from "react";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";
import AllProductsButton from "../button-links/AllProductsButton";
import axios from "axios";

const FetchProduct = ({ productId }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://localhost:5001/api/Product/${productId}`,
          {
            withCredentials: true,
          }
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        // Handle errors (e.g., show an error message)
      }
    };
    fetchProduct();
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
