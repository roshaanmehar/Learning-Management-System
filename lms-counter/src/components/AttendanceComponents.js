import React from "react";
import AttendanceGraph from "../utility/AttendanceGraph";
import AttendancePieChart from "../utility/AttendancePieChart";

const AttendanceComponents = () => {
  return (
    <>
      <div>
        <AttendanceGraph />
        <AttendancePieChart />
      </div>
    </>
  );
};

export default AttendanceComponents;
