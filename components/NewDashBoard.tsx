import React from 'react'
import Stats from './Stats'
import { ActivityChart } from './ActivityChart'
import { RecentOrders } from './RecentOrders'
import CustomerFeedback from './CustomerFeedback'
import NetProfit from './NetProfit'
import GoalsSection from './GoalsSection'

const DashBoard = () => {
    return (
        <>
            <p className=' font-extrabold text-[20px] px-4 pt-4 '>DashBoard</p>
            <div className='grid grid-cols-1 gap-4 '>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mx-4 pt-4">
                    {/* First row */}
                    <Stats />
                    <NetProfit />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mx-4" >

                    {/* Second row */}
                    <ActivityChart />
                    <GoalsSection />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mx-4 pb-4" >

                    {/* Third row */}
                    <RecentOrders />
                    <CustomerFeedback />
                </div>

            </div>
        </>
    )
}

export default DashBoard