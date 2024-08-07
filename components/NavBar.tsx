'use client'
import React, { useState, useEffect, useRef } from 'react'
import { PiCirclesFourFill } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { VscBellDot } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";
import Image from 'next/image';
import { Tooltip } from '@nextui-org/tooltip';
import { Button } from '@nextui-org/button';
import { RxHamburgerMenu } from "react-icons/rx";
import { forwardRef } from 'react';
import SideBar from './SideBar';



const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [sideBarOpen, setSetsideBarOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null);
    const sideBarRef = useRef<HTMLDivElement>(null);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSideBar = () => {
        setSetsideBarOpen(!sideBarOpen)
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (sideBarRef.current && !sideBarRef.current.contains(event.target as Node)) {
            setSetsideBarOpen(false);
        }
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [isOpen]);



    return (
        <div className='flex items-center justify-between bg-[#202028] p-3 ' >
            <div className='flex items-center'>
                <div ref={sideBarRef}>
                    <PiCirclesFourFill onClick={toggleSideBar} size={30} color='#7094fe' className=' mx-4' />
                </div>
                <div className=' flex items-center bg-dark-500 rounded-md p-1' >
                    <IoSearch className='mx-2' />
                    <input className='bg-dark-500 p-2' placeholder='Search...' />
                </div>
            </div>
            <div className=' flex md:hidden px-10' ref={menuRef}>
                <RxHamburgerMenu onClick={toggleMenu} />
            </div>
            {
                isOpen && (
                    <div className=' absolute top-[74px] right-0 bg-[#25252b] z-10 rounded-lg p-4'>
                        <div className=' flex flex-col items-center gap-4'>
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
            {
                sideBarOpen && (
                    <div className='md:hidden absolute top-[74px] left-0 w-24 bg-[#25252b]  z-10 rounded-lg '>
                        <SideBar />
                    </div>
                )

            }

            <div className=' hidden md:flex gap-2 items-center p-2 '>
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
    );
}

export default NavBar