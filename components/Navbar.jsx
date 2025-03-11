import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full h-[80px] flex justify-between px-10 border-b-[1px] items-center'>
        <Link href='/'>
            <h1>Project Pilot</h1>
        </Link>

        <div>
            <Link href='/features'>Features</Link>
            <Link href='/prices'>Pricing</Link>
        </div>
        <button>Sign in</button>
    </nav>
  )
}

export default Navbar