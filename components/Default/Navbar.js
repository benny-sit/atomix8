import React from 'react'
import Link from 'next/link'
import LogoSvg from '@public/logo.svg'
import FightNow from '@public/defaultLayout/navbar/fight_now.svg'
import styles from '@styles/DefaultLayout/navbar.module.css'
import {BsTwitter} from 'react-icons/bs'
import {RiMenuFill} from 'react-icons/ri'
import Image from 'next/image'


const navLinks = [
    {
        title: 'THE DOJO',
        href: '#thunder1'
    },
    {
        title: 'ECONOMY',
        href: '#economy'
    },
    {
        title: 'ROADMAP',
        href: '#roadmap'
    },
    {
        title: 'TEAM',
        href: '#team'
    },
    {
        title: 'WHITEPAPER',
        href: 'https://atomix8.gitbook.io/white-paper/atomix8/atomix8',
        target: '_blank'
    }
]


export default function Navbar() {
    return (
        <nav className="flex mx-8 mt-7 items-center gap-10">
            <div className="grow flex">
                <div className='max-w-[321px] max-h-[83px] w-full'>
                    <LogoSvg/>
                </div>
            </div>
            {/* WEB NAV */}
            <ul className="gap-6 text-3xl items-center hidden xl:flex">
                {navLinks.map(link => (
                    <li key={link.title}>
                        <Link target={link.target} key={link.title} href={link.href} className={styles.link}>{link.title}</Link>
                    </li>
                ))}
                <li>
                    <a href='https://twitter.com/PlayAtomix8' target="_blank">
                        <BsTwitter className='text-twitter-blue h-12 w-12'/>
                    </a>
                </li>
                <li>
                    <Link href='https://testnet.atomix8.io' target="_blank">
                        <div className='h-[61px] w-[219px]'>
                            <FightNow/>
                        </div>
                    </Link>
                </li>
            </ul>
            {/* MOBILE NAV */}
            <div className='flex items-center gap-1 md:gap-10 xl:hidden'>
                <Link href=''>
                    <Image src='/defaultLayout/navbar/fight_now.svg' width={170} height={45} alt='fight-now'
                           className='h-[29px] w-[105px] md:w-[170px] md:h-[45px]'/>
                </Link>
                <button>
                    <RiMenuFill className='w-8 h-8 text-second-heavy'/>
                </button>
            </div>

        </nav>
    )
}
