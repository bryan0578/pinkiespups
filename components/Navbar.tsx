"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'


const navLinks = [
    {
        url: "puppies",
        label:"Puppies"
    },
    {
        url: "adopt",
        label:"Adoption Contract"
    },
    {
        url: "faqs",
        label:"FAQs"
    },
    {
        url: "contact",
        label:"Contact"
    },
]

const Navbar = () => {
    const [active, setActive] = useState("home");
    const [toggle, setToggle] = useState(false);
    return (
        <nav className={`flex-center fixed top-0 z-50 w-full border-b-4 border-pink-400 py-3 bg-gradient-to-r from-white to-pink-100`}>
            <div className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
                <Link href="/" className="flex-center" onClick={() => {
                        setActive('home');
                    }}>
                <Image src="/Logo.svg" className="w-[50px] h-[50px]" width={50} height={50} alt={'Pinkies Puppies Logo'}/>
                <h1 className='hidden lg:block pl-4 text-pink-500 text-xl font-bold'>Pinkys Pups</h1>
                </Link>
                <Image
                    src={toggle ? "/x.svg" : "/menu.svg"}
                    width={30}
                    height={30}
                    alt="Hamburger menu"
                    className='block md:hidden'
                    onClick={() => {
                        setToggle(!toggle) 
                        window.scrollTo(0, 0);
                    }}
                />
                <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10 '>
                    {navLinks.map((link, index) => (
                        <li key={index}
                        className={`${active === link.label ? "text-gradient_primary" : "text-pink-500"
                        } "!text-[#EB104E] !font-bold body-text capitalize hover:text-pink-500/70 transition ease-in`}
                        onClick={() => {
                            setActive(link.label);
                        }}
                        
                        >
                        <Link className='links' href={`/${link.url}`} scroll={true}>{link.label}</Link>
                        </li>
                    ))}
                </ul>

                <div className={`${!toggle ? "hidden" : "flex-start"} bg-gradient-to-r from-white to-pink-100 z-60 p-6 border-l border-t border-b border-black-400 absolute top-20 right-0 my-2 min-w-[50%] z-20 rounded-tl-lg rounded-bl-lg`}>
                    <ul className='flex-start w-full py-4 px-4 flex-col gap-y-10 gap-x-3 md:gap-x-10'>
                        {navLinks.map((link, index) => (
                            <li key={index}
                                className={`${active === link.label ? "text-gradient_primary" : "text-white-800"} !font-bold body-text capitalize hover:text-primary transition ease-in`}
                                onClick={() => {
                                    setToggle(!toggle);
                                    setActive(link.label);
                                }}
                            >
                                <Link href={`/${link.url}`} scroll={true}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar