import React from 'react'

import Link from 'next/link'
import PolySm from '@public/home/polySm.svg'
import PolyMd from '@public/home/polyMd.svg'
import PolyLg from '@public/home/polyLg.svg'
import Bear from '@public/home/bearHero.svg'
import PolysShot from '@public/home/polysShot.svg'
import PolyBlueBg from '@public/home/blueBgPoly.svg'
import OctaSm from '@public/home/octaSm.svg'
import {BsChevronDown, BsTwitter} from 'react-icons/bs'

export default function Hero() {
  return (
    <section className='flex flex-col-reverse lg:flex-row-reverse  lg:py-24 lg:mb-12 lg:mt-28  relative mx-4 z-0'>
        {/* ABSOLUTE ELEMENTS */}
        
        <div className='absolute h-full w-full justify-center items-end hidden  lg:flex'>
            <div className='relative flex flex-col items-center xl:mb-0 lg:mb-32'>
                <div className='border-l-2 h-24 lg:h-28 xl:h-48 border-second-heavy'></div>
                <Link href="" className='group animate-bounce-slow z-10'>
                <div className='relative flex justify-center items-center '>
                 <OctaSm className=""/>
                 <BsChevronDown className='text-white invisible group-hover:visible absolute' />
                </div>
                </Link>
            </div>
        </div>

        
        {/* FLOW ELEMENTS */}
        <div className="flex grow relative scale-50 lg:scale-100 translate-x-24 lg:translate-x-0 translate-y-24 lg:translate-y-0">
            <div id="hero-img-wrapper" className="absolute top-1/2 right-0">
                <div id="hero-img" className='relative flex justify-center items-center -translate-x-44'>
                    <PolyBlueBg className="absolute"/>
                    <PolySm className="absolute "/>
                    <PolyMd className="absolute"/>
                    <PolyLg className="absolute animate-spin-slow"/>
                    <Bear className="absolute -translate-x-[70px] -translate-y-[32px]"/>
                </div>
            </div>
        </div>
        <div className="flex flex-col grow scale-75 lg:scale-100">
            <PolysShot className="absolute -left-48 -bottom-44 -z-50"/>
            <div className='font-BebasNeue text-[80px] text-second-heavy flex flex-col leading-[82.5px]'>
                <div>
                  WELCOME TO <span className='hero-title-gradient'>ATOMIX8</span>
                </div>
                <div>
                  COMMUNITY DRIVEN
                </div>
                <div>
                  GAMING!
                </div>
            </div>
            <a href='https://www.twitter.com' className='text-twitter-blue flex gap-7 items-center mt-8 z-10 shadow-sm w-fit px-10 py-3 bg-slate-100 rounded-4xl'>
              <BsTwitter className='w-[50px] h-[50px]'/>
              <span className='font-FuturaPtBold text-2xl'>
                Follow us on Twitter
              </span>
            </a>
        </div>
        

        
    </section>
  )
}
