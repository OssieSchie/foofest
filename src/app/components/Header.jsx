import React from "react";
import Link from "next/link";

function Header() {
  return (
    <nav className="flex flex-row gap-6">
      {/* <a href="/" > Forside </a>
            <a href="/stages" > Schedule </a> */}
      <Link href="/"> Forside </Link>
      <Link href="/stages"> Schedule </Link>
      <Link href="/bookingPage"> Buy a ticket </Link>
    </nav>
  );
}

export default Header;
