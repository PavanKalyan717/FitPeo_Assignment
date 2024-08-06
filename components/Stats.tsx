// import React from 'react'
// import { TbShoppingBagPlus } from "react-icons/tb";
// import { TbShoppingBagCheck } from "react-icons/tb";
// import { TbShoppingBagX } from "react-icons/tb";
// import { MdCurrencyExchange } from "react-icons/md";
// import { FaSortUp } from "react-icons/fa6";
// import { FaSortDown } from "react-icons/fa6";
// import { RadialChart } from './RadialChart';

// const Stats = () => {
//     return (
//         <div className='flex items-center py-2 justify-evenly '>
//             <div className='flex gap-6'>
//                 <div className=' flex p-2 rounded-lg bg-dark-500 h-[150px]'>
//                     <div className='p-2' >
//                         <TbShoppingBagPlus size={40} className=' p-1 bg-[#2a3467] rounded-xl ' style={{ color: '#4062fc' }} />
//                         <p>Total Orders</p>
//                         <p className=' font-extrabold text-3xl  '>75</p>
//                     </div>
//                     <div className='flex justify-between'>
//                         <div className='flex items-end px-4'>
//                             <FaSortUp />
//                             <p>3%</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className=' flex p-2 rounded-lg bg-dark-500'>
//                     <div className='p-2' >
//                         <TbShoppingBagCheck size={40} className=' p-1 bg-[#165245] rounded-xl' style={{ color: '#00c98d' }} />
//                         <p>Total Delivered</p>
//                         <p>75</p>
//                     </div>
//                     <div className='flex items-end justify-between'>
//                         <div className='flex items-end px-4'>
//                             <FaSortDown />
//                             <p>3%</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className=' flex   p-2 rounded-lg  bg-dark-500  '>
//                     <div className='p-2' >
//                         <TbShoppingBagX size={40} className=' p-1 bg-[#5f3237] rounded-xl' style={{ color: "#f25f5f" }} />
//                         <p>Total Cancelled</p>
//                         <p>75</p>
//                     </div>
//                     <div className='flex justify-between'>
//                         <div className='flex items-end px-4'>
//                             <FaSortUp />
//                             <p>3%</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className=' flex   p-2 rounded-lg bg-dark-500   '>
//                     <div className='p-2' >
//                         <MdCurrencyExchange size={40} className=' p-1 bg-[#5b2a4a] rounded-xl' style={{ color: '#cd3d91' }} />
//                         <p>Total Revenue</p>
//                         <p>75</p>
//                     </div>
//                     <div className='flex justify-between'>
//                         <div className='flex items-end px-4'>
//                             <FaSortDown />
//                             <p>3%</p>
//                         </div>
//                     </div>
//                 </div>


//             </div >
//             <div className='flex bg-dark-500 h-[150px] px-10 rounded-xl '>
//                 <div>
//                     <p>Net Profit</p>
//                     <p className=' font-extrabold text-3xl'>$6759.25</p>
//                     <div className='flex items-end'>
//                         <FaSortUp />
//                         <p >3%</p>
//                     </div>
//                 </div>
//             </div>
//             {/* <RadialChart /> */}
//         </div>
//     )
// }

// export default Stats

// Stats.tsx
import React from 'react';
import { FaSortUp, FaSortDown } from "react-icons/fa6";
import { statsData, Stat } from '@/constants';

const Stats: React.FC = () => {
    return (
        <div className='flex items-center justify-evenly'>
            <div className='flex gap-6'>
                {statsData.map((stat: Stat, index: number) => (
                    <div key={index} className='flex rounded-lg bg-[#202028] h-[150px]'>
                        <div className='p-2'>
                            {stat.icon}
                            <p className=' text-sm'>{stat.title}</p>
                            <p className='font-extrabold text-xl'>{stat.value}</p>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex items-end p-4 px-8'>
                                {stat.isIncrease ? <FaSortUp /> : <FaSortDown />}
                                <p>{stat.change}%</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <RadialChart /> */}
        </div>
    );
}

export default Stats;
