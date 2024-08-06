import React from 'react'
import Stats from './Stats'
import { ActivityChart } from './ActivityChart'
import { RecentOrders } from './RecentOrders'
import CustomerFeedback from './CustomerFeedback'
import NetProfit from './NetProfit'
import GoalsSection from './GoalsSection'

const DashBoard = () => {
    return (
        <div className='flex flex-col '>
            <p className=' font-extrabold text-[20px] px-8 pt-4'>DashBoard</p>
            <div className='flex items-center justify-center px-8 h-[200px] overflow-auto '>
                <div className='w-[60%] '>
                    <Stats />
                </div>
                <div className='w-[40%] px-5 ' >
                    <NetProfit />
                </div>
            </div>
            <div className='flex items-center justify-center px-8 h-[250px] overflow-auto '>
                <div className='w-[60%] '>
                    <ActivityChart />
                </div>
                <div className='w-[40%] px-5 ' >
                    <GoalsSection />
                </div>
            </div>
            <div className='flex items-center justify-center px-8 h-[450px] overflow-auto '>
                <div className='w-[60%] '>
                    <RecentOrders />
                </div>
                <div className='w-[40%] px-5 ' >
                    <CustomerFeedback />
                </div>
            </div>
            {/* <RadialChart /> */}
        </div>
    )
}

export default DashBoard