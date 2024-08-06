import React from 'react';
import Image from 'next/image';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import { feedbackData } from '@/constants';

const CustomerFeedback = () => {
    return (
        <div className=' col-span-1 md:col-span-2 w-full bg-[#202028] rounded-xl p-4'>
            <p className='font-extrabold text-xl py-4'>Customer&apos;s Feedback</p>
            <div className='h-[320px] overflow-y-auto'>
                {feedbackData.map((feedback, index) => (
                    <div key={index} className='pb-2'>
                        <div className='flex items-center gap-2 py-3'>
                            <div className='relative bg-dark-500 p-2 rounded-full overflow-hidden w-10 h-10'>
                                <Image src={`/${feedback.src}`} alt={feedback.name} className=' object-cover rounded-full'
                                    layout='fill' />
                            </div>
                            <p className='font-extrabold text-xl'>{feedback.name}</p>
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
