import PuppiesCard from "@/components/PuppiesCard";
import { getPups } from "@/sanity/actions";
  
const page = async () => {
  const pups = await getPups();
  return (
    <main className="relative nav-padding px-4 xl:px-20 mx-auto">
      <section>
        <div className="flex-center py-8">
          <h1 className="text-4xl text-center font-bold">Discover Your Perfect Companion</h1>
        </div>
        <div className="flex-center max-w-5xl mx-auto">
          <p className="text-center">
            Scroll through our gallery of puppy profiles below to find the newest addition to your family. We believe in responsible breeding, 
            ethical practices, and creating lasting relationships with our clients. Feel free to reach out if you have any questions or if you'd 
            like to know more about a specific puppy. Your journey to finding the perfect furry friend begins here!
          </p>
        </div>
        <div className="py-8 text-center xl:text-left">
          <h2 className="font-bold text-2xl">Puppies Born on 10/20/23!</h2>
        </div>
        <div className="flex-center xl:flex-start px-0 w-full gap-8 flex-wrap" >
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
