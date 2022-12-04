import Head from 'next/head'
import Image from 'next/image'
import Hero from '@components/Home/Hero'
import MarqueeFooter from '@components/Home/MarqueeFooter'
import DefaultLayout from '@components/Default/DefaultLayout'
import Thunder1 from '@components/Home/Thunder1/Thunder1'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import HeroSecond from '@components/Home/HeroSecond'
import Economy from '@components/Home/Economy'
import Thunder2 from '@components/Home/Thunder2'
import Rarity from '@components/Home/Rarity'
import Roadmap from '@components/Home/Roadmap'
import OurTeam from '@components/Home/OurTeam'

export default function Home() {
  return (
    <DefaultLayout >
      <Head>
        <title>Atomix8 | Home</title>
      </Head>
      <div className="flex flex-col grow">
        <Hero />
        <Thunder1 />
        <HeroSecond />
        <Economy />
        <Thunder2 />
        <Rarity />
        <Roadmap />
        <OurTeam />
        <div className='h-96'></div>
        <MarqueeFooter />
      </div>
    </DefaultLayout>
  )
}
