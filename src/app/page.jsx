import Image from "next/image";

import WelcomeHeader from "./components/WelcomeHeader";
import LinkToDotNetPage from "./components/LinkToDotNetPage";
import AllProductsButton from "./components/buttons/AllProductsButton";
import AllEmployeesButton from "./components/buttons/AllEmployeesButton";

export default function Home() {
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
        <div className="mt-10">
          <LinkToDotNetPage />
        </div>
      </main>
    </>
  );
}
