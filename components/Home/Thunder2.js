import React from "react";
import OctasSm from "@public/home/Thunder2/octasSm.svg";
import Swords from "@public/home/Thunder2/swords.svg";
import Spears from "@public/home/Thunder2/spears.svg";
import Thunder from "@public/home/Thunder2/Thunder2.svg";
import CoinBg from '@public/home/coinBackHeavyLg.svg'
import Octas7 from '@public/home/Polygons7Small.svg'

export default function Thunder2() {
  return (
    <section className="flex justify-center self-center items-center relative -top-64 md:-top-48 lg:top-0">
      <CoinBg className="absolute opacity-25 left-44 top-28 rotate-90 scale-75 lg:scale-100"/>
      <CoinBg className="absolute opacity-25 bottom-0 lg:-bottom-10 translate-x-96 lg:translate-x-[700px] xl:translate-x-[1000px] scale-75 lg:scale-100"/>
      <Octas7 className="absolute xl:-bottom-28 bottom-24 -translate-x-3/4 lg:-translate-x-full xl:-translate-x-[180%] scale-75 lg:scale-100"/>
      <OctasSm className="absolute z-10 lg:-translate-x-[700px]  md:-translate-x-96 -translate-x-60 -translate-y-28 scale-50 md:scale-75 lg:scale-100"/>
      <Swords className="absolute z-10 xl:bottom-44 lg:bottom-56 md:bottom-72 bottom-56 -translate-x-32 md:-translate-x-[100%] lg:-translate-x-[175%] xl:-translate-x-[230%] scale-75 lg:scale-100"/>
      <Spears className="absolute z-10 xl:translate-x-[380%] lg:translate-x-[210%] md:translate-x-80 translate-x-40 -translate-y-16 xl:translate-y-8 scale-50 md:scale-75 lg:scale-100"/>
      <Thunder className="relative -translate-x-16 z-0 scale-75 lg:scale-100"  />
      <div className="absolute text-back-lite gap-5 flex flex-col items-center text-center translate-y-28 md:translate-y-20 scale-75 2xl:scale-100 max-w-[400px] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl z-10">
        <div className="text-[80px] leading-[82px] font-BebasNeue">TRUE OWNERSHIP</div>
        <div className="font-light font-roboto lg:text-4xl md:text-3xl lg:leading-[60px] text-lg leading-10  ">
            <div className=" font-medium">
            Holding your game assets means you truly do own part of the game.
            </div>
            <div>
              We utilize blockchain to encourage users to take part in the building process,
            </div>
            <div>
           express amazing ideas, and make their mark on the evolution of the Atomix8
            </div>
            <div>
                 multiverse.
            </div>
        </div>
      </div>
    </section>
  );
}
