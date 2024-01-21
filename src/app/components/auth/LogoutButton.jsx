import React from "react";
import axios from "axios";
import Cookies from "js-cookie";

const LogoutButton = () => {
  const handleLogout = async () => {
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
        window.location.href = "/";
      } else {
        console.error("Logout was not successful:", response);
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
