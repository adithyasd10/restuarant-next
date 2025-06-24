import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Carticon = () => {
  return (
    <div>
      <Link href="/carts" className="flex item-center justify-center gap-3">
        <div className="relative w-8 h-8 md:w-[25px] md:h-[25px]">
            <Image src="/cart.png" alt="" fill></Image>
        </div>
        <span className='flex items-center'>
            Cart (3)
        </span>
      </Link>
    </div>
  )
}

export default Carticon
