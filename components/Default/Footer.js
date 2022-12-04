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
    <div className='flex flex-col text-second-heavy items-center font-roboto my-12'>
      <span className='font-bold text-5xl'>
        Join to Atomix8 Community
      </span>
      <span>
        <a href=''>
          <BsTwitter className='text-twitter-blue h-28 w-28'/>
        </a>
      </span>
      <span className='font-medium text-2xl'>
        {footerLinks.map((link, idx) => (
          <>
          <a href={link.href}>{link.title}</a> 
          {idx != footerLinks.length - 1 ?  " - " : ''}
          </>
        ))}
      </span>
      <span className='font-extralight text-2xl'>
        Atomix.io (C) 2022. All right reserved
      </span>
    </div>
  )
}
