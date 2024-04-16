import React from 'react'
import Bomb from '@public/home/Thunder1/bomb.svg'
import Image from 'next/image'
import { Parallax, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'


export default function Bombs({pos}) {
  return (
        <div className={`w-60 h-64 justify-between flex ${pos}`}>
            <div className='h-[66px] w-[67px] rotate-[-95deg] self-end'>
                <Bomb />
            </div>
            <div className='h-[98px] w-[101px]'>
                <Bomb />
            </div>
        </div>
  )
}
