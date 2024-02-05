"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { urlFor } from "@/sanity/lib/image"
  
 

const PuppiesCard = ({id, imageUrl, pupName, desc, color, sex, age, price, availability}:any) => {
  const router = useRouter();
  return (
    <div className="flex-center flex-wrap">
    <Card className="sm:w-[450px]">
      <div className="p-6 border-transparent rounded-lg flex-center">
        <Image className="rounded-lg flex-center object-contain" src={urlFor(imageUrl).url()} alt={pupName} width={400} height={400} />
      </div>
        <CardContent className="pt-4">
            <div className="flex-between pb-4 text-lg">
              <p className="text-base lg:text-lg font-semibold">Name: <span className="font-normal">{pupName}</span></p>
              <div className={`${availability === 'available' ? 'bg-pink-500' : 'bg-black'} flex items center px-4 py-1 rounded-full`}>
                <p className={`text-white text-base lg:text-lg font-semibold capitalize`}>{availability}</p>
              </div>
              
            </div>
            
            {/* <p className="text-base lg:text-lg font-semibold">Description: <span className="font-normal">{desc}</span></p> */}
            <p className="text-base lg:text-lg font-semibold">Color: <span className="font-normal">{color}</span></p>
            <p className="text-base lg:text-lg font-semibold">Gender: <span className="font-normal">{sex}</span></p>
            <p className="text-base lg:text-lg font-semibold">Age: <span className="font-normal">{age}</span></p>
            <p className="text-base lg:text-lg mt-4 font-semibold text-right">Price: <span className="font-bold text-pink-500">${price}</span></p>
            
        </CardContent>
        <CardFooter className="border border-t-2 py-4">
          <div className="w-full h-full flex justify-center lg:justify-end items-center">
            <Button variant="outline" size="xl" className=' text-pink-500 border-pink-500 border-2 hover:bg-pink-600 hover:border-none hover:text-white' onClick={() => router.push(`/puppies/${id}`)} disabled={availability !== 'available'}>Learn More</Button>
          </div>
            
        </CardFooter>
    </Card>
    </div>
  )
}

export default PuppiesCard