import React from 'react'
import { PiCirclesFourFill } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { VscBellDot } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";
import Image from 'next/image';
import { Tooltip } from '@nextui-org/tooltip';
import { Button } from '@nextui-org/button';

const NavBar = () => {
    return (
        <div className='flex items-center justify-between bg-[#202028] ' >
            <div className='flex items-center '>
                <PiCirclesFourFill size={30} color='#7094fe' className=' mx-4' />
                <div className=' flex items-center bg-dark-500 rounded-md p-1' >

                    <IoSearch className='mx-2' />
                    <input className='bg-dark-500' placeholder='Search...' />
                </div>
            </div>
            <div className='flex gap-2 items-center p-5'>
                <Tooltip content="Mail" className=' bg-slate-500 rounded-xl text-white'>

                    <button className=' bg-dark-500 p-2 rounded-full cursor-pointer'>
                        <HiOutlineMail />
                    </button>
                </Tooltip>
                <Tooltip content="Settings" className=' bg-slate-500 rounded-xl text-white'>

                    <button className=' bg-dark-500 p-2 rounded-full cursor-pointer'>
                        <IoSettingsOutline />
                    </button>
                </Tooltip>
                <Tooltip content="Notifications" className=' bg-slate-500 rounded-xl text-white'>

                    <button className=' bg-dark-500 p-2 rounded-full cursor-pointer'>

                        <VscBellDot />
                    </button>
                </Tooltip>


                <div className='relative bg-dark-500 p-2 rounded-full overflow-hidden w-10 h-10 cursor-pointer'>
                    <Image src='/assets/navlogo.jpeg' alt="" className=' object-cover rounded-full'
                        layout='fill' />
                </div>

            </div>
        </div>
    )
}

export default NavBar