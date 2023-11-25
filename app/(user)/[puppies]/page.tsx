import PuppiesCard from "@/components/PuppiesCard";
import { PuppiesProps } from "@/types";
import { getPups } from "@/sanity/actions";
  
const page = async ({id, pupName, desc, color, sex, age, price, availability}:PuppiesProps) => {
  const pups = await getPups();
  return (
    <main className="relative nav-padding">
      <section>
        <div className="flex-center py-8">
          <h1 className="text-4xl font-bold">Discover Your Perfect Companion</h1>
        </div>
        <div className="flex-center">
          <p className=" px-64 text-center">
            Scroll through our gallery of puppy profiles below to find the newest addition to your family. We believe in responsible breeding, 
            ethical practices, and creating lasting relationships with our clients. Feel free to reach out if you have any questions or if you'd 
            like to know more about a specific puppy. Your journey to finding the perfect furry friend begins here!
          </p>
        </div>
        <div className="px-16 py-8">
          <h2 className="font-bold text-2xl">Puppies Born on 10/20/23!</h2>
        </div>
        <div className="flex-start px-16 w-full gap-8 flex-wrap" >
          {pups.length === 0 ? (
            <p>No puppies available right now. Check back soon or sign up for our news letter for updates for when more pups are on the way!</p>
          ) : (
            pups.map((pup:any, index:any) => (
              <PuppiesCard 
                key={index} 
                id={pup._id}
                imageUrl={pup.image} 
                pupName={pup.puppyName} 
                availability={pup.puppyAvailability}
                desc={pup.puppyDesc} 
                color={pup.puppyColor} 
                sex={pup.puppyGender} 
                age={pup.puppyAge}
                price={pup.puppyPrice}
              />
            ))
          )}
        </div>
      </section>
    </main>
  )}
  
export default page;
