import React from 'react'
import Bits from '@public/home/Economy/bits.svg'
import Coin from '@public/home/Economy/coin.svg'
import Coins from '@public/home/Economy/coins.svg'
import CoinBg from '@public/home/coinBackHeavyLg.svg'


export default function Economy() {
  return (
    <section className='flex justify-center relative lg:mt-32 mt-0 lg:mb-24 '>
        <CoinBg className="absolute -right-[500px] -top-56 -z-0 opacity-25 scale-75 lg:scale-100"/>
        <Bits className="absolute lg:-right-12 lg:-top-56 -top-36 -right-28 md:-right-6 scale-50 lg:scale-100"/>
        <Coin className="absolute lg:-left-10 lg:-top-48 -left-44 -top-56 scale-50 lg:scale-100" />
        <Coins className="absolute -rotate-[6deg] translate-x-12 -translate-y-8 lg:translate-y-12 scale-50 lg:scale-100"/>
        <div className='text-center text-second-heavy relative flex flex-col gap-12'>
            <div className='font-BebasNeue home-title'>
                COMMUNITY DRIVEN ECONOMY
            </div>
            <div className='font-roboto font-light lg:text-4xl lg:leading-[60px] leading-10 text-lg max-w-[1170px]'>
                {/* <div>Our unique economy model is designed to serve the longevity of Atomix8</div>
                <div>It is transparent, decentralized, and built with a long term view to create a unique</div>
            <div>gaming experience.</div> */}
                Our unique economy model is designed to serve the longevity of Atomix8
                It is transparent, decentralized, and built with a long term view to create a unique gaming experience.
            </div>
        </div>
    </section>
  )
}
