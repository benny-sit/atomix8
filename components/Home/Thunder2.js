import React from "react";
import Image from "next/image";
import OctasSm from "@public/home/Thunder2/octasSm.svg";
import Swords from "@public/home/Thunder2/swords.svg";
import Spears from "@public/home/Thunder2/spears.svg";
import Thunder from "@public/home/Thunder2/Thunder2.svg";
import CoinBg from '@public/home/coinBackHeavyLg.svg'
import Octas7 from '@public/home/Polygons7Small.svg'
import {Parallax} from "react-scroll-parallax";

export default function Thunder2() {
    return (
        <section
            className="flex justify-center items-center relative h-[350px] sm:h-[1000px] lg:h-[1000px]  w-full sm:z-10"
            id="thunder2">
            <Parallax speed={-5}
                      className="absolute opacity-25 xl:-right-[500px] -right-96 -bottom-40 xl:-bottom-96 hidden lg:block">
                <CoinBg/>
            </Parallax>
            {/* <CoinBg className="absolute opacity-25 -left-[500px] top-28 rotate-90 mobile-hidden"/> */}
            {/* <Octas7 className="absolute xl:-bottom-64 bottom-24 -translate-x-3/4 lg:-translate-x-full xl:-translate-x-[160%] mobile-hidden"/> */}
            {/* <OctasSm className="absolute z-10 lg:-translate-x-[700px]  md:-translate-x-96 -translate-x-60 -translate-y-28  mobile-hidden"/> */}


            {/* <Swords className="absolute z-10 xl:bottom-20 lg:bottom-32 md:bottom-20 bottom-0 -translate-x-32 md:-translate-x-[100%] lg:-translate-x-[175%] xl:-translate-x-[230%] mobile-hidden"/>
      <Spears className="absolute z-10 xl:translate-x-[380%] lg:translate-x-[220%] md:translate-x-80 translate-x-40 -translate-y-16 lg:-translate-y-40 xl:translate-y-8 md:scale-75 xl:scale-100 mobile-hidden"/> */}
            <div
                className='absolute self-center w-[1056px] h-[570px] sm:w-[2568px] sm:h-[1281px] xl:w-[2918px] xl:h-[1281px] scale-y-125 sm:scale-y-[150%] sm:scale-x-75 lg:scale-x-90 xl:scale-100 '>
                <Image src='/home/Thunder2/Thunder2.svg' width={2918} height={1281}
                       className="relative md:-translate-x-10 z-0 "/>
            </div>
            <div
                className="relative text-back-lite gap-2 flex flex-col items-center text-center px-7 md:px-2 z-10 w-full max-w-3xl xl:max-w-[1200px] -translate-y-9 sm:-translate-y-12 top-0 xl:translate-y-16">
                <Parallax speed={3} translateX={['-10%', '5%']}
                          className="absolute -z-10 xl:-top-40 sm:top-0 xl:-left-56 sm:-left-96  mobile-hidden">
                    <OctasSm/>
                </Parallax>
                <Parallax
                    className="absolute mobile-hidden xl:-left-36 lg:-left-20 sm:left-8 xl:-bottom-40 lg:-bottom-56 lg:top-auto sm:-top-56 "
                    speed={7}>
                    <Swords/>
                </Parallax>
                <Parallax
                    className="absolute mobile-hidden xl:-right-48 lg:-right-40 sm:right-10  xl:-top-24 lg:-bottom-96 sm:-bottom-[470px] "
                    speed={10}>
                    <Spears/>
                </Parallax>
                <div className="home-title font-BebasNeue">Community Driven Gameplay</div>
                <div className="font-light font-roboto home-text  ">
                    <div className=" font-medium">
                        Atomix8 revolutionizes gaming by empowering players to shape the entire gameplay experience.
                    </div>
                    <div>
                        Every action taken by players directly impacts the game, creating a truly immersive and interactive environment that is like no other
                    </div>
                </div>
            </div>
        </section>
    );
}
