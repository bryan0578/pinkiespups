import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { navLinks, socials, policies } from '@/constants'


const Footer = () => {
  return (
    <footer className='w-full px-20'>
      <div className='flex-between flex-col md:flex-row gap-10 items-center w-full py-20'>
        <div className=''>
          <Link href="/" className="">
            <Image src="/Logo.svg" width={50} height={50} alt={'Pinkies Puppies Logo'}/>
          </Link>
        </div>
        <div>
          <ul className='flex-center gap-x-3 flex-col md:flex-row md:gap-x-10'>
            {navLinks.map((link, index) => (
              <li key={index}
                className="text-pink-500 body-text font-semibold capitalize hover:text-pink-500/70 transition ease-in py-3"
              >
                <Link className='links' href={`/${link.url}`} scroll={true}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* 
          <div>
            <ul className='flex-center gap-x-3 md:gap-x-10'>
              {socials.map((link, index) => (
                <li key={index}
                  className="text-pink-500 body-text capitalize hover:text-pink-500/70 transition ease-in"
                >
                  <Link className='links' href={`/${link.url}`} scroll={true}>
                    <Image src={link.icon} width={25} height={25} alt={link.alt}/>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        */}
      </div>
      <div className='border-t-2 border-pink-500 pt-8 pb-20 flex-center flex-col md:flex-row gap-x-8'>
        <p className='text-sm order-last md:order-first pt-8 md:pt-0'>© 2023 Pinkies Puppies. All rights reserved.</p> 
        {/* 
          <div>
            <ul className='flex-center flex-col md:flex-row gap-x-3 md:gap-x-10'>
              {policies.map((link, index) => (
                <li key={index}
                  className="text-pink-500 text-sm capitalize hover:text-pink-500/70 transition ease-in py-3 "
                >
                  <Link className='links' href={`/${link.url}`} scroll={true}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        */}
      </div>
    </footer>
  )
}

export default Footer