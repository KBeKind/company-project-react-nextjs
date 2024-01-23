import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const useAuthCheck = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const uiAuthState = Cookies.get("UIAuthState");
    if (uiAuthState !== "loggedIn") {
      window.location.href = "/login";
    } else {
      setIsLoading(false);
    }
  }, []);

  return { isLoading };
};

export default useAuthCheck;
