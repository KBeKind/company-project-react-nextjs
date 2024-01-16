"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import FetchProduct from "../components/FetchProduct";
import EditProduct from "../components/EditProduct";

const page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <FetchProduct productId={id} />
        <EditProduct productId={id} />
      </div>
    </main>
  );
};

export default page;
