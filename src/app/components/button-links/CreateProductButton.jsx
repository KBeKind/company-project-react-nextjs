import React from "react";
import Link from "next/link";

const CreateProductButton = () => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
      <Link href="/product/create">
        <p>Create Product</p>
      </Link>
    </button>
  );
};

export default CreateProductButton;
