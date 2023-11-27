import About from '@/components/About'
import FeaturedPups from '@/components/FeaturedPups'
import Hero from '@/components/Hero'


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
      
    </main>
  )
}
