
import React from 'react';
import { FaSortUp, FaSortDown } from "react-icons/fa6";
import { statsData, Stat } from '@/constants';

const Stats: React.FC = () => {
    return (
        <>
            {
                statsData.map((stat: Stat, index: number) => (
                    <div key={index} className='flex rounded-lg bg-[#202028] h-[150px] '>
                        <div className='p-2 w-full'>
                            {/* <div className=' inline-block mx-2 bg-slate-400 rounded-lg '>
                                {stat.icon}
                            </div> */}
                            {stat.icon}
                            <p className=' text-sm px-2'>{stat.title}</p>
                            <div className=' flex justify-between items-center'>
                                <p className='font-extrabold text-3xl px-2'>{stat.value}</p>

                                <div className='flex items-end p-4 px-8'>
                                    {stat.isIncrease ? (
                                        <>
                                            <FaSortUp className='text-green-500' />
                                            <p className='text-green-500'>{stat.change}%</p>
                                        </>
                                    ) : (
                                        <>
                                            <FaSortDown className='text-red-500 mb-2' />
                                            <p className='text-red-500'>{stat.change}%</p>
                                        </>
                                    )}
                                </div>

                            </div>
                        </div>

                    </div>
                ))
            }
        </>
    );
}

export default Stats;
