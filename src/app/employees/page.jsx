import React from "react";
import FetchEmployees from "../components/employee/FetchEmployees";
import HomePageButton from "../components/button-links/HomePageButton";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <FetchEmployees />
      <div>
        <HomePageButton />
      </div>
    </main>
  );
};

export default page;
