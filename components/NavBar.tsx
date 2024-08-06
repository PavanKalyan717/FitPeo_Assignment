import React from 'react'
import { PiCirclesFourFill } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { VscBellDot } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
    return (
        <div className='flex items-center justify-between bg-[#202028] ' >
            <div className='flex items-center px-10'>
                <PiCirclesFourFill size={30} color='#7094fe' className=' mx-2' />
                <IoSearch />
                <input className=' bg-dark-500 rounded-md p-1' placeholder='Search...' />
            </div>
            <div className='flex gap-2 items-center p-5'>
                <div className=' bg-dark-500 p-2 rounded-full'>
                    <HiOutlineMail />
                </div>
                <div className=' bg-dark-500 p-2 rounded-full'>
                    <IoSettingsOutline />
                </div>
                <div className=' bg-dark-500 p-2 rounded-full'>

                    <VscBellDot />
                </div>
                <div className=' bg-dark-500 p-2 rounded-full'>

                    <CgProfile />
                </div>

            </div>
        </div>
    )
}

export default NavBar