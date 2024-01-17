import React, { useState } from "react";

const DeleteProduct = ({ product }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (showConfirmation) {
      try {
        const response = await fetch(
          `http://localhost:5013/api/Product/delete/${product.id}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          console.log("Product deleted successfully");
          window.location.href = "/product/deleteSuccess";
        } else {
          console.error("Failed to delete product");
        }
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    } else {
      setShowConfirmation(true);
    }
  };
  return (
    <div className="flex flex-col items-center w-full">
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-3/4"
        onClick={handleSubmit}
      >
        Delete Product
      </button>

      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-md text-slate-800 text-center">
            <p>Are you sure you want to delete this product?</p>
            <div className="mt-4 flex justify-center">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setShowConfirmation(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
                onClick={handleSubmit}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteProduct;
