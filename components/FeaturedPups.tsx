import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FeaturedPups = () => {
  return (
    <div className="w-full max-w-[80rem] mx-auto">
        <div className='py-[7rem]'>
            <div className="mb-[5rem]">
                <div className='text-center mx-auto w-full max-w-[48rem]'>
                    <h2 className='mb-[1.5rem] font-bold text-[2.25rem] md:text-[3rem]'>Adorable Puppies</h2>
                    <p className=" text-base md:text-[1.125rem]">Browse our selection of cute and cuddly puppies</p>
                </div>
            </div>

            <div className='flex justify-center gap-[2rem]'>
                <Link href="/">
                    <Image src="/bulldog.jpg" alt="bulldog" width={296} height={296} />
                </Link>
                <Link href="/">
                    <Image src="/bulldog.jpg" alt="bulldog" width={296} height={296} />
                </Link>
                <Link href="/">
                    <Image src="/bulldog.jpg" alt="bulldog" width={296} height={296} />
                </Link>
                <Link href="/">
                    <Image src="/bulldog.jpg" alt="bulldog" width={296} height={296} />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default FeaturedPups