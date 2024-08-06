import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { feedbackData } from '@/constants';


const CustomerFeedback = () => {
    return (
        <div className=' bg-[#202028] rounded-xl p-4'>
            <p className='font-extrabold text-xl py-4'> Customer&apos;s Feedback</p>
            <div className='h-[272px] overflow-y-auto'>
                {feedbackData.map((feedback, index) => (
                    <div key={index} className='pb-2'>
                        <div className='flex items-center gap-2'>
                            <CgProfile size={34} />
                            <p className=' font-extrabold text-xl'>{feedback.name}</p>
                        </div>
                        <div className='flex'>
                            {[...Array(5)].map((_, i) => (
                                i < feedback.rating
                                    ? <MdOutlineStarPurple500 key={i} size={24} color='yellow' />
                                    : <MdOutlineStarPurple500 key={i} size={24} color='white' />
                            ))}
                        </div>
                        <p>{feedback.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerFeedback;