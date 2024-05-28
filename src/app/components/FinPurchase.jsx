import React from "react";
import Link from "next/link";

export default function finPurchase() {
  return (
    <div className="flex flex-col h-svh w-svw justify-center">
      <div className="mx-auto">
        <h1 className="bg-white-off-00 text-dark-grey-00 inline">
          Thank you for your purchase!
        </h1>
        <p>
          Feel free to explore the{" "}
          <Link
            href="/"
            className="bg-accent-00 text-white-off-00 p-1 rounded-md"
          >
            artist
          </Link>{" "}
          or see the{" "}
          <Link
            href="/"
            className="bg-accent-00 text-white-off-00 p-1 rounded-md"
          >
            schedule
          </Link>{" "}
          for more information!
        </p>
      </div>
    </div>
  );
}
