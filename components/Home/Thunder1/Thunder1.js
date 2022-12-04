import React from 'react'
import Thunder from '@public/home/Thunder1/Thunder1.svg'
import PolysBlue from '@public/home/Thunder1/polysBlue.svg'
import PolysOrange from '@public/home/Thunder1/polysOrange.svg'
import Bomb from '@public/home/Thunder1/bomb.svg'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'


import Bombs from './Bombs'



export default function Thunder1() {
  return (
    <section className=' flex justify-center self-center items-center relative mt-9 z-10'>
            <Thunder className="relative -translate-x-16 z-0 " />
            <PolysBlue className="absolute -translate-y-14 right-80"/>
            <PolysOrange className="absolute -top-0 lg:-top-24 -translate-x-56 lg:-translate-x-96 scale-50 lg:scale-100"/>
            <Bombs pos="xl:-translate-x-96 top-48 scale-75 lg:scale-100 md:-translate-x-64 -translate-x-32"/>
            
            <div className='absolute text-back-lite gap-1 flex flex-col items-center -translate-y-14 scale-75 lg:scale-100'>
                <div className='text-[90px] font-BebasNeue'>
                    OWN THE GAME
                </div>
                <div className='font-normal font-roboto lg:text-4xl md:text-3xl lg:leading-[60px] text-xl leading-10'>
                    <div>
                        We are creating the largest on-chain gaming ecosystem.
                    </div>
                    <div>
                        Play, collect & make your mark on the future of Atomix8!
                    </div>
                </div>
            </div>
    </section>
  )
}
