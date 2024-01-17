import AllProductsButton from "@/app/components/buttons/AllProductsButton";
import HomePageButton from "@/app/components/buttons/HomePageButton";
import React from "react";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p className="text-2xl">Delete Successful</p>
      <div className="w-1/4 mt-4">
        <AllProductsButton />
      </div>
      <div className="w-1/4 mt-4">
        <HomePageButton />
      </div>
    </main>
  );
};

export default page;
