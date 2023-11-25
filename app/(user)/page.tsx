import About from '@/components/About'
import AdoptionProcess from '@/components/AdoptionProcess'
import Divider from '@/components/Divider'
import FeaturedPups from '@/components/FeaturedPups'
import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative nav-padding">
      <Hero />
      <section>
        <About />
      </section>
      <section>
        <FeaturedPups />
      </section>
      
      {/* <AdoptionProcess /> */}
    </main>
  )
}
