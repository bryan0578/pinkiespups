import PuppiesCard from './PuppiesCard'
import { puppies } from "@/constants";
import { PuppiesProps } from "@/types";
interface PuppyCardProps {
  puppy: PuppiesProps;
}
const Puppies = ({puppy}: PuppyCardProps) => {
    const {imageUrl, pupName, desc, color, sex, age, price } = puppy;
    const pups = puppies;
  return (
    pups.map((pup, index) => {
        <PuppiesCard key={index} imageUrl={imageUrl} name={pupName} desc={desc} color={color} sex={sex} age={age} price={price}/>
    })
    
  )
}

export default Puppies