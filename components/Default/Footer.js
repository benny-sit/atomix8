import React from 'react'
import { BsTwitter } from 'react-icons/bs'

const footerLinks = [
  {
    title: 'Careers',
    href: '#'
  },
  {
    title: 'Terms and Conditions',
    href: '#'
  },
  {
    title: 'Privacy Policy',
    href: '#'
  }
]

export default function Footer() {
  return (
    <div className='flex flex-col text-second-heavy items-center font-roboto my-12 z-10'>
      <span className='font-bold lg:text-5xl text-3xl'>
        Join to Atomix8 Community
      </span>
      <span>
        <a href=''>
          <BsTwitter className='text-twitter-blue h-28 w-28'/>
        </a>
      </span>
      <span className='font-medium lg:text-2xl text-lg'>
        {footerLinks.map((link, idx) => (
          <>
          <a key={idx} href={link.href}>{link.title}</a> 
          {idx != footerLinks.length - 1 ?  " - " : ''}
          </>
        ))}
      </span>
      <span className='font-extralight lg:text-2xl text-lg'>
        Atomix.io (C) 2022. All right reserved
      </span>
    </div>
  )
}
