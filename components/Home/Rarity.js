import React from 'react'
import Common from '@public/home/Rarity/Common.svg'
import Rare from '@public/home/Rarity/Rare.svg'
import Epic from '@public/home/Rarity/Epic.svg'
import Legendary from '@public/home/Rarity/Legendary.svg'
import Sensei from '@public/home/Rarity/Sensei.svg'
import OctasGrey from '@public/home/Rarity/octasGreySm.svg'
import OctasRed from '@public/home/Rarity/octasRedSm.svg'
import Image from 'next/image'

import styles from '@styles/Home/rarity.module.css'


export default function Rarity() {
  return (
    <section className='flex flex-col items-center relative lg:mb-56 mb-20' id='rarity'>
      <OctasGrey className="absolute opacity-30 lg:opacity-100 md:bottom-0 left-0 translate-y-1/2 scale-50 xl:scale-100 hidden md:block"/>
      <OctasRed className="absolute opacity-30 lg:opacity-100 bottom-0 right-0 translate-y-1/2 translate-x-12 scale-50 xl:scale-100 hidden md:block"/>
      <Image src='/home/Rarity/bitsMobile.png' height={112} width={278} className="absolute -top-20 block lg:hidden"/> 
      <div className='home-title font-BebasNeue relative text-second-heavy mb-3 lg:mb-12'>
        RARITIES
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 mx-3 mb-4 md:mb-10'>
        <Image src='/home/Rarity/Common.png' width={284} height={356} className="lg:translate-y-1/4 lg:w-[284px] w-[150px]"/>
        <Image src='/home/Rarity/Rare.png' width={284} height={356}  className=" lg:w-[284px] w-[150px]"/>
        <Image src='/home/Rarity/Epic.png' width={284} height={356} className=" lg:w-[284px] w-[150px]"/>
        <Image src='/home/Rarity/Legendary.png' width={284} height={356} className="lg:translate-y-1/4 lg:w-[284px] w-[150px]"/>
      </div>
      <Image src='/home/Rarity/Sensei.png' width={284} height={356} className="lg:w-[285px] w-[202px]"/>

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
