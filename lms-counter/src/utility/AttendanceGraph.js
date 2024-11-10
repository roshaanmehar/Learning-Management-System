import React from 'react';
import { Line } from '@ant-design/charts';

const AttendanceGraph = () => {
  // Sample data array
  const data = [
    { month: 'Jan', absents: 5, leaves: 2, presents: 25 },
    { month: 'Feb', absents: 3, leaves: 1, presents: 26 },
    { month: 'Mar', absents: 6, leaves: 4, presents: 20 },
    { month: 'Apr', absents: 4, leaves: 3, presents: 23 },
    { month: 'May', absents: 7, leaves: 2, presents: 21 },
    // Add more data for other months
  ];

  // Configuration options for the line chart
  const config = {
    data,
    xField: 'month',
    yField: ['absents', 'leaves', 'presents'],
    color: ['#FF6347', '#32CD32', '#FFFF00'], // Pink for absents, Green for presents, Yellow for leaves
    label: {
      style: {
        fill: '#666',
      },
    },
    yAxis: {
      label: {
        formatter: (v) => `${v} days`, // Format y-axis labels
      },
    },
    legend: {
      position: 'top', // Position of the legend
    },
  };

  return (
    <div style={{ width: '50%', margin: '0 auto' }}>
      <Line {...config} />
    </div>
  );
};

export default AttendanceGraph;
