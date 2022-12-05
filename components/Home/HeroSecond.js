import React, { useRef, useState, useEffect} from 'react'
import PolySm from '@public/home/polySm.svg'
import PolyMd from '@public/home/polyMd.svg'
import PolyLg from '@public/home/polyLg.svg'
import Wolf from '@public/home/wolfHero.svg'
import PolysShot from '@public/home/polysShot.svg'
import PolyBlueBg from '@public/home/blueBgPoly.svg'
import Octagons from '@public/home/Polygons7Small.svg'

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
    <section className='flex flex-col -top-44 lg:top-0 md:flex-row relative items-center justify-between mb-0  lg:mb-96' id='hero2'>
        <PolysShot className="absolute rotate-180 -z-0 -top-80 -right-44"/>
        <Octagons className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 lg:translate-y-full scale-75 lg:scale-100" />
        <div className="flex relative scale-50 lg:scale-100 h-40 w-[418px] self-start -top-32 lg:-top-12 z-10">
            <div id="hero-img-wrapper" className="absolute top-1/2 left-56">
                <div id="hero-img" className='relative flex justify-center items-center -translate-x-44'>
                    <PolyBlueBg className="absolute"/>
                    <PolySm className="absolute animate-spin-30s-reverse"/>
                    <PolyMd className="absolute animate-spin-slow-faster"/>
                    <PolyLg className="absolute animate-spin-slow-reverse"/>
                    <div ref={wolfRef} className="absolute translate-x-[31px] -translate-y-[65px]">
                        <Wolf className={`relative transition-all duration-1000 ease-out ${sectionVisible ? 'translate-x-0' : 'translate-x-14'}`}/>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex relative flex-col text-second-heavy mx-2 lg:mx-0 z-10'>
            <div className=' text-center home-title font-BebasNeue'>
                BECOME THE ULTIMATE SENSEI!
            </div>
            <div className='lg:text-2xl text-lg lg:leading-[60px] leading-8 flex flex-col justify-center font-roboto'>
                <div className='text-center'>
                    Collect, level up and trade rare & dominant Atomix to build an elite squad of 8!
                </div>
                <div className='text-center '>
                    Strategize to mint <span className='font-black'>$omix</span> through the fighting pit and win it by prevailing in events!
                </div>
            </div>
        </div>
    </section>
  )
}
