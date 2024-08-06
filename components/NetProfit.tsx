import React from 'react'
import { FaSortUp } from 'react-icons/fa6'
import { RadialChart } from './RadialChart'

const NetProfit = () => {
    return (
        <div className='flex  bg-[#202028] h-[150px]  px-10 rounded-xl'>
            <div>
                <p>Net Profit</p>
                <p className='font-extrabold text-3xl'>$6759.25</p>
                <div className='flex items-end'>
                    <FaSortUp />
                    <p>3%</p>
                </div>
            </div>
            <div className=' flex '>
                <RadialChart />
            </div>
        </div>
    )
}

export default NetProfit