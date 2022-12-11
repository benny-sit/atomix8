import React from 'react'

import BearFull from '@public/home/Characters/bear.svg'
import Mouse from '@public/home/Characters/mouse.svg'
import Platipus from '@public/home/Characters/platipus.svg'
import WolfFull from '@public/home/Characters/wolf.svg'
import Image from 'next/image'


export default function OurTeam() {
  return (
    <section className='flex flex-col items-center z-10 relative' id='team'>
      <Image src='/home/Polygons7Small.svg' width={461} height={328} className="absolute hidden lg:block -right-32 -top-48"/>
      <Image src='/home/Polygons7Small.svg' width={461} height={328} className="absolute hidden lg:block -left-72 bottom-24"/>
      <Image src='/home/OurTeam/spearsMobile.png' width={222} height={93} className="absolute -top-12 block lg:hidden"/>
      <div className='home-title mb-6 lg:mb-12 font-BebasNeue text-second-heavy relative'>
        OUR TEAM
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 font-roboto text-second-heavy font-light lg:text-2xl text-xs relative px-4 gap-4'>
        <div className='flex flex-col items-center '>
          <Image src='/home/Characters/bear.png' width={333} height={338} className="w-[152px] lg:w-[333px]"/>
          <div className='font-bold lg:text-3xl text-xs mt-6'>
              Amit Wagner
          </div>
          <div>
              Founder & CTO
          </div>
        </div>
        <div className='flex flex-col items-center '>
          <Image src='/home/Characters/wolf.png' width={320} height={338} className="w-[151px] lg:w-[320px]"/>
          <div className='font-bold lg:text-3xl text-xs mt-6'>
              Itamar Dvir
          </div>
          <div>
              Founder & CEO
          </div>
        </div>
        <div className='flex flex-col items-center '>
          <Image src='/home/Characters/mouse.png' width={314} height={338} className="w-[148px] lg:w-[314px]"/>
          <div className='font-bold lg:text-3xl text-xs mt-6'>
              Adi Abramov
          </div>
          <div>
              Founder & CCO
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Image src='/home/Characters/platipus.png' width={335} height={338} className="w-[148px] lg:w-[335px]"/>
          <div className='font-bold lg:text-3xl text-xs mt-6'>
              Shahar Levin
          </div>
          <div>
              DevOps & Security
          </div>
        </div>
        <div className='flex flex-col items-center justify-self-center col-span-2 lg:col-span-4'>
          <Image src='/home/Characters/mouseSamurai.png' width={229} height={410} className="w-[100px] lg:w-[229px]"/>
          <div className='font-bold lg:text-3xl text-xs mt-6'>
              Benny Sitnikov
          </div>
          <div>
              FullStack Pro
          </div>
        </div>
        
      </div>
      
    </section>
  )
}
