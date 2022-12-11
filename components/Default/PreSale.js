import React from 'react'
import Marquee from "react-fast-marquee"

const oneText = () => (
  <span className=" text-white font-NostromoOutline text-[40px] ml-8">
                Pre-sale sign ups are ongoing {`{95/120}`}
  </span>
)

export default function PreSale() {
  return (
    <div className="hidden items-center w-full presale-gradient z-10 h-[60px] md:flex">
        <Marquee gradient={false} speed={10}>
          {oneText()}
          {oneText()}
          {oneText()}
          {oneText()}
          {oneText()}
        </Marquee>
    </div>
  )
}
