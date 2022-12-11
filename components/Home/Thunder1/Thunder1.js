import React from 'react'
import Thunder from '@public/home/Thunder1/Thunder1.svg'
import PolysBlue from '@public/home/Thunder1/polysBlue.svg'
import PolysOrange from '@public/home/Thunder1/polysOrange.svg'
import Bomb from '@public/home/Thunder1/bomb.svg'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'


import Bombs from './Bombs'
import Image from 'next/image'



export default function Thunder1() {
  return (
    <section className=' flex justify-center items-center relative z-10 w-full h-64 pt-20 md:h-[400px] lg:h-[900px]' id='thunder1'>
        <div className='absolute self-center w-[626px] h-[353px] sm:w-[939px] sm:h-[530px] md:w-[1213px] md:h-[551px] lg:w-[2426px] lg:h-[1112px] scale-y-110 md:scale-y-100'>
        <Image src='/home/Thunder1/Thunder1.svg' width={2426} height={1112}  className="relative -translate-x-10 z-0 " />
        </div>
            <PolysBlue className="absolute -translate-y-28 right-0 lg:block hidden"/>
            <PolysOrange className="absolute -top-0 lg:-top-24 -translate-x-56 lg:-translate-x-96 lg:block hidden"/>
            <Bombs pos="xl:-translate-x-96 top-48  md:-translate-x-64 -translate-x-32 lg:flex hidden"/>
            <Image src='/home/Thunder1/bombsMobile.png' height={56} width={207} className="absolute block lg:hidden justify-self-center translate-y-1/2 md:translate-y-full"/>

            <div className='relative text-back-lite gap-1 flex flex-col items-center -translate-y-12 sm:-translate-y-16 md:-translate-y-8'>
                <div className='lg:text-[90px] lg:leading-10 text-3xl leading-7 font-BebasNeue tracking-tight'>
                    OWN THE GAME
                </div>
                <div className='font-normal font-roboto lg:text-4xl md:text-xl lg:leading-[60px] text-xs leading-5'>
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
