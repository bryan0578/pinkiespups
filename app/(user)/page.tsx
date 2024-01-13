import About from '@/components/About'
import FeaturedPups from '@/components/FeaturedPups'
import Hero from '@/components/Hero'
import { getPups } from '@/sanity/actions';


export default async function Home() {
const pups = await getPups();
  return (
    <main className="relative nav-padding">
        <Hero />
        <section>
            <About />
        </section>
        <section>
            <div className='py-[7rem]'>
                <div className="mb-[5rem]">
                    <div className='text-center mx-auto w-full max-w-[48rem]'>
                        <h2 className='mb-[1.5rem] font-bold text-[2.25rem] md:text-[3rem]'>Adorable Puppies</h2>
                        <p className=" md:text-base lg:text-lg">Browse our selection of cute and cuddly puppies</p>
                    </div>
                </div>
                <div className='flex justify-center gap-[2rem]'>
                    {pups.length === 0 ? (
                        <p className="text-center text-base lg:text-lg">No puppies available right now. Check back soon or sign up for our news letter for updates for when more pups are on the way!</p>
                    ) : (
                        pups.map((pup:any, index:any) => (
                            <FeaturedPups 
                                imageUrl={pup.image} 
                                id={pup._id}
                            />
                        ))
                    )}
                </div>
            </div>
      </section>
      
    </main>
  )
}
