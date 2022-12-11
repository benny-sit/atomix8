import React from "react";
import Image from "next/image";
import OctasSm from "@public/home/Thunder2/octasSm.svg";
import Swords from "@public/home/Thunder2/swords.svg";
import Spears from "@public/home/Thunder2/spears.svg";
import Thunder from "@public/home/Thunder2/Thunder2.svg";
import CoinBg from '@public/home/coinBackHeavyLg.svg'
import Octas7 from '@public/home/Polygons7Small.svg'

export default function Thunder2() {
  return (
    <section className="flex justify-center items-center relative h-[350px] md:h-[550px] lg:h-[1000px] w-full" id="thunder2">
      
      <CoinBg className="absolute opacity-25 -left-[500px] top-28 rotate-90 mobile-hidden"/>
      <CoinBg className="absolute opacity-25 -bottom-40 lg:-bottom-40 translate-x-40 md:translate-x-80 lg:translate-x-[700px] xl:translate-x-[1000px] mobile-hidden"/>
      <Octas7 className="absolute xl:-bottom-64 bottom-24 -translate-x-3/4 lg:-translate-x-full xl:-translate-x-[160%] mobile-hidden"/>
      <OctasSm className="absolute z-10 lg:-translate-x-[700px]  md:-translate-x-96 -translate-x-60 -translate-y-28  mobile-hidden"/>
      <Swords className="absolute z-10 xl:bottom-20 lg:bottom-32 md:bottom-20 bottom-0 -translate-x-32 md:-translate-x-[100%] lg:-translate-x-[175%] xl:-translate-x-[230%] mobile-hidden"/>
      <Spears className="absolute z-10 xl:translate-x-[380%] lg:translate-x-[220%] md:translate-x-80 translate-x-40 -translate-y-16 lg:-translate-y-40 xl:translate-y-8 md:scale-75 xl:scale-100 mobile-hidden"/>
      <div className='absolute self-center w-[1056px] h-[570px] md:w-[1459px] md:h-[640px] lg:w-[2918px] lg:h-[1281px] scale-y-125 md:scale-y-100'>
        <Image src='/home/Thunder2/Thunder2.svg' width={2918} height={1281}  className="relative md:-translate-x-10 z-0 " />
      </div>
      <div className="absolute text-back-lite gap-2 flex flex-col items-center text-center px-7 md:px-2 z-10 w-full max-w-[1200px] -translate-y-9 md:-translate-y-0 lg:translate-y-16">
        <div className="home-title font-BebasNeue">TRUE OWNERSHIP</div>
        <div className="font-light font-roboto home-text lg:text-[35px] ">
            <div className=" font-medium">
            Holding your game assets means you truly do own part of the game.
            </div>
            <div>
            We utilize blockchain to encourage users to take part in the building process, express amazing ideas, and make their mark on the evolution of the Atomix8 multiverse.
            </div>
        </div>
      </div>
    </section>
  );
}
