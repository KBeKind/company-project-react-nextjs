"use client";

import React from "react";
import FetchEmployees from "../components/employee/FetchEmployees";
import HomePageButton from "../components/button-links/HomePageButton";
import CreateEmployeeButton from "../components/button-links/CreateEmployeeButton";
import useAuthCheck from "../hooks/useAuthCheck";

const page = () => {
  const { isLoading } = useAuthCheck();

  if (isLoading) {
    return <div></div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <FetchEmployees />
      </div>
      <div className="mt-4">
        <CreateEmployeeButton />
      </div>
      <div className="mt-4">
        <HomePageButton />
      </div>
    </main>
  );
};

export default page;
