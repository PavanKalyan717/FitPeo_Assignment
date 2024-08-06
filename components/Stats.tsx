
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
                ))}
            </div>
            {/* <RadialChart /> */}
        </div>
    );
}

export default Stats;
