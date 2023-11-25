import { groq } from 'next-sanity';
import { readClient } from "./lib/client";
import { ParamsProps } from '@/types';

export const getPups = async () => {
    try {
        const pups = await readClient.fetch(
            groq`*[_type == "pups"]{
                _id,
                "image": puppyImage.asset->url,
                puppyName,
                puppyDesc,
                puppyColor,
                puppyGender,
                puppyAge,
                puppyPrice,
                puppyAvailability
            }`
        );
        return pups;
    } catch (error) {
        console.log(error);
    }
}

export const getPup = async (id: string) => {
    try {
        const query = `*[_type == "pups" && _id == $id][0]{
            ...,
            "image": puppyImage.asset->url,
        }`
        
        const pup = await readClient.fetch(query, { id });
        console.log(pup);
        return pup;
    } catch (error) {
        
    }
}