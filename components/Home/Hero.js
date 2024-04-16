import React, { useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import PolySm from '@public/home/polySm.svg'
import PolyMd from '@public/home/polyMd.svg'
import PolyLg from '@public/home/polyLg.svg'
import Bear from '@public/home/bearHero.svg'
import PolysShot from '@public/home/polysShot.svg'
import PolyBlueBg from '@public/home/blueBgPoly.svg'
import OctaSm from '@public/home/octaSm.svg'
import {BsChevronDown, BsTwitter} from 'react-icons/bs'
import { Parallax } from 'react-scroll-parallax'


export default function Hero() {
  const bearRef = useRef();
  const [bearVisible, setBearVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const bear = entries[0];
      if (bear.isIntersecting) {
        setBearVisible(true);
        observer.disconnect();
      }
    })
    observer.observe(bearRef.current)
  }, [])

  return (
    <section className='flex flex-col sm:flex-row-reverse lg:pt-20 lg:pb-24 lg:mb-12 md:mt-8  relative mx-8 z-0 gap-4 ' id='hero1'>
        {/* ABSOLUTE ELEMENTS */}
        
        {/*<div className='absolute h-full w-full items-center justify-center hidden  xl:flex'>*/}
        {/*    <div className='relative flex flex-col items-center xl:mb-0 lg:mb-32'>*/}
        {/*        <div className='border-l-2 h-24 lg:h-28 xl:h-48 border-second-heavy'></div>*/}
        {/*        <Link href="#thunder1" className='group animate-bounce-slow z-10 mb-3'>*/}
        {/*        <div className='relative flex justify-center items-center '>*/}
        {/*         <OctaSm className=""/>*/}
        {/*         <BsChevronDown className='text-white invisible group-hover:visible absolute' />*/}
        {/*        </div>*/}
        {/*        </Link>*/}
        {/*    </div>*/}
        {/*</div>*/}

        
        {/* FLOW ELEMENTS */}
        <div className="flex grow relative justify-center items-center sm:justify-end sm:h-[550px] h-[330px] ">
            <div id="hero-img-wrapper" className="absolute lg:translate-x-80 sm:translate-x-44 lg:h-[1014px] lg:w-[1014px] sm:w-[683px] sm:h-[683px] w-[361px] h-[359px] -z-10">
                <div id="hero-img" className='relative flex justify-center items-center h-full w-full'>
                    <Image src='/home/blueBgPoly.svg' height={418} width={418} className="h-[148px] w-[148px] sm:h-[290px] sm:w-[290px] lg:h-[418px] lg:w-[418px]" />
                    <Image src='/home/polySm.svg' height={464} width={464} className="absolute h-[166px] w-[166px] sm:h-[326px] sm:w-[326px] lg:h-[464px] lg:w-[464px] animate-spin-slow" />
                    <Image src='/home/polyMd.svg' height={590} width={590} className="absolute w-[211px] h-[211px] sm:h-[414px] sm:w-[414px] lg:h-[590px] lg:w-[590px] animate-spin-slow" />
                    <Image src='/home/polyLg.svg' height={1014} width={1011} className="absolute h-[683px] w-[683px] sm:h-[683px] sm:w-[683px] lg:h-[1014px] lg:w-[1014px] animate-spin-slow"/>
                    {/* <PolyBlueBg className="absolute"/>
                    <PolySm className="absolute animate-spin-slow"/>
                    <PolyMd className="absolute animate-spin-slow"/>
                    <PolyLg className="absolute animate-spin-slow"/> */}
                    <div ref={bearRef} className='absolute -translate-y-[10px] -translate-x-[25px] sm:-translate-y-[21px] sm:-translate-x-[42px] lg:-translate-x-[63px] lg:-translate-y-[31px]'>

                    <Image src='/home/bearHero.svg' width={546} height={553} className={`relative h-[196px] w-[194px] sm:h-[380px] sm:w-[384px] lg:h-[553px] lg:w-[546px] transition-all ease-out duration-1000 ${bearVisible ? 'translate-x-0' : '-translate-x-32'}`}/>
                    </div>
                </div>
            </div>
        </div>
        {/* <hr className=''/> */}
        <div className="flex flex-col mt-0 py-0 sm:py-24 lg:pt-16 items-center sm:items-start max-w-none sm:max-w-[280px] lg:max-w-[333px] xl:max-w-none">
            <Parallax speed={8} opacity={[0.5, 0.8]} className='absolute -left-52 xl:-bottom-44 bottom-0 -z-50 hidden sm:block'>
              <PolysShot className=""/>
            </Parallax>
            <div className='font-BebasNeue home-title-xl text-second-heavy flex flex-col text-center sm:text-left'>
                <div className="text-6xl">
                  WELCOME TO <span className='hero-title-gradient'>ATOMIX8</span>
                </div>
                <div>
                   THE future  of
                </div>
                <div className="text-9xl hero-title-gradient">
                    gaming
                </div>
            </div>
            <a href='https://twitter.com/PlayAtomix8' target="_blank" className=' cursor-pointer text-twitter-blue z-10  flex xl:gap-7 gap-3 items-center mt-3 sm:mt-8 z-10 w-fit px-5 py-2 sm:px-10 sm:py-3 backdrop-blur-3xl rounded-4xl main-button'>
              <BsTwitter className='xl:w-[50px] xl:h-[50px] sm:h-[34px] sm:w-[34px] h-[28px] w-[28px]'/>
              <span className='font-roboto xl:text-2xl sm:text-[16px] sm:leading-[19px] text-[14px] leading-[16px] font-bold'>
                Follow us on Twitter
              </span>
            </a>
        </div>
        

        
    </section>
  )
}
