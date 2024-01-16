import React from "react";
import FetchProducts from "../components/FetchProducts";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <h3>Products Page</h3>
        <FetchProducts />
      </div>
    </main>
  );
};

export default page;
