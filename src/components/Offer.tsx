import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'

const Offer = () => {
  return (
    <div className='h-screen bg-black flex flex-col md:flex-row md:justify-between md:bg-[url("/offerBg.png")] md:h-[70vh]'>
      {/*Text container*/}
      <div className='w-screen text-center gap-8 flex-1 justify-center items-center flex-col md:flex-row text-white p-4 md:justify-center'>
        <h1 className='text-5xl font-bold xl:text-6xl p-9'>Burgers & Fries Fest</h1>
        <p className='text-xl p-4'>
          Indulge in our irresistible combo deals! Enjoy juicy, flame-grilled burgers paired with crispy, golden fries — all at unbeatable prices. Whether you&apos;re grabbing a solo snack or sharing with friends, our limited-time offers are made to satisfy your cravings without breaking the bank.
        </p>
        <CountDown />
        <button className='bg-red-500 rounded-md px-2 py-2'>Order NOW</button>
      </div>
      {/*Image container*/}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  )
}

export default Offer
