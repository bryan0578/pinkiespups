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
                        <p className='text-base lg:text-lg mb-5 lg:mb-6'>With years of experience, we are dedicatied to raising puppies with the utmost care and love.</p>
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
                        <Image className="w-full h-full" src="/bulldog.jpg" alt="bulldog" width={600} height={600} />
                    </div>
                </div>
            </div>
        </div>
        {/* <div className='flex-center'>
            <div className='flex-center w-full object-contain'>
                <Image className="" src="/pitbull.png" alt="bulldog" width={400} height={400} />
            </div>
            
        </div>
        <div className='flex-start flex-col'>
            <div className="relative flex items-center">
                <div className="w-6 mr-2 border-t border-y-2 border-pink-500 ">{" "}</div>
                <span className='text-pink-500 text-2xl font-semibold'> About us</span>
            </div>
            <h2 className='text-4xl font-bold'>The Best for Your Pet!</h2>
            <br/>
            <p className=''>
                Welcome to the heart of joy and wagging tails – welcome to Pinkies Puppies! We are more than just a breeder; 
                we are passionate advocates for the extraordinary bond between humans and their four-legged friends.
            </p>
            <br/>
            <h3 className='font-bold'>Puppy Love Elevated:</h3>
            <p>
                At Pinkies Puppies, we believe in delivering more than just adorable pups. We are committed to excellence in breeding, 
                focusing on traits that make our puppies exceptional – from their health to their temperament, ensuring they become 
                beloved members of your family.
            </p>
            <br/>
            <h3 className='font-bold'>
                Happy Tails Start Here:
            </h3>
            <p>
            Every wagging tail is a testament to our dedication. Our puppies are raised in a nurturing environment where love is as 
            essential as air. Socialization, play, and positive experiences are at the core of their early days, setting the 
            foundation for well-adjusted and confident companions.
            </p>
        </div> */}
    </div>
  )
}

export default About