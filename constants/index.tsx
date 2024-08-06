// statsData.ts
import React from 'react';
import { TbShoppingBagPlus, TbShoppingBagCheck, TbShoppingBagX } from "react-icons/tb";
import { MdCurrencyExchange } from "react-icons/md";

export interface Stat {
    icon: React.ReactElement;
    title: string;
    value: number;
    change: number;
    isIncrease: boolean;
}

export const statsData: Stat[] = [
    {
        icon: <TbShoppingBagPlus size={40} className='p-1 bg-[#2a3467] rounded-xl' style={{ color: '#4062fc' }} />,
        title: "Total Orders",
        value: 75,
        change: 3,
        isIncrease: true
    },
    {
        icon: <TbShoppingBagCheck size={40} className='p-1 bg-[#165245] rounded-xl' style={{ color: '#00c98d' }
        } />,
        title: "Total Delivered",
        value: 75,
        change: 3,
        isIncrease: false
    },
    {
        icon: <TbShoppingBagX size={40} className='p-1 bg-[#5f3237] rounded-xl' style={{ color: "#f25f5f" }
        } />,
        title: "Total Cancelled",
        value: 75,
        change: 3,
        isIncrease: true
    },
    {
        icon: <MdCurrencyExchange size={40} className='p-1 bg-[#5b2a4a] rounded-xl' style={{ color: '#cd3d91' }
        } />,
        title: "Total Revenue",
        value: 75,
        change: 3,
        isIncrease: false
    }
];



export const feedbackData = [
    {
        name: "Jessie",
        rating: 5,
        comment: "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome."
    },
    {
        name: "Robert",
        rating: 4,
        comment: "We Enjoyed the eggs Benedict served on homemade focaccia bread and hot coffee."
    },
    {
        name: "Russell",
        rating: 3,
        comment: "The food was excellent and so was the service. I had the mushroom risotto with scallops, which was awesome."
    },
    {
        name: "Emily",
        rating: 4,
        comment: "The ambiance was perfect for a romantic dinner. I loved the grilled salmon with a side of roasted vegetables. Everything was cooked to perfection."
    },
    {
        name: "Anna",
        rating: 5,
        comment: "Best dining experience ever! The steak was perfectly cooked and the dessert was heavenly."
    },
    {
        name: "Mark",
        rating: 2,
        comment: "The service was slow and the food was not as good as expected. Not a great experience."
    },
    {
        name: "Linda",
        rating: 4,
        comment: "Great atmosphere and delicious food. The pasta was especially good."
    },
    {
        name: "James",
        rating: 5,
        comment: "Exceptional service and the seafood was incredibly fresh. Will definitely come back!"
    },
    {
        name: "Sophia",
        rating: 3,
        comment: "The food was good but a bit overpriced for the portion sizes."
    },
    {
        name: "Michael",
        rating: 4,
        comment: "Enjoyed the evening with friends. The wine selection was excellent."
    },
    {
        name: "Olivia",
        rating: 5,
        comment: "Everything was perfect. The ambiance, the food, the service. Highly recommend."
    },
    {
        name: "Daniel",
        rating: 4,
        comment: "Nice place for a family dinner. The kids loved the pizza and ice cream."
    },
    {
        name: "Laura",
        rating: 3,
        comment: "Decent food but the place was too noisy for my liking."
    },
    {
        name: "John",
        rating: 5,
        comment: "Amazing experience! The chef's special was out of this world."
    },
    {
        name: "Mia",
        rating: 2,
        comment: "Not impressed. The food was bland and the service was lacking."
    }
];
export const recentOrders = [
    {
        customer: "Wade Warren",
        orderNo: "15478256",
        amount: "$124.00",
        status: "Delivered"
    },
    {
        customer: "Jane Cooper",
        orderNo: "48965786",
        amount: "$365.02",
        status: "Delivered"
    },
    {
        customer: "Guy Hawkins",
        orderNo: "78958215",
        amount: "$54.88",
        status: "Cancelled"
    },
    {
        customer: "Kristin Watson",
        orderNo: "20965732",
        amount: "$65.00",
        status: "Pending"
    },
    {
        customer: "Cody Fisher",
        orderNo: "95715620",
        amount: "$545.00",
        status: "Delivered"
    },
    {
        customer: "Savannah Nguyen",
        orderNo: "78514568",
        amount: "$128.20",
        status: "Delivered"
    }
];
export interface ActivityData {
    day: number;
    value: number;
}


export const activityData: ActivityData[] = [
    { day: 5, value: 4000 },
    { day: 6, value: 9500 },
    { day: 7, value: 4500 },
    { day: 8, value: 3000 },
    { day: 9, value: 2500 },
    { day: 10, value: 6000 },
    { day: 11, value: 6000 },
    { day: 12, value: 5500 },
    { day: 13, value: 5800 },
    { day: 14, value: 4000 },
    { day: 15, value: 2000 },
    { day: 16, value: 7000 },
    { day: 17, value: 8000 },
    { day: 18, value: 6000 },
    { day: 19, value: 11000 },
    { day: 20, value: 9000 },
    { day: 21, value: 13000 },
    { day: 22, value: 15000 },
    { day: 23, value: 12000 },
    { day: 24, value: 8000 },
    { day: 25, value: 4000 },
    { day: 26, value: 7000 },
    { day: 27, value: 12000 },
    { day: 28, value: 8000 },
    { day: 29, value: 6000 },
];
