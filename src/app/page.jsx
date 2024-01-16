import Image from "next/image";

import WelcomeHeader from "./components/WelcomeHeader";
import LinkToDotNetPage from "./components/LinkToDotNetPage";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24">
        <WelcomeHeader />

        <Link href="/products">
          <p className="text-2xl font-bold underline">All Products</p>
        </Link>
        <Link href="/employees">
          <p className="text-2xl font-bold underline">All Employees</p>
        </Link>
        <div className="mt-10">
          <LinkToDotNetPage />
        </div>
      </main>
    </>
  );
}
