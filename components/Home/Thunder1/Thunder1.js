import React from 'react'
import Thunder from '@public/home/Thunder1/Thunder1.svg'
import PolysBlue from '@public/home/Thunder1/polysBlue.svg'
import PolysOrange from '@public/home/Thunder1/polysOrange.svg'
import Bomb from '@public/home/Thunder1/bomb.svg'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'

import Bombs from './Bombs'
import Image from 'next/image'

// const background = {
//     shouldAlwaysCompleteAnimation: true,
//     children: (
//         <div className='self-center w-[626px] h-[353px] sm:w-[939px] sm:h-[530px] md:w-[1213px] md:h-[551px] lg:w-[2426px] lg:h-[1112px] scale-y-110 md:scale-y-100'>
//         <Image src='/home/Thunder1/Thunder1.svg' width={2426} height={1112}  className="relative -translate-x-11 z-0 " />
//         </div>
//     ),

// }

export default function Thunder1() {
  return (
    <section className=' flex justify-center items-center relative z-10 w-full h-80 pt-20 sm:mt-48 lg:mt-0 sm:h-[500px] lg:h-[900px]' id='thunder1'>
        {/* Behind BG */}
        <Parallax speed={7} className="absolute xl:left-44 lg:left-32 -left-24 xl:-top-28 lg:-top-0 -top-24 sm:block hidden">
            <PolysOrange className=" "/>
        </Parallax>
        
        
        {/* BG */}
        <div className='absolute self-center w-[751px] h-[424px] sm:w-[2229px] sm:h-[1112px] xl:w-[2426px] xl:h-[1112px] scale-x-100 sm:scale-x-75 lg:scale-100 scale-y-105 sm:scale-y-100'>
            <Image src='/home/Thunder1/Thunder1.svg' width={2426} height={1112}  className="relative -translate-x-16 z-0 " />
        </div>

        {/* On BG */}
        <Parallax speed={-10} className='absolute xl:right-0 sm:-right-32 lg:top-32 -top-12 sm:block hidden'>
        <PolysBlue className=""/>
        </Parallax>
        <Parallax speed={-7} className='absolute xl:left-28 sm:left-16 lg:top-48 -top-16 sm:flex hidden'>
        <Bombs pos=""/>

        </Parallax>
        
        
        

        <div className='relative text-back-lite gap-2 xl:gap-7 flex flex-col items-center text-center -translate-y-16 sm:-translate-y-20 xl:-translate-y-12 sm:max-w-3xl xl:max-w-6xl'>
            <Parallax rotate={[-30, 30]} speed={4} className="absolute block sm:hidden -left-4 -bottom-24">
            <Image src='/home/Thunder1/bombMobile.png' height={45} width={44} />
            </Parallax>
            <Parallax rotate={[-120, -30]} speed={5} className="absolute block sm:hidden -right-8 -bottom-16">
            <Image src='/home/Thunder1/bombMobile.png' height={45} width={44} className="h-[30px] w-[30px]"/>
            </Parallax>
            <div className='sm:text-[90px] sm:leading-[108px] text-3xl leading-7 font-BebasNeue tracking-tight'>
                Community Driven
            </div>
            <div className='font-normal font-roboto xl:text-[40px] md:text-[30px] sm:text-[25px] sm:leading-[60px] text-xs leading-5'>
                <div>
                    We are providing unique and engaging experiences that empower  our community members to play, build, and connect
                </div>

            </div>
        </div>
    </section>
  )
}
