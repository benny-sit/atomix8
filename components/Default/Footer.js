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
    <div className='flex flex-col text-second-heavy items-center font-roboto lg:mt-4 lg:mb-12 relative z-10'>
      <span className='font-bold lg:text-5xl text-[15px] leading-[20px]'>
        Join to Atomix8 Community
      </span>
      <span>
        <a href='https://twitter.com/PlayAtomix8' className='my-2'>
          <BsTwitter className='text-twitter-blue lg:h-28 lg:w-28 h-9 w-9'/>
        </a>
      </span>
      <span className='font-medium lg:text-2xl text-[10px] leading-[13px]'>
        {footerLinks.map((link, idx) => (
          <>
          <a key={idx} href={link.href}>{link.title}</a> 
          {idx != footerLinks.length - 1 ?  " - " : ''}
          </>
        ))}
      </span>
      <span className='font-extralight lg:text-2xl text-[10px] leading-[13px]'>
        Atomix.io (C) 2022. All right reserved
      </span>
    </div>
  )
}
