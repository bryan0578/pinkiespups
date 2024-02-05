import About from '@/components/About'
import FeaturedPups from '@/components/FeaturedPups'
import Hero from '@/components/Hero'
import { Button } from '@/components/ui/button';
import { getPups } from '@/sanity/actions';
import Link from 'next/link';

export const revalidate = 60;

export default async function Home() {
const pups = await getPups();

  return (
    <main className="relative nav-padding">
        <Hero />
        <section>
            <About />
        </section>
        <section className='px-[5%]'>
            <div className='py-[7rem]'>
                <div className="mb-[5rem]">
                    <div className='text-center mx-auto w-full max-w-[48rem]'>
                        <h2 className='mb-[1.5rem] font-bold text-[2.25rem] md:text-[3rem]'>Adorable Puppies</h2>
                        <p className=" md:text-base lg:text-lg">Browse our selection of cute and cuddly puppies</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row justify-center gap-[2rem]'>
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
            <div className='flex-center'>
                <Link className="px-12 py-[1.125rem] bg-pink-500 text-white hover:bg-pink-500/90" href="/puppies">Browse Puppies</Link>
            </div>
            
      </section>
      
    </main>
  )
}
