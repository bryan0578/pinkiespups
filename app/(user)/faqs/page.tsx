"use client"

import FaqsSection from "@/components/FaqsSection";
import { faqs } from "@/constants";


export default function Home() {
  return (
    <main className="relative nav-padding">
        <div className='max-w-7xl mx-auto'>
            <div className="p-8 text-center text-lg text-black/60">
                <h2 className="mt-6 mb-8 text-4xl font-bold text-center text-black">Welcome to Pinky's Pups - American Bully FAQs</h2>
                <p>We recognize the significance of adopting a new puppy and aim to support you every step of the way. 
                    To streamline your understanding, we've curated a comprehensive list of frequently asked questions covering our 
                    American Bully adoption process, breeding philosophy, and the care we provide to our puppies. Feel free to 
                    reach out for additional information – your satisfaction and the well-being of our puppies are our top priorities. 
                    Thank you for considering Pinky's Pups for your American Bully adoption; we eagerly anticipate assisting you in welcoming 
                    a loving and loyal companion into your home.
                </p>
            </div>
            
        </div>
        <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {faqs.map((faq, i) => (
            <FaqsSection a={faq.a} b={faq.q}/>
        ))}
        </div>
    </main>
  )
}
