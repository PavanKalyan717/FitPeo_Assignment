import React from 'react'

import { BiTargetLock } from "react-icons/bi"
import { FaAngleRight } from "react-icons/fa"
import { PiHamburgerLight } from "react-icons/pi"
import { BiDish } from "react-icons/bi"

const GoalsSection = () => {
    return (
        <div className="flex flex-col gap-2 p-5 h-[234px] justify-evenly  bg-[#202028] rounded-xl ">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <BiTargetLock size={40} className="p-1 bg-[#5e3137] rounded-full" color="#d05b25" />
                    <p className="px-2">Goals</p>
                </div>
                <FaAngleRight size={24} className="p-1 bg-dark-500 rounded-full cursor-pointer" />
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <PiHamburgerLight size={40} className="p-1 bg-[#293368] rounded-full" color="#5c78d2" />
                    <p className="px-2"> Popular Dishes</p>
                </div>
                <FaAngleRight size={24} className="p-1 bg-dark-500 rounded-full cursor-pointer" />
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <BiDish size={40} className="p-1 bg-[#214a60] rounded-full" color="#2292c4" />
                    <p className="px-2">Menus</p>
                </div>
                <FaAngleRight size={24} className="p-1 bg-dark-500 rounded-full cursor-pointer" />
            </div>
        </div>
    )
}

export default GoalsSection