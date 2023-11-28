"use client"

import FaqsSection from "@/components/FaqsSection";

const faqs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default function Home() {
  return (
    <main className="relative nav-padding">
        <div className='max-w-7xl mx-auto'>
            <div className="p-8 text-center text-lg text-black/60">
                <h2 className="mt-6 mb-8 text-4xl font-bold text-center text-black">Welcome to PinkysPups - American Bully FAQs</h2>
                <p>At PinkysPups, we understand that adopting a new puppy is an exciting and significant decision. To provide you with the information you 
                    need, we've compiled a list of frequently asked questions to guide you through our American Bully adoption process. Whether you're 
                    curious about our breeding practices, the adoption journey, or what to expect when bringing your new companion home, we've got you 
                    covered.</p>
                <br/>
                <p>Please review the following FAQs to gain insights into our breeding philosophy, adoption procedures, and the care we provide to our 
                    puppies. If you have any additional questions or require further clarification, don't hesitate to contact us. Your satisfaction and 
                    the well-being of our puppies are our top priorities.
                </p>
                <br/>
                <p>Thank you for considering [Your Breeding Business Name] for your American Bully adoption. We look forward to assisting you on your 
                    journey to welcoming a loving and loyal companion into your home.
                </p>
            </div>
            
        </div>
        <div className='max-w-7xl  mx-auto'>
        {faqs.map((i) => (
            <FaqsSection />
        ))}
        </div>
    </main>
  )
}
