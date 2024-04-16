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
    <div className='flex flex-col text-second-heavy items-center font-roboto lg:mt-4 mb-12 relative z-10'>
      <span className='font-bold xl:text-5xl sm:text-3xl text-[15px] leading-[20px]'>
        Join The Community
      </span>
      <span  className='my-2 sm:my-5'>
        <a href='https://twitter.com/PlayAtomix8' target="_blank">
          <BsTwitter className='text-twitter-blue xl:h-20 xl:w-20 sm:h-[60px] sm:w-[60px] h-9 w-9'/>
        </a>
      </span>
      {/* <span className='font-medium sm:text-2xl text-[10px] leading-[13px]'>
        {footerLinks.map((link, idx) => (
          <>
          <a key={idx} href={link.href}>{link.title}</a> 
          {idx != footerLinks.length - 1 ?  " - " : ''}
          </>
        ))}
      </span> */}
      <span className='font-extralight sm:text-2xl text-[10px] leading-[13px]'>
        Atomix8.io (C) 2023. All right reserved
      </span>
    </div>
  )
}
