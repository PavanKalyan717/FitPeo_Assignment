
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
                <div className="flex items-center justify-between px-4">
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
