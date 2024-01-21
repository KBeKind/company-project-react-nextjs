import React from "react";
import Link from "next/link";

const LoginPageButton = () => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
      <Link href="/login">
        <p>Login</p>
      </Link>
    </button>
  );
};

export default LoginPageButton;
