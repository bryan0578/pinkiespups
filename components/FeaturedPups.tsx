"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRouter } from "next/navigation"

const FeaturedPups = ({id, imageUrl}:any) => {
    const router = useRouter();
    return (
        <div className="w-full max-w-[80rem] mx-auto">
            <div className='flex justify-center gap-[2rem]'>
                <button className="rounded-xl border-[4px] border-pink-500 h-[250px] overflow-hidden hover:opacity-70" onClick={() => router.push(`/puppies/${id}`)}>
                    <Image src={imageUrl} alt="bulldog" width={296} height={150} />
                </button>
            </div>
        </div>
    )
}

export default FeaturedPups