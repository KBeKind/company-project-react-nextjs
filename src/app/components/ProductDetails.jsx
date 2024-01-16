import React from "react";
import FetchProduct from "./FetchProduct";
import EditProduct from "./EditProduct";

const ProductDetails = ({ productId }) => {
  return (
    <div className=" p-4 mt-4 border-solid border-2	border-slate-600 rounded-md	bg-slate-900">
      <p className="text-2xl text-center mb-2">ProductDetails</p>
      <FetchProduct productId={productId} />
    </div>
  );
};

export default ProductDetails;
