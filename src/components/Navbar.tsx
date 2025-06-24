import MenuPage from '@/app/menu/page'
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Carticon from './Carticon'
import Image from 'next/image'

const Navbar = () => {
  const user=false
  return (
    <div className="flex justify-between items-center px-4 py-1 border-b-2 border-b-red-800 font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-500 hover:from-orange-600 hover:to-red-600 md:h-24 lg:px-20 xl:40">
      {/* Left Links*/}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* LOGO */}
      <div className="text-2xl font-bold  tracking-widest bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 text-transparent bg-clip-text transition-transform duration-300 hover:scale-105 flex-1 md:text-center">
        <Link href="/">
        SAVORLY
        </Link>
      </div>
      {/*MENU*/}
      <div className='md:hidden'>
        <Menu/>
      </div>
      {/* Right Links*/}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <Carticon/>
        {!user ? (<Link href="/login">Login</Link>):
        (<Link href="/orders">Orders</Link>)}
      </div>
    </div>
  )
}

export default Navbar
