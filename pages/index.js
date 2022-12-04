import Head from 'next/head'
import Image from 'next/image'
import Hero from '@components/Home/Hero'
import MarqueeFooter from '@components/Home/MarqueeFooter'
import DefaultLayout from '@components/Default/DefaultLayout'
import Thunder1 from '@components/Home/Thunder1'

export default function Home() {
  return (
    <DefaultLayout >
      <Head>
        <title>Atomix8 | Home</title>
      </Head>
      <div className="flex flex-col grow">
        <Hero />
        <Thunder1 />
        <div className='h-96'></div>
        <MarqueeFooter />
      </div>
    </DefaultLayout>
  )
}
