import React, { useRef, useState, useEffect} from 'react'
import PolySm from '@public/home/polySm.svg'
import PolyMd from '@public/home/polyMd.svg'
import PolyLg from '@public/home/polyLg.svg'
import Wolf from '@public/home/wolfHero.svg'
import PolysShot from '@public/home/polysShot.svg'
import PolyBlueBg from '@public/home/blueBgPoly.svg'
import Octagons from '@public/home/Polygons7Small.svg'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'

export default function HeroSecond() {
    const wolfRef = useRef();
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const wolf = entries[0];
      if (wolf.isIntersecting) {
        setSectionVisible(true);
        observer.unobserve(wolf.target);
      }

    }, {
        threshold: 0.5,
    })
    observer.observe(wolfRef.current)
  }, [])
  return (
    <section className='flex flex-col -top-28 sm:-top-16 xl:top-0 xl:flex-row relative items-center justify-between mb-6 sm:mb-36 xl:mb-64 w-full' id='hero2'>
        <Parallax className="absolute  -top-80 -right-44 sm:block hidden" speed={-10}>
        <PolysShot className="rotate-180"/>
        </Parallax>
        <Octagons className="absolute sm:left-1/2 sm:-translate-x-1/3  sm:translate-y-full sm:bottom-24  translate-x-44 translate-y-2/3 opacity-50" />
        <Parallax scale={[1, 0.95]} speed={3} className="flex relative h-[361px] sm:h-[650px]  justify-center sm:w-[295px] lg:w-[590px] items-center z-0 xl:z-10">
            <div id="hero-img-wrapper" className="absolute xl:-left-96 xl:-top-80 lg:h-[1014px] lg:w-[1011px] sm:w-[707px] sm:h-[705px] w-[361px] h-[359px]">
                <div id="hero-img" className='relative flex justify-center items-center h-full w-full'>
                    <Image src='/home/blueBgPoly.svg' height={418} width={418} className="h-[148px] w-[148px] sm:h-[294px] sm:w-[294px] lg:h-[418px] lg:w-[418px]" />
                    <Image src='/home/polySm.svg' height={464} width={464} className="absolute h-[166px] w-[166px] sm:h-[326px] sm:w-[326px] lg:h-[464px] lg:w-[464px] animate-spin-slow" />
                    <Image src='/home/polyMd.svg' height={590} width={590} className="absolute w-[211px] h-[211px] sm:h-[414px] sm:w-[414px] lg:h-[590px] lg:w-[590px] animate-spin-slow" />
                    <Image src='/home/polyLg.svg' height={1014} width={1011} className="absolute h-[507px] w-[506px] sm:h-[705px] sm:w-[707px] lg:h-[1014px] lg:w-[1014px] animate-spin-slow"/>
                    <div ref={wolfRef} className="absolute translate-x-[11px] -translate-y-[22px] sm:translate-x-[21px] sm:-translate-y-[43px] lg:translate-x-[24px] lg:-translate-y-[61px]">
                        <Image src='/home/wolfHero.svg' width={512} height={498} className={`relative h-[189px] w-[177px] sm:h-[357px] sm:w-[347px] lg:h-[498px] lg:w-[512px]  transition-all duration-1000 ease-out ${sectionVisible ? 'translate-x-0' : 'translate-x-14'}`}/>
                    </div>
                </div>
            </div>
        </Parallax>
        <Parallax scale={[1, 1.05]} className='flex flex-col text-second-heavy mx-2 lg:mx-0 gap-3 z-10 sm:max-w-3xl xl:max-w-[900px] grow mt-6 lg:mt-12'>
            <div className=' text-center home-title font-BebasNeue'>
                BECOME THE ULTIMATE SENSEI!
            </div>
            <div className='home-text flex flex-col justify-center font-roboto text-center px-4'>
                <div className=''>
                    <span className='font-light'>Join the fastest-growing community in the world in the exciting world of</span> <span className='font-black'>Atomix.</span> Gather your heroes and become the <div className='font-black'>Ultimate Sensei!</div>                </div>

            </div>
        </Parallax>
    </section>
  )
}
