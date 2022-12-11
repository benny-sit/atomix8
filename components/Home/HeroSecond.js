import React, { useRef, useState, useEffect} from 'react'
import PolySm from '@public/home/polySm.svg'
import PolyMd from '@public/home/polyMd.svg'
import PolyLg from '@public/home/polyLg.svg'
import Wolf from '@public/home/wolfHero.svg'
import PolysShot from '@public/home/polysShot.svg'
import PolyBlueBg from '@public/home/blueBgPoly.svg'
import Octagons from '@public/home/Polygons7Small.svg'
import Image from 'next/image'

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
    <section className='flex flex-col -top-32 md:-top-12 lg:top-0 lg:flex-row relative items-center justify-between mb-0 lg:mb-96 w-full' id='hero2'>
        {/* <PolysShot className="absolute rotate-180 -z-0 -top-80 -right-44"/>
        <Octagons className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 lg:translate-y-full scale-75 lg:scale-100" /> */}
        <div className="flex relative h-[361px] md:h-[418px] justify-center md:w-[295px] lg:w-[590px] items-center z-0 md:z-10">
            <div id="hero-img-wrapper" className="absolute lg:left-0 lg:-translate-x-1/3 lg:h-[1014px] lg:w-[1011px] md:w-[506px] md:h-[507px] w-[361px] h-[359px]">
            <div id="hero-img" className='relative flex justify-center items-center h-full w-full'>
                    <Image src='/home/blueBgPoly.svg' height={418} width={418} className="h-[148px] w-[148px] md:h-[209px] md:w-[209px] lg:h-[418px] lg:w-[418px]" />
                    <Image src='/home/polySm.svg' height={464} width={464} className="absolute h-[166px] w-[166px] md:h-[232px] md:w-[232px] lg:h-[464px] lg:w-[464px] animate-spin-slow" />
                    <Image src='/home/polyMd.svg' height={590} width={590} className="absolute w-[211px] h-[211px] md:h-[295px] md:w-[295px] lg:h-[590px] lg:w-[590px] animate-spin-slow" />
                    <Image src='/home/polyLg.svg' height={1014} width={1011} className="absolute h-[507px] w-[506px] lg:h-[1014px] lg:w-[1014px] animate-spin-slow"/>
                    <div ref={wolfRef} className="absolute translate-x-[11px] -translate-y-[22px] md:translate-x-[15px] md:-translate-y-[33px] lg:translate-x-[31px] lg:-translate-y-[65px]">
                        <Image src='/home/wolfHero.svg' width={512} height={498} className={`relative h-[189px] w-[177px] md:h-[254px] md:w-[256px] lg:h-full lg:w-full  transition-all duration-1000 ease-out ${sectionVisible ? 'translate-x-0' : 'translate-x-14'}`}/>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex relative flex-col text-second-heavy mx-2 lg:mx-0 gap-3 z-10'>
            <div className=' text-center home-title font-BebasNeue'>
                BECOME THE ULTIMATE SENSEI!
            </div>
            <div className='home-text flex flex-col justify-center font-roboto text-center px-4'>
                <div className=''>
                    Collect, level up and trade rare & dominant Atomix to build an elite squad of 8!
                </div>
                <div className=''>
                    Strategize to mint <span className='font-black'>$omix</span> through the fighting pit and win it by prevailing in events!
                </div>
            </div>
        </div>
    </section>
  )
}
