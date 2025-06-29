"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data = [
  {
    id: 1,
    title: "Hot, Crispy & Fresh — Every Single Bite!",
    image: "/slide4.jpg",
  },
  {
    id: 2,
    title: "From Our Oven to Your Doorstep — Anywhere in NY",
    image: "/slide3.jpg",
  },
  {
    id: 3,
    title: "Made to Share, Perfect for Family Moments",
    image: "/slide7.jpg",
  },
];

const Slider = () => {
  const [currentSlide,setCurrentSlide] = useState(0);

  useEffect(()=>{
    const interval=setInterval(
      ()=>setCurrentSlide((prev)=>(prev == data.length-1 ? 0 : prev+1))
    ,2000);
    return ()=>clearInterval(interval);
  },[]);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
    {/*Text Container*/}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 font-bold text-red-500 ">
        <h1 className="text-5xl text-center uppercase p-5 md:p-10 md:text-6xl xl:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 transition-all duration-500 hover:from-pink-500 hover:via-red-500 hover:to-orange-400">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8">Order Now</button>
      </div>
      {/*Image Container */}
      <div className="w-full h-1/2 relative lg:h-full lg:w-1/2">
        <Image src={data[currentSlide].image} alt="" fill className="object-cover"></Image>
      </div>
    </div>
  )
}

export default Slider
 