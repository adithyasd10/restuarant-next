"use client"
import React from 'react'
import Countdown from 'react-countdown'

const endingDate = new Date("2025-07-26")

const CountDown = () => {
  return (
    <Countdown className="text-4xl xl:text-5xl flex flex-col p-3 font-bold text-amber-300" date={endingDate}/>
  )
}

export default CountDown
