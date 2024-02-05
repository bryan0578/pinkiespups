import ContactForm from "@/components/ContactForm";
import PuppiesCard from "@/components/PuppiesCard";
import { getPups } from "@/sanity/actions";

export const revalidate = 60;

const page = async () => {
  const pups = await getPups();
  return (
    <main className="relative nav-padding mx-auto">
      <section className="px-4 lg:px-20">
        <div className="flex-center py-8">
          <h1 className="text-3xl lg:text-4xl text-center font-bold">Discover Your Perfect Companion</h1>
        </div>
        <div className="flex-center max-w-5xl mx-auto">
          <p className="text-center lg:text-lg">
            Scroll through our gallery of puppy profiles below to find the newest addition to your family. We believe in responsible breeding, 
            ethical practices, and creating lasting relationships with our clients. Feel free to reach out if you have any questions or if you'd 
            like to know more about a specific puppy. Your journey to finding the perfect furry friend begins here!
          </p>
        </div>
        <div className="py-8 text-center xl:text-left">
          <h2 className="font-bold text-2xl lg:text-3xl">Puppies Born on 9/8/23!</h2>
          
        </div>
        <div className="flex-center xl:flex-start w-full gap-8 flex-wrap" >
          {pups.length === 0 ? (
            <p className="text-center text-base lg:text-lg">No puppies available right now. Check back soon or sign up for our news letter for updates for when more pups are on the way!</p>
          ) : (
            pups.map((pup:any, index:any) => (
              <PuppiesCard 
                key={index} 
                id={pup._id}
                imageUrl={pup.image} 
                pupName={pup.puppyName} 
                availability={pup.puppyAvailability}
                desc={pup.puppyAbout} 
                color={pup.puppyColor} 
                sex={pup.puppyGender} 
                age={pup.puppyAge}
                price={pup.puppyPrice}
                className="w-full md:w-1/2 lg:w-1/3"
              />
            ))
          )}
        </div>
      </section>
      <section className="mt-20">
        <ContactForm />
      </section>
    </main>
  )}
  
export default page;
