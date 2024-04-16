import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import PreSale from './PreSale'

export default function DefaultLayout({ children}) {
  return (
    <div className='bg-back-lite flex flex-col items-center min-h-screen overflow-x-clip'>
      <PreSale />
      <div className='xl:container  w-full flex flex-col grow'>
        <header className='z-10'>
          <Navbar />
        </header>

        {children}

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  )
}
