import React from 'react'
import Marquee from "react-fast-marquee"
import Polygons from '@public/home/Polygons7Small.svg'

const oneText = () => (
  <span className='font-NostromoOutline text-6xl ml-8'>
    Join us today and get your first $Omix
  </span>
)



export default function MarqueeFooter() {
  return (
    <section className=' text-second-heavy  w-screen self-center relative h-64 flex justify-center items-center z-0'>
      <Polygons className="absolute -left-28 -top-32"/>
      <Polygons className="absolute -right-28 -bottom-36 rotate-[150deg]"/>
      <Marquee gradient={false} speed={7} className="overflow-hidden origin-bottom -rotate-[9deg] " pauseOnHover={true}>
        {oneText()}
        {oneText()}
        {oneText()}
      </Marquee>
    </section>
  )
}
