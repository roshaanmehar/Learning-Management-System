// import React from "react";
// import AttendanceGraph from "../utility/AttendanceGraph";
// 

// const AttendanceComponents = () => {
//   return (
//     <>
//       <div>
//         <AttendanceGraph />
//         <AttendancePieChart />
//       </div>
//     </>
//   );
// };

// export default AttendanceComponents;
// src/components/AttendanceComponents.js

import React, { useState } from 'react';
import { Select } from 'antd';
import AttendancePieChart from "../utility/AttendancePieChart";
import 'antd/dist/antd';

const { Option } = Select;

const subjects = [
  { id: 'phil101', name: 'Introduction to Philosophy' },
  { id: 'math101', name: 'Calculus I' },
  { id: 'cs101', name: 'Computer Science I' },
];

const AttendanceComponents = () => {
  const [selectedSubject, setSelectedSubject] = useState(subjects[0].id);

  const handleChange = (value) => {
    setSelectedSubject(value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Overall Attendance Report with Detail</h1>
      <Select
        defaultValue={selectedSubject}
        style={{ width: 300, marginBottom: '20px' }}
        onChange={handleChange}
      >
        {subjects.map((subject) => (
          <Option key={subject.id} value={subject.id}>
            {subject.name}
          </Option>
        ))}
      </Select>
      <AttendancePieChart subject={selectedSubject} />
    </div>
  );
};

export default AttendanceComponents;
