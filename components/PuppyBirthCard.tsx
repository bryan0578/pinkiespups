import Image from 'next/image'
import React from 'react'

type Props = {}

function PuppyBirthCard({}: Props) {
  return (
    <div className='w-full pt-10'>
        <div className="bg-pink-100 rounded-3xl p-8">
            <div className="flex justify-center lg:justify-between md:flex-row flex-wrap gap-20 text-center">
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex justify-center items-center rounded-full bg-pink-500 w-16 h-16'>
                        <Image src="/birthIcon.svg" alt="birthday cake" width={32} height={32} />
                    </div>
                    <p className="text-sm lg:text-base font-bold pt-2 text-[#8d8c95]">Nov 17, 2022</p>
                    <p className="text-xs lg:text-sm pt-2 text-[#8d8c95]">Date of Birth</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex justify-center items-center rounded-full bg-pink-500 w-16 h-16'>
                        <Image src="/clockIcon.svg" alt="clock" width={32} height={32} />
                    </div>
                    <p className="text-sm lg:text-base font-bold pt-2 text-[#8d8c95]">Mar 01, 2021</p>
                    <p className="text-xs lg:text-sm pt-2 text-[#8d8c95]">Date Available</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex justify-center items-center rounded-full bg-pink-500 w-16 h-16'>
                        <Image src="/heartIcon.svg" alt="heart" width={32} height={32} />
                    </div>
                    <p className="text-sm lg:text-base font-bold pt-2 text-[#8d8c95]">4 lbs</p>
                    <p className="text-xs lg:text-sm pt-2 text-[#8d8c95]">Current Weight</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex justify-center items-center rounded-full bg-pink-500 w-16 h-16'>
                        <Image src="/thumbsupIcon.svg" alt="thumbs up" width={32} height={32} />
                    </div>
                    <p className="text-sm lg:text-base font-bold pt-2 text-[#8d8c95]">Yes</p>
                    <p className="text-xs lg:text-sm pt-2 text-[#8d8c95]">Vaccinated</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PuppyBirthCard