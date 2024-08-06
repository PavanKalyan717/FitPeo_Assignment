'use client'
import React, { useState } from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { RiBarChartBoxLine } from "react-icons/ri";
import { CiWallet } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { BsClipboard2Check } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Tooltip } from '@nextui-org/tooltip';

const iconContainerClass = 'flex items-center justify-center cursor-pointer';
const selectedBorderClass = 'border-4 border-y-0 border-r-0 border-l-[#7294ff]';
const unselectedBorderClass = 'border-4 border-y-0 border-r-0 border-l-transparent';
const selectedIconColor = '#7294ff';
const defaultIconColor = 'white';

const SideBar: React.FC = () => {
    const [selectedIcon, setSelectedIcon] = useState<string>('home');

    const handleIconClick = (iconName: string) => {
        setSelectedIcon(iconName);
    };

    const getIconColor = (iconName: string) => {
        return selectedIcon === iconName ? selectedIconColor : defaultIconColor;
    };

    return (
        <div className='bg-[#202028] flex flex-col justify-between min-h-full '>
            <div className='flex flex-col gap-8 pt-4'>

                <Tooltip content="Home" className=' bg-slate-500 rounded-xl text-white'>
                    <div
                        className={`${iconContainerClass} ${selectedIcon === 'home' ? selectedBorderClass : unselectedBorderClass}`}
                        onClick={() => handleIconClick('home')}
                    >
                        <AiOutlineHome size={30} color={getIconColor('home')} />
                    </div>
                </Tooltip>
                <Tooltip content="Stats" className=' bg-slate-500 rounded-xl text-white'>

                    <div
                        className={`${iconContainerClass} ${selectedIcon === 'chart' ? selectedBorderClass : unselectedBorderClass}`}
                        onClick={() => handleIconClick('chart')}
                    >
                        <RiBarChartBoxLine size={30} color={getIconColor('chart')} />
                    </div>
                </Tooltip>
                <Tooltip content="Notes" className=' bg-slate-500 rounded-xl text-white'>

                    <div
                        className={`${iconContainerClass} ${selectedIcon === 'clipboard' ? selectedBorderClass : unselectedBorderClass}`}
                        onClick={() => handleIconClick('clipboard')}
                    >
                        <BsClipboard2Check size={30} color={getIconColor('clipboard')} />
                    </div>
                </Tooltip>
                <Tooltip content="Wallet" className=' bg-slate-500 rounded-xl text-white'>

                    <div
                        className={`${iconContainerClass} ${selectedIcon === 'wallet' ? selectedBorderClass : unselectedBorderClass}`}
                        onClick={() => handleIconClick('wallet')}
                    >
                        <CiWallet size={30} color={getIconColor('wallet')} />
                    </div>
                </Tooltip>
                <Tooltip content="Cart" className=' bg-slate-500 rounded-xl text-white'>

                    <div
                        className={`${iconContainerClass} ${selectedIcon === 'bag' ? selectedBorderClass : unselectedBorderClass}`}
                        onClick={() => handleIconClick('bag')}
                    >
                        <IoBagCheckOutline size={30} color={getIconColor('bag')} />
                    </div>
                </Tooltip>
            </div>
            <Tooltip content="Logout" className=' bg-slate-500 rounded-xl text-white'>

                <div className='flex justify-center mb-14 cursor-pointer'>
                    <RiLogoutCircleRLine size={30} />
                </div>
            </Tooltip>
        </div>
    );
};

export default SideBar;
