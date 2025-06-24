import MenuPage from '@/app/menu/page'
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-1 border-b-2 border-b-red-800">
      {/* LOGO */}
      <div className="text-2xl font-bold  tracking-widest bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 text-transparent bg-clip-text transition-transform duration-300 hover:scale-105">
        <Link href="/">
        SAVORLY
        </Link>
      </div>
      {/*MENU*/}
      <div>
        <Menu/>
      </div>
    </div>
  )
}

export default Navbar
