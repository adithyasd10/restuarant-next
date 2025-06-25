import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:p-20 xl:p-40 border-t-2 border-red-800 flex items-center justify-between font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-500 hover:from-orange-600 hover:to-red-600 ">
      <Link href="/">SAVORLY</Link>
      <p> © 2025 Savorly. All rights reserved.</p>
    </div>
  )
}

export default Footer
