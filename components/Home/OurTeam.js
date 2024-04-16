import React from 'react'

import BearFull from '@public/home/Characters/bear.svg'
import Mouse from '@public/home/Characters/mouse.svg'
import Platipus from '@public/home/Characters/platipus.svg'
import WolfFull from '@public/home/Characters/wolf.svg'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'


export default function OurTeam() {
  return (
    <section className='flex flex-col items-center z-10 relative' id='team'>
      <Parallax speed={-10} opacity={[0.2, 0.7]} className='absolute hidden sm:block xl:-left-52 lg:-right-44 lg:-top-48 -right-20 -top-28'>
        <Image src='/home/Polygons7Small.svg' width={461} height={328} className=""/>
      </Parallax>
      <Image src='/home/Polygons7Small.svg' width={461} height={328} className="absolute hidden sm:block rotate-180 xl:-left-72 sm:-left-14 xl:bottom-24 lg:bottom-10 sm:bottom-36 opacity-50"/>
      <Image src='/home/Polygons7Small.svg' width={461} height={328} className="absolute hidden xl:block  -right-72 bottom-44 opacity-30"/>
      <Image src='/home/OurTeam/spearsMobile.png' width={222} height={93} className="absolute -top-12 block sm:hidden"/>
      <Parallax scale={[1, 1.1]} className='home-title mb-6 lg:mb-12 font-BebasNeue text-second-heavy relative'>
        OUR TEAM
      </Parallax>
      <div className='grid grid-cols-2 lg:grid-cols-4 items-end font-roboto text-second-heavy font-light sm:text-2xl  text-xs relative px-16 gap-8'>
        <Parallax rootMargin={{top: 0, bottom:-600}} translateY={['30%', '0%']} className='lg:flex flex-col items-center hidden'>
          {/* w-[152px] lg:w-[333px] */}
          <Image src='/home/Characters/bear.png' width={333} height={338} className=""/>
          <div className='font-bold sm:text-3xl text-xs mt-2 md:mt-6'>
              Amit Wagner
          </div>
          <div>
              Founder & CTO
          </div>
        </Parallax>
        <div className='flex flex-col items-center lg:hidden'>
          {/* w-[152px] lg:w-[333px] */}
          <Image src='/home/Characters/bear.png' width={333} height={338} className=""/>
          <div className='font-bold sm:text-3xl text-xs mt-2 md:mt-6'>
              Amit Wagner
          </div>
          <div>
              Founder & CTO
          </div>
        </div>
        {/* w-[151px] lg:w-[320px] */}
        <div className='flex flex-col items-center '>
          <Image src='/home/Characters/wolf.png' width={320} height={338} className=""/>
          <div className='font-bold sm:text-3xl text-xs mt-2 md:mt-6'>
              Itamar Dvir
          </div>
          <div>
              Founder & CEO
          </div>
        </div>
        {/* w-[148px] lg:w-[314px] */}
        <div className='flex flex-col items-center '>
          <Image src='/home/Characters/mouse.png' width={314} height={338} className=""/>
          <div className='font-bold sm:text-3xl text-xs mt-2 md:mt-6'>
              Adi Abramov
          </div>
          <div>
              Founder & CCO
          </div>
        </div>
        {/* w-[148px] lg:w-[335px] */}
        <Parallax rootMargin={{top: 0, bottom:-600}} translateY={['30%', '0%']} className='lg:flex flex-col items-center justify-center hidden'>
          <Image src='/home/Characters/platipus.png' width={335} height={338} className=""/>
          <div className='font-bold sm:text-3xl text-xs  mt-2 md:mt-6'>
              Shahar Levin
          </div>
          <div>
              DevOps & Security
          </div>
        </Parallax>
        <div className='flex flex-col items-center justify-center lg:hidden'>
          <Image src='/home/Characters/platipus.png' width={335} height={338} className=""/>
          <div className='font-bold sm:text-3xl text-xs mt-2 md:mt-6'>
              Shahar Levin
          </div>
          <div>
              DevOps & Security
          </div>
        </div>
        {/* w-[100px] lg:w-[229px] */}
        <div className='flex flex-col items-center justify-self-center col-span-2 lg:col-span-4 w-1/2'>
          <Image src='/home/Characters/mouseSamurai.png' width={229} height={410} className="px-4 sm:px-2"/>
          <div className='font-bold sm:text-3xl text-xs mt-2 md:mt-6'>
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
