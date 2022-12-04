import React from 'react'

import BearFull from '@public/home/Characters/bear.svg'
import Mouse from '@public/home/Characters/mouse.svg'
import Platipus from '@public/home/Characters/platipus.svg'
import WolfFull from '@public/home/Characters/wolf.svg'


export default function OurTeam() {
  return (
    <section className='flex flex-col items-center'>
      <div className='home-title mb-12 font-BebasNeue text-second-heavy'>
        OUR TEAM
      </div>
      <div className='flex'>
        <div className='flex flex-col items-center'>
          <WolfFull />
        </div>
        <div className='flex flex-col items-center ml-12'>
          <BearFull />
        </div>
        <div className='flex flex-col items-center ml-12'>
          <Mouse />
        </div>
        <div className='flex flex-col items-center'>
          <Platipus className=""/>
        </div>
      </div>
    </section>
  )
}
