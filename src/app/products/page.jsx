"use client";

import React from "react";
import FetchProducts from "../components/product/FetchProducts";
import HomePageButton from "../components/button-links/HomePageButton";
import CreateProductButton from "../components/button-links/CreateProductButton";
import useAuthCheck from "../hooks/useAuthCheck";

const page = () => {
  const { isLoading } = useAuthCheck();

  if (isLoading) {
    return <div></div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <FetchProducts />
      </div>
      <div className="mt-4">
        <CreateProductButton />
      </div>
      <div className="mt-4">
        <HomePageButton />
      </div>
    </main>
  );
};

export default page;
