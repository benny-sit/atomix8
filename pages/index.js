import Head from 'next/head'
import Image from 'next/image'
import Hero from '@components/Home/Hero'
import MarqueeFooter from '@components/Home/MarqueeFooter'
import DefaultLayout from '@components/Default/DefaultLayout'
import Thunder1 from '@components/Home/Thunder1/Thunder1'
import HeroSecond from '@components/Home/HeroSecond'
import Economy from '@components/Home/Economy'
import Thunder2 from '@components/Home/Thunder2'
import Rarity from '@components/Home/Rarity'
import Roadmap from '@components/Home/Roadmap'
import OurTeam from '@components/Home/OurTeam'
import PreSale from '@components/Default/PreSale'
import Navbar from '@components/Default/Navbar'
import Thunder from '@public/home/Thunder1/Thunder1.svg'
import Footer from '@components/Default/Footer'
import Bombs from '@components/Home/Thunder1/Bombs'
import {ParallaxProvider, Parallax} from 'react-scroll-parallax'
import {GoogleAnalytics} from "nextjs-google-analytics";


export default function Home() {
    return (
        <ParallaxProvider>
            <GoogleAnalytics trackPageViews gtagUrl={"https://www.googletagmanager.com/gtag/js?id=G-GFD5LP0EPB"}
                             gaMeasurementId={'G-GFD5LP0EPB'}/>
            <DefaultLayout>
                <Head>
                    <title>Atomix8 | Home</title>
                    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
                </Head>
                <div className="flex flex-col grow">
                    <Hero/>
                    <Thunder1/>
                    <HeroSecond/>
                    <Economy/>
                    <Thunder2/>
                    <Rarity/>
                    <Roadmap/>
                    <OurTeam/>
                    <MarqueeFooter/>
                </div>
            </DefaultLayout>
        </ParallaxProvider>
    )
    // return (
    //     <DefaultLayout>
    //         <Head>
    //             <title>Atomix8 | Home</title>
    //             <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
    //             <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
    //             <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
    //         </Head>
    //         <div className="flex flex-col grow">
    //             <Hero/>
    //             <Thunder1/>
    //             <HeroSecond/>
    //             <Economy/>
    //             <Thunder2/>
    //             <Rarity/>
    //             <Roadmap/>
    //             <OurTeam/>
    //             <MarqueeFooter/>
    //         </div>
    //     </DefaultLayout>
    // )
}



