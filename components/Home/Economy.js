import React from 'react'
import Bits from '@public/home/Economy/bits.svg'
import Coin from '@public/home/Economy/coin.svg'
import Coins from '@public/home/Economy/coins.svg'
import CoinBg from '@public/home/coinBackHeavyLg.svg'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'


export default function Economy() {
  return (
    <section className='flex justify-center relative -top-14 sm:top-0 sm:mt-32 mt-0 mb-10 sm:mb-40 ' id='economy'>
        <Parallax speed={-8} opacity={[0.10, 0.4]} scale={[1, 0.9]} className="absolute xl:-left-[500px] -left-96 -top-0 -z-0 hidden xl:block">
        <CoinBg />
        </Parallax>
        <Parallax speed={-5} opacity={[0.15, 0.5]} scale={[1, 0.9]} className="absolute xl:-right-[500px] -right-96 -top-56 -z-0 hidden sm:block">
        <CoinBg />
        </Parallax>
        <Parallax speed={9} className='absolute xl:-right-12 xl:-top-56 lg:right-12 lg:-top-72 sm:-top-64 sm:right-0 -top-36 -right-28  hidden sm:block' >
          <Bits className=""/>
        </Parallax>
        <Parallax speed={7} rotate={[-30, 30]}  className="absolute xl:-left-10 xl:-top-64 lg:left-10 lg:-top-72 sm:left-10 -top-44 hidden sm:block ">
          <Image src='/home/Economy/coin.png' width={420} height={349}  className="h-[75px] w-[91px] sm:h-[175px] sm:w-[210px] lg:h-[299px] lg:w-[360px] xl:h-[349px] xl:w-[420px]"/>
        </Parallax>
        <div className='text-center text-second-heavy relative flex flex-col gap-3 max-w-3xl xl:max-w-[1200px] lg:gap-12 '>
            <Image src='/home/Economy/coins.png' width={1832} height={710} className="absolute -bottom-36 sm:-bottom-48 xl:-bottom-96  z-10"/>
            <div className='font-BebasNeue home-title'>
              <Image src='/home/Economy/coin.png' width={420} height={349}  className="absolute h-[75px] w-[91px] sm:hidden left-0 -top-20"/>
                Sustainable Economy
            </div>
            <div className='font-roboto font-light home-text lg:text-[35px] w-full px-5 md:px-10 z-20'>
                The first project ever to reinvest game revenue back into the community and game development, creating a sustainable ecosystem that benefits players and fuels the growth of Atomix8
            </div>
        </div>
    </section>
  )
}
