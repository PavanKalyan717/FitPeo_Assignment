import React from 'react'
import { FaSortUp } from 'react-icons/fa6'
import { RadialChart } from './RadialChart'

const NetProfit = () => {
    return (
        <div className=' col-span-1 md:col-span-2 bg-[#202028] px-10 rounded-xl h-[150px]'>
            <div className='flex flex-col justify-evenly h-full'>
                <p>Net Profit</p>
                <p className='font-extrabold text-3xl'>$6759.25</p>
                <div className='flex items-end text-green-500'>
                    <FaSortUp />
                    <p>3%</p>
                </div>
            </div>
            {/* <div className=' flex '>
                <RadialChart />
            </div> */}
        </div>
    )
}

export default NetProfit