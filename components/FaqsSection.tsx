import React, { useState } from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
  import { FaPlus, FaMinus} from 'react-icons/fa6'


function FaqsSection({a, b}: any) {
    
    const [isOpen1, setIsOpen1] = useState(false);

    return (
        <div className="bg-pink-100 rounded-2xl p-8 flex-1">
            <h4 className='text-base lg:text-lg font-semibold'>{b}</h4>
            <p className='text-base lg:text-lg'>{a}</p>
        </div>
        
    )
}

export default FaqsSection
{/* 
        <Collapsible className='flex-1 overflow-hidden'>
            <div className="border-l-8 border-pink-500 flex-2 w-full px-8 py-6 border-b  bg-gray-400/10">
                <CollapsibleTrigger onClick={() => setIsOpen1(!isOpen1)}>
                    <div className="flex items-center text-base lg:text-lg">
                        {isOpen1 ? <FaMinus className="w-10 h-10 mr-10 text-pink-500"/> : <FaPlus className="w-10 h-10 mr-10 text-pink-500"/>}
                        <p className='text-base lg:text-lg text-black/60'>Can I use this in my project? </p>
                    </div>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
                <div className="ml-20 border-l-8 border-pink-500 border-b flex-2 w-full px-8 py-6 bg-gray-400/10">
                    <p className='text-base lg:text-lg text-black/60'>Yes. Free to use for personal and commercial projects. No attribution required.</p>
                </div>
            </CollapsibleContent>
        </Collapsible> 
        */}