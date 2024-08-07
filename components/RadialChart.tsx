

import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Label, Cell } from 'recharts';

const data = [
    { name: 'Completed', value: 70 }
];
const COLORS = ['#0088FE', '#FFFFFF'];

const CustomLabel = () => (
    <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        style={{
            fontSize: '10px',
            fontWeight: 'bold',
            fill: '#FFF' // Setting text color to white
        }}
    >
        <tspan x="50%" dy="-10">70%</tspan>
        <tspan x="50%" dy="15">completed</tspan>
    </text>
);

const RadialChart: React.FC = () => {
    return (
        <div className="w-[140px] h-[120px] flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    {/* Background Pie */}
                    <Pie
                        data={[{ name: 'Background', value: 100 }]} // Full circle
                        cx="50%"
                        cy="50%"
                        innerRadius={35}
                        outerRadius={55}
                        startAngle={0}
                        endAngle={360}
                        fill="#293267" // White background
                        paddingAngle={0}
                        dataKey="value"
                        stroke="none"
                    />
                    {/* Foreground Pie */}
                    <Pie
                        data={data} // Only use the "Completed" segment data
                        cx="50%"
                        cy="50%"
                        innerRadius={35}
                        outerRadius={55}
                        startAngle={90}
                        endAngle={90 - 360 * (data[0].value / 100)} // 70% completion
                        paddingAngle={0}
                        dataKey="value"
                        stroke="none"
                        cornerRadius={10}
                        fill={COLORS[0]}
                    >
                        <Label content={<CustomLabel />} />
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RadialChart;
