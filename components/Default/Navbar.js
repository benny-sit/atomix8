import React from 'react'
import Link from 'next/link'
import LogoSvg from '@public/logo.svg'
import FightNow from '@public/defaultLayout/navbar/fight_now.svg'
import styles from '@styles/DefaultLayout/navbar.module.css'
import {BsTwitter} from 'react-icons/bs'

const navLinks = [
  {
    title: 'THE DOJO',
    href: ''
  },
  {
    title: 'ECONOMY',
    href: ''
  },
  {
    title: 'ROADMAP',
    href: ''
  },
  {
    title: 'TEAM',
    href: ''
  },
  {
    title: 'WHITEPAPER',
    href: ''
  }
]


export default function Navbar() {
  return (
    <nav className="flex mx-8 my-4 items-center">
      <div className="grow flex justify-center lg:justify-start">
          <LogoSvg />
      </div>
      <ul className="gap-6 text-3xl items-center hidden lg:flex">
        {navLinks.map(link => (
          <li>
            <Link key={link.title} href={link.href} className={styles.link}>{link.title}</Link>
          </li>
        ))}
        <li>
          <a href='https://www.twitter.com'>
            <BsTwitter className='text-twitter-blue h-12 w-12'/>
          </a>
        </li>
        <li>
          <Link href=''>
            <FightNow />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
