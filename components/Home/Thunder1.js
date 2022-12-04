import React from 'react'
import Thunder from '@public/home/Thunder.svg'
import PolysBlue from '@public/home/Thunder1/polysBlue.svg'
import PolysOrange from '@public/home/Thunder1/polysOrange.svg'
import Bomb from '@public/home/Thunder1/bomb.svg'
import {Parallax, } from '@react-spring/parallax'



export default function Thunder1() {
  return (
    <section className=' flex justify-center self-center items-center relative mt-9'>
        <Thunder className="relative -translate-x-16 z-0" />
        <PolysBlue className="absolute -translate-y-14 right-80"/>
        <PolysOrange className="absolute -top-24 -translate-x-96"/>
        <div className='absolute text-back-lite gap-1 flex flex-col items-center -translate-y-14'>
            <div className='text-[90px] font-BebasNeue'>
                OWN THE GAME
            </div>
            <div className='font-normal font-roboto text-4xl leading-[60px]'>
                <div>
                    We are creating the largest on-chain gaming ecosystem.
                </div>
                <div>
                    Play, collect & make your mark on the future of Atomix8!
                </div>
            </div>
        </div>
    </section>
  )
}
