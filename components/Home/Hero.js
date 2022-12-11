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
    <section className='flex flex-col lg:flex-row-reverse  lg:py-24 lg:mb-12 lg:mt-28  relative mx-4 z-0 gap-4 ' id='hero1'>
        {/* ABSOLUTE ELEMENTS */}
        
        <div className='absolute h-full w-full justify-center items-end hidden  lg:flex'>
            <div className='relative flex flex-col items-center xl:mb-0 lg:mb-32'>
                <div className='border-l-2 h-24 lg:h-28 xl:h-48 border-second-heavy'></div>
                <Link href="#thunder1" className='group animate-bounce-slow z-10 mb-3'>
                <div className='relative flex justify-center items-center '>
                 <OctaSm className=""/>
                 <BsChevronDown className='text-white invisible group-hover:visible absolute' />
                </div>
                </Link>
            </div>
        </div>

        
        {/* FLOW ELEMENTS */}
        <div className="flex grow relative justify-center items-center lg:justify-end md:h-[450px] h-[330px]">
            <div id="hero-img-wrapper" className="absolute  lg:translate-x-1/3  lg:h-[1014px] lg:w-[1011px] md:w-[506px] md:h-[507px] w-[361px] h-[359px] -z-10">
                <div id="hero-img" className='relative flex justify-center items-center h-full w-full'>
                    <Image src='/home/blueBgPoly.svg' height={418} width={418} className="h-[148px] w-[148px] md:h-[209px] md:w-[209px] lg:h-[418px] lg:w-[418px]" />
                    <Image src='/home/polySm.svg' height={464} width={464} className="absolute h-[166px] w-[166px] md:h-[232px] md:w-[232px] lg:h-[464px] lg:w-[464px] animate-spin-slow" />
                    <Image src='/home/polyMd.svg' height={590} width={590} className="absolute w-[211px] h-[211px] md:h-[295px] md:w-[295px] lg:h-[590px] lg:w-[590px] animate-spin-slow" />
                    <Image src='/home/polyLg.svg' height={1014} width={1011} className="absolute h-[507px] w-[506px] lg:h-[1014px] lg:w-[1014px] animate-spin-slow"/>
                    {/* <PolyBlueBg className="absolute"/>
                    <PolySm className="absolute animate-spin-slow"/>
                    <PolyMd className="absolute animate-spin-slow"/>
                    <PolyLg className="absolute animate-spin-slow"/> */}
                    <div ref={bearRef} className='absolute -translate-y-[10px] -translate-x-[25px] md:-translate-y-[17px] md:-translate-x-[30px] lg:-translate-x-[63px] lg:-translate-y-[31px]'>

                    <Image src='/home/bearHero.svg' width={546} height={553} className={`relative h-[196px] w-[194px] md:h-[276px] md:w-[273px] lg:h-[553px] lg:w-[546px] transition-all ease-out duration-1000 ${bearVisible ? 'translate-x-0' : '-translate-x-32'}`}/>
                    </div>
                </div>
            </div>
        </div>
        {/* <hr className=''/> */}
        <div className="flex flex-col grow items-center lg:items-start">
            <PolysShot className="absolute -left-48 -bottom-44 -z-50 hidden md:block"/>
            <div className='font-BebasNeue home-title-xl text-second-heavy flex flex-col text-center lg:text-left'>
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
            <a href='https://twitter.com/PlayAtomix8' className='text-twitter-blue scale-[65%] lg:scale-100 flex gap-7 items-center mt-3 lg:mt-8 z-10 w-fit px-10 py-3 backdrop-blur-3xl rounded-4xl main-button'>
              <BsTwitter className='w-[50px] h-[50px]'/>
              <span className='font-roboto text-2xl font-bold'>
                Follow us on Twitter
              </span>
            </a>
        </div>
        

        
    </section>
  )
}
