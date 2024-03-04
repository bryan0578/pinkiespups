import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='px-[5%]'>
        <div className='w-full max-w-[80rem] mx-auto'>
            <div className='py-[7rem]'>
                <div className="grid items-center lg:grid-cols-2 gap-x-16 gap-y-20">
                    <div>
                        <h3 className='text-[2.5rem] leading-[1.2em] font-bold mb-5 lg:mb-6'>Expert Dog Breeder Providing Healthy, Well-Socialized Puppies for Loving Homes</h3>
                        <p className='md:text-base lg:text-lg mb-5 lg:mb-6'>With years of experience, we are dedicated to raising puppies with the utmost care and love.</p>
                        <ul className="flex-start flex-col gap-y-4">
                            <li>
                                <div className='flex-start'>
                                    <Image className="mr-4" src="/bone.svg" alt="dog bone" width={20} height={20} />
                                    <p>Healthy puppies bred with love and expertise.</p>
                                </div>
                            </li>
                            <li>
                                <div className='flex-start'>
                                    <Image className="mr-4" src="/bone.svg" alt="dog bone" width={20} height={20} />
                                    <p>Well socialized puppies ready for their forever homes.</p>
                                </div>
                            </li>
                            <li>
                                <div className='flex-start'>
                                    <Image className="mr-4" src="/bone.svg" alt="dog bone" width={20} height={20} />
                                    <p>Find you perfect furry companion with us today!</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='w-full h-full'>
                        <Image className="w-full h-full" src="/IMG_8021.jpg" alt="bulldog" width={600} height={600} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About