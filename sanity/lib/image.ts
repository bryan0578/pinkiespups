import imageUrlBuilder from '@sanity/image-url'
import { readClient } from '@/sanity/lib/client'

const imageBuilder = imageUrlBuilder(readClient)

export const urlFor = (source: any) => {
  return imageBuilder.image(source)
}