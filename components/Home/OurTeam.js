import React from 'react'

import BearFull from '@public/home/Characters/bear.svg'
import Mouse from '@public/home/Characters/mouse.svg'
import Platipus from '@public/home/Characters/platipus.svg'
import WolfFull from '@public/home/Characters/wolf.svg'


export default function OurTeam() {
  return (
    <section className='flex flex-col items-center mb-12 ' id='team'>
      <div className='home-title mb-12 font-BebasNeue text-second-heavy relative'>
        OUR TEAM
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 font-roboto text-second-heavy font-light text-2xl relative'>
        <div className='flex flex-col items-center mb-6'>
          <WolfFull />
          <div className='font-bold text-3xl mt-6'>
              Amit Wagner
          </div>
          <div>
              Founder & CTO
          </div>
        </div>
        <div className='flex flex-col items-center md:ml-12 mb-6'>
          <BearFull />
          <div className='font-bold text-3xl mt-6'>
              Itamar Dvir
          </div>
          <div>
              Founder & CEO
          </div>
        </div>
        <div className='flex flex-col items-center md:ml-12 mb-6'>
          <Mouse />
          <div className='font-bold text-3xl mt-6'>
              Adi Abramov
          </div>
          <div>
              Founder & CCO
          </div>
        </div>
        <div className='flex flex-col items-center mb-6'>
          <Platipus className=""/>
          <div className='font-bold text-3xl mt-6'>
              Shahar Levin
          </div>
          <div>
              DevOps & Security
          </div>
        </div>
      </div>
    </section>
  )
}
