import React from 'react'
import Common from '@public/home/Rarity/Common.svg'
import Rare from '@public/home/Rarity/Rare.svg'
import Epic from '@public/home/Rarity/Epic.svg'
import Legendary from '@public/home/Rarity/Legendary.svg'
import Sensei from '@public/home/Rarity/Sensei.svg'



export default function Rarity() {
  return (
    <section className='flex flex-col items-center relative -top-[470px] lg:-top-32'>
      <div className='home-title font-BebasNeue text-second-heavy mb-6 md:mb-12'>
        RARITIES
      </div>
      <div className='flex flex-col md:flex-row gap-10 mb-10 md:scale-50 md:-translate-y-1/2 lg:translate-y-0 lg:scale-75 xl:scale-100'>
        <Common className="md:translate-y-1/4"/>
        <Rare />
        <Epic />
        <Legendary className="md:translate-y-1/4"/> 
      </div>
      <div className="flex md:scale-50 md:-translate-y-full lg:translate-y-0 lg:scale-75 xl:scale-100">
        <Sensei />
      </div>
    </section>
  )
}
