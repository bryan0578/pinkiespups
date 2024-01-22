import { Button } from "@/components/ui/button";

export default function page() {
    return (
        <main className="relative nav-padding">
            <div className='max-w-7xl mx-auto p-4 lg:p-20'>
                <div>
                    <h2 className="pb-6 font-bold text-center text-2xl lg:text-3xl">Step-by-Step Adoption Process</h2>
                    <ol className="text-left list-decimal pl-8 space-y-4">
                        <li>Explore Available Puppies: Browse our website to view profiles and pictures of available American Bully puppies. Each puppy's details, including color, markings, and personality traits, are provided.</li>
                        <li>Contact Us: Reach out to us through the contact form on our website or via phone to express your interest in a specific puppy or to inquire about upcoming litters.</li>
                        <li>Schedule a Visit: Schedule a visit to meet the puppies and their parents. This allows you to get a closer look at the living conditions and ensure a suitable match.</li>
                        <li>Adoption Application: Complete our adoption application form, providing information about your living situation, experience with dogs, and your plans for the puppy's care.</li>
                        <li>Review Adoption Policies: Familiarize yourself with our adoption policies, including the adoption fee, deposit requirements, and any health guarantees. This information is available on our website and will be discussed during the application process.</li>
                        <li>Place a Deposit: If you've found the perfect match, you can secure the puppy by placing a 50% non-refundable deposit. This step initiates the adoption process and ensures the availability of your chosen puppy.</li>
                        <li>Adoption Contract: Download the adoption contract from our website, read it thoroughly, and fill in the required information. The contract outlines the terms and conditions of the adoption.</li>
                        <li>Payment Confirmation: Pay the remaining balance of the adoption fee within 30 days of placing the deposit. Contact us for payment options.</li>
                        <li>Prepare for Puppy Arrival: As the adoption date approaches, prepare your home for the new addition. Ensure you have all the necessary supplies, such as food, bowls, a bed, and toys.</li>
                        <li>Pick Up Your Puppy: On the agreed-upon date, come to our facility to pick up your American Bully puppy. Bring a printed and signed copy of the adoption contract with you.</li>
                        <li>Post-Adoption Support: Enjoy your new companion! We provide post-adoption support and are here to answer any questions or concerns you may have as you and your puppy adjust to your new life together.</li>
                    </ol>
                </div>
                <div className="mt-16 text-center">
                    <a href="/public/PinkysPupsAdoptionContract.pdf" download>
                        <Button size="xl">
                            Download Adoption Contract
                        </Button>
                    </a>
                </div>
            </div>
        </main>
    )
}
