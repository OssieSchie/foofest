import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function finPurchase() {
  return (
    <div className="flex flex-col h-svh justify-center">
      <div className="mx-auto flex flex-col gap-6 text-center">
        <Image
          alt="FooFest logo"
          src={`/logos/fooFestLogo.svg`}
          height={150}
          width={212}
        />
        <h1 className="bg-white-off-00 text-dark-grey-00 inline p-4">
          Thank you for your purchase
        </h1>
        <p>
          Feel free to explore the{" "}
          <Link
            href="/"
            className="bg-accent-00 text-white-off-00  rounded-lg py-2 px-4 hover:bg-red-700 hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-300"
          >
            artist
          </Link>{" "}
          or see the{" "}
          <Link
            href="/stages"
            className="bg-accent-00 text-white-off-00  rounded-lg py-2 px-4 hover:bg-red-700 hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-300"
          >
            schedule
          </Link>{" "}
          for more information!
        </p>
      </div>
    </div>
  );
}
