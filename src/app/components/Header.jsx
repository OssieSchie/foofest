import React from 'react'
import Link from 'next/link'

function Header() {
  return (
        <nav>
            <Link href="/" > Forside </Link>
            <Link href="/stages" > Schedule </Link>
        </nav>
  )
}

export default Header
