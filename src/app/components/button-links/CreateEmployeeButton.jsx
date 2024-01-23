import React from "react";
import Link from "next/link";

const CreateEmployeeButton = () => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
      <Link href="/employee/create">
        <p>Create Employee</p>
      </Link>
    </button>
  );
};

export default CreateEmployeeButton;
