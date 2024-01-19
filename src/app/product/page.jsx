"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import ProductDetails from "../components/product/ProductDetails";

const page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <ProductDetails productId={id} />
      </div>
    </main>
  );
};

export default page;
