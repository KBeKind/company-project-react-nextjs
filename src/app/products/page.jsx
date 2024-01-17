import React from "react";
import FetchProducts from "../components/FetchProducts";
import HomePageButton from "../components/buttons/HomePageButton";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <FetchProducts />
      </div>
      <div className="mt-4">
        <HomePageButton />
      </div>
    </main>
  );
};

export default page;
