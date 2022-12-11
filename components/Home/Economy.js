import React from 'react'
import Bits from '@public/home/Economy/bits.svg'
import Coin from '@public/home/Economy/coin.svg'
import Coins from '@public/home/Economy/coins.svg'
import CoinBg from '@public/home/coinBackHeavyLg.svg'
import Image from 'next/image'


export default function Economy() {
  return (
    <section className='flex justify-center relative -top-14 md:top-0 lg:mt-32 mt-0 lg:mb-20 ' id='economy'>
        <CoinBg className="absolute -right-[500px] -top-56 -z-0 opacity-25 hidden lg:block"/>
        <Bits className="absolute lg:-right-12 lg:-top-56 -top-36 -right-28 md:-right-6 scale-50 lg:scale-100 hidden lg:block"/>
        <Image src='/home/Economy/coin.png' width={420} height={349} className="absolute lg:-left-10 lg:-top-48 -left-32 -top-56 scale-[20%] lg:scale-100" />
        <div className='text-center text-second-heavy relative flex flex-col gap-3 lg:gap-12 '>
            <Image src='/home/Economy/coins.png' width={1832} height={710} className="absolute  translate-y-20 sm:translate-y-12 md:translate-y-8 lg:translate-y-48  z-10"/>
            <div className='font-BebasNeue home-title'>
                COMMUNITY DRIVEN ECONOMY
            </div>
            <div className='font-roboto font-light home-text lg:text-[35px] w-full max-w-[1240px] px-5 md:px-10'>
                Our unique economy model is designed to serve the longevity of Atomix8 <br/>
                It is transparent, decentralized, and built with a long term view to create a unique gaming experience.
            </div>
        </div>
    </section>
  )
}
