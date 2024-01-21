"use client";

import Cookies from "js-cookie";
import WelcomeHeader from "./components/WelcomeHeader";
import LinkToDotNetPage from "./components/LinkToDotNetPage";
import AllProductsButton from "./components/button-links/AllProductsButton";
import AllEmployeesButton from "./components/button-links/AllEmployeesButton";
import LoginPageButton from "./components/button-links/LoginPageButton";
import { useState, useEffect } from "react";
import LogoutButton from "./components/auth/LogoutButton";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const uiAuthState = Cookies.get("UIAuthState");
      setIsLoggedIn(uiAuthState === "loggedIn");
    };
    checkLoginStatus();
  }, []);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24">
        <WelcomeHeader />
        <div className="mt-4">
          <AllProductsButton />
        </div>
        <div className="mt-4">
          <AllEmployeesButton />
        </div>
        {!isLoggedIn && (
          <div className="mt-4">
            <LoginPageButton />
          </div>
        )}
        {isLoggedIn && (
          <div className="mt-4">
            <LogoutButton />
          </div>
        )}

        <div className="mt-10">
          <LinkToDotNetPage />
        </div>
      </main>
    </>
  );
}
