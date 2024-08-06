// "use client"
// import { activityData } from "@/constants"

// import { BiTargetLock } from "react-icons/bi"
// import { FaAngleRight } from "react-icons/fa"
// import { PiHamburgerLight } from "react-icons/pi"
// import { BiDish } from "react-icons/bi"
// import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card"
// import {
//     ChartConfig,
//     ChartContainer,
//     ChartTooltip,
//     ChartTooltipContent,
// } from "@/components/ui/chart"

// const chartConfig = {
//     value: {
//         label: "Activity",
//         color: "#7294ff",
//     },
// } satisfies ChartConfig

// export function ActivityChart() {
//     return (
//         <div className="flex justify-around items-center ">

//             <div className="w-[60%]">
//                 <div className="flex items-center justify-between">
//                     <p>Activity Chart</p>
//                 </div>
//                 <ChartContainer config={chartConfig}
//                     className="max-h-[200px] w-full bg-dark-500 rounded-xl px-4"
//                 >
//                     <BarChart
//                         accessibilityLayer
//                         data={activityData}
//                         margin={{
//                             top: 20,
//                         }}
//                     >
//                         <CartesianGrid vertical={false} />
//                         <XAxis
//                             dataKey="day"
//                             tickLine={false}
//                             tickMargin={10}
//                             axisLine={false}
//                         />
//                         <YAxis
//                             dataKey="value"
//                             type="number"
//                             tickLine={false}
//                             tickMargin={10}
//                             axisLine={false}
//                         />
//                         <ChartTooltip
//                             cursor={false}
//                             content={<ChartTooltipContent hideLabel />}
//                         />
//                         <Bar dataKey="value" fill="#7294ff" radius={50} className="py-2" />
//                     </BarChart>
//                 </ChartContainer>
//             </div>
//             <div className="flex flex-col gap-2 w-[20%] bg-dark-500 p-2 rounded-xl">
//                 <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                         <BiTargetLock size={40} className="p-1 bg-[#5e3137] rounded-full" color="#d05b25" />
//                         <p className="px-2">Goals</p>
//                     </div>
//                     <FaAngleRight size={24} className="p-1 bg-dark-500 rounded-full" />
//                 </div>
//                 <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                         <PiHamburgerLight size={40} className="p-1 bg-[#293368] rounded-full" color="#5c78d2" />
//                         <p className="px-2"> Popular Dishes</p>
//                     </div>
//                     <FaAngleRight size={24} className="p-1 bg-dark-500 rounded-full" />
//                 </div>
//                 <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                         <BiDish size={40} className="p-1 bg-[#214a60] rounded-full" color="#2292c4" />
//                         <p className="px-2">Menus</p>
//                     </div>
//                     <FaAngleRight size={24} className="p-1 bg-dark-500 rounded-full" />
//                 </div>
//             </div>
//         </div>
//     )
// }


"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"


import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

import { activityData } from "@/constants"

const chartConfig = {
    value: {
        label: "Activity",
        color: "#7294ff",
    },
} satisfies ChartConfig

export function ActivityChart() {
    return (
        <div className="">

            <div className="bg-[#202028] rounded-lg">
                <div className="flex items-center justify-between">
                    <p>Activity Chart</p>
                </div>
                <ChartContainer config={chartConfig}
                    className="h-[170px] w-full rounded-xl px-4"
                >
                    <BarChart
                        accessibilityLayer
                        data={activityData}
                        margin={{
                            top: 20,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => (value % 2 === 0 ? '' : value)}
                        />
                        <YAxis
                            dataKey="value"
                            type="number"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => `${value / 1000}k`}
                            domain={[0, 15000]}
                            ticks={[0, 5000, 10000, 15000]}
                            tickCount={4}
                            allowDataOverflow={false}

                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="value" fill="#7294ff" radius={50} className="py-2" />
                    </BarChart>
                </ChartContainer>
            </div>
        </div>
    )
}
