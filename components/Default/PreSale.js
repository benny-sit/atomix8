import React from 'react'
import Marquee from "react-fast-marquee"

const oneText = () => (
  <span className=" text-white font-NostromoOutline text-[40px] ml-16">
                ALPHA LAUNCH IS LIVE, CLICK FIGHT NOW TO START YOUR JOURNEY
  </span>
)

export default function PreSale() {
  return (
    <div className="hidden items-center w-full presale-gradient z-10 h-[60px] md:flex">
        <Marquee gradient={false} speed={17}>
          {oneText()}
          {oneText()}
          {oneText()}
          {oneText()}
          {oneText()}
        </Marquee>
    </div>
  )
}
