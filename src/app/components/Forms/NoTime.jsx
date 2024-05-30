import React from "react";
import Link from "next/link";

export default function NoTime() {
  return (
    <div className="flex flex-col justify-center h-full">
      <div className="mx-auto flex flex-col text-center my-auto">
        <div className="flex flex-col gap-6">
          <h2 className="bg-white-off-00 text-dark-grey-00 inline p-4 font-extrabold">
            You did not finish the purchase in time
          </h2>
          <Link
            href="/bookingPage"
            className="bg-accent-00 text-white-off-00  rounded-lg py-2 px-4 hover:bg-red-700 hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-300"
          >
            Try Again?
          </Link>
        </div>
      </div>
    </div>
  );
}
