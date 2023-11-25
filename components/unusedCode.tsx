import PaymentDisclaimer from "@/components/PaymentDisclaimer";
import PuppyCard from "@/components/PuppyCard";
import { getPup } from "@/sanity/actions";
import { ParamsProps } from "@/types";
import  PupImgGallery  from '@/components/PupImgGallery'

const unusedCode = async ({ params: { id } }: ParamsProps) => {
  const pup = await getPup(id);
  console.log(pup);
  return (
    <main className="relative nav-padding">
      {pup && pup._id === id ? (
        pup.puppyAvailability === 'available' ? (
          <PuppyCard 
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
        ) : (
          <div className="flex-center px-16 py-16 w-full">
             <p className="text-2xl font-extrabold text-center">
               Sorry, this puppy is not available at the moment.
             </p>
          </div>
        )
      ) : (
        <div className="flex-center px-16 py-16 w-full">
           <p className="text-2xl font-extrabold text-center">
             Sorry, we couldn't find the puppy you're looking for.
           </p>
        </div>
      )}
        <section>
          <div className="flex-center py-16">
            <PupImgGallery imageUrl={pup.image} />
          </div>
        </section> 
        <section>
          <div className="flex-center py-16">
            <PaymentDisclaimer />
          </div>
        </section> 
    </main>
  )
}

export default unusedCode