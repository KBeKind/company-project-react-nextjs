import React from "react";
import Login from "../components/auth/Login";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 ">
      <div className="p-4 mt-4 border-solid border-2	border-slate-600 rounded-md	bg-slate-900">
        <Login />
      </div>
    </main>
  );
};

export default page;
