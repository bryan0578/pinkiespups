"use client"

import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from "next/navigation"

const Hero = () => {
    const router = useRouter();
    return (
        <div className="relative w-full flex flex-col lg:flex-row items-center lg:h-[100vh]">
            <div className='w-full flex justify-center lg:justify-end'>
            <div className='w-full max-w-[40rem] pr-0 ml-[5rem] mr-[5rem] lg:mr-[80px] max-lg:py-20'>
                <h1 className='text-[2.5rem] md:text-[3.5rem] leading-[1.2em] font-bold mb-5 lg:mb-6'>Find your perfect furry companion today!</h1>
                <p className=' text-base lg:text-lg mb-6 lg:mb-8'>Welcome to our dog breeder website, where you can browse our adorable puppies for sale and find your new best friend.</p>
                <div className='flex-start gap-x-3'>
                <Button onClick={() => router.push(`/puppies`)} size="xl" className=' bg-pink-500  rounded-none text-white'>View Puppies</Button>
                <Button onClick={() => router.push(`/contact`)} size="xl" variant="outline" className='rounded-none text-pink-500 border-pink-500 border-2 hover:bg-pink-600 hover:border-none hover:text-white'>Contact Us</Button>
                </div>
            </div>
            </div>
            <div className='w-full h-full flex-center'>
                <Image className='bg-blend-darken w-full h-full object-cover' src="/heroImage.jpg" alt="hero" width={400} height={400}/>
            </div>
        </div>
    )
}

export default Hero

