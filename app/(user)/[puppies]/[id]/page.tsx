"use client"

import PaymentDisclaimer from "@/components/PaymentDisclaimer";
import { getPup } from "@/sanity/actions";
import { ParamsProps } from "@/types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import PuppyBirthCard from "@/components/PuppyBirthCard";
import { useRouter } from "next/navigation";

const page = async ({ params: { id } }: ParamsProps) => {
    const router = useRouter();
    const pup = await getPup(id);
    console.log(pup);
    return (
        <section className="nav-padding max-w-7xl px-10 xl:px-0 flex flex-col items-center justify-center mx-auto">
            <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 py-10">
                <div className="rounded-2xl flex-shrink-0 lg:order-2">
                    <Image className="rounded-2xl" src={pup.image} alt={pup.name} width={700} height={600} />
                </div>
                <div className="flex flex-col justify-between w-full lg:order-1 bg-pink-100 rounded-2xl p-8">
                    <div>
                        <p className="text-lg text-[#282637] font-medium pb-2">Breedname</p>
                        <h2 className="font-semibold text-5xl text-[#030014] pb-6">{pup.puppyName}</h2>
                        <p className=" text-[#828282] pb-10">{pup.puppyDesc}</p>
                    </div>
                    <div className="flex items-end space-x-5">
                        <Button onClick={() => router.push(`/contact`)} className='w-[125px] h-[50px] bg-pink-500 hover:bg-pink-600 rounded-none text-white'>Meet Me</Button>
                        <Button variant="outline" className='w-[125px] h-[50px] rounded-none text-pink-500 border-pink-500 border-2 hover:bg-pink-600 hover:border-none hover:text-white'>Reserve</Button>
                    </div>
                </div> 
            </div>
            <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-full flex flex-row space-x-20">
                        <div className="flex flex-1 flex-col justify-start">
                            <p className="text-xl font-medium">{pup.puppyGender}</p>
                            <p className="text-sm pt-2 text-[#828282]">Gender</p>
                        </div>
                        <div className="flex flex-1 flex-col justify-center">
                            <p className="text-xl font-medium">8 Weeks</p>
                            <p className="text-sm pt-2 text-[#828282]">Age</p>
                        </div>
                        <div className="flex flex-col justify-end">
                            <p className="text-xl font-medium">${pup.puppyPrice}</p>
                            <p className="text-sm pt-2 text-[#828282]">Price</p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-pink-100 rounded-2xl p-8">
                    <h2 className="font-semibold text-3xl pb-6">About Me</h2>
                    <p>{pup.puppyDesc}</p>
                </div>
            </div>
            <PuppyBirthCard />
            <section className="mt-20 mx-auto flex justify-center">
                <PaymentDisclaimer />
            </section>
        </section>
    )
}

export default page