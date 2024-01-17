import React from "react";
import FetchProduct from "./FetchProduct";
import EditProduct from "./EditProduct";

const ProductDetails = ({ productId }) => {
  return (
    <div className=" p-4 mt-4 border-solid border-2	border-slate-600 rounded-md	bg-slate-900">
      <FetchProduct productId={productId} />
    </div>
  );
};

export default ProductDetails;
