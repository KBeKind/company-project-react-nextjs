"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

// http://localhost:5013/api/Product
// http://localhost:5013/api/Product/1
// http://localhost:5013/api/Product/price/search?price=20

const FetchProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5013/api/Product")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log(error.message));
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
