import React from 'react'
import Marquee from "react-fast-marquee"
import Polygons from '@public/home/Polygons7Small.svg'

const oneText = () => (
  <span className='font-NostromoOutline text-xl lg:text-6xl ml-8'>
    Join us today and get your first $Omix
  </span>
)



export default function MarqueeFooter() {
  return (
    <section className=' text-second-heavy  w-screen self-center relative h-24 lg:h-64 flex justify-center items-center z-0'>
      <Polygons className="absolute right-0 lg:-right-20 lg:-translate-y-full translate-y-5 lg:rotate-[150deg] -z-10"/>
      {/* <Polygons className="absolute -right-28 -bottom-36 rotate-[150deg] scale-50 lg:scale-100 -z-10"/> */}
      <Marquee gradient={false} speed={7} className="overflow-hidden origin-bottom -rotate-[9deg] relative z-0 " pauseOnHover={true}>
        {oneText()}
        {oneText()}
        {oneText()}
      </Marquee>
    </section>
  )
}
