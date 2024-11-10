import React from 'react';
import { Pie } from '@ant-design/charts';

const MyPieChart = () => {
  // Sample data array
  const data = [
    { type: 'A', value: 30 },
    { type: 'B', value: 20 },
    { type: 'C', value: 25 },
    { type: 'D', value: 15 },
    { type: 'E', value: 10 },
  ];

  // Configuration options for the pie chart
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      offset: '-50%', // Adjust the offset as needed
      content: '{name}\n{percentage}',
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
  };

  return <Pie {...config} />;
};

export default MyPieChart;
