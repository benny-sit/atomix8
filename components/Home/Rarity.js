import React from 'react'
import Common from '@public/home/Rarity/Common.svg'
import Rare from '@public/home/Rarity/Rare.svg'
import Epic from '@public/home/Rarity/Epic.svg'
import Legendary from '@public/home/Rarity/Legendary.svg'
import Sensei from '@public/home/Rarity/Sensei.svg'
import OctasGrey from '@public/home/Rarity/octasGreySm.svg'
import OctasRed from '@public/home/Rarity/octasRedSm.svg'
import CoinBg from '@public/home/coinBackHeavyLg.svg'
import Image from 'next/image'

import styles from '@styles/Home/rarity.module.css'
import { Parallax } from 'react-scroll-parallax'


export default function Rarity() {
  return (
    <section className='flex flex-col items-center relative lg:mb-56 mb-20 z-0' id='rarity'>
      <Parallax speed={-6} opacity={[0.2, 0.3]} className="absolute -top-56 -left-96 xl:hidden sm:block hidden -z-10">
        <CoinBg />
      </Parallax>
      <Parallax rootMargin={{ top: 0, right: 0, bottom: -300, left: 0 }}  translateY={['70%', '50%']} className="absolute  lg:opacity-100 md:bottom-0 xl:left-0 -left-12 hidden md:block">
        <OctasGrey className=""/>
      </Parallax>
      <Parallax rootMargin={{ top: 0, right: 0, bottom: -300, left: 0 }}  translateY={['70%', '50%']} className="absolute  lg:opacity-100 bottom-0 xl:-right-12 -right-48   hidden md:block">
      <OctasRed className=""/>
      </Parallax>
      <Image src='/home/Rarity/bitsMobile.png' height={112} width={278} className="absolute -top-20 block sm:hidden"/> 
      <div className='home-title font-BebasNeue relative text-second-heavy mb-3 lg:mb-12'>
        RARITIES
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 mx-10 mb-4 md:mb-10'>
        <Parallax className="hidden lg:block" translateY={['0%', '30%']}>
        <Image src='/home/Rarity/Common.png' width={284} height={356} />
        </Parallax>
        <Image src='/home/Rarity/Common.png' width={284} height={356} className="lg:hidden"/>
        <Image src='/home/Rarity/Rare.png' width={284} height={356}  className=" "/>
        <Image src='/home/Rarity/Epic.png' width={284} height={356} className=" "/>
        <Parallax className="hidden lg:block" translateY={['0%', '30%']}>
          <Image src='/home/Rarity/Legendary.png' width={284} height={356} />  
        </Parallax>
        <Image src='/home/Rarity/Legendary.png' width={284} height={356} className="lg:hidden "/>
        <div className='col-span-2 lg:col-span-4 items-center justify-self-center flex flex-col w-2/3 sm:w-fit'>
          <Image src='/home/Rarity/Sensei.png' width={284} height={356} className=""/>
        </div>
      </div>

      {/* <div className='flex flex-col md:flex-row gap-10 mb-10 relative'>
        <div className={styles.svgIcon}>
          <Common className="md:translate-y-1/4"/>
        </div>
        <div className={styles.svgIcon}>
        <Rare />
        </div>
        <div className={styles.svgIcon}>
        <Epic />
        </div>
        <div className={styles.svgIcon}>
        <Legendary className="md:translate-y-1/4"/> 
        </div>
      </div>
      <div className={`${styles.svgIcon} relative`}>
        <Sensei />
      </div> */}
    </section>
  )
}
