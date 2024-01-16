"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import FetchEmployee from "../components/FetchEmployee";

const page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <FetchEmployee employeeId={id} />
        {/* <EditEmployee employeeId={id} /> */}
      </div>
    </main>
  );
};

export default page;
