"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import { rock_salt } from "../fonts";

function Header() {
  const [expanded, setExpanded] = useState(false);

  function handeChange() {
    if (typeof window !== "undefined") {
      setExpanded((expand) => !expand);
    }
  }

  return (
    <nav className="sticky top-0 left-0 w-full h-16 flex items-center justify-between px-4 bg-dark-grey-00 bg-opacity-70 backdrop-blur-md text-white z-10 ">
      <div
        className={`${
          expanded ? styles.show : styles.hidden
        } sm:hidden space-x-4`}
      >
        <Link
          href="/"
          className="bg-white-off-00 p-2 text-dark-grey-00 rounded-md hover:bg-white-off-20 hover:border border border-white-off-00"
        >
          Forside
        </Link>
        <Link
          href="/stages"
          className="bg-white-off-00 p-2 text-dark-grey-00 rounded-md hover:bg-white-off-20 hover:border border border-white-off-00"
        >
          Schedule
        </Link>
        <Link
          href="/bookingPage"
          className={`${rock_salt.className} bg-accent-00 text-white border-2 border-accent-00 hover:bg-red-700 hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 rounded-lg transition-colors pt-2 px-1 duration-300`}
        >
          Buy Ticket
        </Link>
      </div>
      <div className="hidden sm:flex space-x-4 items-center">
        <Link
          href="/bookingPage"
          className={`${rock_salt.className} bg-accent-00 text-white border-2 border-accent-00 hover:bg-red-700 hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 rounded-lg p-2 transition-colors duration-300 mr-5`}
        >
          Buy Ticket
        </Link>
        <div className="flex gap-2 justify-evenly">
          <Link
            href="/"
            className="bg-white-off-00 p-2 text-dark-grey-00 rounded-md hover:bg-white-off-20 hover:border border border-white-off-00"
          >
            Forside
          </Link>
          <Link
            href="/stages"
            className="bg-white-off-00 p-2 text-dark-grey-00 rounded-md hover:bg-white-off-20 hover:border border border-white-off-00"
          >
            Schedule
          </Link>
        </div>
      </div>
      <button className="flex sm:hidden" onClick={handeChange}>
        <Image
          alt="burger"
          src="/burger-menu-svgrepo-com.svg"
          width={50}
          height={50}
        />
      </button>
    </nav>
  );
}

export default Header;
