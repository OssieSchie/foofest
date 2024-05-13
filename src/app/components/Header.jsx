import React from 'react'
import Link from 'next/link'

function Header() {
  return (
        <nav>
            {/* <a href="/" > Forside </a>
            <a href="/stages" > Schedule </a> */}
            <Link href="/" > Forside </Link>
            <Link href="/stages" > Schedule </Link>
        </nav>
  )
}

export default Header
