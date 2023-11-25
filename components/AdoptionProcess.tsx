import React from 'react'

const AdoptionProcess = () => {
  return (
    <div className='flex flex-col py-24 px-48'>
        <div className="relative flex-center mb-4">
            <div className="w-6 mr-2 border-t border-y-2 border-pink-500 ">{" "}</div>
            <span className='text-pink-500 text-2xl font-semibold'>How We Work</span>
        </div>
        <h2 className='text-4xl font-bold flex-center'>Puppy Adoption Process</h2>
        <div className="flex justify-center items-center space-x-4 mt-8 gap-20">
            {/* Image 1 */}
            <div className="relative rounded-full border-[16px] w-[300px] h-[300px] border-pink-500">
                <div className="absolute top-0 left-0 rounded-full border-[16px] border-transparent overflow-clip w-[300px] h-[300px] -mt-[16px] -ml-[16px]">
                    <img
                    src="/pitbull.png"
                    alt="Image 3"
                    className=""
                    />
                </div>
                
                <div className="flex-center absolute top-0 right-0 transform -translate-x-5 -translate-y-1/2 bg-white p-2 rounded-full w-[75px] h-[75px] shadow-lg">
                <span className="text-pink-500 text-4xl font-bold">1</span>
                </div>
            </div>

            {/* Image 2 */}
            <div className="relative rounded-full border-[16px] w-[300px] h-[300px] border-pink-500">
                <div className="absolute top-0 left-0 rounded-full border-[16px] border-transparent overflow-clip w-[300px] h-[300px] -mt-[16px] -ml-[16px]">
                    <img
                    src="/pitbull.png"
                    alt="Image 36"
                    className=""
                    />
                </div>
                
                <div className="flex-center absolute top-0 right-0 transform -translate-x-5 -translate-y-1/2 bg-white p-2 rounded-full w-[75px] h-[75px] shadow-lg">
                <span className="text-pink-500 text-4xl font-bold">2</span>
                </div>
            </div>

            {/* Image 3 */}
            <div className="relative rounded-full border-[16px] w-[300px] h-[300px] border-pink-500">
                <div className="absolute top-0 left-0 rounded-full border-[16px] border-transparent overflow-clip w-[300px] h-[300px] -mt-[16px] -ml-[16px]">
                    <img
                    src="/pitbull.png"
                    alt="Image 3"
                    className=""
                    />
                </div>
                
                <div className="flex-center absolute top-0 -right-[0px] transform -translate-x-5 -translate-y-1/2 bg-white p-2 rounded-full w-[75px] h-[75px] shadow-lg">
                <span className="text-pink-500 text-4xl font-bold">3</span>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default AdoptionProcess