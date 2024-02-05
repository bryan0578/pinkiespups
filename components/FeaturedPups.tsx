"use client"

import Image from 'next/image'
import { urlFor } from "../sanity/lib/image"
import { readClient } from "@/sanity/lib/client";
import Link from 'next/link'
import React from 'react'
import { useRouter } from "next/navigation"


const FeaturedPups = ({id, imageUrl}:any) => {
    const router = useRouter();
    return (
        <div className="w-full max-w-[80rem] mx-auto">
            <div className='flex justify-center rounded-lg'>
                <Image className="rounded-lg" src={urlFor(imageUrl).url()} alt="bulldog" width={296} height={150} />
            </div>
        </div>
    )
}

export default FeaturedPups