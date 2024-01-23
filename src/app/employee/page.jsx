"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import EmployeeDetails from "../components/employee/EmployeeDetails";

const page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <EmployeeDetails employeeId={id} />
      </div>
    </main>
  );
};

export default page;
