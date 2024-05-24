import { rock_salt } from "../fonts";
import React from "react";
import Image from "next/image";

export default function FrontPageIntroCard() {
  return (
    <article className="relative mb-5">
      <div className="relative w-full h-60 sm:h-80 md:h-96 lg:h-[500px]">
        <Image
          alt="Frontpage Picture"
          src={`/img/pexels-sebastian-ervi-866902-1763075.webp`}
          className="object-cover w-full h-full"
          layout="fill"
          priority
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 p-4">
          <h1
            className={`${rock_salt.className} text-2xl sm:text-3xl md:text-4xl font-bold mb-4`}
          >
            Welcome to FooFest!
          </h1>
          <div className="flex space-x-4">
            <button className="bg-red-600 text-white border-2 border-red-600 rounded-lg py-2 px-4 hover:bg-red-700 hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-300">
              Buy Tickets
            </button>
            <button className="bg-red-600 text-white border-2 border-red-600 rounded-lg py-2 px-4 hover:bg-red-700 hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-300">
              Schedule
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
