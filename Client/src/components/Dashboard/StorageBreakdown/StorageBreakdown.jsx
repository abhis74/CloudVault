import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import './StorageBreakdown.css';

const StorageBreakdown = ({ total, used, breakdown = [] }) => {
    // Color mapping
    const colorMap = {
        pink: '#FB7DA1',
        blue: '#8AA4FF',
        green: '#34D399',
        orange: '#F38A47'
    };

    // Prepare data for the chart
    const chartData = breakdown.map((item) => ({
        name: item.name,
        value: item.size,
        color: colorMap[item.color] || '#64748b'
    }));

    // Add unused space segment
    const unused = total - used;
    if (unused > 0) {
        chartData.push({
            name: 'Unused',
            value: unused,
            color: '#e2e8f0'
        });
    }

    // Reverse array so segments render in correct order (left to right)
    // This makes each segment appear to start from where the previous one ended
    const reversedData = [...chartData].reverse();

    return (
        <div className="storage-breakdown">
            <div className="storage-breakdown_chart">
                <PieChart width={200} height={120}>
                    <Pie
                        data={reversedData}
                        cx={100}
                        cy={120}
                        startAngle={180}
                        endAngle={0}
                        innerRadius={70}
                        outerRadius={90}
                        paddingAngle={-4}
                        cornerRadius={8}
                        dataKey="value"
                        stroke="none"
                    >
                        {reversedData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={entry.color}
                                stroke={entry.color}
                                strokeWidth={0}
                            />
                        ))}
                    </Pie>
                </PieChart>
                <div className="storage-breakdown_center">
                    <div className="storage-breakdown_total">{used} GB</div>
                    <div className="storage-breakdown_capacity">of {total} GB Capacity</div>
                </div>
            </div>
            <div className="storage-breakdown_list">
                {breakdown.map((item, index) => (
                    <div key={index} className="storage-breakdown_item">
                        <div className="storage-breakdown_item-header">
                            <div
                                className={`storage-breakdown_indicator storage-breakdown_indicator--${item.color}`}
                            ></div>
                            <span className="storage-breakdown_item-name">{item.name}</span>
                        </div>
                        <div className="storage-breakdown_item-details">
                            <span className="storage-breakdown_item-size">{item.size} GB</span>
                            <span className="storage-breakdown_item-count">({item.count} Files)</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StorageBreakdown;

