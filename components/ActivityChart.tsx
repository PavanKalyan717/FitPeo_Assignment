"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

import { activityData } from "@/constants"
import { monthlyData } from "@/constants"; // Adjust the path
import { yearlyData } from "@/constants"; // Adjust the path

import * as React from "react"
import { useState } from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const chartConfig = {
    value: {
        label: "Activity",
        color: "#7294ff",
    },
} satisfies ChartConfig

export function ActivityChart() {
    const [period, setPeriod] = useState<'weekly' | 'monthly' | 'yearly'>('weekly');

    const data = period === 'weekly' ? activityData :
        period === 'monthly' ? monthlyData :
            yearlyData;

    return (
        <div className="col-span-1 md:col-span-4">
            <div className="bg-[#202028] h-[240px] rounded-lg">
                <div className="flex items-center justify-between px-4">
                    <p className=" font-extrabold text-2xl py-4 ">Activity Chart</p>
                    <Select onValueChange={(value) => setPeriod(value as 'weekly' | 'monthly' | 'yearly')}>
                        <SelectTrigger className="w-[120px] border-none rounded-3xl bg-dark-500 ">
                            <SelectValue className=" text-center" placeholder={period.charAt(0).toUpperCase() + period.slice(1)} />
                        </SelectTrigger>
                        <SelectContent className=" bg-dark-500 rounded-lg border-none  " >
                            <SelectGroup className="   ">
                                <SelectItem value="weekly" className=" cursor-pointer" >Weekly</SelectItem>
                                <SelectItem value="monthly" className=" cursor-pointer" >Monthly</SelectItem>
                                <SelectItem value="yearly" className=" cursor-pointer">Yearly</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <ChartContainer config={chartConfig}
                    className="h-[170px] w-full rounded-xl px-4"
                >
                    <BarChart
                        accessibilityLayer
                        data={data}
                        margin={{
                            top: 20,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey={period === 'yearly' ? 'year' : period === 'monthly' ? 'month' : 'day'}
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => (period === 'yearly' ? (value % 3 === 0 ? value : '') : (period === 'monthly' ? value.slice(0, 3) : (value % 2 === 0 ? '' : value)))}
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
