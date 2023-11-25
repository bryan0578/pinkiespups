"use client"
import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

interface PupImgGalleryProps {
  imageUrl: string;
}

const PupImgGallery: React.FC<PupImgGalleryProps> = ({ imageUrl }) => {
  return (
    <div className="px-4 sm:px-16 w-full sm:w-1/2">
      <div className="relative">
        <TransitionGroup>
          <CSSTransition
            key={imageUrl}
            timeout={500}
            classNames="fade"
          >
            <img src={imageUrl} alt="Puppy" className="rounded-lg mx-auto relative z-0" />
          </CSSTransition>
        </TransitionGroup>
        <ChevronLeft className="cursor-pointer absolute left-0 z-10 text-white h-8 w-8 top-1/2 transform -translate-y-1/2" />
        <ChevronRight className="cursor-pointer absolute right-0 z-10 text-white h-8 w-8 top-1/2 transform -translate-y-1/2" />
        <div className="flex justify-center mt-4">
          <img src={imageUrl} alt="Puppy thumbnail" className="w-24 h-12 sm:w-30 sm:h-16 mx-2 rounded-lg" />
          {/* Repeat the above line for each thumbnail */}
        </div>
      </div>
    </div>
    
  )
}

export default PupImgGallery
