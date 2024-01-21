import React from "react";
import axios from "axios";
import Cookies from "js-cookie";

const DotNetPageButton = () => {
  const handleLogoutAndLink = async () => {
    try {
      const response = await axios.post(
        "https://localhost:5001/api/Identity/ReactLogout",
        {},
        { withCredentials: true }
      );

      if (
        response.status === 200 &&
        response.data &&
        response.data.message === "User logged out successfully"
      ) {
        Cookies.remove("UIAuthState", { path: "/" });
        window.location.href = "http://localhost:5032/";
        //href="http://localhost:5032/"
      } else {
        console.error("Logout was not successful:", response);
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <button
      onClick={handleLogoutAndLink}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2"
    >
      Go to DotNet Based Pages
    </button>
  );
};

export default DotNetPageButton;
