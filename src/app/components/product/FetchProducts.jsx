"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const FetchProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://localhost:5001/api/Product", {
          withCredentials: true,
        });
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        // Handle errors (e.g., show an error message)
      }
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <h2>List of Products</h2>
      <table className="table-fixed border-separate border-spacing-x-3 border-spacing-y-1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <Link href={`/product?id=${product.id}`}>
                  <p className="text-2xl font-bold underline">{product.id}</p>
                </Link>
              </td>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchProducts;
