import Image from 'next/image'
import React from 'react'

const Slider = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]">
    {/*Text Container*/}
      <div className="h-1/2 flex items-center justify-center flex-col gap-8 font-bold text-red-500">
        <h1 className="text-5xl text-center uppercase p-5 md:text-6xl xl:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 transition-all duration-500 hover:from-pink-500 hover:via-red-500 hover:to-orange-400">Test</h1>
        <button className="bg-red-500 text-white py-4 px-8">Order Now</button>
      </div>
      {/*Image Container */}
      <div className="w-full h-1/2 relative">
        <Image src="/slide1.png" alt="" fill className="object-cover"></Image>
      </div>
    </div>
  )
}

export default Slider
