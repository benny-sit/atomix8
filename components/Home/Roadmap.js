import React from 'react'
import Bg from '@public/home/RoadmapBg.svg'

const goals = [
  {
    title: 'Q4 22',
    text1: 'Closed Alpha',
    text2: 'Pre-sale Signups'
  },
  {
    title: 'Q1 23',
    text1: 'Pre-Sale',
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
    <section className='flex flex-col items-center mb-48'>
        <div className='home-title font-BebasNeue text-second-heavy mb-12'>
          ROADMAP
        </div>
        <div className='flex'>
        {
          goals.map(goal => (
            <div className='flex flex-col justify-center'>
              <Bg className="" />
              <div className='absolute self-center text-center'>
                <div className='font-BebasNeue text-[64px] text-second-lite leading-[83px] mb-1'>
                  {goal.title}
                </div>
                <div className='font-roboto text-second-heavy text-2xl leading-[33px] font-light'>
                  {goal.text1}
                </div>
                <div className='font-roboto text-second-heavy text-2xl leading-[33px] font-light'>
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
