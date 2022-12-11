import React from 'react'
import Bg from '@public/home/Roadmap/RoadmapBg.svg'
import Octas7 from '@public/home/Polygons7Small.svg'
import Image from 'next/image'

const goals = [
  {
    title: 'Q4 22',
    text1: 'Closed Alpha',
    text2: 'Pre-sale Signups'
  },
  {
    title: 'Q1 23',
    text1: 'Whitelist Mint',
    text2: 'Soft Launch'
  },
  {
    title: 'Q2 23',
    text1: 'Launch, Events',
    text2: 'Consumables'
  },
  {
    title: 'Q3 23',
    text1: 'Governance System',
    text2: 'The Dojo'
  }
]

export default function Roadmap() {
  return (
    <section className='flex flex-col relative items-center mb-12 lg:mb-56' id='roadmap'>
        <Image src='/home/Roadmap/swordsMobile.png' width={239} height={73}  className="absolute -top-12 block lg:hidden"/>
        <div className='home-title font-BebasNeue text-second-heavy lg:mb-12'>
          ROADMAP
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4'>
        {
          goals.map((goal, idx) => (
            <div key={idx} className='flex flex-col justify-center'>
              <Image src='/home/Roadmap/RoadmapBg.svg' width={337} height={338} className="lg:w-[337px]  w-[158px] "/>
              <div className='absolute self-center text-center'>
                <div className='font-BebasNeue lg:text-[64px] text-2xl  lg:leading-[83px] text-second-lite  mb-1'>
                  {goal.title}
                </div>
                <div className='font-roboto text-second-heavy lg:text-2xl  lg:leading-[33px] text-xs leading-[14px] font-light'>
                  {goal.text1}
                </div>
                <div className='font-roboto text-second-heavy lg:text-2xl  lg:leading-[33px] text-xs leading-[14px] font-light'>
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
