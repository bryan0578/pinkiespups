import React from 'react'

type Props = {}

function PuppyBirthCard({}: Props) {
  return (
    <div className='w-full pt-20'>
        <div className="bg-pink-100 rounded-3xl p-8">
            <div className="flex justify-evenly flex-row space-x-20 text-center">
                <div >
                    <p className="text-xl font-medium">icon</p>
                    <p className="text-sm font-bold pt-2 text-[#8d8c95]">Nov 17, 2022</p>
                    <p className="text-xs pt-2 text-[#8d8c95]">Date of Birth</p>
                </div>
                <div>
                    <p className="text-xl font-medium">icon</p>
                    <p className="text-sm font-bold pt-2 text-[#8d8c95]">Mar 01, 2021</p>
                    <p className="text-xs pt-2 text-[#8d8c95]">Date Available</p>
                </div>
                <div>
                    <p className="text-xl font-medium">icon</p>
                    <p className="text-sm font-bold pt-2 text-[#8d8c95]">4 lbs</p>
                    <p className="text-xs pt-2 text-[#8d8c95]">Current Weight</p>
                </div>
                <div>
                    <p className="text-xl font-medium">icon</p>
                    <p className="text-sm font-bold pt-2 text-[#8d8c95]">Yes</p>
                    <p className="text-xs pt-2 text-[#8d8c95]">Vaccinated</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PuppyBirthCard