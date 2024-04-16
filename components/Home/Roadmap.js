import React from 'react'
import Bg from '@public/home/Roadmap/RoadmapBg.svg'
import Octas7 from '@public/home/Polygons7Small.svg'
import Image from 'next/image'

const goals = [
  {
    title: 'Q3 23',
    text1: 'Closed Alpha',
    text2: ''
  },
  {
    title: 'Q4 23',
    text1: 'Soft Launch',
    text2: ''
  },
  {
    title: 'Q1 24',
    text1: 'Governance System',
    text2: ''
  },
  {
    title: 'Q2 24',
    text1: 'Expansion',
    text2: ''
  }
]

export default function Roadmap() {
  return (
    <section className='flex flex-col relative items-center mb-12 sm:mb-24 lg:mb-56' id='roadmap'>
        <Image src='/home/Roadmap/swordsMobile.png' width={239} height={73}  className="absolute -top-12 block sm:hidden"/>
        <div className='home-title font-BebasNeue text-second-heavy lg:mb-12'>
          ROADMAP
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 mx-7'>
        {
          // lg:w-[337px]  w-[158px]
          goals.map((goal, idx) => (
            <div key={idx} className='flex flex-col justify-center'>
              <Image src='/home/Roadmap/RoadmapBg.svg' width={337} height={338} className="h-fit w-fit sm:h-[270px] sm:w-[270px] xl:h-[338px] xl:w-[337px]"/>
              <div className='absolute self-center text-center'>
                <div className='font-BebasNeue xl:text-[64px] text-2xl sm:text-[50px] sm:leading-[65px] xl:leading-[83px] text-second-lite  mb-1'>
                  {goal.title}
                </div>
                <div className='font-roboto text-second-heavy xl:text-2xl sm:text-[20px] sm:leading-[26px] text-xs leading-[14px] font-light'>
                  {goal.text1}
                </div>
                <div className='font-roboto text-second-heavy xl:text-2xl sm:text-[20px] sm:leading-[26px] text-xs leading-[14px] font-light'>
                  {goal.text2}
                </div>
              </div>
            </div>
          ))
        }
        </div>
    </section>
  )
}
