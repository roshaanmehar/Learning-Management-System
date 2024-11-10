// src/components/AttendancePieChart.js

import React from 'react';
import { Pie } from '@ant-design/charts';

const colors = {
  Presents: '#FF69B4',  // Pink
  Absents: '#87CEEB',   // Blue
  Leaves: '#FFD700',    // Yellow
};

const dataMap = {
  phil101: [
    { type: 'Presents', value: 5 },
    { type: 'Absents', value: 2 },
    { type: 'Leaves', value: 2 },
  ],
  math101: [
    { type: 'Presents', value: 8 },
    { type: 'Absents', value: 1 },
    { type: 'Leaves', value: 1 },
  ],
  cs101: [
    { type: 'Presents', value: 6 },
    { type: 'Absents', value: 3 },
    { type: 'Leaves', value: 1 },
  ],
};

const AttendancePieChart = ({ subject }) => {
  const data = dataMap[subject] || [];

  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    color: ({ type }) => colors[type],
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [{ type: 'element-active' }],
    tooltip: {
      showTitle: false,
      showMarkers: false,
      customContent: (title, items) => {
        return items?.map((item) => (
          <div key={item.name} style={{ marginBottom: 4 }}>
            <span
              style={{
                backgroundColor: item.color,
                width: 8,
                height: 8,
                borderRadius: '50%',
                display: 'inline-block',
                marginRight: 8,
              }}
            />
            {item.name}: {item.value}
          </div>
        ));
      },
    },
  };

  return <Pie {...config} />;
};

export default AttendancePieChart;
