"use client"
import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
  

const PuppyCard = ({id, imageUrl, pupName, desc, color, sex, age, price, availability}:any) => {

  const availabilityClass = availability === 'available' ? 'bg-pink-500' : 'bg-black';

  return (
    <div className=" flex-center px-16 py-8 overflow-hidden">
        <Card className="">
            <CardContent className="overflow:hidden">
            <div className="flex-start items-center flex-col sm:flex-row gap-8">
                <div className="w-full py-8">
                    <div className="pb-2 text-lg">
                        <p className="font-semibold">Name: <span className="font-normal">{pupName}</span></p> 
                    </div>
                    <p className="font-semibold">Description: <span className="font-normal">{desc}</span></p>
                    <p className="font-semibold">Color: <span className="font-normal">{color}</span></p>
                    <p className="font-semibold">Gender: <span className="font-normal">{sex}</span></p>
                    <p className="font-semibold">Age: <span className="font-normal">{age}</span></p>
                    <p className="font-semibold">Price: <span className="font-normal">${price}</span></p>
                    <div className={`${availabilityClass} flex-center items-center text-center px-4 mt-6 align-bottom py-1 w-[125px] rounded-full`}>
                        <p className={`text-white font-semibold capitalize`}>{availability}</p>
                    </div>
                </div>             
            </div>
        </CardContent>
        
    </Card>

    </div>
  )
}

export default PuppyCard